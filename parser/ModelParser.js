// Generated from grammar/Model.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ModelVisitor from './ModelVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003(\u010c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0006\u0002%\n\u0002\r",
    "\u0002\u000e\u0002&\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003.\n\u0003\u0003\u0003\u0005\u00031\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u00036\n\u0003\u0003\u0003\u0007",
    "\u00039\n\u0003\f\u0003\u000e\u0003<\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005H\n\u0005\f\u0005\u000e\u0005K\u000b",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006T\n\u0006\u0003\u0007\u0003\u0007\u0007",
    "\u0007X\n\u0007\f\u0007\u000e\u0007[\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bc\n\b\u0003\b\u0005\bf\n\b\u0003",
    "\b\u0007\bi\n\b\f\b\u000e\bl\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0005\ts\n\t\u0003\t\u0005\tv\n\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u0081\n\t\f\t\u000e",
    "\t\u0084\u000b\t\u0005\t\u0086\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u008c\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n",
    "\u0094\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00a5",
    "\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n",
    "\u00ae\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00c5\n\n\f\n\u000e\n\u00c8",
    "\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00cd\n\u000b",
    "\f\u000b\u000e\u000b\u00d0\u000b\u000b\u0003\f\u0003\f\u0003\f\u0007",
    "\f\u00d5\n\f\f\f\u000e\f\u00d8\u000b\f\u0003\r\u0003\r\u0005\r\u00dc",
    "\n\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0007\u000f\u00eb\n\u000f\f\u000f\u000e\u000f\u00ee\u000b\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0006\u0011\u00f9\n\u0011\r\u0011",
    "\u000e\u0011\u00fa\u0003\u0011\u0003\u0011\u0003\u0011\u0006\u0011\u0100",
    "\n\u0011\r\u0011\u000e\u0011\u0101\u0003\u0011\u0003\u0011\u0006\u0011",
    "\u0106\n\u0011\r\u0011\u000e\u0011\u0107\u0005\u0011\u010a\n\u0011\u0003",
    "\u0011\u0003Y\u0003\u0012\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0002\u0007\u0004\u0002",
    "\u000b\u000b\u001f \u0003\u0002\u0017\u0018\u0003\u0002\u0019\u001a",
    "\u0003\u0002\u001b\u001e\u0004\u0002\u001f\u001f!!\u0002\u0128\u0002",
    "$\u0003\u0002\u0002\u0002\u00045\u0003\u0002\u0002\u0002\u0006=\u0003",
    "\u0002\u0002\u0002\bC\u0003\u0002\u0002\u0002\nS\u0003\u0002\u0002\u0002",
    "\fU\u0003\u0002\u0002\u0002\u000e^\u0003\u0002\u0002\u0002\u0010m\u0003",
    "\u0002\u0002\u0002\u0012\u00ad\u0003\u0002\u0002\u0002\u0014\u00c9\u0003",
    "\u0002\u0002\u0002\u0016\u00d1\u0003\u0002\u0002\u0002\u0018\u00d9\u0003",
    "\u0002\u0002\u0002\u001a\u00e0\u0003\u0002\u0002\u0002\u001c\u00e7\u0003",
    "\u0002\u0002\u0002\u001e\u00ef\u0003\u0002\u0002\u0002 \u0109\u0003",
    "\u0002\u0002\u0002\"%\u0005\u0004\u0003\u0002#%\u0005\u000e\b\u0002",
    "$\"\u0003\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%&\u0003\u0002",
    "\u0002\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'",
    "\u0003\u0003\u0002\u0002\u0002()\u0007#\u0002\u0002)-\u0007\u0003\u0002",
    "\u0002*.\u0005\u0016\f\u0002+.\u0005\u0006\u0004\u0002,.\u0005\u0012",
    "\n\u0002-*\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-,\u0003",
    "\u0002\u0002\u0002.0\u0003\u0002\u0002\u0002/1\u0005\b\u0005\u00020",
    "/\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u000216\u0003\u0002\u0002",
    "\u000223\u0007#\u0002\u000234\u0007\u0004\u0002\u000246\u0007#\u0002",
    "\u00025(\u0003\u0002\u0002\u000252\u0003\u0002\u0002\u00026:\u0003\u0002",
    "\u0002\u000279\u0005\f\u0007\u000287\u0003\u0002\u0002\u00029<\u0003",
    "\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002",
    ";\u0005\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=>\u0007\u0005",
    "\u0002\u0002>?\u0007#\u0002\u0002?@\u0007\u001a\u0002\u0002@A\u0007",
    "#\u0002\u0002AB\u0007\u0006\u0002\u0002B\u0007\u0003\u0002\u0002\u0002",
    "CD\u0007\u0007\u0002\u0002DI\u0005\n\u0006\u0002EF\u0007\b\u0002\u0002",
    "FH\u0005\n\u0006\u0002GE\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002",
    "\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002J\t\u0003",
    "\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002LT\u0007#\u0002\u0002MN",
    "\u0007\u0005\u0002\u0002NO\u0007#\u0002\u0002OP\u0007\u0003\u0002\u0002",
    "PQ\u0005\u0016\f\u0002QR\u0007\u0006\u0002\u0002RT\u0003\u0002\u0002",
    "\u0002SL\u0003\u0002\u0002\u0002SM\u0003\u0002\u0002\u0002T\u000b\u0003",
    "\u0002\u0002\u0002UY\u0007\t\u0002\u0002VX\u000b\u0002\u0002\u0002W",
    "V\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
    "\u0002YW\u0003\u0002\u0002\u0002Z\\\u0003\u0002\u0002\u0002[Y\u0003",
    "\u0002\u0002\u0002\\]\u0007\n\u0002\u0002]\r\u0003\u0002\u0002\u0002",
    "^e\u0005\u0010\t\u0002_b\t\u0002\u0002\u0002`c\u0005\u0012\n\u0002a",
    "c\u0005 \u0011\u0002b`\u0003\u0002\u0002\u0002ba\u0003\u0002\u0002\u0002",
    "cf\u0003\u0002\u0002\u0002df\u0005\u0018\r\u0002e_\u0003\u0002\u0002",
    "\u0002ed\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fj\u0003\u0002",
    "\u0002\u0002gi\u0005\f\u0007\u0002hg\u0003\u0002\u0002\u0002il\u0003",
    "\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002",
    "k\u000f\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002mr\u0007#\u0002",
    "\u0002no\u0007\f\u0002\u0002op\u0005\u0016\f\u0002pq\u0007\r\u0002\u0002",
    "qs\u0003\u0002\u0002\u0002rn\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002",
    "\u0002su\u0003\u0002\u0002\u0002tv\u0007\u000e\u0002\u0002ut\u0003\u0002",
    "\u0002\u0002uv\u0003\u0002\u0002\u0002v\u0085\u0003\u0002\u0002\u0002",
    "wx\u0007\u000f\u0002\u0002xy\u0007\f\u0002\u0002yz\u0005\u0016\f\u0002",
    "z\u0082\u0007\r\u0002\u0002{|\u0007\b\u0002\u0002|}\u0007\f\u0002\u0002",
    "}~\u0005\u0016\f\u0002~\u007f\u0007\r\u0002\u0002\u007f\u0081\u0003",
    "\u0002\u0002\u0002\u0080{\u0003\u0002\u0002\u0002\u0081\u0084\u0003",
    "\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003",
    "\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003",
    "\u0002\u0002\u0002\u0085w\u0003\u0002\u0002\u0002\u0085\u0086\u0003",
    "\u0002\u0002\u0002\u0086\u0011\u0003\u0002\u0002\u0002\u0087\u0088\b",
    "\n\u0001\u0002\u0088\u0089\u0007#\u0002\u0002\u0089\u008b\u0007\u0005",
    "\u0002\u0002\u008a\u008c\u0005\u0014\u000b\u0002\u008b\u008a\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002",
    "\u0002\u0002\u008d\u00ae\u0007\u0006\u0002\u0002\u008e\u0093\u0007#",
    "\u0002\u0002\u008f\u0090\u0007\f\u0002\u0002\u0090\u0091\u0005\u0016",
    "\f\u0002\u0091\u0092\u0007\r\u0002\u0002\u0092\u0094\u0003\u0002\u0002",
    "\u0002\u0093\u008f\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0007\u0005\u0002",
    "\u0002\u0096\u0097\u0005\u0012\n\u0002\u0097\u0098\u0007\u0006\u0002",
    "\u0002\u0098\u00ae\u0003\u0002\u0002\u0002\u0099\u009a\u0007\u0010\u0002",
    "\u0002\u009a\u00ae\u0005\u0012\n\u0011\u009b\u009c\u0007\u001a\u0002",
    "\u0002\u009c\u00ae\u0005\u0012\n\u0010\u009d\u009e\u0007\u0019\u0002",
    "\u0002\u009e\u00ae\u0005\u0012\n\u000f\u009f\u00a4\u0007#\u0002\u0002",
    "\u00a0\u00a1\u0007\f\u0002\u0002\u00a1\u00a2\u0005\u0016\f\u0002\u00a2",
    "\u00a3\u0007\r\u0002\u0002\u00a3\u00a5\u0003\u0002\u0002\u0002\u00a4",
    "\u00a0\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5",
    "\u00ae\u0003\u0002\u0002\u0002\u00a6\u00ae\u0007$\u0002\u0002\u00a7",
    "\u00ae\u0007\'\u0002\u0002\u00a8\u00ae\u0005\u0018\r\u0002\u00a9\u00aa",
    "\u0007\u0005\u0002\u0002\u00aa\u00ab\u0005\u0012\n\u0002\u00ab\u00ac",
    "\u0007\u0006\u0002\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad\u0087",
    "\u0003\u0002\u0002\u0002\u00ad\u008e\u0003\u0002\u0002\u0002\u00ad\u0099",
    "\u0003\u0002\u0002\u0002\u00ad\u009b\u0003\u0002\u0002\u0002\u00ad\u009d",
    "\u0003\u0002\u0002\u0002\u00ad\u009f\u0003\u0002\u0002\u0002\u00ad\u00a6",
    "\u0003\u0002\u0002\u0002\u00ad\u00a7\u0003\u0002\u0002\u0002\u00ad\u00a8",
    "\u0003\u0002\u0002\u0002\u00ad\u00a9\u0003\u0002\u0002\u0002\u00ae\u00c6",
    "\u0003\u0002\u0002\u0002\u00af\u00b0\f\u000e\u0002\u0002\u00b0\u00b1",
    "\u0007\u0011\u0002\u0002\u00b1\u00c5\u0005\u0012\n\u000f\u00b2\u00b3",
    "\f\r\u0002\u0002\u00b3\u00b4\t\u0003\u0002\u0002\u00b4\u00c5\u0005\u0012",
    "\n\u000e\u00b5\u00b6\f\f\u0002\u0002\u00b6\u00b7\t\u0004\u0002\u0002",
    "\u00b7\u00c5\u0005\u0012\n\r\u00b8\u00b9\f\u000b\u0002\u0002\u00b9\u00ba",
    "\t\u0005\u0002\u0002\u00ba\u00c5\u0005\u0012\n\f\u00bb\u00bc\f\n\u0002",
    "\u0002\u00bc\u00bd\t\u0006\u0002\u0002\u00bd\u00c5\u0005\u0012\n\u000b",
    "\u00be\u00bf\f\t\u0002\u0002\u00bf\u00c0\u0007\u0012\u0002\u0002\u00c0",
    "\u00c5\u0005\u0012\n\n\u00c1\u00c2\f\b\u0002\u0002\u00c2\u00c3\u0007",
    "\u0013\u0002\u0002\u00c3\u00c5\u0005\u0012\n\t\u00c4\u00af\u0003\u0002",
    "\u0002\u0002\u00c4\u00b2\u0003\u0002\u0002\u0002\u00c4\u00b5\u0003\u0002",
    "\u0002\u0002\u00c4\u00b8\u0003\u0002\u0002\u0002\u00c4\u00bb\u0003\u0002",
    "\u0002\u0002\u00c4\u00be\u0003\u0002\u0002\u0002\u00c4\u00c1\u0003\u0002",
    "\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002",
    "\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u0013\u0003\u0002",
    "\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9\u00ce\u0005\u0012",
    "\n\u0002\u00ca\u00cb\u0007\b\u0002\u0002\u00cb\u00cd\u0005\u0012\n\u0002",
    "\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002\u0002",
    "\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002",
    "\u00cf\u0015\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002",
    "\u00d1\u00d6\u0007#\u0002\u0002\u00d2\u00d3\u0007\b\u0002\u0002\u00d3",
    "\u00d5\u0007#\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d5",
    "\u00d8\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6",
    "\u00d7\u0003\u0002\u0002\u0002\u00d7\u0017\u0003\u0002\u0002\u0002\u00d8",
    "\u00d6\u0003\u0002\u0002\u0002\u00d9\u00db\u0007\u0005\u0002\u0002\u00da",
    "\u00dc\u0005\u001a\u000e\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0005\u001c\u000f\u0002\u00de\u00df\u0007\u0006\u0002\u0002\u00df",
    "\u0019\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007\f\u0002\u0002\u00e1",
    "\u00e2\u0005\u001e\u0010\u0002\u00e2\u00e3\u0007\u001a\u0002\u0002\u00e3",
    "\u00e4\u0005\u001e\u0010\u0002\u00e4\u00e5\u0007\r\u0002\u0002\u00e5",
    "\u00e6\u0007\b\u0002\u0002\u00e6\u001b\u0003\u0002\u0002\u0002\u00e7",
    "\u00ec\u0005\u001e\u0010\u0002\u00e8\u00e9\u0007\b\u0002\u0002\u00e9",
    "\u00eb\u0005\u001e\u0010\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00eb",
    "\u00ee\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u0003\u0002\u0002\u0002\u00ed\u001d\u0003\u0002\u0002\u0002\u00ee",
    "\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007\u0005\u0002\u0002\u00f0",
    "\u00f1\u0005\u0012\n\u0002\u00f1\u00f2\u0007\b\u0002\u0002\u00f2\u00f3",
    "\u0005\u0012\n\u0002\u00f3\u00f4\u0007\u0006\u0002\u0002\u00f4\u001f",
    "\u0003\u0002\u0002\u0002\u00f5\u00f8\u0005\u0012\n\u0002\u00f6\u00f7",
    "\u0007\b\u0002\u0002\u00f7\u00f9\u0005\u0012\n\u0002\u00f8\u00f6\u0003",
    "\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00f8\u0003",
    "\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u010a\u0003",
    "\u0002\u0002\u0002\u00fc\u00ff\u0005\u0012\n\u0002\u00fd\u00fe\u0007",
    "\b\u0002\u0002\u00fe\u0100\u0005\u0012\n\u0002\u00ff\u00fd\u0003\u0002",
    "\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002",
    "\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002",
    "\u0002\u0002\u0103\u0104\u0007\u0014\u0002\u0002\u0104\u0106\u0003\u0002",
    "\u0002\u0002\u0105\u00fc\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002",
    "\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002",
    "\u0002\u0002\u0108\u010a\u0003\u0002\u0002\u0002\u0109\u00f5\u0003\u0002",
    "\u0002\u0002\u0109\u0105\u0003\u0002\u0002\u0002\u010a!\u0003\u0002",
    "\u0002\u0002 $&-05:ISYbejru\u0082\u0085\u008b\u0093\u00a4\u00ad\u00c4",
    "\u00c6\u00ce\u00d6\u00db\u00ec\u00fa\u0101\u0107\u0109"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ModelParser extends antlr4.Parser {

    static grammarFileName = "Model.g4";
    static literalNames = [ null, "':'", "'<->'", "'('", "')'", "'->'", 
                            "','", "'~'", "'|'", "':='", "'['", "']'", "':INTERPOLATE:'", 
                            "':EXCEPT:'", "':NOT:'", "'^'", "':AND:'", "':OR:'", 
                            "';'", null, null, "'*'", "'/'", "'+'", "'-'", 
                            "'<'", "'<='", "'>'", "'>='", "'='", "'=='", 
                            "'<>'", "'!'", null, null, null, null, "':NA:'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "Encoding", "Group", "Star", 
                             "Div", "Plus", "Minus", "Less", "LessEqual", 
                             "Greater", "GreaterEqual", "Equal", "TwoEqual", 
                             "NotEqual", "Exclamation", "Id", "Const", "StringLiteral", 
                             "StringConst", "Keyword", "Whitespace" ];
    static ruleNames = [ "model", "subscriptRange", "subscriptSequence", 
                         "subscriptMappingList", "subscriptMapping", "unitsDoc", 
                         "equation", "lhs", "expr", "exprList", "subscriptList", 
                         "lookup", "lookupRange", "lookupPointList", "lookupPoint", 
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
    	case 8:
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
	        this.state = 34; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 34;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 32;
	                this.subscriptRange();
	                break;

	            case 2:
	                this.state = 33;
	                this.equation();
	                break;

	            }
	            this.state = 36; 
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
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 38;
	            this.match(ModelParser.Id);
	            this.state = 39;
	            this.match(ModelParser.T__0);
	            this.state = 43;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 40;
	                this.subscriptList();
	                break;

	            case 2:
	                this.state = 41;
	                this.subscriptSequence();
	                break;

	            case 3:
	                this.state = 42;
	                this.expr(0);
	                break;

	            }
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ModelParser.T__4) {
	                this.state = 45;
	                this.subscriptMappingList();
	            }

	            break;

	        case 2:
	            this.state = 48;
	            this.match(ModelParser.Id);
	            this.state = 49;
	            this.match(ModelParser.T__1);
	            this.state = 50;
	            this.match(ModelParser.Id);
	            break;

	        }
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__6) {
	            this.state = 53;
	            this.unitsDoc();
	            this.state = 58;
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



	subscriptSequence() {
	    let localctx = new SubscriptSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ModelParser.RULE_subscriptSequence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(ModelParser.T__2);
	        this.state = 60;
	        this.match(ModelParser.Id);
	        this.state = 61;
	        this.match(ModelParser.Minus);
	        this.state = 62;
	        this.match(ModelParser.Id);
	        this.state = 63;
	        this.match(ModelParser.T__3);
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
	        this.state = 65;
	        this.match(ModelParser.T__4);
	        this.state = 66;
	        this.subscriptMapping();
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__5) {
	            this.state = 67;
	            this.match(ModelParser.T__5);
	            this.state = 68;
	            this.subscriptMapping();
	            this.state = 73;
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
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ModelParser.Id:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.match(ModelParser.Id);
	            break;
	        case ModelParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.match(ModelParser.T__2);
	            this.state = 76;
	            this.match(ModelParser.Id);
	            this.state = 77;
	            this.match(ModelParser.T__0);
	            this.state = 78;
	            this.subscriptList();
	            this.state = 79;
	            this.match(ModelParser.T__3);
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



	unitsDoc() {
	    let localctx = new UnitsDocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ModelParser.RULE_unitsDoc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(ModelParser.T__6);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 84;
	                this.matchWildcard(); 
	            }
	            this.state = 89;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 90;
	        this.match(ModelParser.T__7);
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
	    this.enterRule(localctx, 12, ModelParser.RULE_equation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.lhs();
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case ModelParser.T__8:
	        case ModelParser.Equal:
	        case ModelParser.TwoEqual:
	        	this.state = 93;
	        	_la = this._input.LA(1);
	        	if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__8) | (1 << ModelParser.Equal) | (1 << ModelParser.TwoEqual))) !== 0))) {
	        	this._errHandler.recoverInline(this);
	        	}
	        	else {
	        		this._errHandler.reportMatch(this);
	        	    this.consume();
	        	}
	        	this.state = 96;
	        	this._errHandler.sync(this);
	        	var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        	switch(la_) {
	        	case 1:
	        	    this.state = 94;
	        	    this.expr(0);
	        	    break;

	        	case 2:
	        	    this.state = 95;
	        	    this.constList();
	        	    break;

	        	}
	        	break;
	        case ModelParser.T__2:
	        	this.state = 98;
	        	this.lookup();
	        	break;
	        case ModelParser.EOF:
	        case ModelParser.T__6:
	        case ModelParser.Id:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__6) {
	            this.state = 101;
	            this.unitsDoc();
	            this.state = 106;
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



	lhs() {
	    let localctx = new LhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ModelParser.RULE_lhs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(ModelParser.Id);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__9) {
	            this.state = 108;
	            this.match(ModelParser.T__9);
	            this.state = 109;
	            this.subscriptList();
	            this.state = 110;
	            this.match(ModelParser.T__10);
	        }

	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__11) {
	            this.state = 114;
	            this.match(ModelParser.T__11);
	        }

	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__12) {
	            this.state = 117;
	            this.match(ModelParser.T__12);
	            this.state = 118;
	            this.match(ModelParser.T__9);
	            this.state = 119;
	            this.subscriptList();
	            this.state = 120;
	            this.match(ModelParser.T__10);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ModelParser.T__5) {
	                this.state = 121;
	                this.match(ModelParser.T__5);
	                this.state = 122;
	                this.match(ModelParser.T__9);
	                this.state = 123;
	                this.subscriptList();
	                this.state = 124;
	                this.match(ModelParser.T__10);
	                this.state = 130;
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
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, ModelParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 134;
	            this.match(ModelParser.Id);
	            this.state = 135;
	            this.match(ModelParser.T__2);
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__2) | (1 << ModelParser.T__13) | (1 << ModelParser.Plus) | (1 << ModelParser.Minus))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ModelParser.Id - 33)) | (1 << (ModelParser.Const - 33)) | (1 << (ModelParser.Keyword - 33)))) !== 0)) {
	                this.state = 136;
	                this.exprList();
	            }

	            this.state = 139;
	            this.match(ModelParser.T__3);
	            break;

	        case 2:
	            localctx = new LookupCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 140;
	            this.match(ModelParser.Id);
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ModelParser.T__9) {
	                this.state = 141;
	                this.match(ModelParser.T__9);
	                this.state = 142;
	                this.subscriptList();
	                this.state = 143;
	                this.match(ModelParser.T__10);
	            }

	            this.state = 147;
	            this.match(ModelParser.T__2);
	            this.state = 148;
	            this.expr(0);
	            this.state = 149;
	            this.match(ModelParser.T__3);
	            break;

	        case 3:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 151;
	            this.match(ModelParser.T__13);
	            this.state = 152;
	            this.expr(15);
	            break;

	        case 4:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 153;
	            this.match(ModelParser.Minus);
	            this.state = 154;
	            this.expr(14);
	            break;

	        case 5:
	            localctx = new PositiveContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 155;
	            this.match(ModelParser.Plus);
	            this.state = 156;
	            this.expr(13);
	            break;

	        case 6:
	            localctx = new VarContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 157;
	            this.match(ModelParser.Id);
	            this.state = 162;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	            if(la_===1) {
	                this.state = 158;
	                this.match(ModelParser.T__9);
	                this.state = 159;
	                this.subscriptList();
	                this.state = 160;
	                this.match(ModelParser.T__10);

	            }
	            break;

	        case 7:
	            localctx = new ConstContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 164;
	            this.match(ModelParser.Const);
	            break;

	        case 8:
	            localctx = new KeywordContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 165;
	            this.match(ModelParser.Keyword);
	            break;

	        case 9:
	            localctx = new LookupArgContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 166;
	            this.lookup();
	            break;

	        case 10:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 167;
	            this.match(ModelParser.T__2);
	            this.state = 168;
	            this.expr(0);
	            this.state = 169;
	            this.match(ModelParser.T__3);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 196;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 194;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 173;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 174;
	                    this.match(ModelParser.T__14);
	                    this.state = 175;
	                    this.expr(13);
	                    break;

	                case 2:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 176;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 177;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Star || _la===ModelParser.Div)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 178;
	                    this.expr(12);
	                    break;

	                case 3:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 180;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Plus || _la===ModelParser.Minus)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 181;
	                    this.expr(11);
	                    break;

	                case 4:
	                    localctx = new RelationalContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 183;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.Less) | (1 << ModelParser.LessEqual) | (1 << ModelParser.Greater) | (1 << ModelParser.GreaterEqual))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 184;
	                    this.expr(10);
	                    break;

	                case 5:
	                    localctx = new EqualityContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 185;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 186;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Equal || _la===ModelParser.NotEqual)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 187;
	                    this.expr(9);
	                    break;

	                case 6:
	                    localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 188;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 189;
	                    this.match(ModelParser.T__15);
	                    this.state = 190;
	                    this.expr(8);
	                    break;

	                case 7:
	                    localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 191;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 192;
	                    this.match(ModelParser.T__16);
	                    this.state = 193;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 198;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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
	    this.enterRule(localctx, 18, ModelParser.RULE_exprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.expr(0);
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__5) {
	            this.state = 200;
	            this.match(ModelParser.T__5);
	            this.state = 201;
	            this.expr(0);
	            this.state = 206;
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
	    this.enterRule(localctx, 20, ModelParser.RULE_subscriptList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(ModelParser.Id);
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__5) {
	            this.state = 208;
	            this.match(ModelParser.T__5);
	            this.state = 209;
	            this.match(ModelParser.Id);
	            this.state = 214;
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
	    this.enterRule(localctx, 22, ModelParser.RULE_lookup);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(ModelParser.T__2);
	        this.state = 217;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__9) {
	            this.state = 216;
	            this.lookupRange();
	        }

	        this.state = 219;
	        this.lookupPointList();
	        this.state = 220;
	        this.match(ModelParser.T__3);
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
	    this.enterRule(localctx, 24, ModelParser.RULE_lookupRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(ModelParser.T__9);
	        this.state = 223;
	        this.lookupPoint();
	        this.state = 224;
	        this.match(ModelParser.Minus);
	        this.state = 225;
	        this.lookupPoint();
	        this.state = 226;
	        this.match(ModelParser.T__10);
	        this.state = 227;
	        this.match(ModelParser.T__5);
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
	    this.enterRule(localctx, 26, ModelParser.RULE_lookupPointList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.lookupPoint();
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__5) {
	            this.state = 230;
	            this.match(ModelParser.T__5);
	            this.state = 231;
	            this.lookupPoint();
	            this.state = 236;
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
	    this.enterRule(localctx, 28, ModelParser.RULE_lookupPoint);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(ModelParser.T__2);
	        this.state = 238;
	        this.expr(0);
	        this.state = 239;
	        this.match(ModelParser.T__5);
	        this.state = 240;
	        this.expr(0);
	        this.state = 241;
	        this.match(ModelParser.T__3);
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
	    this.enterRule(localctx, 30, ModelParser.RULE_constList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 243;
	            this.expr(0);
	            this.state = 246; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 244;
	                this.match(ModelParser.T__5);
	                this.state = 245;
	                this.expr(0);
	                this.state = 248; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===ModelParser.T__5);
	            break;

	        case 2:
	            this.state = 259; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 250;
	            		this.expr(0);
	            		this.state = 253; 
	            		this._errHandler.sync(this);
	            		_la = this._input.LA(1);
	            		do {
	            		    this.state = 251;
	            		    this.match(ModelParser.T__5);
	            		    this.state = 252;
	            		    this.expr(0);
	            		    this.state = 255; 
	            		    this._errHandler.sync(this);
	            		    _la = this._input.LA(1);
	            		} while(_la===ModelParser.T__5);
	            		this.state = 257;
	            		this.match(ModelParser.T__17);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 261; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,28, this._ctx);
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
ModelParser.T__15 = 16;
ModelParser.T__16 = 17;
ModelParser.T__17 = 18;
ModelParser.Encoding = 19;
ModelParser.Group = 20;
ModelParser.Star = 21;
ModelParser.Div = 22;
ModelParser.Plus = 23;
ModelParser.Minus = 24;
ModelParser.Less = 25;
ModelParser.LessEqual = 26;
ModelParser.Greater = 27;
ModelParser.GreaterEqual = 28;
ModelParser.Equal = 29;
ModelParser.TwoEqual = 30;
ModelParser.NotEqual = 31;
ModelParser.Exclamation = 32;
ModelParser.Id = 33;
ModelParser.Const = 34;
ModelParser.StringLiteral = 35;
ModelParser.StringConst = 36;
ModelParser.Keyword = 37;
ModelParser.Whitespace = 38;

ModelParser.RULE_model = 0;
ModelParser.RULE_subscriptRange = 1;
ModelParser.RULE_subscriptSequence = 2;
ModelParser.RULE_subscriptMappingList = 3;
ModelParser.RULE_subscriptMapping = 4;
ModelParser.RULE_unitsDoc = 5;
ModelParser.RULE_equation = 6;
ModelParser.RULE_lhs = 7;
ModelParser.RULE_expr = 8;
ModelParser.RULE_exprList = 9;
ModelParser.RULE_subscriptList = 10;
ModelParser.RULE_lookup = 11;
ModelParser.RULE_lookupRange = 12;
ModelParser.RULE_lookupPointList = 13;
ModelParser.RULE_lookupPoint = 14;
ModelParser.RULE_constList = 15;

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

	unitsDoc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnitsDocContext);
	    } else {
	        return this.getTypedRuleContext(UnitsDocContext,i);
	    }
	};

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



class UnitsDocContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModelParser.RULE_unitsDoc;
    }


	accept(visitor) {
	    if ( visitor instanceof ModelVisitor ) {
	        return visitor.visitUnitsDoc(this);
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

	unitsDoc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnitsDocContext);
	    } else {
	        return this.getTypedRuleContext(UnitsDocContext,i);
	    }
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
ModelParser.UnitsDocContext = UnitsDocContext; 
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
