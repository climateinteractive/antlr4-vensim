import { describe, expect, it } from 'vitest'

import { parseLookup, parseLookupEquation } from './parse-lookup.js'

// A lookup range can be followed by optional reference line points, which
// Vensim uses only to draw reference lines in the Graph Lookup Editor:
//   LOOKUP NAME([(Xmin,Ymin)-(Xmax,Ymax),(Xref1,Yref1),...,(Xrefn,Yrefn)],
//     (X1,Y1),(X2,Y2),...,(Xn,Yn) )
// See https://www.vensim.com/documentation/lookups.html
describe('lookup range', () => {
  it('parses a lookup without a range', () => {
    expect(parseLookup('((0,0),(1,2))')).toEqual({
      min: undefined,
      max: undefined,
      refPoints: [],
      points: ['(0,0)', '(1,2)']
    })
  })

  it('parses a range without reference points', () => {
    expect(parseLookup('([(0,0)-(2,4)],(0,0),(1,2),(2,4))')).toEqual({
      min: '(0,0)',
      max: '(2,4)',
      refPoints: [],
      points: ['(0,0)', '(1,2)', '(2,4)']
    })
  })

  it('parses a range with one reference point', () => {
    expect(parseLookup('([(0,0)-(2,4),(1,1)],(0,0),(2,4))')).toEqual({
      min: '(0,0)',
      max: '(2,4)',
      refPoints: ['(1,1)'],
      points: ['(0,0)', '(2,4)']
    })
  })

  it('parses a range with more than one reference point', () => {
    expect(parseLookup('([(0,0)-(1,1),(0,0),(1,1)],(0,0),(0.5,0.25),(1,1))')).toEqual({
      min: '(0,0)',
      max: '(1,1)',
      refPoints: ['(0,0)', '(1,1)'],
      points: ['(0,0)', '(0.5,0.25)', '(1,1)']
    })
  })

  it('parses a range with reference points and whitespace in a lookup equation', () => {
    const eqn = `Convergence function  (
            [(0,0)-(1,1),(0,0),(1,1)],(0,0),(0.25,0),(0.5,0.25),(0.75,0.75),(0.85,0.95)
            ,(1,1) )
    ~ dmnl ~ |`
    expect(parseLookupEquation(eqn)).toEqual({
      min: '(0,0)',
      max: '(1,1)',
      refPoints: ['(0,0)', '(1,1)'],
      points: ['(0,0)', '(0.25,0)', '(0.5,0.25)', '(0.75,0.75)', '(0.85,0.95)', '(1,1)']
    })
  })

  it('parses a range with negative values in the reference points', () => {
    expect(parseLookup('([(-1,-1)-(1,1),(-1,0),(1,0)],(-1,-1),(1,1))')).toEqual({
      min: '(-1,-1)',
      max: '(1,1)',
      refPoints: ['(-1,0)', '(1,0)'],
      points: ['(-1,-1)', '(1,1)']
    })
  })

  it('fails to parse a range with a missing max point', () => {
    expect(() => parseLookup('([(0,0),(1,1)],(0,0),(1,1))')).toThrow()
  })
})
