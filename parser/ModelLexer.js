// Generated from grammar/Model.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002%\u015c\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0006",
    "\u0010\u0096\n\u0010\r\u0010\u000e\u0010\u0097\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0007\u0011\u00a0\n",
    "\u0011\f\u0011\u000e\u0011\u00a3\u000b\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u00af\n\u0012\f\u0012\u000e\u0012",
    "\u00b2\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007",
    "\u0013\u00ca\n\u0013\f\u0013\u000e\u0013\u00cd\u000b\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 ",
    "\u0003 \u0007 \u00ef\n \f \u000e \u00f2\u000b \u0003 \u0003 \u0003 ",
    "\u0007 \u00f7\n \f \u000e \u00fa\u000b \u0003 \u0003 \u0003 \u0005 ",
    "\u00ff\n \u0003 \u0007 \u0102\n \f \u000e \u0105\u000b \u0003 \u0005",
    " \u0108\n \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003",
    "$\u0005$\u0112\n$\u0003%\u0006%\u0115\n%\r%\u000e%\u0116\u0003&\u0003",
    "&\u0003\'\u0003\'\u0005\'\u011d\n\'\u0003\'\u0003\'\u0003\'\u0005\'",
    "\u0122\n\'\u0003(\u0005(\u0125\n(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0005(\u012c\n(\u0003)\u0003)\u0005)\u0130\n)\u0003)\u0003)\u0003",
    ")\u0005)\u0135\n)\u0003)\u0005)\u0138\n)\u0003*\u0003*\u0003+\u0006",
    "+\u013d\n+\r+\u000e+\u013e\u0003,\u0003,\u0005,\u0143\n,\u0003,\u0003",
    ",\u0003-\u0006-\u0148\n-\r-\u000e-\u0149\u0003.\u0003.\u0003/\u0003",
    "/\u0003/\u00030\u00030\u00030\u00030\u00030\u00031\u00061\u0157\n1\r",
    "1\u000e1\u0158\u00031\u00031\u0004\u00a1\u00b0\u00022\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012",
    "#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c",
    "7\u001d9\u001e;\u001f= ?!A\u0002C\u0002E\u0002G\"I\u0002K\u0002M\u0002",
    "O\u0002Q\u0002S\u0002U\u0002W#Y\u0002[\u0002]\u0002_$a%\u0003\u0002",
    "\u000b\u0006\u0002//2;C\\c|\b\u0002&&))2;C\\aac|\u0005\u0002C\\aac|",
    "\u0003\u00022;\u0003\u00023;\u0004\u0002--//\u0006\u0002\f\f\u000f\u000f",
    "$$^^\f\u0002$$))AA^^cdhhppttvvxx\u0005\u0002\u000b\f\u000f\u000f\"\"",
    "\u0002\u0166\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002",
    "\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002",
    "\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002",
    "/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003",
    "\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002",
    "\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002",
    "\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002",
    "\u0002G\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002",
    "_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0003c\u0003",
    "\u0002\u0002\u0002\u0005e\u0003\u0002\u0002\u0002\u0007g\u0003\u0002",
    "\u0002\u0002\ti\u0003\u0002\u0002\u0002\u000bl\u0003\u0002\u0002\u0002",
    "\ro\u0003\u0002\u0002\u0002\u000fq\u0003\u0002\u0002\u0002\u0011s\u0003",
    "\u0002\u0002\u0002\u0013|\u0003\u0002\u0002\u0002\u0015\u0082\u0003",
    "\u0002\u0002\u0002\u0017\u0084\u0003\u0002\u0002\u0002\u0019\u008a\u0003",
    "\u0002\u0002\u0002\u001b\u008f\u0003\u0002\u0002\u0002\u001d\u0091\u0003",
    "\u0002\u0002\u0002\u001f\u0093\u0003\u0002\u0002\u0002!\u009d\u0003",
    "\u0002\u0002\u0002#\u00a8\u0003\u0002\u0002\u0002%\u00b7\u0003\u0002",
    "\u0002\u0002\'\u00d0\u0003\u0002\u0002\u0002)\u00d2\u0003\u0002\u0002",
    "\u0002+\u00d4\u0003\u0002\u0002\u0002-\u00d6\u0003\u0002\u0002\u0002",
    "/\u00d8\u0003\u0002\u0002\u00021\u00da\u0003\u0002\u0002\u00023\u00dd",
    "\u0003\u0002\u0002\u00025\u00df\u0003\u0002\u0002\u00027\u00e2\u0003",
    "\u0002\u0002\u00029\u00e4\u0003\u0002\u0002\u0002;\u00e7\u0003\u0002",
    "\u0002\u0002=\u00ea\u0003\u0002\u0002\u0002?\u00fe\u0003\u0002\u0002",
    "\u0002A\u0109\u0003\u0002\u0002\u0002C\u010b\u0003\u0002\u0002\u0002",
    "E\u010d\u0003\u0002\u0002\u0002G\u0111\u0003\u0002\u0002\u0002I\u0114",
    "\u0003\u0002\u0002\u0002K\u0118\u0003\u0002\u0002\u0002M\u0121\u0003",
    "\u0002\u0002\u0002O\u012b\u0003\u0002\u0002\u0002Q\u0137\u0003\u0002",
    "\u0002\u0002S\u0139\u0003\u0002\u0002\u0002U\u013c\u0003\u0002\u0002",
    "\u0002W\u0140\u0003\u0002\u0002\u0002Y\u0147\u0003\u0002\u0002\u0002",
    "[\u014b\u0003\u0002\u0002\u0002]\u014d\u0003\u0002\u0002\u0002_\u0150",
    "\u0003\u0002\u0002\u0002a\u0156\u0003\u0002\u0002\u0002cd\u0007<\u0002",
    "\u0002d\u0004\u0003\u0002\u0002\u0002ef\u0007*\u0002\u0002f\u0006\u0003",
    "\u0002\u0002\u0002gh\u0007+\u0002\u0002h\b\u0003\u0002\u0002\u0002i",
    "j\u0007/\u0002\u0002jk\u0007@\u0002\u0002k\n\u0003\u0002\u0002\u0002",
    "lm\u0007<\u0002\u0002mn\u0007?\u0002\u0002n\f\u0003\u0002\u0002\u0002",
    "op\u0007]\u0002\u0002p\u000e\u0003\u0002\u0002\u0002qr\u0007_\u0002",
    "\u0002r\u0010\u0003\u0002\u0002\u0002st\u0007<\u0002\u0002tu\u0007G",
    "\u0002\u0002uv\u0007Z\u0002\u0002vw\u0007E\u0002\u0002wx\u0007G\u0002",
    "\u0002xy\u0007R\u0002\u0002yz\u0007V\u0002\u0002z{\u0007<\u0002\u0002",
    "{\u0012\u0003\u0002\u0002\u0002|}\u0007<\u0002\u0002}~\u0007P\u0002",
    "\u0002~\u007f\u0007Q\u0002\u0002\u007f\u0080\u0007V\u0002\u0002\u0080",
    "\u0081\u0007<\u0002\u0002\u0081\u0014\u0003\u0002\u0002\u0002\u0082",
    "\u0083\u0007`\u0002\u0002\u0083\u0016\u0003\u0002\u0002\u0002\u0084",
    "\u0085\u0007<\u0002\u0002\u0085\u0086\u0007C\u0002\u0002\u0086\u0087",
    "\u0007P\u0002\u0002\u0087\u0088\u0007F\u0002\u0002\u0088\u0089\u0007",
    "<\u0002\u0002\u0089\u0018\u0003\u0002\u0002\u0002\u008a\u008b\u0007",
    "<\u0002\u0002\u008b\u008c\u0007Q\u0002\u0002\u008c\u008d\u0007T\u0002",
    "\u0002\u008d\u008e\u0007<\u0002\u0002\u008e\u001a\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0007.\u0002\u0002\u0090\u001c\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0007=\u0002\u0002\u0092\u001e\u0003\u0002\u0002",
    "\u0002\u0093\u0095\u0007}\u0002\u0002\u0094\u0096\t\u0002\u0002\u0002",
    "\u0095\u0094\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002",
    "\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0007\u007f\u0002\u0002",
    "\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009c\b\u0010\u0002\u0002",
    "\u009c \u0003\u0002\u0002\u0002\u009d\u00a1\u0007\u0080\u0002\u0002",
    "\u009e\u00a0\u000b\u0002\u0002\u0002\u009f\u009e\u0003\u0002\u0002\u0002",
    "\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002",
    "\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a4\u0003\u0002\u0002\u0002",
    "\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007~\u0002\u0002",
    "\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7\b\u0011\u0002\u0002",
    "\u00a7\"\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007,\u0002\u0002\u00a9",
    "\u00aa\u0007,\u0002\u0002\u00aa\u00ab\u0007,\u0002\u0002\u00ab\u00ac",
    "\u0007,\u0002\u0002\u00ac\u00b0\u0003\u0002\u0002\u0002\u00ad\u00af",
    "\u000b\u0002\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b2",
    "\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b0\u00ae",
    "\u0003\u0002\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00b0",
    "\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007~\u0002\u0002\u00b4\u00b5",
    "\u0003\u0002\u0002\u0002\u00b5\u00b6\b\u0012\u0002\u0002\u00b6$\u0003",
    "\u0002\u0002\u0002\u00b7\u00b8\u0007^\u0002\u0002\u00b8\u00b9\u0007",
    "^\u0002\u0002\u00b9\u00ba\u0007^\u0002\u0002\u00ba\u00bb\u0007/\u0002",
    "\u0002\u00bb\u00bc\u0007/\u0002\u0002\u00bc\u00bd\u0007/\u0002\u0002",
    "\u00bd\u00be\u00071\u0002\u0002\u00be\u00bf\u00071\u0002\u0002\u00bf",
    "\u00c0\u00071\u0002\u0002\u00c0\u00c1\u0007\"\u0002\u0002\u00c1\u00c2",
    "\u0007U\u0002\u0002\u00c2\u00c3\u0007m\u0002\u0002\u00c3\u00c4\u0007",
    "g\u0002\u0002\u00c4\u00c5\u0007v\u0002\u0002\u00c5\u00c6\u0007e\u0002",
    "\u0002\u00c6\u00c7\u0007j\u0002\u0002\u00c7\u00cb\u0003\u0002\u0002",
    "\u0002\u00c8\u00ca\u000b\u0002\u0002\u0002\u00c9\u00c8\u0003\u0002\u0002",
    "\u0002\u00ca\u00cd\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00ce\u0003\u0002\u0002",
    "\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce\u00cf\b\u0013\u0002",
    "\u0002\u00cf&\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007,\u0002\u0002",
    "\u00d1(\u0003\u0002\u0002\u0002\u00d2\u00d3\u00071\u0002\u0002\u00d3",
    "*\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007-\u0002\u0002\u00d5,\u0003",
    "\u0002\u0002\u0002\u00d6\u00d7\u0007/\u0002\u0002\u00d7.\u0003\u0002",
    "\u0002\u0002\u00d8\u00d9\u0007>\u0002\u0002\u00d90\u0003\u0002\u0002",
    "\u0002\u00da\u00db\u0007>\u0002\u0002\u00db\u00dc\u0007?\u0002\u0002",
    "\u00dc2\u0003\u0002\u0002\u0002\u00dd\u00de\u0007@\u0002\u0002\u00de",
    "4\u0003\u0002\u0002\u0002\u00df\u00e0\u0007@\u0002\u0002\u00e0\u00e1",
    "\u0007?\u0002\u0002\u00e16\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007",
    "?\u0002\u0002\u00e38\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007?\u0002",
    "\u0002\u00e5\u00e6\u0007?\u0002\u0002\u00e6:\u0003\u0002\u0002\u0002",
    "\u00e7\u00e8\u0007>\u0002\u0002\u00e8\u00e9\u0007@\u0002\u0002\u00e9",
    "<\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007#\u0002\u0002\u00eb>\u0003",
    "\u0002\u0002\u0002\u00ec\u00f0\u0005C\"\u0002\u00ed\u00ef\u0005A!\u0002",
    "\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f2\u0003\u0002\u0002\u0002",
    "\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002",
    "\u00f1\u00ff\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002",
    "\u00f3\u00f8\u0005C\"\u0002\u00f4\u00f7\u0005A!\u0002\u00f5\u00f7\u0007",
    "\"\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f6\u00f5\u0003",
    "\u0002\u0002\u0002\u00f7\u00fa\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fb\u0003",
    "\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fb\u00fc\u0005",
    "A!\u0002\u00fc\u00ff\u0003\u0002\u0002\u0002\u00fd\u00ff\u0005W,\u0002",
    "\u00fe\u00ec\u0003\u0002\u0002\u0002\u00fe\u00f3\u0003\u0002\u0002\u0002",
    "\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff\u0107\u0003\u0002\u0002\u0002",
    "\u0100\u0102\u0005a1\u0002\u0101\u0100\u0003\u0002\u0002\u0002\u0102",
    "\u0105\u0003\u0002\u0002\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0103",
    "\u0104\u0003\u0002\u0002\u0002\u0104\u0106\u0003\u0002\u0002\u0002\u0105",
    "\u0103\u0003\u0002\u0002\u0002\u0106\u0108\u0005=\u001f\u0002\u0107",
    "\u0103\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108",
    "@\u0003\u0002\u0002\u0002\u0109\u010a\t\u0003\u0002\u0002\u010aB\u0003",
    "\u0002\u0002\u0002\u010b\u010c\t\u0004\u0002\u0002\u010cD\u0003\u0002",
    "\u0002\u0002\u010d\u010e\t\u0005\u0002\u0002\u010eF\u0003\u0002\u0002",
    "\u0002\u010f\u0112\u0005I%\u0002\u0110\u0112\u0005M\'\u0002\u0111\u010f",
    "\u0003\u0002\u0002\u0002\u0111\u0110\u0003\u0002\u0002\u0002\u0112H",
    "\u0003\u0002\u0002\u0002\u0113\u0115\u0005E#\u0002\u0114\u0113\u0003",
    "\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002\u0116\u0114\u0003",
    "\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117J\u0003",
    "\u0002\u0002\u0002\u0118\u0119\t\u0006\u0002\u0002\u0119L\u0003\u0002",
    "\u0002\u0002\u011a\u011c\u0005O(\u0002\u011b\u011d\u0005Q)\u0002\u011c",
    "\u011b\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d",
    "\u0122\u0003\u0002\u0002\u0002\u011e\u011f\u0005U+\u0002\u011f\u0120",
    "\u0005Q)\u0002\u0120\u0122\u0003\u0002\u0002\u0002\u0121\u011a\u0003",
    "\u0002\u0002\u0002\u0121\u011e\u0003\u0002\u0002\u0002\u0122N\u0003",
    "\u0002\u0002\u0002\u0123\u0125\u0005U+\u0002\u0124\u0123\u0003\u0002",
    "\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002",
    "\u0002\u0002\u0126\u0127\u00070\u0002\u0002\u0127\u012c\u0005U+\u0002",
    "\u0128\u0129\u0005U+\u0002\u0129\u012a\u00070\u0002\u0002\u012a\u012c",
    "\u0003\u0002\u0002\u0002\u012b\u0124\u0003\u0002\u0002\u0002\u012b\u0128",
    "\u0003\u0002\u0002\u0002\u012cP\u0003\u0002\u0002\u0002\u012d\u012f",
    "\u0007g\u0002\u0002\u012e\u0130\u0005S*\u0002\u012f\u012e\u0003\u0002",
    "\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002",
    "\u0002\u0002\u0131\u0138\u0005U+\u0002\u0132\u0134\u0007G\u0002\u0002",
    "\u0133\u0135\u0005S*\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0134",
    "\u0135\u0003\u0002\u0002\u0002\u0135\u0136\u0003\u0002\u0002\u0002\u0136",
    "\u0138\u0005U+\u0002\u0137\u012d\u0003\u0002\u0002\u0002\u0137\u0132",
    "\u0003\u0002\u0002\u0002\u0138R\u0003\u0002\u0002\u0002\u0139\u013a",
    "\t\u0007\u0002\u0002\u013aT\u0003\u0002\u0002\u0002\u013b\u013d\u0005",
    "E#\u0002\u013c\u013b\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002",
    "\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002",
    "\u0002\u0002\u013fV\u0003\u0002\u0002\u0002\u0140\u0142\u0007$\u0002",
    "\u0002\u0141\u0143\u0005Y-\u0002\u0142\u0141\u0003\u0002\u0002\u0002",
    "\u0142\u0143\u0003\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002",
    "\u0144\u0145\u0007$\u0002\u0002\u0145X\u0003\u0002\u0002\u0002\u0146",
    "\u0148\u0005[.\u0002\u0147\u0146\u0003\u0002\u0002\u0002\u0148\u0149",
    "\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002\u0002\u0149\u014a",
    "\u0003\u0002\u0002\u0002\u014aZ\u0003\u0002\u0002\u0002\u014b\u014c",
    "\n\b\u0002\u0002\u014c\\\u0003\u0002\u0002\u0002\u014d\u014e\u0007^",
    "\u0002\u0002\u014e\u014f\t\t\u0002\u0002\u014f^\u0003\u0002\u0002\u0002",
    "\u0150\u0151\u0007<\u0002\u0002\u0151\u0152\u0007P\u0002\u0002\u0152",
    "\u0153\u0007C\u0002\u0002\u0153\u0154\u0007<\u0002\u0002\u0154`\u0003",
    "\u0002\u0002\u0002\u0155\u0157\t\n\u0002\u0002\u0156\u0155\u0003\u0002",
    "\u0002\u0002\u0157\u0158\u0003\u0002\u0002\u0002\u0158\u0156\u0003\u0002",
    "\u0002\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002",
    "\u0002\u0002\u015a\u015b\b1\u0002\u0002\u015bb\u0003\u0002\u0002\u0002",
    "\u001a\u0002\u0097\u00a1\u00b0\u00cb\u00f0\u00f6\u00f8\u00fe\u0103\u0107",
    "\u0111\u0116\u011c\u0121\u0124\u012b\u012f\u0134\u0137\u013e\u0142\u0149",
    "\u0158\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ModelLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ModelLexer.prototype = Object.create(antlr4.Lexer.prototype);
ModelLexer.prototype.constructor = ModelLexer;

Object.defineProperty(ModelLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ModelLexer.EOF = antlr4.Token.EOF;
ModelLexer.T__0 = 1;
ModelLexer.T__1 = 2;
ModelLexer.T__2 = 3;
ModelLexer.T__3 = 4;
ModelLexer.T__4 = 5;
ModelLexer.T__5 = 6;
ModelLexer.T__6 = 7;
ModelLexer.T__7 = 8;
ModelLexer.T__8 = 9;
ModelLexer.T__9 = 10;
ModelLexer.T__10 = 11;
ModelLexer.T__11 = 12;
ModelLexer.T__12 = 13;
ModelLexer.T__13 = 14;
ModelLexer.Encoding = 15;
ModelLexer.UnitsDoc = 16;
ModelLexer.Group = 17;
ModelLexer.Sketch = 18;
ModelLexer.Star = 19;
ModelLexer.Div = 20;
ModelLexer.Plus = 21;
ModelLexer.Minus = 22;
ModelLexer.Less = 23;
ModelLexer.LessEqual = 24;
ModelLexer.Greater = 25;
ModelLexer.GreaterEqual = 26;
ModelLexer.Equal = 27;
ModelLexer.TwoEqual = 28;
ModelLexer.NotEqual = 29;
ModelLexer.Exclamation = 30;
ModelLexer.Id = 31;
ModelLexer.Const = 32;
ModelLexer.StringLiteral = 33;
ModelLexer.Keyword = 34;
ModelLexer.Whitespace = 35;

ModelLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ModelLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ModelLexer.prototype.literalNames = [ null, "':'", "'('", "')'", "'->'", 
                                      "':='", "'['", "']'", "':EXCEPT:'", 
                                      "':NOT:'", "'^'", "':AND:'", "':OR:'", 
                                      "','", "';'", null, null, null, null, 
                                      "'*'", "'/'", "'+'", "'-'", "'<'", 
                                      "'<='", "'>'", "'>='", "'='", "'=='", 
                                      "'<>'", "'!'", null, null, null, "':NA:'" ];

ModelLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                       null, null, null, null, null, null, 
                                       null, null, null, "Encoding", "UnitsDoc", 
                                       "Group", "Sketch", "Star", "Div", 
                                       "Plus", "Minus", "Less", "LessEqual", 
                                       "Greater", "GreaterEqual", "Equal", 
                                       "TwoEqual", "NotEqual", "Exclamation", 
                                       "Id", "Const", "StringLiteral", "Keyword", 
                                       "Whitespace" ];

ModelLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                   "T__5", "T__6", "T__7", "T__8", "T__9", 
                                   "T__10", "T__11", "T__12", "T__13", "Encoding", 
                                   "UnitsDoc", "Group", "Sketch", "Star", 
                                   "Div", "Plus", "Minus", "Less", "LessEqual", 
                                   "Greater", "GreaterEqual", "Equal", "TwoEqual", 
                                   "NotEqual", "Exclamation", "Id", "IdChar", 
                                   "Nondigit", "Digit", "Const", "IntegerConst", 
                                   "NonzeroDigit", "FloatingConst", "FractionalConstant", 
                                   "ExponentPart", "Sign", "DigitSeq", "StringLiteral", 
                                   "SCharSequence", "SChar", "EscapeSequence", 
                                   "Keyword", "Whitespace" ];

ModelLexer.prototype.grammarFileName = "Model.g4";



exports.ModelLexer = ModelLexer;

