const ModelLexer = require('./parser/ModelLexer').ModelLexer
const ModelParser = require('./parser/ModelParser').ModelParser
const ModelVisitor= require('./parser/ModelVisitor').ModelVisitor
module.exports = {
  ModelLexer,
  ModelParser,
  ModelVisitor
}
