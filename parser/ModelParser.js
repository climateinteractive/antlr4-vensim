// Generated from grammar/Model.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ModelVisitor from './ModelVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003&\u00f0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0003\u0002\u0003\u0002\u0006\u0002#\n\u0002\r\u0002\u000e\u0002$\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003,",
    "\n\u0003\u0003\u0003\u0005\u0003/\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005;\n\u0005\f\u0005\u000e\u0005>\u000b\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006G\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007M\n\u0007\u0003\u0007\u0005\u0007P\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bW\n\b\u0003\b\u0005\bZ\n\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0007\be\n\b\f\b\u000e\bh\u000b\b\u0005\bj\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\tp\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\tx\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\t\u0089\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0005\t\u0092\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00a9\n\t\f\t\u000e",
    "\t\u00ac\u000b\t\u0003\n\u0003\n\u0003\n\u0007\n\u00b1\n\n\f\n\u000e",
    "\n\u00b4\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00b9",
    "\n\u000b\f\u000b\u000e\u000b\u00bc\u000b\u000b\u0003\f\u0003\f\u0005",
    "\f\u00c0\n\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u00cf\n\u000e\f\u000e\u000e\u000e\u00d2\u000b\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0006\u0010\u00dd\n\u0010\r\u0010\u000e\u0010\u00de",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0006\u0010\u00e4\n\u0010\r\u0010",
    "\u000e\u0010\u00e5\u0003\u0010\u0003\u0010\u0006\u0010\u00ea\n\u0010",
    "\r\u0010\u000e\u0010\u00eb\u0005\u0010\u00ee\n\u0010\u0003\u0010\u0002",
    "\u0003\u0010\u0011\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e\u0002\u0007\u0004\u0002\b\b\u001d\u001e\u0003",
    "\u0002\u0015\u0016\u0003\u0002\u0017\u0018\u0003\u0002\u0019\u001c\u0004",
    "\u0002\u001d\u001d\u001f\u001f\u0002\u0109\u0002\"\u0003\u0002\u0002",
    "\u0002\u0004&\u0003\u0002\u0002\u0002\u00060\u0003\u0002\u0002\u0002",
    "\b6\u0003\u0002\u0002\u0002\nF\u0003\u0002\u0002\u0002\fH\u0003\u0002",
    "\u0002\u0002\u000eQ\u0003\u0002\u0002\u0002\u0010\u0091\u0003\u0002",
    "\u0002\u0002\u0012\u00ad\u0003\u0002\u0002\u0002\u0014\u00b5\u0003\u0002",
    "\u0002\u0002\u0016\u00bd\u0003\u0002\u0002\u0002\u0018\u00c4\u0003\u0002",
    "\u0002\u0002\u001a\u00cb\u0003\u0002\u0002\u0002\u001c\u00d3\u0003\u0002",
    "\u0002\u0002\u001e\u00ed\u0003\u0002\u0002\u0002 #\u0005\u0004\u0003",
    "\u0002!#\u0005\f\u0007\u0002\" \u0003\u0002\u0002\u0002\"!\u0003\u0002",
    "\u0002\u0002#$\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%",
    "\u0003\u0002\u0002\u0002%\u0003\u0003\u0002\u0002\u0002&\'\u0007!\u0002",
    "\u0002\'+\u0007\u0003\u0002\u0002(,\u0005\u0014\u000b\u0002),\u0005",
    "\u0006\u0004\u0002*,\u0005\u0010\t\u0002+(\u0003\u0002\u0002\u0002+",
    ")\u0003\u0002\u0002\u0002+*\u0003\u0002\u0002\u0002,.\u0003\u0002\u0002",
    "\u0002-/\u0005\b\u0005\u0002.-\u0003\u0002\u0002\u0002./\u0003\u0002",
    "\u0002\u0002/\u0005\u0003\u0002\u0002\u000201\u0007\u0004\u0002\u0002",
    "12\u0007!\u0002\u000223\u0007\u0018\u0002\u000234\u0007!\u0002\u0002",
    "45\u0007\u0005\u0002\u00025\u0007\u0003\u0002\u0002\u000267\u0007\u0006",
    "\u0002\u00027<\u0005\n\u0006\u000289\u0007\u0007\u0002\u00029;\u0005",
    "\n\u0006\u0002:8\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<",
    ":\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=\t\u0003\u0002\u0002",
    "\u0002><\u0003\u0002\u0002\u0002?G\u0007!\u0002\u0002@A\u0007\u0004",
    "\u0002\u0002AB\u0007!\u0002\u0002BC\u0007\u0003\u0002\u0002CD\u0005",
    "\u0014\u000b\u0002DE\u0007\u0005\u0002\u0002EG\u0003\u0002\u0002\u0002",
    "F?\u0003\u0002\u0002\u0002F@\u0003\u0002\u0002\u0002G\u000b\u0003\u0002",
    "\u0002\u0002HO\u0005\u000e\b\u0002IL\t\u0002\u0002\u0002JM\u0005\u0010",
    "\t\u0002KM\u0005\u001e\u0010\u0002LJ\u0003\u0002\u0002\u0002LK\u0003",
    "\u0002\u0002\u0002MP\u0003\u0002\u0002\u0002NP\u0005\u0016\f\u0002O",
    "I\u0003\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002",
    "\u0002P\r\u0003\u0002\u0002\u0002QV\u0007!\u0002\u0002RS\u0007\t\u0002",
    "\u0002ST\u0005\u0014\u000b\u0002TU\u0007\n\u0002\u0002UW\u0003\u0002",
    "\u0002\u0002VR\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WY\u0003",
    "\u0002\u0002\u0002XZ\u0007\u000b\u0002\u0002YX\u0003\u0002\u0002\u0002",
    "YZ\u0003\u0002\u0002\u0002Zi\u0003\u0002\u0002\u0002[\\\u0007\f\u0002",
    "\u0002\\]\u0007\t\u0002\u0002]^\u0005\u0014\u000b\u0002^f\u0007\n\u0002",
    "\u0002_`\u0007\u0007\u0002\u0002`a\u0007\t\u0002\u0002ab\u0005\u0014",
    "\u000b\u0002bc\u0007\n\u0002\u0002ce\u0003\u0002\u0002\u0002d_\u0003",
    "\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002",
    "fg\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002",
    "\u0002i[\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002j\u000f\u0003",
    "\u0002\u0002\u0002kl\b\t\u0001\u0002lm\u0007!\u0002\u0002mo\u0007\u0004",
    "\u0002\u0002np\u0005\u0012\n\u0002on\u0003\u0002\u0002\u0002op\u0003",
    "\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002q\u0092\u0007\u0005\u0002",
    "\u0002rw\u0007!\u0002\u0002st\u0007\t\u0002\u0002tu\u0005\u0014\u000b",
    "\u0002uv\u0007\n\u0002\u0002vx\u0003\u0002\u0002\u0002ws\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz\u0007",
    "\u0004\u0002\u0002z{\u0005\u0010\t\u0002{|\u0007\u0005\u0002\u0002|",
    "\u0092\u0003\u0002\u0002\u0002}~\u0007\r\u0002\u0002~\u0092\u0005\u0010",
    "\t\u0011\u007f\u0080\u0007\u0018\u0002\u0002\u0080\u0092\u0005\u0010",
    "\t\u0010\u0081\u0082\u0007\u0017\u0002\u0002\u0082\u0092\u0005\u0010",
    "\t\u000f\u0083\u0088\u0007!\u0002\u0002\u0084\u0085\u0007\t\u0002\u0002",
    "\u0085\u0086\u0005\u0014\u000b\u0002\u0086\u0087\u0007\n\u0002\u0002",
    "\u0087\u0089\u0003\u0002\u0002\u0002\u0088\u0084\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u0092\u0003\u0002\u0002\u0002",
    "\u008a\u0092\u0007\"\u0002\u0002\u008b\u0092\u0007%\u0002\u0002\u008c",
    "\u0092\u0005\u0016\f\u0002\u008d\u008e\u0007\u0004\u0002\u0002\u008e",
    "\u008f\u0005\u0010\t\u0002\u008f\u0090\u0007\u0005\u0002\u0002\u0090",
    "\u0092\u0003\u0002\u0002\u0002\u0091k\u0003\u0002\u0002\u0002\u0091",
    "r\u0003\u0002\u0002\u0002\u0091}\u0003\u0002\u0002\u0002\u0091\u007f",
    "\u0003\u0002\u0002\u0002\u0091\u0081\u0003\u0002\u0002\u0002\u0091\u0083",
    "\u0003\u0002\u0002\u0002\u0091\u008a\u0003\u0002\u0002\u0002\u0091\u008b",
    "\u0003\u0002\u0002\u0002\u0091\u008c\u0003\u0002\u0002\u0002\u0091\u008d",
    "\u0003\u0002\u0002\u0002\u0092\u00aa\u0003\u0002\u0002\u0002\u0093\u0094",
    "\f\u000e\u0002\u0002\u0094\u0095\u0007\u000e\u0002\u0002\u0095\u00a9",
    "\u0005\u0010\t\u000f\u0096\u0097\f\r\u0002\u0002\u0097\u0098\t\u0003",
    "\u0002\u0002\u0098\u00a9\u0005\u0010\t\u000e\u0099\u009a\f\f\u0002\u0002",
    "\u009a\u009b\t\u0004\u0002\u0002\u009b\u00a9\u0005\u0010\t\r\u009c\u009d",
    "\f\u000b\u0002\u0002\u009d\u009e\t\u0005\u0002\u0002\u009e\u00a9\u0005",
    "\u0010\t\f\u009f\u00a0\f\n\u0002\u0002\u00a0\u00a1\t\u0006\u0002\u0002",
    "\u00a1\u00a9\u0005\u0010\t\u000b\u00a2\u00a3\f\t\u0002\u0002\u00a3\u00a4",
    "\u0007\u000f\u0002\u0002\u00a4\u00a9\u0005\u0010\t\n\u00a5\u00a6\f\b",
    "\u0002\u0002\u00a6\u00a7\u0007\u0010\u0002\u0002\u00a7\u00a9\u0005\u0010",
    "\t\t\u00a8\u0093\u0003\u0002\u0002\u0002\u00a8\u0096\u0003\u0002\u0002",
    "\u0002\u00a8\u0099\u0003\u0002\u0002\u0002\u00a8\u009c\u0003\u0002\u0002",
    "\u0002\u00a8\u009f\u0003\u0002\u0002\u0002\u00a8\u00a2\u0003\u0002\u0002",
    "\u0002\u00a8\u00a5\u0003\u0002\u0002\u0002\u00a9\u00ac\u0003\u0002\u0002",
    "\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002",
    "\u0002\u00ab\u0011\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002",
    "\u0002\u00ad\u00b2\u0005\u0010\t\u0002\u00ae\u00af\u0007\u0007\u0002",
    "\u0002\u00af\u00b1\u0005\u0010\t\u0002\u00b0\u00ae\u0003\u0002\u0002",
    "\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002",
    "\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u0013\u0003\u0002\u0002",
    "\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00ba\u0007!\u0002",
    "\u0002\u00b6\u00b7\u0007\u0007\u0002\u0002\u00b7\u00b9\u0007!\u0002",
    "\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002",
    "\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002",
    "\u0002\u00bb\u0015\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002",
    "\u0002\u00bd\u00bf\u0007\u0004\u0002\u0002\u00be\u00c0\u0005\u0018\r",
    "\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002",
    "\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c2\u0005\u001a\u000e",
    "\u0002\u00c2\u00c3\u0007\u0005\u0002\u0002\u00c3\u0017\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0007\t\u0002\u0002\u00c5\u00c6\u0005\u001c\u000f",
    "\u0002\u00c6\u00c7\u0007\u0018\u0002\u0002\u00c7\u00c8\u0005\u001c\u000f",
    "\u0002\u00c8\u00c9\u0007\n\u0002\u0002\u00c9\u00ca\u0007\u0007\u0002",
    "\u0002\u00ca\u0019\u0003\u0002\u0002\u0002\u00cb\u00d0\u0005\u001c\u000f",
    "\u0002\u00cc\u00cd\u0007\u0007\u0002\u0002\u00cd\u00cf\u0005\u001c\u000f",
    "\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00cf\u00d2\u0003\u0002\u0002",
    "\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002",
    "\u0002\u00d1\u001b\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002",
    "\u0002\u00d3\u00d4\u0007\u0004\u0002\u0002\u00d4\u00d5\u0005\u0010\t",
    "\u0002\u00d5\u00d6\u0007\u0007\u0002\u0002\u00d6\u00d7\u0005\u0010\t",
    "\u0002\u00d7\u00d8\u0007\u0005\u0002\u0002\u00d8\u001d\u0003\u0002\u0002",
    "\u0002\u00d9\u00dc\u0005\u0010\t\u0002\u00da\u00db\u0007\u0007\u0002",
    "\u0002\u00db\u00dd\u0005\u0010\t\u0002\u00dc\u00da\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002",
    "\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df\u00ee\u0003\u0002\u0002",
    "\u0002\u00e0\u00e3\u0005\u0010\t\u0002\u00e1\u00e2\u0007\u0007\u0002",
    "\u0002\u00e2\u00e4\u0005\u0010\t\u0002\u00e3\u00e1\u0003\u0002\u0002",
    "\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002",
    "\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0007\u0011\u0002\u0002\u00e8\u00ea\u0003\u0002\u0002",
    "\u0002\u00e9\u00e0\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002",
    "\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002",
    "\u0002\u00ec\u00ee\u0003\u0002\u0002\u0002\u00ed\u00d9\u0003\u0002\u0002",
    "\u0002\u00ed\u00e9\u0003\u0002\u0002\u0002\u00ee\u001f\u0003\u0002\u0002",
    "\u0002\u001c\"$+.<FLOVYfiow\u0088\u0091\u00a8\u00aa\u00b2\u00ba\u00bf",
    "\u00d0\u00de\u00e5\u00eb\u00ed"].join("");


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
	        this.state = 41;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 38;
	            this.subscriptList();
	            break;

	        case 2:
	            this.state = 39;
	            this.subscriptSequence();
	            break;

	        case 3:
	            this.state = 40;
	            this.expr(0);
	            break;

	        }
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__3) {
	            this.state = 43;
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
	        this.state = 46;
	        this.match(ModelParser.T__1);
	        this.state = 47;
	        this.match(ModelParser.Id);
	        this.state = 48;
	        this.match(ModelParser.Minus);
	        this.state = 49;
	        this.match(ModelParser.Id);
	        this.state = 50;
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
	        this.state = 52;
	        this.match(ModelParser.T__3);
	        this.state = 53;
	        this.subscriptMapping();
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__4) {
	            this.state = 54;
	            this.match(ModelParser.T__4);
	            this.state = 55;
	            this.subscriptMapping();
	            this.state = 60;
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
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ModelParser.Id:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.match(ModelParser.Id);
	            break;
	        case ModelParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.match(ModelParser.T__1);
	            this.state = 63;
	            this.match(ModelParser.Id);
	            this.state = 64;
	            this.match(ModelParser.T__0);
	            this.state = 65;
	            this.subscriptList();
	            this.state = 66;
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
	        this.state = 70;
	        this.lhs();
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case ModelParser.T__5:
	        case ModelParser.Equal:
	        case ModelParser.TwoEqual:
	        	this.state = 71;
	        	_la = this._input.LA(1);
	        	if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__5) | (1 << ModelParser.Equal) | (1 << ModelParser.TwoEqual))) !== 0))) {
	        	this._errHandler.recoverInline(this);
	        	}
	        	else {
	        		this._errHandler.reportMatch(this);
	        	    this.consume();
	        	}
	        	this.state = 74;
	        	this._errHandler.sync(this);
	        	var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        	switch(la_) {
	        	case 1:
	        	    this.state = 72;
	        	    this.expr(0);
	        	    break;

	        	case 2:
	        	    this.state = 73;
	        	    this.constList();
	        	    break;

	        	}
	        	break;
	        case ModelParser.T__1:
	        	this.state = 76;
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
	        this.state = 79;
	        this.match(ModelParser.Id);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__6) {
	            this.state = 80;
	            this.match(ModelParser.T__6);
	            this.state = 81;
	            this.subscriptList();
	            this.state = 82;
	            this.match(ModelParser.T__7);
	        }

	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__8) {
	            this.state = 86;
	            this.match(ModelParser.T__8);
	        }

	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__9) {
	            this.state = 89;
	            this.match(ModelParser.T__9);
	            this.state = 90;
	            this.match(ModelParser.T__6);
	            this.state = 91;
	            this.subscriptList();
	            this.state = 92;
	            this.match(ModelParser.T__7);
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ModelParser.T__4) {
	                this.state = 93;
	                this.match(ModelParser.T__4);
	                this.state = 94;
	                this.match(ModelParser.T__6);
	                this.state = 95;
	                this.subscriptList();
	                this.state = 96;
	                this.match(ModelParser.T__7);
	                this.state = 102;
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
	        this.state = 143;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 106;
	            this.match(ModelParser.Id);
	            this.state = 107;
	            this.match(ModelParser.T__1);
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__1) | (1 << ModelParser.T__10) | (1 << ModelParser.Plus) | (1 << ModelParser.Minus) | (1 << ModelParser.Id))) !== 0) || _la===ModelParser.Const || _la===ModelParser.Keyword) {
	                this.state = 108;
	                this.exprList();
	            }

	            this.state = 111;
	            this.match(ModelParser.T__2);
	            break;

	        case 2:
	            localctx = new LookupCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 112;
	            this.match(ModelParser.Id);
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ModelParser.T__6) {
	                this.state = 113;
	                this.match(ModelParser.T__6);
	                this.state = 114;
	                this.subscriptList();
	                this.state = 115;
	                this.match(ModelParser.T__7);
	            }

	            this.state = 119;
	            this.match(ModelParser.T__1);
	            this.state = 120;
	            this.expr(0);
	            this.state = 121;
	            this.match(ModelParser.T__2);
	            break;

	        case 3:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 123;
	            this.match(ModelParser.T__10);
	            this.state = 124;
	            this.expr(15);
	            break;

	        case 4:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 125;
	            this.match(ModelParser.Minus);
	            this.state = 126;
	            this.expr(14);
	            break;

	        case 5:
	            localctx = new PositiveContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 127;
	            this.match(ModelParser.Plus);
	            this.state = 128;
	            this.expr(13);
	            break;

	        case 6:
	            localctx = new VarContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 129;
	            this.match(ModelParser.Id);
	            this.state = 134;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            if(la_===1) {
	                this.state = 130;
	                this.match(ModelParser.T__6);
	                this.state = 131;
	                this.subscriptList();
	                this.state = 132;
	                this.match(ModelParser.T__7);

	            }
	            break;

	        case 7:
	            localctx = new ConstContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 136;
	            this.match(ModelParser.Const);
	            break;

	        case 8:
	            localctx = new KeywordContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 137;
	            this.match(ModelParser.Keyword);
	            break;

	        case 9:
	            localctx = new LookupArgContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 138;
	            this.lookup();
	            break;

	        case 10:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 139;
	            this.match(ModelParser.T__1);
	            this.state = 140;
	            this.expr(0);
	            this.state = 141;
	            this.match(ModelParser.T__2);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 168;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 166;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 145;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 146;
	                    this.match(ModelParser.T__11);
	                    this.state = 147;
	                    this.expr(13);
	                    break;

	                case 2:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 148;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 149;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Star || _la===ModelParser.Div)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 150;
	                    this.expr(12);
	                    break;

	                case 3:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 151;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 152;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Plus || _la===ModelParser.Minus)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 153;
	                    this.expr(11);
	                    break;

	                case 4:
	                    localctx = new RelationalContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 154;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 155;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.Less) | (1 << ModelParser.LessEqual) | (1 << ModelParser.Greater) | (1 << ModelParser.GreaterEqual))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 156;
	                    this.expr(10);
	                    break;

	                case 5:
	                    localctx = new EqualityContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 157;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 158;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Equal || _la===ModelParser.NotEqual)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 159;
	                    this.expr(9);
	                    break;

	                case 6:
	                    localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 160;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 161;
	                    this.match(ModelParser.T__12);
	                    this.state = 162;
	                    this.expr(8);
	                    break;

	                case 7:
	                    localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 164;
	                    this.match(ModelParser.T__13);
	                    this.state = 165;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 170;
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
	        this.state = 171;
	        this.expr(0);
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__4) {
	            this.state = 172;
	            this.match(ModelParser.T__4);
	            this.state = 173;
	            this.expr(0);
	            this.state = 178;
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
	        this.state = 179;
	        this.match(ModelParser.Id);
	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__4) {
	            this.state = 180;
	            this.match(ModelParser.T__4);
	            this.state = 181;
	            this.match(ModelParser.Id);
	            this.state = 186;
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
	        this.state = 187;
	        this.match(ModelParser.T__1);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__6) {
	            this.state = 188;
	            this.lookupRange();
	        }

	        this.state = 191;
	        this.lookupPointList();
	        this.state = 192;
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
	        this.state = 194;
	        this.match(ModelParser.T__6);
	        this.state = 195;
	        this.lookupPoint();
	        this.state = 196;
	        this.match(ModelParser.Minus);
	        this.state = 197;
	        this.lookupPoint();
	        this.state = 198;
	        this.match(ModelParser.T__7);
	        this.state = 199;
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
	        this.state = 201;
	        this.lookupPoint();
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__4) {
	            this.state = 202;
	            this.match(ModelParser.T__4);
	            this.state = 203;
	            this.lookupPoint();
	            this.state = 208;
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
	        this.state = 209;
	        this.match(ModelParser.T__1);
	        this.state = 210;
	        this.expr(0);
	        this.state = 211;
	        this.match(ModelParser.T__4);
	        this.state = 212;
	        this.expr(0);
	        this.state = 213;
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
	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 215;
	            this.expr(0);
	            this.state = 218; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 216;
	                this.match(ModelParser.T__4);
	                this.state = 217;
	                this.expr(0);
	                this.state = 220; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===ModelParser.T__4);
	            break;

	        case 2:
	            this.state = 231; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 222;
	            		this.expr(0);
	            		this.state = 225; 
	            		this._errHandler.sync(this);
	            		_la = this._input.LA(1);
	            		do {
	            		    this.state = 223;
	            		    this.match(ModelParser.T__4);
	            		    this.state = 224;
	            		    this.expr(0);
	            		    this.state = 227; 
	            		    this._errHandler.sync(this);
	            		    _la = this._input.LA(1);
	            		} while(_la===ModelParser.T__4);
	            		this.state = 229;
	            		this.match(ModelParser.T__14);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 233; 
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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
