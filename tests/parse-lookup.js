import antlr4 from 'antlr4'

import ModelLexer from '../parser/ModelLexer.js'
import ModelParser from '../parser/ModelParser.js'

// Collect syntax errors instead of writing them to the console, so that a test
// asserting on a malformed lookup fails with the parser's own message.
class ErrorCollector extends antlr4.error.ErrorListener {
  constructor() {
    super()
    this.errors = []
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    this.errors.push(`${line}:${column} ${msg}`)
  }
}

// Render a lookup point as an "(x,y)" string.
function pointText(pointCtx) {
  let [x, y] = pointCtx.expr()
  return `(${x.getText()},${y.getText()})`
}

// Render a lookup parse tree as a plain object with the parts of the lookup
// as "(x,y)" strings:
//   min, max:  the corners of the range (undefined if there is no range)
//   refPoints: the optional reference line points that follow the range
//   points:    the data points
function lookupParts(lookupCtx) {
  let range = lookupCtx.lookupRange()
  return {
    min: range ? pointText(range.minPoint) : undefined,
    max: range ? pointText(range.maxPoint) : undefined,
    refPoints: range ? range.refPoints.map(pointText) : [],
    points: lookupCtx.lookupPointList().lookupPoint().map(pointText)
  }
}

// Parse the given text with the given parser rule.  Throws if the text does not
// parse cleanly and completely.
function parseWith(text, rule) {
  let chars = new antlr4.InputStream(text)
  let lexer = new ModelLexer(chars)
  let parser = new ModelParser(new antlr4.CommonTokenStream(lexer))
  let collector = new ErrorCollector()
  lexer.removeErrorListeners()
  lexer.addErrorListener(collector)
  parser.removeErrorListeners()
  parser.addErrorListener(collector)

  let tree = rule(parser)
  if (collector.errors.length > 0) {
    throw new Error(`failed to parse "${text}"\n${collector.errors.join('\n')}`)
  }
  if (parser.getCurrentToken().type !== antlr4.Token.EOF) {
    throw new Error(
      `failed to parse all of "${text}", stopped at "${parser.getCurrentToken().text}"`
    )
  }
  return tree
}

// Parse a Vensim lookup definition (for example "( [(0,0)-(1,1)],(0,0),(1,1) )")
// and return its parts (see `lookupParts`).
export function parseLookup(text) {
  return lookupParts(parseWith(text, parser => parser.lookup()))
}

// Parse a Vensim lookup equation (for example "x( [(0,0)-(1,1)],(0,0),(1,1) ) ~~|")
// and return the parts of its lookup (see `lookupParts`).
export function parseLookupEquation(text) {
  return lookupParts(parseWith(text, parser => parser.equation()).lookup())
}
