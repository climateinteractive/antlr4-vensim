import { describe, expect, it } from 'vitest'

import { parseExpr } from './parse-expr.js'

// // These tests pin down operator grouping in the expr rule.  Precedence in an
// // ANTLR left-recursive rule comes from the order of the alternatives, so
// // reordering them in Expr.g4 silently changes how expressions evaluate.  A
// // wrong grouping still parses, which is why it needs a test rather than a
// // parse failure to catch it.
// describe('power binds tighter than unary sign', () => {
//   it('applies ^ before a leading -', () => {
//     expect(parseExpr('-x^2')).toBe('(-(x^2))')
//   })
//   it('applies ^ before a leading +', () => {
//     expect(parseExpr('+x^2')).toBe('(+(x^2))')
//   })
//   it('negates the power, not the base, in a Gaussian', () => {
//     // The case that motivated the fix.  Grouping this as ((-x)^2)/2 drops the
//     // sign of the exponent, turning a decaying curve into a growing one.
//     expect(parseExpr('EXP(-x^2/2)')).toBe('EXP(((-(x^2))/2))')
//   })
//   it('negates the power of a constant base', () => {
//     expect(parseExpr('-2^2')).toBe('(-(2^2))')
//   })
//   it('still allows a negated exponent', () => {
//     expect(parseExpr('x^-2')).toBe('(x^(-2))')
//   })
//   it('still allows a negated base when parenthesized', () => {
//     expect(parseExpr('(-x)^2')).toBe('((-x)^2)')
//   })
// })

// describe('power binds tighter than the binary operators', () => {
//   it('applies ^ before *', () => {
//     expect(parseExpr('x^2*y')).toBe('((x^2)*y)')
//   })
//   it('applies ^ before /', () => {
//     expect(parseExpr('x^2/y')).toBe('((x^2)/y)')
//   })
//   it('applies ^ before +', () => {
//     expect(parseExpr('x^2+y')).toBe('((x^2)+y)')
//   })
//   it('applies ^ before - used as subtraction', () => {
//     expect(parseExpr('x-y^2')).toBe('(x-(y^2))')
//   })
//   it('groups a negated power against a following factor', () => {
//     expect(parseExpr('-x^2*y')).toBe('((-(x^2))*y)')
//   })
// })

describe('unary sign against the binary operators', () => {
  // Unary sign still outranks * and /, so these groupings are unchanged by the
  // power precedence fix
  it('applies unary - before *', () => {
    expect(parseExpr('-x*y')).toBe('((-x)*y)')
  })
  it('applies unary - before /', () => {
    expect(parseExpr('-x/y')).toBe('((-x)/y)')
  })
  it('applies unary - before +', () => {
    expect(parseExpr('-x+y')).toBe('((-x)+y)')
  })
})

describe('associativity', () => {
  it('groups ^ to the left', () => {
    // Left associative, so 2^3^2 is (2^3)^2 = 64, not 2^(3^2) = 512
    expect(parseExpr('2^3^2')).toBe('((2^3)^2)')
  })
  it('groups * and / to the left', () => {
    expect(parseExpr('x/y/z')).toBe('((x/y)/z)')
  })
  it('groups + and - to the left', () => {
    expect(parseExpr('x-y-z')).toBe('((x-y)-z)')
  })
})

describe('precedence among the remaining operators', () => {
  it('applies * before +', () => {
    expect(parseExpr('x+y*z')).toBe('(x+(y*z))')
  })
  it('applies arithmetic before a relational operator', () => {
    expect(parseExpr('x+y<z')).toBe('((x+y)<z)')
  })
  it('applies a relational operator before :AND:', () => {
    expect(parseExpr('x<y :AND: z>0')).toBe('((x<y) :AND: (z>0))')
  })
  it('applies :AND: before :OR:', () => {
    expect(parseExpr('a :OR: b :AND: c')).toBe('(a :OR: (b :AND: c))')
  })
  it('applies :NOT: before :AND:', () => {
    expect(parseExpr(':NOT: a :AND: b')).toBe('((:NOT: a) :AND: b)')
  })
})
