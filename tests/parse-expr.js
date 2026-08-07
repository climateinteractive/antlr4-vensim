import antlr4 from 'antlr4'

import ModelLexer from '../parser/ModelLexer.js'
import ModelParser from '../parser/ModelParser.js'
import ModelVisitor from '../parser/ModelVisitor.js'

// Render an expression parse tree as a fully parenthesized infix string.
// Every operator application gets its own parentheses, so the string shows
// exactly how the parser grouped the operands.  This makes precedence and
// associativity visible in test expectations:
//   '-x^2/2' -> '((-(x^2))/2)'
class InfixVisitor extends ModelVisitor {
  visitParens(ctx) {
    // The grouping is already explicit in the output, so drop the source parens.
    return this.visit(ctx.expr())
  }
  visitCall(ctx) {
    let args = ctx.exprList() ? ctx.exprList().expr() : []
    return `${ctx.Id().getText()}(${args.map(arg => this.visit(arg)).join(',')})`
  }
  visitNot(ctx) {
    return `(:NOT: ${this.visit(ctx.expr())})`
  }
  visitNegative(ctx) {
    return `(-${this.visit(ctx.expr())})`
  }
  visitPositive(ctx) {
    return `(+${this.visit(ctx.expr())})`
  }
  visitPower(ctx) {
    return this.binary(ctx, '^')
  }
  visitMulDiv(ctx) {
    return this.binary(ctx, ctx.op.text)
  }
  visitAddSub(ctx) {
    return this.binary(ctx, ctx.op.text)
  }
  visitRelational(ctx) {
    return this.binary(ctx, ctx.op.text)
  }
  visitEquality(ctx) {
    return this.binary(ctx, ctx.op.text)
  }
  visitAnd(ctx) {
    // Pad the word operators so they stay legible against their operands.
    return this.binary(ctx, ' :AND: ')
  }
  visitOr(ctx) {
    return this.binary(ctx, ' :OR: ')
  }
  visitVar(ctx) {
    return ctx.getText()
  }
  visitConst(ctx) {
    return ctx.getText()
  }
  visitKeyword(ctx) {
    return ctx.getText()
  }
  binary(ctx, op) {
    let [lhs, rhs] = ctx.expr()
    return `(${this.visit(lhs)}${op}${this.visit(rhs)})`
  }
}

// Collect syntax errors instead of writing them to the console, so that a test
// asserting on a malformed expression fails with the parser's own message.
class ErrorCollector extends antlr4.error.ErrorListener {
  constructor() {
    super()
    this.errors = []
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    this.errors.push(`${line}:${column} ${msg}`)
  }
}

// Parse a Vensim expression and return it as a fully parenthesized infix string.
// Throws if the expression does not parse cleanly.
export function parseExpr(text) {
  let chars = new antlr4.InputStream(text)
  let lexer = new ModelLexer(chars)
  let parser = new ModelParser(new antlr4.CommonTokenStream(lexer))
  let collector = new ErrorCollector()
  lexer.removeErrorListeners()
  lexer.addErrorListener(collector)
  parser.removeErrorListeners()
  parser.addErrorListener(collector)

  let tree = parser.expr()
  if (collector.errors.length > 0) {
    throw new Error(`failed to parse "${text}"\n${collector.errors.join('\n')}`)
  }
  // The expr rule stops at the first token it cannot use, so an expression that
  // parses only in part would otherwise pass silently.
  if (parser.getCurrentToken().type !== antlr4.Token.EOF) {
    throw new Error(
      `failed to parse all of "${text}", stopped at "${parser.getCurrentToken().text}"`
    )
  }
  return new InfixVisitor().visit(tree)
}
