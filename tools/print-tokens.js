const getStdin = require('get-stdin')
const B = require('bufx')

// Print an ANTLR 4 lex listing from stdin.
getStdin().then(data => {
  for (let line of B.lines(data)) {
    B.pr(line
      .replace(/\[@[^\']+\'/, '')
      .replace(/\',/, '\t')
      .replace(/>,/, '>\tline ')
      .replace(/:/, '\tcol ')
      .replace(/\]$/, '')
    )
  }
})
