// Generated from grammar/Model.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ModelVisitor from './ModelVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003&\u00ef\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0003\u0002\u0003\u0002\u0006\u0002#\n\u0002\r\u0002\u000e\u0002$\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003+\n\u0003\u0003",
    "\u0003\u0005\u0003.\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005:\n\u0005\f\u0005\u000e\u0005=\u000b\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006F\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007L\n\u0007\u0003\u0007\u0005\u0007O\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\bV\n\b\u0003\b\u0005\bY\n\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007",
    "\bd\n\b\f\b\u000e\bg\u000b\b\u0005\bi\n\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\to\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\tw\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0088",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t",
    "\u0091\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00a8\n\t\f\t\u000e\t\u00ab",
    "\u000b\t\u0003\n\u0003\n\u0003\n\u0007\n\u00b0\n\n\f\n\u000e\n\u00b3",
    "\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00b8\n\u000b",
    "\f\u000b\u000e\u000b\u00bb\u000b\u000b\u0003\f\u0003\f\u0005\f\u00bf",
    "\n\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00ce",
    "\n\u000e\f\u000e\u000e\u000e\u00d1\u000b\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0006\u0010\u00dc\n\u0010\r\u0010\u000e\u0010\u00dd\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0006\u0010\u00e3\n\u0010\r\u0010\u000e",
    "\u0010\u00e4\u0003\u0010\u0003\u0010\u0006\u0010\u00e9\n\u0010\r\u0010",
    "\u000e\u0010\u00ea\u0005\u0010\u00ed\n\u0010\u0003\u0010\u0002\u0003",
    "\u0010\u0011\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e\u0002\u0007\u0004\u0002\b\b\u001d\u001e\u0003\u0002",
    "\u0015\u0016\u0003\u0002\u0017\u0018\u0003\u0002\u0019\u001c\u0004\u0002",
    "\u001d\u001d\u001f\u001f\u0002\u0107\u0002\"\u0003\u0002\u0002\u0002",
    "\u0004&\u0003\u0002\u0002\u0002\u0006/\u0003\u0002\u0002\u0002\b5\u0003",
    "\u0002\u0002\u0002\nE\u0003\u0002\u0002\u0002\fG\u0003\u0002\u0002\u0002",
    "\u000eP\u0003\u0002\u0002\u0002\u0010\u0090\u0003\u0002\u0002\u0002",
    "\u0012\u00ac\u0003\u0002\u0002\u0002\u0014\u00b4\u0003\u0002\u0002\u0002",
    "\u0016\u00bc\u0003\u0002\u0002\u0002\u0018\u00c3\u0003\u0002\u0002\u0002",
    "\u001a\u00ca\u0003\u0002\u0002\u0002\u001c\u00d2\u0003\u0002\u0002\u0002",
    "\u001e\u00ec\u0003\u0002\u0002\u0002 #\u0005\u0004\u0003\u0002!#\u0005",
    "\f\u0007\u0002\" \u0003\u0002\u0002\u0002\"!\u0003\u0002\u0002\u0002",
    "#$\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002",
    "\u0002\u0002%\u0003\u0003\u0002\u0002\u0002&\'\u0007!\u0002\u0002\'",
    "*\u0007\u0003\u0002\u0002(+\u0005\u0014\u000b\u0002)+\u0005\u0006\u0004",
    "\u0002*(\u0003\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+-\u0003\u0002",
    "\u0002\u0002,.\u0005\b\u0005\u0002-,\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002.\u0005\u0003\u0002\u0002\u0002/0\u0007\u0004\u0002",
    "\u000201\u0007!\u0002\u000212\u0007\u0018\u0002\u000223\u0007!\u0002",
    "\u000234\u0007\u0005\u0002\u00024\u0007\u0003\u0002\u0002\u000256\u0007",
    "\u0006\u0002\u00026;\u0005\n\u0006\u000278\u0007\u0007\u0002\u00028",
    ":\u0005\n\u0006\u000297\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002",
    "\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<\t\u0003",
    "\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002>F\u0007!\u0002\u0002?@",
    "\u0007\u0004\u0002\u0002@A\u0007!\u0002\u0002AB\u0007\u0003\u0002\u0002",
    "BC\u0005\u0014\u000b\u0002CD\u0007\u0005\u0002\u0002DF\u0003\u0002\u0002",
    "\u0002E>\u0003\u0002\u0002\u0002E?\u0003\u0002\u0002\u0002F\u000b\u0003",
    "\u0002\u0002\u0002GN\u0005\u000e\b\u0002HK\t\u0002\u0002\u0002IL\u0005",
    "\u0010\t\u0002JL\u0005\u001e\u0010\u0002KI\u0003\u0002\u0002\u0002K",
    "J\u0003\u0002\u0002\u0002LO\u0003\u0002\u0002\u0002MO\u0005\u0016\f",
    "\u0002NH\u0003\u0002\u0002\u0002NM\u0003\u0002\u0002\u0002NO\u0003\u0002",
    "\u0002\u0002O\r\u0003\u0002\u0002\u0002PU\u0007!\u0002\u0002QR\u0007",
    "\t\u0002\u0002RS\u0005\u0014\u000b\u0002ST\u0007\n\u0002\u0002TV\u0003",
    "\u0002\u0002\u0002UQ\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002",
    "VX\u0003\u0002\u0002\u0002WY\u0007\u000b\u0002\u0002XW\u0003\u0002\u0002",
    "\u0002XY\u0003\u0002\u0002\u0002Yh\u0003\u0002\u0002\u0002Z[\u0007\f",
    "\u0002\u0002[\\\u0007\t\u0002\u0002\\]\u0005\u0014\u000b\u0002]e\u0007",
    "\n\u0002\u0002^_\u0007\u0007\u0002\u0002_`\u0007\t\u0002\u0002`a\u0005",
    "\u0014\u000b\u0002ab\u0007\n\u0002\u0002bd\u0003\u0002\u0002\u0002c",
    "^\u0003\u0002\u0002\u0002dg\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002",
    "\u0002ef\u0003\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002",
    "\u0002\u0002hZ\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002i\u000f",
    "\u0003\u0002\u0002\u0002jk\b\t\u0001\u0002kl\u0007!\u0002\u0002ln\u0007",
    "\u0004\u0002\u0002mo\u0005\u0012\n\u0002nm\u0003\u0002\u0002\u0002n",
    "o\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002p\u0091\u0007\u0005",
    "\u0002\u0002qv\u0007!\u0002\u0002rs\u0007\t\u0002\u0002st\u0005\u0014",
    "\u000b\u0002tu\u0007\n\u0002\u0002uw\u0003\u0002\u0002\u0002vr\u0003",
    "\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002",
    "xy\u0007\u0004\u0002\u0002yz\u0005\u0010\t\u0002z{\u0007\u0005\u0002",
    "\u0002{\u0091\u0003\u0002\u0002\u0002|}\u0007\r\u0002\u0002}\u0091\u0005",
    "\u0010\t\u0011~\u007f\u0007\u0018\u0002\u0002\u007f\u0091\u0005\u0010",
    "\t\u0010\u0080\u0081\u0007\u0017\u0002\u0002\u0081\u0091\u0005\u0010",
    "\t\u000f\u0082\u0087\u0007!\u0002\u0002\u0083\u0084\u0007\t\u0002\u0002",
    "\u0084\u0085\u0005\u0014\u000b\u0002\u0085\u0086\u0007\n\u0002\u0002",
    "\u0086\u0088\u0003\u0002\u0002\u0002\u0087\u0083\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0091\u0003\u0002\u0002\u0002",
    "\u0089\u0091\u0007\"\u0002\u0002\u008a\u0091\u0007%\u0002\u0002\u008b",
    "\u0091\u0005\u0016\f\u0002\u008c\u008d\u0007\u0004\u0002\u0002\u008d",
    "\u008e\u0005\u0010\t\u0002\u008e\u008f\u0007\u0005\u0002\u0002\u008f",
    "\u0091\u0003\u0002\u0002\u0002\u0090j\u0003\u0002\u0002\u0002\u0090",
    "q\u0003\u0002\u0002\u0002\u0090|\u0003\u0002\u0002\u0002\u0090~\u0003",
    "\u0002\u0002\u0002\u0090\u0080\u0003\u0002\u0002\u0002\u0090\u0082\u0003",
    "\u0002\u0002\u0002\u0090\u0089\u0003\u0002\u0002\u0002\u0090\u008a\u0003",
    "\u0002\u0002\u0002\u0090\u008b\u0003\u0002\u0002\u0002\u0090\u008c\u0003",
    "\u0002\u0002\u0002\u0091\u00a9\u0003\u0002\u0002\u0002\u0092\u0093\f",
    "\u000e\u0002\u0002\u0093\u0094\u0007\u000e\u0002\u0002\u0094\u00a8\u0005",
    "\u0010\t\u000f\u0095\u0096\f\r\u0002\u0002\u0096\u0097\t\u0003\u0002",
    "\u0002\u0097\u00a8\u0005\u0010\t\u000e\u0098\u0099\f\f\u0002\u0002\u0099",
    "\u009a\t\u0004\u0002\u0002\u009a\u00a8\u0005\u0010\t\r\u009b\u009c\f",
    "\u000b\u0002\u0002\u009c\u009d\t\u0005\u0002\u0002\u009d\u00a8\u0005",
    "\u0010\t\f\u009e\u009f\f\n\u0002\u0002\u009f\u00a0\t\u0006\u0002\u0002",
    "\u00a0\u00a8\u0005\u0010\t\u000b\u00a1\u00a2\f\t\u0002\u0002\u00a2\u00a3",
    "\u0007\u000f\u0002\u0002\u00a3\u00a8\u0005\u0010\t\n\u00a4\u00a5\f\b",
    "\u0002\u0002\u00a5\u00a6\u0007\u0010\u0002\u0002\u00a6\u00a8\u0005\u0010",
    "\t\t\u00a7\u0092\u0003\u0002\u0002\u0002\u00a7\u0095\u0003\u0002\u0002",
    "\u0002\u00a7\u0098\u0003\u0002\u0002\u0002\u00a7\u009b\u0003\u0002\u0002",
    "\u0002\u00a7\u009e\u0003\u0002\u0002\u0002\u00a7\u00a1\u0003\u0002\u0002",
    "\u0002\u00a7\u00a4\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002",
    "\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002",
    "\u0002\u00aa\u0011\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002",
    "\u0002\u00ac\u00b1\u0005\u0010\t\u0002\u00ad\u00ae\u0007\u0007\u0002",
    "\u0002\u00ae\u00b0\u0005\u0010\t\u0002\u00af\u00ad\u0003\u0002\u0002",
    "\u0002\u00b0\u00b3\u0003\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u0013\u0003\u0002\u0002",
    "\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b4\u00b9\u0007!\u0002",
    "\u0002\u00b5\u00b6\u0007\u0007\u0002\u0002\u00b6\u00b8\u0007!\u0002",
    "\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b8\u00bb\u0003\u0002\u0002",
    "\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002",
    "\u0002\u00ba\u0015\u0003\u0002\u0002\u0002\u00bb\u00b9\u0003\u0002\u0002",
    "\u0002\u00bc\u00be\u0007\u0004\u0002\u0002\u00bd\u00bf\u0005\u0018\r",
    "\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002",
    "\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u00c1\u0005\u001a\u000e",
    "\u0002\u00c1\u00c2\u0007\u0005\u0002\u0002\u00c2\u0017\u0003\u0002\u0002",
    "\u0002\u00c3\u00c4\u0007\t\u0002\u0002\u00c4\u00c5\u0005\u001c\u000f",
    "\u0002\u00c5\u00c6\u0007\u0018\u0002\u0002\u00c6\u00c7\u0005\u001c\u000f",
    "\u0002\u00c7\u00c8\u0007\n\u0002\u0002\u00c8\u00c9\u0007\u0007\u0002",
    "\u0002\u00c9\u0019\u0003\u0002\u0002\u0002\u00ca\u00cf\u0005\u001c\u000f",
    "\u0002\u00cb\u00cc\u0007\u0007\u0002\u0002\u00cc\u00ce\u0005\u001c\u000f",
    "\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002\u0002",
    "\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002",
    "\u0002\u00d0\u001b\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002",
    "\u0002\u00d2\u00d3\u0007\u0004\u0002\u0002\u00d3\u00d4\u0005\u0010\t",
    "\u0002\u00d4\u00d5\u0007\u0007\u0002\u0002\u00d5\u00d6\u0005\u0010\t",
    "\u0002\u00d6\u00d7\u0007\u0005\u0002\u0002\u00d7\u001d\u0003\u0002\u0002",
    "\u0002\u00d8\u00db\u0005\u0010\t\u0002\u00d9\u00da\u0007\u0007\u0002",
    "\u0002\u00da\u00dc\u0005\u0010\t\u0002\u00db\u00d9\u0003\u0002\u0002",
    "\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00db\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00ed\u0003\u0002\u0002",
    "\u0002\u00df\u00e2\u0005\u0010\t\u0002\u00e0\u00e1\u0007\u0007\u0002",
    "\u0002\u00e1\u00e3\u0005\u0010\t\u0002\u00e2\u00e0\u0003\u0002\u0002",
    "\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002",
    "\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002",
    "\u0002\u00e6\u00e7\u0007\u0011\u0002\u0002\u00e7\u00e9\u0003\u0002\u0002",
    "\u0002\u00e8\u00df\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002",
    "\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002",
    "\u0002\u00eb\u00ed\u0003\u0002\u0002\u0002\u00ec\u00d8\u0003\u0002\u0002",
    "\u0002\u00ec\u00e8\u0003\u0002\u0002\u0002\u00ed\u001f\u0003\u0002\u0002",
    "\u0002\u001c\"$*-;EKNUXehnv\u0087\u0090\u00a7\u00a9\u00b1\u00b9\u00be",
    "\u00cf\u00dd\u00e4\u00ea\u00ec"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ModelParser extends antlr4.Parser {

    static grammarFileName = "Model.g4";
    static literalNames = [ null, "':'", "'('", "')'", "'->'", "','", "':='", 
                            "'['", "']'", "':INTERPOLATE:'", "':EXCEPT:'", 
                            "':NOT:'", "'^'", "':AND:'", "':OR:'", "';'", 
                            null, null, null, "'*'", "'/'", "'+'", "'-'", 
                            "'<'", "'<='", "'>'", "'>='", "'='", "'=='", 
                            "'<>'", "'!'", null, null, null, null, "':NA:'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "Encoding", "UnitsDoc", "Group", "Star", "Div", 
                             "Plus", "Minus", "Less", "LessEqual", "Greater", 
                             "GreaterEqual", "Equal", "TwoEqual", "NotEqual", 
                             "Exclamation", "Id", "Const", "StringLiteral", 
                             "StringConst", "Keyword", "Whitespace" ];
    static ruleNames = [ "model", "subscriptRange", "subscriptSequence", 
                         "subscriptMappingList", "subscriptMapping", "equation", 
                         "lhs", "expr", "exprList", "subscriptList", "lookup", 
                         "lookupRange", "lookupPointList", "lookupPoint", 
                         "constList" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ModelParser.ruleNames;
        this.literalNames = ModelParser.literalNames;
        this.symbolicNames = ModelParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 12);
    		case 1:
    			return this.precpred(this._ctx, 11);
    		case 2:
    			return this.precpred(this._ctx, 10);
    		case 3:
    			return this.precpred(this._ctx, 9);
    		case 4:
    			return this.precpred(this._ctx, 8);
    		case 5:
    			return this.precpred(this._ctx, 7);
    		case 6:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	model() {
	    let localctx = new ModelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ModelParser.RULE_model);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 32;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 30;
	                this.subscriptRange();
	                break;

	            case 2:
	                this.state = 31;
	                this.equation();
	                break;

	            }
	            this.state = 34; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===ModelParser.Id);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subscriptRange() {
	    let localctx = new SubscriptRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ModelParser.RULE_subscriptRange);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(ModelParser.Id);
	        this.state = 37;
	        this.match(ModelParser.T__0);
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ModelParser.Id:
	            this.state = 38;
	            this.subscriptList();
	            break;
	        case ModelParser.T__1:
	            this.state = 39;
	            this.subscriptSequence();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__3) {
	            this.state = 42;
	            this.subscriptMappingList();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subscriptSequence() {
	    let localctx = new SubscriptSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ModelParser.RULE_subscriptSequence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(ModelParser.T__1);
	        this.state = 46;
	        this.match(ModelParser.Id);
	        this.state = 47;
	        this.match(ModelParser.Minus);
	        this.state = 48;
	        this.match(ModelParser.Id);
	        this.state = 49;
	        this.match(ModelParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subscriptMappingList() {
	    let localctx = new SubscriptMappingListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ModelParser.RULE_subscriptMappingList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(ModelParser.T__3);
	        this.state = 52;
	        this.subscriptMapping();
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__4) {
	            this.state = 53;
	            this.match(ModelParser.T__4);
	            this.state = 54;
	            this.subscriptMapping();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subscriptMapping() {
	    let localctx = new SubscriptMappingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ModelParser.RULE_subscriptMapping);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ModelParser.Id:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.match(ModelParser.Id);
	            break;
	        case ModelParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.match(ModelParser.T__1);
	            this.state = 62;
	            this.match(ModelParser.Id);
	            this.state = 63;
	            this.match(ModelParser.T__0);
	            this.state = 64;
	            this.subscriptList();
	            this.state = 65;
	            this.match(ModelParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	equation() {
	    let localctx = new EquationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ModelParser.RULE_equation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.lhs();
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case ModelParser.T__5:
	        case ModelParser.Equal:
	        case ModelParser.TwoEqual:
	        	this.state = 70;
	        	_la = this._input.LA(1);
	        	if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__5) | (1 << ModelParser.Equal) | (1 << ModelParser.TwoEqual))) !== 0))) {
	        	this._errHandler.recoverInline(this);
	        	}
	        	else {
	        		this._errHandler.reportMatch(this);
	        	    this.consume();
	        	}
	        	this.state = 73;
	        	this._errHandler.sync(this);
	        	var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        	switch(la_) {
	        	case 1:
	        	    this.state = 71;
	        	    this.expr(0);
	        	    break;

	        	case 2:
	        	    this.state = 72;
	        	    this.constList();
	        	    break;

	        	}
	        	break;
	        case ModelParser.T__1:
	        	this.state = 75;
	        	this.lookup();
	        	break;
	        case ModelParser.EOF:
	        case ModelParser.Id:
	        	break;
	        default:
	        	break;
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lhs() {
	    let localctx = new LhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ModelParser.RULE_lhs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(ModelParser.Id);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__6) {
	            this.state = 79;
	            this.match(ModelParser.T__6);
	            this.state = 80;
	            this.subscriptList();
	            this.state = 81;
	            this.match(ModelParser.T__7);
	        }

	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__8) {
	            this.state = 85;
	            this.match(ModelParser.T__8);
	        }

	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__9) {
	            this.state = 88;
	            this.match(ModelParser.T__9);
	            this.state = 89;
	            this.match(ModelParser.T__6);
	            this.state = 90;
	            this.subscriptList();
	            this.state = 91;
	            this.match(ModelParser.T__7);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ModelParser.T__4) {
	                this.state = 92;
	                this.match(ModelParser.T__4);
	                this.state = 93;
	                this.match(ModelParser.T__6);
	                this.state = 94;
	                this.subscriptList();
	                this.state = 95;
	                this.match(ModelParser.T__7);
	                this.state = 101;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, ModelParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 105;
	            this.match(ModelParser.Id);
	            this.state = 106;
	            this.match(ModelParser.T__1);
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__1) | (1 << ModelParser.T__10) | (1 << ModelParser.Plus) | (1 << ModelParser.Minus) | (1 << ModelParser.Id))) !== 0) || _la===ModelParser.Const || _la===ModelParser.Keyword) {
	                this.state = 107;
	                this.exprList();
	            }

	            this.state = 110;
	            this.match(ModelParser.T__2);
	            break;

	        case 2:
	            localctx = new LookupCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 111;
	            this.match(ModelParser.Id);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ModelParser.T__6) {
	                this.state = 112;
	                this.match(ModelParser.T__6);
	                this.state = 113;
	                this.subscriptList();
	                this.state = 114;
	                this.match(ModelParser.T__7);
	            }

	            this.state = 118;
	            this.match(ModelParser.T__1);
	            this.state = 119;
	            this.expr(0);
	            this.state = 120;
	            this.match(ModelParser.T__2);
	            break;

	        case 3:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 122;
	            this.match(ModelParser.T__10);
	            this.state = 123;
	            this.expr(15);
	            break;

	        case 4:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 124;
	            this.match(ModelParser.Minus);
	            this.state = 125;
	            this.expr(14);
	            break;

	        case 5:
	            localctx = new PositiveContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 126;
	            this.match(ModelParser.Plus);
	            this.state = 127;
	            this.expr(13);
	            break;

	        case 6:
	            localctx = new VarContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 128;
	            this.match(ModelParser.Id);
	            this.state = 133;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            if(la_===1) {
	                this.state = 129;
	                this.match(ModelParser.T__6);
	                this.state = 130;
	                this.subscriptList();
	                this.state = 131;
	                this.match(ModelParser.T__7);

	            }
	            break;

	        case 7:
	            localctx = new ConstContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 135;
	            this.match(ModelParser.Const);
	            break;

	        case 8:
	            localctx = new KeywordContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 136;
	            this.match(ModelParser.Keyword);
	            break;

	        case 9:
	            localctx = new LookupArgContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 137;
	            this.lookup();
	            break;

	        case 10:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 138;
	            this.match(ModelParser.T__1);
	            this.state = 139;
	            this.expr(0);
	            this.state = 140;
	            this.match(ModelParser.T__2);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 167;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 165;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 144;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 145;
	                    this.match(ModelParser.T__11);
	                    this.state = 146;
	                    this.expr(13);
	                    break;

	                case 2:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 147;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 148;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Star || _la===ModelParser.Div)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 149;
	                    this.expr(12);
	                    break;

	                case 3:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 150;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 151;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Plus || _la===ModelParser.Minus)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 152;
	                    this.expr(11);
	                    break;

	                case 4:
	                    localctx = new RelationalContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 153;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 154;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.Less) | (1 << ModelParser.LessEqual) | (1 << ModelParser.Greater) | (1 << ModelParser.GreaterEqual))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 155;
	                    this.expr(10);
	                    break;

	                case 5:
	                    localctx = new EqualityContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 156;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 157;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Equal || _la===ModelParser.NotEqual)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 158;
	                    this.expr(9);
	                    break;

	                case 6:
	                    localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 159;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 160;
	                    this.match(ModelParser.T__12);
	                    this.state = 161;
	                    this.expr(8);
	                    break;

	                case 7:
	                    localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 162;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 163;
	                    this.match(ModelParser.T__13);
	                    this.state = 164;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 169;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ModelParser.RULE_exprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.expr(0);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__4) {
	            this.state = 171;
	            this.match(ModelParser.T__4);
	            this.state = 172;
	            this.expr(0);
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subscriptList() {
	    let localctx = new SubscriptListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ModelParser.RULE_subscriptList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(ModelParser.Id);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__4) {
	            this.state = 179;
	            this.match(ModelParser.T__4);
	            this.state = 180;
	            this.match(ModelParser.Id);
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lookup() {
	    let localctx = new LookupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ModelParser.RULE_lookup);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(ModelParser.T__1);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__6) {
	            this.state = 187;
	            this.lookupRange();
	        }

	        this.state = 190;
	        this.lookupPointList();
	        this.state = 191;
	        this.match(ModelParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lookupRange() {
	    let localctx = new LookupRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ModelParser.RULE_lookupRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(ModelParser.T__6);
	        this.state = 194;
	        this.lookupPoint();
	        this.state = 195;
	        this.match(ModelParser.Minus);
	        this.state = 196;
	        this.lookupPoint();
	        this.state = 197;
	        this.match(ModelParser.T__7);
	        this.state = 198;
	        this.match(ModelParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lookupPointList() {
	    let localctx = new LookupPointListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ModelParser.RULE_lookupPointList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.lookupPoint();
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__4) {
	            this.state = 201;
	            this.match(ModelParser.T__4);
	            this.state = 202;
	            this.lookupPoint();
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lookupPoint() {
	    let localctx = new LookupPointContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ModelParser.RULE_lookupPoint);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(ModelParser.T__1);
	        this.state = 209;
	        this.expr(0);
	        this.state = 210;
	        this.match(ModelParser.T__4);
	        this.state = 211;
	        this.expr(0);
	        this.state = 212;
	        this.match(ModelParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constList() {
	    let localctx = new ConstListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ModelParser.RULE_constList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 214;
	            this.expr(0);
	            this.state = 217; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 215;
	                this.match(ModelParser.T__4);
	                this.state = 216;
	                this.expr(0);
	                this.state = 219; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===ModelParser.T__4);
	            break;

	        case 2:
	            this.state = 230; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 221;
	            		this.expr(0);
	            		this.state = 224; 
	            		this._errHandler.sync(this);
	            		_la = this._input.LA(1);
	            		do {
	            		    this.state = 222;
	            		    this.match(ModelParser.T__4);
	            		    this.state = 223;
	            		    this.expr(0);
	            		    this.state = 226; 
	            		    this._errHandler.sync(this);
	            		    _la = this._input.LA(1);
	            		} while(_la===ModelParser.T__4);
	            		this.state = 228;
	            		this.match(ModelParser.T__14);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 232; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,24, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ModelParser.EOF = antlr4.Token.EOF;
ModelParser.T__0 = 1;
ModelParser.T__1 = 2;
ModelParser.T__2 = 3;
ModelParser.T__3 = 4;
ModelParser.T__4 = 5;
ModelParser.T__5 = 6;
ModelParser.T__6 = 7;
ModelParser.T__7 = 8;
ModelParser.T__8 = 9;
ModelParser.T__9 = 10;
ModelParser.T__10 = 11;
ModelParser.T__11 = 12;
ModelParser.T__12 = 13;
ModelParser.T__13 = 14;
ModelParser.T__14 = 15;
ModelParser.Encoding = 16;
ModelParser.UnitsDoc = 17;
ModelParser.Group = 18;
ModelParser.Star = 19;
ModelParser.Div = 20;
ModelParser.Plus = 21;
ModelParser.Minus = 22;
ModelParser.Less = 23;
ModelParser.LessEqual = 24;
ModelParser.Greater = 25;
ModelParser.GreaterEqual = 26;
ModelParser.Equal = 27;
ModelParser.TwoEqual = 28;
ModelParser.NotEqual = 29;
ModelParser.Exclamation = 30;
ModelParser.Id = 31;
ModelParser.Const = 32;
ModelParser.StringLiteral = 33;
ModelParser.StringConst = 34;
ModelParser.Keyword = 35;
ModelParser.Whitespace = 36;

ModelParser.RULE_model = 0;
ModelParser.RULE_subscriptRange = 1;
ModelParser.RULE_subscriptSequence = 2;
ModelParser.RULE_subscriptMappingList = 3;
ModelParser.RULE_subscriptMapping = 4;
ModelParser.RULE_equation = 5;
ModelParser.RULE_lhs = 6;
ModelParser.RULE_expr = 7;
ModelParser.RULE_exprList = 8;
ModelParser.RULE_subscriptList = 9;
ModelParser.RULE_lookup = 10;
ModelParser.RULE_lookupRange = 11;
ModelParser.RULE_lookupPointList = 12;
ModelParser.RULE_lookupPoint = 13;
ModelParser.RULE_constList = 14;

class ModelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_model;
    }

	subscriptRange = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubscriptRangeContext);
	    } else {
	        return this.getTypedRuleContext(SubscriptRangeContext,i);
	    }
	};

	equation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EquationContext);
	    } else {
	        return this.getTypedRuleContext(EquationContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitModel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubscriptRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_subscriptRange;
    }

	Id() {
	    return this.getToken(ModelParser.Id, 0);
	};

	subscriptList() {
	    return this.getTypedRuleContext(SubscriptListContext,0);
	};

	subscriptSequence() {
	    return this.getTypedRuleContext(SubscriptSequenceContext,0);
	};

	subscriptMappingList() {
	    return this.getTypedRuleContext(SubscriptMappingListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitSubscriptRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubscriptSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_subscriptSequence;
    }

	Id = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ModelParser.Id);
	    } else {
	        return this.getToken(ModelParser.Id, i);
	    }
	};


	Minus() {
	    return this.getToken(ModelParser.Minus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitSubscriptSequence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubscriptMappingListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_subscriptMappingList;
    }

	subscriptMapping = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubscriptMappingContext);
	    } else {
	        return this.getTypedRuleContext(SubscriptMappingContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitSubscriptMappingList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubscriptMappingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_subscriptMapping;
    }

	Id() {
	    return this.getToken(ModelParser.Id, 0);
	};

	subscriptList() {
	    return this.getTypedRuleContext(SubscriptListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitSubscriptMapping(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EquationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_equation;
    }

	lhs() {
	    return this.getTypedRuleContext(LhsContext,0);
	};

	lookup() {
	    return this.getTypedRuleContext(LookupContext,0);
	};

	TwoEqual() {
	    return this.getToken(ModelParser.TwoEqual, 0);
	};

	Equal() {
	    return this.getToken(ModelParser.Equal, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	constList() {
	    return this.getTypedRuleContext(ConstListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitEquation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_lhs;
    }

	Id() {
	    return this.getToken(ModelParser.Id, 0);
	};

	subscriptList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubscriptListContext);
	    } else {
	        return this.getTypedRuleContext(SubscriptListContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitLhs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CallContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Id() {
	    return this.getToken(ModelParser.Id, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.CallContext = CallContext;

class OrContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.OrContext = OrContext;

class KeywordContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Keyword() {
	    return this.getToken(ModelParser.Keyword, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitKeyword(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.KeywordContext = KeywordContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Star() {
	    return this.getToken(ModelParser.Star, 0);
	};

	Div() {
	    return this.getToken(ModelParser.Div, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Plus() {
	    return this.getToken(ModelParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(ModelParser.Minus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.AddSubContext = AddSubContext;

class VarContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Id() {
	    return this.getToken(ModelParser.Id, 0);
	};

	subscriptList() {
	    return this.getTypedRuleContext(SubscriptListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.VarContext = VarContext;

class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.ParensContext = ParensContext;

class ConstContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Const() {
	    return this.getToken(ModelParser.Const, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitConst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.ConstContext = ConstContext;

class RelationalContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Less() {
	    return this.getToken(ModelParser.Less, 0);
	};

	Greater() {
	    return this.getToken(ModelParser.Greater, 0);
	};

	LessEqual() {
	    return this.getToken(ModelParser.LessEqual, 0);
	};

	GreaterEqual() {
	    return this.getToken(ModelParser.GreaterEqual, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitRelational(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.RelationalContext = RelationalContext;

class LookupCallContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Id() {
	    return this.getToken(ModelParser.Id, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	subscriptList() {
	    return this.getTypedRuleContext(SubscriptListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitLookupCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.LookupCallContext = LookupCallContext;

class NotContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitNot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.NotContext = NotContext;

class NegativeContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Minus() {
	    return this.getToken(ModelParser.Minus, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitNegative(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.NegativeContext = NegativeContext;

class PositiveContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Plus() {
	    return this.getToken(ModelParser.Plus, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitPositive(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.PositiveContext = PositiveContext;

class AndContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.AndContext = AndContext;

class EqualityContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Equal() {
	    return this.getToken(ModelParser.Equal, 0);
	};

	NotEqual() {
	    return this.getToken(ModelParser.NotEqual, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitEquality(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.EqualityContext = EqualityContext;

class LookupArgContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lookup() {
	    return this.getTypedRuleContext(LookupContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitLookupArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.LookupArgContext = LookupArgContext;

class PowerContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitPower(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModelParser.PowerContext = PowerContext;

class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_exprList;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitExprList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubscriptListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_subscriptList;
    }

	Id = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ModelParser.Id);
	    } else {
	        return this.getToken(ModelParser.Id, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitSubscriptList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LookupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_lookup;
    }

	lookupPointList() {
	    return this.getTypedRuleContext(LookupPointListContext,0);
	};

	lookupRange() {
	    return this.getTypedRuleContext(LookupRangeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitLookup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LookupRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_lookupRange;
    }

	lookupPoint = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LookupPointContext);
	    } else {
	        return this.getTypedRuleContext(LookupPointContext,i);
	    }
	};

	Minus() {
	    return this.getToken(ModelParser.Minus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitLookupRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LookupPointListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_lookupPointList;
    }

	lookupPoint = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LookupPointContext);
	    } else {
	        return this.getTypedRuleContext(LookupPointContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitLookupPointList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LookupPointContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_lookupPoint;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitLookupPoint(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_constList;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitConstList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ModelParser.ModelContext = ModelContext; 
ModelParser.SubscriptRangeContext = SubscriptRangeContext; 
ModelParser.SubscriptSequenceContext = SubscriptSequenceContext; 
ModelParser.SubscriptMappingListContext = SubscriptMappingListContext; 
ModelParser.SubscriptMappingContext = SubscriptMappingContext; 
ModelParser.EquationContext = EquationContext; 
ModelParser.LhsContext = LhsContext; 
ModelParser.ExprContext = ExprContext; 
ModelParser.ExprListContext = ExprListContext; 
ModelParser.SubscriptListContext = SubscriptListContext; 
ModelParser.LookupContext = LookupContext; 
ModelParser.LookupRangeContext = LookupRangeContext; 
ModelParser.LookupPointListContext = LookupPointListContext; 
ModelParser.LookupPointContext = LookupPointContext; 
ModelParser.ConstListContext = ConstListContext; 
