// Generated from grammar/Model.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ModelVisitor from './ModelVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003(\u00f9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0003\u0002\u0003\u0002\u0006\u0002#\n\u0002\r\u0002\u000e\u0002$\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003,",
    "\n\u0003\u0003\u0003\u0005\u0003/\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u00034\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u0005B\n\u0005\f\u0005\u000e\u0005",
    "E\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006N\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007T\n\u0007\u0003\u0007\u0005",
    "\u0007W\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\b`\n\b\u0003\b\u0005\bc\n\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bn\n\b\f\b\u000e",
    "\bq\u000b\b\u0005\bs\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\ty\n",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0081\n\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0092\n\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u009b",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00b2\n\t\f\t\u000e\t\u00b5",
    "\u000b\t\u0003\n\u0003\n\u0003\n\u0007\n\u00ba\n\n\f\n\u000e\n\u00bd",
    "\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00c2\n\u000b",
    "\f\u000b\u000e\u000b\u00c5\u000b\u000b\u0003\f\u0003\f\u0005\f\u00c9",
    "\n\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00d8",
    "\n\u000e\f\u000e\u000e\u000e\u00db\u000b\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0006\u0010\u00e6\n\u0010\r\u0010\u000e\u0010\u00e7\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0006\u0010\u00ed\n\u0010\r\u0010\u000e",
    "\u0010\u00ee\u0003\u0010\u0003\u0010\u0006\u0010\u00f3\n\u0010\r\u0010",
    "\u000e\u0010\u00f4\u0005\u0010\u00f7\n\u0010\u0003\u0010\u0002\u0003",
    "\u0010\u0011\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e\u0002\u0007\u0004\u0002\n\n\u001f \u0003\u0002\u0017",
    "\u0018\u0003\u0002\u0019\u001a\u0003\u0002\u001b\u001e\u0004\u0002\u001f",
    "\u001f!!\u0002\u0113\u0002\"\u0003\u0002\u0002\u0002\u00043\u0003\u0002",
    "\u0002\u0002\u00067\u0003\u0002\u0002\u0002\b=\u0003\u0002\u0002\u0002",
    "\nM\u0003\u0002\u0002\u0002\fO\u0003\u0002\u0002\u0002\u000eZ\u0003",
    "\u0002\u0002\u0002\u0010\u009a\u0003\u0002\u0002\u0002\u0012\u00b6\u0003",
    "\u0002\u0002\u0002\u0014\u00be\u0003\u0002\u0002\u0002\u0016\u00c6\u0003",
    "\u0002\u0002\u0002\u0018\u00cd\u0003\u0002\u0002\u0002\u001a\u00d4\u0003",
    "\u0002\u0002\u0002\u001c\u00dc\u0003\u0002\u0002\u0002\u001e\u00f6\u0003",
    "\u0002\u0002\u0002 #\u0005\u0004\u0003\u0002!#\u0005\f\u0007\u0002\"",
    " \u0003\u0002\u0002\u0002\"!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002",
    "\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%\u0003\u0003",
    "\u0002\u0002\u0002&\'\u0007#\u0002\u0002\'+\u0007\u0003\u0002\u0002",
    "(,\u0005\u0014\u000b\u0002),\u0005\u0006\u0004\u0002*,\u0005\u0010\t",
    "\u0002+(\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+*\u0003\u0002",
    "\u0002\u0002,.\u0003\u0002\u0002\u0002-/\u0005\b\u0005\u0002.-\u0003",
    "\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/4\u0003\u0002\u0002\u0002",
    "01\u0007#\u0002\u000212\u0007\u0004\u0002\u000224\u0007#\u0002\u0002",
    "3&\u0003\u0002\u0002\u000230\u0003\u0002\u0002\u000245\u0003\u0002\u0002",
    "\u000256\u0007\u0005\u0002\u00026\u0005\u0003\u0002\u0002\u000278\u0007",
    "\u0006\u0002\u000289\u0007#\u0002\u00029:\u0007\u001a\u0002\u0002:;",
    "\u0007#\u0002\u0002;<\u0007\u0007\u0002\u0002<\u0007\u0003\u0002\u0002",
    "\u0002=>\u0007\b\u0002\u0002>C\u0005\n\u0006\u0002?@\u0007\t\u0002\u0002",
    "@B\u0005\n\u0006\u0002A?\u0003\u0002\u0002\u0002BE\u0003\u0002\u0002",
    "\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002D\t\u0003",
    "\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002FN\u0007#\u0002\u0002GH",
    "\u0007\u0006\u0002\u0002HI\u0007#\u0002\u0002IJ\u0007\u0003\u0002\u0002",
    "JK\u0005\u0014\u000b\u0002KL\u0007\u0007\u0002\u0002LN\u0003\u0002\u0002",
    "\u0002MF\u0003\u0002\u0002\u0002MG\u0003\u0002\u0002\u0002N\u000b\u0003",
    "\u0002\u0002\u0002OV\u0005\u000e\b\u0002PS\t\u0002\u0002\u0002QT\u0005",
    "\u0010\t\u0002RT\u0005\u001e\u0010\u0002SQ\u0003\u0002\u0002\u0002S",
    "R\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002UW\u0005\u0016\f",
    "\u0002VP\u0003\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002VW\u0003\u0002",
    "\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0007\u0005\u0002\u0002Y\r",
    "\u0003\u0002\u0002\u0002Z_\u0007#\u0002\u0002[\\\u0007\u000b\u0002\u0002",
    "\\]\u0005\u0014\u000b\u0002]^\u0007\f\u0002\u0002^`\u0003\u0002\u0002",
    "\u0002_[\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`b\u0003\u0002",
    "\u0002\u0002ac\u0007\r\u0002\u0002ba\u0003\u0002\u0002\u0002bc\u0003",
    "\u0002\u0002\u0002cr\u0003\u0002\u0002\u0002de\u0007\u000e\u0002\u0002",
    "ef\u0007\u000b\u0002\u0002fg\u0005\u0014\u000b\u0002go\u0007\f\u0002",
    "\u0002hi\u0007\t\u0002\u0002ij\u0007\u000b\u0002\u0002jk\u0005\u0014",
    "\u000b\u0002kl\u0007\f\u0002\u0002ln\u0003\u0002\u0002\u0002mh\u0003",
    "\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002",
    "op\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002",
    "\u0002rd\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s\u000f\u0003",
    "\u0002\u0002\u0002tu\b\t\u0001\u0002uv\u0007#\u0002\u0002vx\u0007\u0006",
    "\u0002\u0002wy\u0005\u0012\n\u0002xw\u0003\u0002\u0002\u0002xy\u0003",
    "\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z\u009b\u0007\u0007\u0002",
    "\u0002{\u0080\u0007#\u0002\u0002|}\u0007\u000b\u0002\u0002}~\u0005\u0014",
    "\u000b\u0002~\u007f\u0007\f\u0002\u0002\u007f\u0081\u0003\u0002\u0002",
    "\u0002\u0080|\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0006\u0002",
    "\u0002\u0083\u0084\u0005\u0010\t\u0002\u0084\u0085\u0007\u0007\u0002",
    "\u0002\u0085\u009b\u0003\u0002\u0002\u0002\u0086\u0087\u0007\u000f\u0002",
    "\u0002\u0087\u009b\u0005\u0010\t\u0011\u0088\u0089\u0007\u001a\u0002",
    "\u0002\u0089\u009b\u0005\u0010\t\u0010\u008a\u008b\u0007\u0019\u0002",
    "\u0002\u008b\u009b\u0005\u0010\t\u000f\u008c\u0091\u0007#\u0002\u0002",
    "\u008d\u008e\u0007\u000b\u0002\u0002\u008e\u008f\u0005\u0014\u000b\u0002",
    "\u008f\u0090\u0007\f\u0002\u0002\u0090\u0092\u0003\u0002\u0002\u0002",
    "\u0091\u008d\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002",
    "\u0092\u009b\u0003\u0002\u0002\u0002\u0093\u009b\u0007$\u0002\u0002",
    "\u0094\u009b\u0007\'\u0002\u0002\u0095\u009b\u0005\u0016\f\u0002\u0096",
    "\u0097\u0007\u0006\u0002\u0002\u0097\u0098\u0005\u0010\t\u0002\u0098",
    "\u0099\u0007\u0007\u0002\u0002\u0099\u009b\u0003\u0002\u0002\u0002\u009a",
    "t\u0003\u0002\u0002\u0002\u009a{\u0003\u0002\u0002\u0002\u009a\u0086",
    "\u0003\u0002\u0002\u0002\u009a\u0088\u0003\u0002\u0002\u0002\u009a\u008a",
    "\u0003\u0002\u0002\u0002\u009a\u008c\u0003\u0002\u0002\u0002\u009a\u0093",
    "\u0003\u0002\u0002\u0002\u009a\u0094\u0003\u0002\u0002\u0002\u009a\u0095",
    "\u0003\u0002\u0002\u0002\u009a\u0096\u0003\u0002\u0002\u0002\u009b\u00b3",
    "\u0003\u0002\u0002\u0002\u009c\u009d\f\u000e\u0002\u0002\u009d\u009e",
    "\u0007\u0010\u0002\u0002\u009e\u00b2\u0005\u0010\t\u000f\u009f\u00a0",
    "\f\r\u0002\u0002\u00a0\u00a1\t\u0003\u0002\u0002\u00a1\u00b2\u0005\u0010",
    "\t\u000e\u00a2\u00a3\f\f\u0002\u0002\u00a3\u00a4\t\u0004\u0002\u0002",
    "\u00a4\u00b2\u0005\u0010\t\r\u00a5\u00a6\f\u000b\u0002\u0002\u00a6\u00a7",
    "\t\u0005\u0002\u0002\u00a7\u00b2\u0005\u0010\t\f\u00a8\u00a9\f\n\u0002",
    "\u0002\u00a9\u00aa\t\u0006\u0002\u0002\u00aa\u00b2\u0005\u0010\t\u000b",
    "\u00ab\u00ac\f\t\u0002\u0002\u00ac\u00ad\u0007\u0011\u0002\u0002\u00ad",
    "\u00b2\u0005\u0010\t\n\u00ae\u00af\f\b\u0002\u0002\u00af\u00b0\u0007",
    "\u0012\u0002\u0002\u00b0\u00b2\u0005\u0010\t\t\u00b1\u009c\u0003\u0002",
    "\u0002\u0002\u00b1\u009f\u0003\u0002\u0002\u0002\u00b1\u00a2\u0003\u0002",
    "\u0002\u0002\u00b1\u00a5\u0003\u0002\u0002\u0002\u00b1\u00a8\u0003\u0002",
    "\u0002\u0002\u00b1\u00ab\u0003\u0002\u0002\u0002\u00b1\u00ae\u0003\u0002",
    "\u0002\u0002\u00b2\u00b5\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u0011\u0003\u0002",
    "\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b6\u00bb\u0005\u0010",
    "\t\u0002\u00b7\u00b8\u0007\t\u0002\u0002\u00b8\u00ba\u0005\u0010\t\u0002",
    "\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bd\u0003\u0002\u0002\u0002",
    "\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002",
    "\u00bc\u0013\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002",
    "\u00be\u00c3\u0007#\u0002\u0002\u00bf\u00c0\u0007\t\u0002\u0002\u00c0",
    "\u00c2\u0007#\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c2",
    "\u00c5\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c3",
    "\u00c4\u0003\u0002\u0002\u0002\u00c4\u0015\u0003\u0002\u0002\u0002\u00c5",
    "\u00c3\u0003\u0002\u0002\u0002\u00c6\u00c8\u0007\u0006\u0002\u0002\u00c7",
    "\u00c9\u0005\u0018\r\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c8",
    "\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca",
    "\u00cb\u0005\u001a\u000e\u0002\u00cb\u00cc\u0007\u0007\u0002\u0002\u00cc",
    "\u0017\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007\u000b\u0002\u0002\u00ce",
    "\u00cf\u0005\u001c\u000f\u0002\u00cf\u00d0\u0007\u001a\u0002\u0002\u00d0",
    "\u00d1\u0005\u001c\u000f\u0002\u00d1\u00d2\u0007\f\u0002\u0002\u00d2",
    "\u00d3\u0007\t\u0002\u0002\u00d3\u0019\u0003\u0002\u0002\u0002\u00d4",
    "\u00d9\u0005\u001c\u000f\u0002\u00d5\u00d6\u0007\t\u0002\u0002\u00d6",
    "\u00d8\u0005\u001c\u000f\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d8",
    "\u00db\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9",
    "\u00da\u0003\u0002\u0002\u0002\u00da\u001b\u0003\u0002\u0002\u0002\u00db",
    "\u00d9\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007\u0006\u0002\u0002\u00dd",
    "\u00de\u0005\u0010\t\u0002\u00de\u00df\u0007\t\u0002\u0002\u00df\u00e0",
    "\u0005\u0010\t\u0002\u00e0\u00e1\u0007\u0007\u0002\u0002\u00e1\u001d",
    "\u0003\u0002\u0002\u0002\u00e2\u00e5\u0005\u0010\t\u0002\u00e3\u00e4",
    "\u0007\t\u0002\u0002\u00e4\u00e6\u0005\u0010\t\u0002\u00e5\u00e3\u0003",
    "\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003",
    "\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00f7\u0003",
    "\u0002\u0002\u0002\u00e9\u00ec\u0005\u0010\t\u0002\u00ea\u00eb\u0007",
    "\t\u0002\u0002\u00eb\u00ed\u0005\u0010\t\u0002\u00ec\u00ea\u0003\u0002",
    "\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002",
    "\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0007\u0013\u0002\u0002\u00f1\u00f3\u0003\u0002",
    "\u0002\u0002\u00f2\u00e9\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002",
    "\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002",
    "\u0002\u0002\u00f5\u00f7\u0003\u0002\u0002\u0002\u00f6\u00e2\u0003\u0002",
    "\u0002\u0002\u00f6\u00f2\u0003\u0002\u0002\u0002\u00f7\u001f\u0003\u0002",
    "\u0002\u0002\u001d\"$+.3CMSV_borx\u0080\u0091\u009a\u00b1\u00b3\u00bb",
    "\u00c3\u00c8\u00d9\u00e7\u00ee\u00f4\u00f6"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ModelParser extends antlr4.Parser {

    static grammarFileName = "Model.g4";
    static literalNames = [ null, "':'", "'<->'", "'|'", "'('", "')'", "'->'", 
                            "','", "':='", "'['", "']'", "':INTERPOLATE:'", 
                            "':EXCEPT:'", "':NOT:'", "'^'", "':AND:'", "':OR:'", 
                            "';'", null, null, null, "'*'", "'/'", "'+'", 
                            "'-'", "'<'", "'<='", "'>'", "'>='", "'='", 
                            "'=='", "'<>'", "'!'", null, null, null, null, 
                            "':NA:'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "Encoding", "Group", "UnitsDoc", 
                             "Star", "Div", "Plus", "Minus", "Less", "LessEqual", 
                             "Greater", "GreaterEqual", "Equal", "TwoEqual", 
                             "NotEqual", "Exclamation", "Id", "Const", "StringLiteral", 
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
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
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
	            if(_la===ModelParser.T__5) {
	                this.state = 43;
	                this.subscriptMappingList();
	            }

	            break;

	        case 2:
	            this.state = 46;
	            this.match(ModelParser.Id);
	            this.state = 47;
	            this.match(ModelParser.T__1);
	            this.state = 48;
	            this.match(ModelParser.Id);
	            break;

	        }
	        this.state = 51;
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



	subscriptSequence() {
	    let localctx = new SubscriptSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ModelParser.RULE_subscriptSequence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(ModelParser.T__3);
	        this.state = 54;
	        this.match(ModelParser.Id);
	        this.state = 55;
	        this.match(ModelParser.Minus);
	        this.state = 56;
	        this.match(ModelParser.Id);
	        this.state = 57;
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



	subscriptMappingList() {
	    let localctx = new SubscriptMappingListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ModelParser.RULE_subscriptMappingList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(ModelParser.T__5);
	        this.state = 60;
	        this.subscriptMapping();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__6) {
	            this.state = 61;
	            this.match(ModelParser.T__6);
	            this.state = 62;
	            this.subscriptMapping();
	            this.state = 67;
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ModelParser.Id:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.match(ModelParser.Id);
	            break;
	        case ModelParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.match(ModelParser.T__3);
	            this.state = 70;
	            this.match(ModelParser.Id);
	            this.state = 71;
	            this.match(ModelParser.T__0);
	            this.state = 72;
	            this.subscriptList();
	            this.state = 73;
	            this.match(ModelParser.T__4);
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
	        this.state = 77;
	        this.lhs();
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case ModelParser.T__7:
	        case ModelParser.Equal:
	        case ModelParser.TwoEqual:
	        	this.state = 78;
	        	_la = this._input.LA(1);
	        	if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__7) | (1 << ModelParser.Equal) | (1 << ModelParser.TwoEqual))) !== 0))) {
	        	this._errHandler.recoverInline(this);
	        	}
	        	else {
	        		this._errHandler.reportMatch(this);
	        	    this.consume();
	        	}
	        	this.state = 81;
	        	this._errHandler.sync(this);
	        	var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        	switch(la_) {
	        	case 1:
	        	    this.state = 79;
	        	    this.expr(0);
	        	    break;

	        	case 2:
	        	    this.state = 80;
	        	    this.constList();
	        	    break;

	        	}
	        	break;
	        case ModelParser.T__3:
	        	this.state = 83;
	        	this.lookup();
	        	break;
	        case ModelParser.T__2:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 86;
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



	lhs() {
	    let localctx = new LhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ModelParser.RULE_lhs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(ModelParser.Id);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__8) {
	            this.state = 89;
	            this.match(ModelParser.T__8);
	            this.state = 90;
	            this.subscriptList();
	            this.state = 91;
	            this.match(ModelParser.T__9);
	        }

	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__10) {
	            this.state = 95;
	            this.match(ModelParser.T__10);
	        }

	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__11) {
	            this.state = 98;
	            this.match(ModelParser.T__11);
	            this.state = 99;
	            this.match(ModelParser.T__8);
	            this.state = 100;
	            this.subscriptList();
	            this.state = 101;
	            this.match(ModelParser.T__9);
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ModelParser.T__6) {
	                this.state = 102;
	                this.match(ModelParser.T__6);
	                this.state = 103;
	                this.match(ModelParser.T__8);
	                this.state = 104;
	                this.subscriptList();
	                this.state = 105;
	                this.match(ModelParser.T__9);
	                this.state = 111;
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
	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 115;
	            this.match(ModelParser.Id);
	            this.state = 116;
	            this.match(ModelParser.T__3);
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__3) | (1 << ModelParser.T__12) | (1 << ModelParser.Plus) | (1 << ModelParser.Minus))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ModelParser.Id - 33)) | (1 << (ModelParser.Const - 33)) | (1 << (ModelParser.Keyword - 33)))) !== 0)) {
	                this.state = 117;
	                this.exprList();
	            }

	            this.state = 120;
	            this.match(ModelParser.T__4);
	            break;

	        case 2:
	            localctx = new LookupCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 121;
	            this.match(ModelParser.Id);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ModelParser.T__8) {
	                this.state = 122;
	                this.match(ModelParser.T__8);
	                this.state = 123;
	                this.subscriptList();
	                this.state = 124;
	                this.match(ModelParser.T__9);
	            }

	            this.state = 128;
	            this.match(ModelParser.T__3);
	            this.state = 129;
	            this.expr(0);
	            this.state = 130;
	            this.match(ModelParser.T__4);
	            break;

	        case 3:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 132;
	            this.match(ModelParser.T__12);
	            this.state = 133;
	            this.expr(15);
	            break;

	        case 4:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 134;
	            this.match(ModelParser.Minus);
	            this.state = 135;
	            this.expr(14);
	            break;

	        case 5:
	            localctx = new PositiveContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 136;
	            this.match(ModelParser.Plus);
	            this.state = 137;
	            this.expr(13);
	            break;

	        case 6:
	            localctx = new VarContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 138;
	            this.match(ModelParser.Id);
	            this.state = 143;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            if(la_===1) {
	                this.state = 139;
	                this.match(ModelParser.T__8);
	                this.state = 140;
	                this.subscriptList();
	                this.state = 141;
	                this.match(ModelParser.T__9);

	            }
	            break;

	        case 7:
	            localctx = new ConstContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 145;
	            this.match(ModelParser.Const);
	            break;

	        case 8:
	            localctx = new KeywordContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 146;
	            this.match(ModelParser.Keyword);
	            break;

	        case 9:
	            localctx = new LookupArgContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 147;
	            this.lookup();
	            break;

	        case 10:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 148;
	            this.match(ModelParser.T__3);
	            this.state = 149;
	            this.expr(0);
	            this.state = 150;
	            this.match(ModelParser.T__4);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 177;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 175;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 154;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 155;
	                    this.match(ModelParser.T__13);
	                    this.state = 156;
	                    this.expr(13);
	                    break;

	                case 2:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 157;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 158;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Star || _la===ModelParser.Div)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 159;
	                    this.expr(12);
	                    break;

	                case 3:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 160;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 161;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Plus || _la===ModelParser.Minus)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 162;
	                    this.expr(11);
	                    break;

	                case 4:
	                    localctx = new RelationalContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 164;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.Less) | (1 << ModelParser.LessEqual) | (1 << ModelParser.Greater) | (1 << ModelParser.GreaterEqual))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 165;
	                    this.expr(10);
	                    break;

	                case 5:
	                    localctx = new EqualityContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 166;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 167;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===ModelParser.Equal || _la===ModelParser.NotEqual)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 168;
	                    this.expr(9);
	                    break;

	                case 6:
	                    localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 169;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 170;
	                    this.match(ModelParser.T__14);
	                    this.state = 171;
	                    this.expr(8);
	                    break;

	                case 7:
	                    localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 172;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 173;
	                    this.match(ModelParser.T__15);
	                    this.state = 174;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 179;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
	        this.state = 180;
	        this.expr(0);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__6) {
	            this.state = 181;
	            this.match(ModelParser.T__6);
	            this.state = 182;
	            this.expr(0);
	            this.state = 187;
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
	        this.state = 188;
	        this.match(ModelParser.Id);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__6) {
	            this.state = 189;
	            this.match(ModelParser.T__6);
	            this.state = 190;
	            this.match(ModelParser.Id);
	            this.state = 195;
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
	        this.state = 196;
	        this.match(ModelParser.T__3);
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ModelParser.T__8) {
	            this.state = 197;
	            this.lookupRange();
	        }

	        this.state = 200;
	        this.lookupPointList();
	        this.state = 201;
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



	lookupRange() {
	    let localctx = new LookupRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ModelParser.RULE_lookupRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(ModelParser.T__8);
	        this.state = 204;
	        this.lookupPoint();
	        this.state = 205;
	        this.match(ModelParser.Minus);
	        this.state = 206;
	        this.lookupPoint();
	        this.state = 207;
	        this.match(ModelParser.T__9);
	        this.state = 208;
	        this.match(ModelParser.T__6);
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
	        this.state = 210;
	        this.lookupPoint();
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModelParser.T__6) {
	            this.state = 211;
	            this.match(ModelParser.T__6);
	            this.state = 212;
	            this.lookupPoint();
	            this.state = 217;
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
	        this.state = 218;
	        this.match(ModelParser.T__3);
	        this.state = 219;
	        this.expr(0);
	        this.state = 220;
	        this.match(ModelParser.T__6);
	        this.state = 221;
	        this.expr(0);
	        this.state = 222;
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



	constList() {
	    let localctx = new ConstListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ModelParser.RULE_constList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 224;
	            this.expr(0);
	            this.state = 227; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 225;
	                this.match(ModelParser.T__6);
	                this.state = 226;
	                this.expr(0);
	                this.state = 229; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===ModelParser.T__6);
	            break;

	        case 2:
	            this.state = 240; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 231;
	                this.expr(0);
	                this.state = 234; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 232;
	                    this.match(ModelParser.T__6);
	                    this.state = 233;
	                    this.expr(0);
	                    this.state = 236; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===ModelParser.T__6);
	                this.state = 238;
	                this.match(ModelParser.T__16);
	                this.state = 242; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModelParser.T__3) | (1 << ModelParser.T__12) | (1 << ModelParser.Plus) | (1 << ModelParser.Minus))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ModelParser.Id - 33)) | (1 << (ModelParser.Const - 33)) | (1 << (ModelParser.Keyword - 33)))) !== 0));
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
ModelParser.Encoding = 18;
ModelParser.Group = 19;
ModelParser.UnitsDoc = 20;
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
