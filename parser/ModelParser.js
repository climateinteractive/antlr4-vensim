// Generated from grammar/Model.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import ModelVisitor from './ModelVisitor.js';

const serializedATN = [4,1,38,250,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,4,0,33,8,0,11,0,12,0,34,1,1,1,1,1,1,1,1,1,1,
3,1,42,8,1,1,1,3,1,45,8,1,1,1,1,1,1,1,3,1,50,8,1,1,1,1,1,1,2,1,2,1,2,1,2,
5,2,58,8,2,10,2,12,2,61,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,70,8,3,1,4,1,
4,1,4,1,4,3,4,76,8,4,1,4,3,4,79,8,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,3,5,88,8,
5,1,5,3,5,91,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,102,8,5,10,5,12,
5,105,9,5,3,5,107,8,5,1,6,1,6,1,6,1,6,3,6,113,8,6,1,6,1,6,1,6,1,6,1,6,1,
6,3,6,121,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,3,6,138,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,147,8,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,170,
8,6,10,6,12,6,173,9,6,1,7,1,7,1,7,5,7,178,8,7,10,7,12,7,181,9,7,1,8,1,8,
1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,193,8,9,5,9,195,8,9,10,9,12,9,198,9,
9,1,10,1,10,3,10,202,8,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,12,1,12,1,12,5,12,217,8,12,10,12,12,12,220,9,12,1,13,1,13,1,13,1,13,
1,13,1,13,1,14,1,14,1,14,4,14,231,8,14,11,14,12,14,232,1,14,1,14,1,14,4,
14,238,8,14,11,14,12,14,239,1,14,1,14,4,14,244,8,14,11,14,12,14,245,3,14,
248,8,14,1,14,0,1,12,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,5,2,0,
8,8,29,30,1,0,21,22,1,0,23,24,1,0,25,28,2,0,29,29,31,31,277,0,32,1,0,0,0,
2,49,1,0,0,0,4,53,1,0,0,0,6,69,1,0,0,0,8,71,1,0,0,0,10,82,1,0,0,0,12,146,
1,0,0,0,14,174,1,0,0,0,16,182,1,0,0,0,18,188,1,0,0,0,20,199,1,0,0,0,22,206,
1,0,0,0,24,213,1,0,0,0,26,221,1,0,0,0,28,247,1,0,0,0,30,33,3,2,1,0,31,33,
3,8,4,0,32,30,1,0,0,0,32,31,1,0,0,0,33,34,1,0,0,0,34,32,1,0,0,0,34,35,1,
0,0,0,35,1,1,0,0,0,36,37,5,33,0,0,37,41,5,1,0,0,38,42,3,18,9,0,39,42,3,16,
8,0,40,42,3,12,6,0,41,38,1,0,0,0,41,39,1,0,0,0,41,40,1,0,0,0,42,44,1,0,0,
0,43,45,3,4,2,0,44,43,1,0,0,0,44,45,1,0,0,0,45,50,1,0,0,0,46,47,5,33,0,0,
47,48,5,2,0,0,48,50,5,33,0,0,49,36,1,0,0,0,49,46,1,0,0,0,50,51,1,0,0,0,51,
52,5,3,0,0,52,3,1,0,0,0,53,54,5,4,0,0,54,59,3,6,3,0,55,56,5,5,0,0,56,58,
3,6,3,0,57,55,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,5,1,0,
0,0,61,59,1,0,0,0,62,70,5,33,0,0,63,64,5,6,0,0,64,65,5,33,0,0,65,66,5,1,
0,0,66,67,3,18,9,0,67,68,5,7,0,0,68,70,1,0,0,0,69,62,1,0,0,0,69,63,1,0,0,
0,70,7,1,0,0,0,71,78,3,10,5,0,72,75,7,0,0,0,73,76,3,12,6,0,74,76,3,28,14,
0,75,73,1,0,0,0,75,74,1,0,0,0,76,79,1,0,0,0,77,79,3,20,10,0,78,72,1,0,0,
0,78,77,1,0,0,0,78,79,1,0,0,0,79,80,1,0,0,0,80,81,5,3,0,0,81,9,1,0,0,0,82,
87,5,33,0,0,83,84,5,9,0,0,84,85,3,18,9,0,85,86,5,10,0,0,86,88,1,0,0,0,87,
83,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,91,5,11,0,0,90,89,1,0,0,0,90,91,
1,0,0,0,91,106,1,0,0,0,92,93,5,12,0,0,93,94,5,9,0,0,94,95,3,18,9,0,95,103,
5,10,0,0,96,97,5,5,0,0,97,98,5,9,0,0,98,99,3,18,9,0,99,100,5,10,0,0,100,
102,1,0,0,0,101,96,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,
0,104,107,1,0,0,0,105,103,1,0,0,0,106,92,1,0,0,0,106,107,1,0,0,0,107,11,
1,0,0,0,108,109,6,6,-1,0,109,110,5,33,0,0,110,112,5,6,0,0,111,113,3,14,7,
0,112,111,1,0,0,0,112,113,1,0,0,0,113,114,1,0,0,0,114,147,5,7,0,0,115,120,
5,33,0,0,116,117,5,9,0,0,117,118,3,18,9,0,118,119,5,10,0,0,119,121,1,0,0,
0,120,116,1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,123,5,6,0,0,123,124,
3,12,6,0,124,125,5,7,0,0,125,147,1,0,0,0,126,127,5,13,0,0,127,147,3,12,6,
15,128,129,5,24,0,0,129,147,3,12,6,14,130,131,5,23,0,0,131,147,3,12,6,13,
132,137,5,33,0,0,133,134,5,9,0,0,134,135,3,18,9,0,135,136,5,10,0,0,136,138,
1,0,0,0,137,133,1,0,0,0,137,138,1,0,0,0,138,147,1,0,0,0,139,147,5,34,0,0,
140,147,5,37,0,0,141,147,3,20,10,0,142,143,5,6,0,0,143,144,3,12,6,0,144,
145,5,7,0,0,145,147,1,0,0,0,146,108,1,0,0,0,146,115,1,0,0,0,146,126,1,0,
0,0,146,128,1,0,0,0,146,130,1,0,0,0,146,132,1,0,0,0,146,139,1,0,0,0,146,
140,1,0,0,0,146,141,1,0,0,0,146,142,1,0,0,0,147,171,1,0,0,0,148,149,10,12,
0,0,149,150,5,14,0,0,150,170,3,12,6,13,151,152,10,11,0,0,152,153,7,1,0,0,
153,170,3,12,6,12,154,155,10,10,0,0,155,156,7,2,0,0,156,170,3,12,6,11,157,
158,10,9,0,0,158,159,7,3,0,0,159,170,3,12,6,10,160,161,10,8,0,0,161,162,
7,4,0,0,162,170,3,12,6,9,163,164,10,7,0,0,164,165,5,15,0,0,165,170,3,12,
6,8,166,167,10,6,0,0,167,168,5,16,0,0,168,170,3,12,6,7,169,148,1,0,0,0,169,
151,1,0,0,0,169,154,1,0,0,0,169,157,1,0,0,0,169,160,1,0,0,0,169,163,1,0,
0,0,169,166,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,
13,1,0,0,0,173,171,1,0,0,0,174,179,3,12,6,0,175,176,5,5,0,0,176,178,3,12,
6,0,177,175,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,
15,1,0,0,0,181,179,1,0,0,0,182,183,5,6,0,0,183,184,5,33,0,0,184,185,5,24,
0,0,185,186,5,33,0,0,186,187,5,7,0,0,187,17,1,0,0,0,188,196,5,33,0,0,189,
192,5,5,0,0,190,193,5,33,0,0,191,193,3,16,8,0,192,190,1,0,0,0,192,191,1,
0,0,0,193,195,1,0,0,0,194,189,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,
197,1,0,0,0,197,19,1,0,0,0,198,196,1,0,0,0,199,201,5,6,0,0,200,202,3,22,
11,0,201,200,1,0,0,0,201,202,1,0,0,0,202,203,1,0,0,0,203,204,3,24,12,0,204,
205,5,7,0,0,205,21,1,0,0,0,206,207,5,9,0,0,207,208,3,26,13,0,208,209,5,24,
0,0,209,210,3,26,13,0,210,211,5,10,0,0,211,212,5,5,0,0,212,23,1,0,0,0,213,
218,3,26,13,0,214,215,5,5,0,0,215,217,3,26,13,0,216,214,1,0,0,0,217,220,
1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,25,1,0,0,0,220,218,1,0,0,0,221,
222,5,6,0,0,222,223,3,12,6,0,223,224,5,5,0,0,224,225,3,12,6,0,225,226,5,
7,0,0,226,27,1,0,0,0,227,230,3,12,6,0,228,229,5,5,0,0,229,231,3,12,6,0,230,
228,1,0,0,0,231,232,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,248,1,0,
0,0,234,237,3,12,6,0,235,236,5,5,0,0,236,238,3,12,6,0,237,235,1,0,0,0,238,
239,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,241,1,0,0,0,241,242,5,17,
0,0,242,244,1,0,0,0,243,234,1,0,0,0,244,245,1,0,0,0,245,243,1,0,0,0,245,
246,1,0,0,0,246,248,1,0,0,0,247,227,1,0,0,0,247,243,1,0,0,0,248,29,1,0,0,
0,28,32,34,41,44,49,59,69,75,78,87,90,103,106,112,120,137,146,169,171,179,
192,196,201,218,232,239,245,247];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ModelParser extends antlr4.Parser {

    static grammarFileName = "Model.g4";
    static literalNames = [ null, "':'", "'<->'", "'|'", "'->'", "','", 
                            "'('", "')'", "':='", "'['", "']'", "':INTERPOLATE:'", 
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
    static ruleNames = [ "model", "subscriptRange", "subscriptMappingList", 
                         "subscriptMapping", "equation", "lhs", "expr", 
                         "exprList", "subscriptSequence", "subscriptList", 
                         "lookup", "lookupRange", "lookupPointList", "lookupPoint", 
                         "constList" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ModelParser.ruleNames;
        this.literalNames = ModelParser.literalNames;
        this.symbolicNames = ModelParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
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
	    var _la = 0;
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
	        } while(_la===33);
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
	    var _la = 0;
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
	            if(_la===4) {
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



	subscriptMappingList() {
	    let localctx = new SubscriptMappingListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ModelParser.RULE_subscriptMappingList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(ModelParser.T__3);
	        this.state = 54;
	        this.subscriptMapping();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 55;
	            this.match(ModelParser.T__4);
	            this.state = 56;
	            this.subscriptMapping();
	            this.state = 61;
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
	    this.enterRule(localctx, 6, ModelParser.RULE_subscriptMapping);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.match(ModelParser.Id);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.match(ModelParser.T__5);
	            this.state = 64;
	            this.match(ModelParser.Id);
	            this.state = 65;
	            this.match(ModelParser.T__0);
	            this.state = 66;
	            this.subscriptList();
	            this.state = 67;
	            this.match(ModelParser.T__6);
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
	    this.enterRule(localctx, 8, ModelParser.RULE_equation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.lhs();
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 8:
	        case 29:
	        case 30:
	        	this.state = 72;
	        	_la = this._input.LA(1);
	        	if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610612992) !== 0))) {
	        	this._errHandler.recoverInline(this);
	        	}
	        	else {
	        		this._errHandler.reportMatch(this);
	        	    this.consume();
	        	}
	        	this.state = 75;
	        	this._errHandler.sync(this);
	        	var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        	switch(la_) {
	        	case 1:
	        	    this.state = 73;
	        	    this.expr(0);
	        	    break;

	        	case 2:
	        	    this.state = 74;
	        	    this.constList();
	        	    break;

	        	}
	        	break;
	        case 6:
	        	this.state = 77;
	        	this.lookup();
	        	break;
	        case 3:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 80;
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
	    this.enterRule(localctx, 10, ModelParser.RULE_lhs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(ModelParser.Id);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 83;
	            this.match(ModelParser.T__8);
	            this.state = 84;
	            this.subscriptList();
	            this.state = 85;
	            this.match(ModelParser.T__9);
	        }

	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 89;
	            this.match(ModelParser.T__10);
	        }

	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 92;
	            this.match(ModelParser.T__11);
	            this.state = 93;
	            this.match(ModelParser.T__8);
	            this.state = 94;
	            this.subscriptList();
	            this.state = 95;
	            this.match(ModelParser.T__9);
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 96;
	                this.match(ModelParser.T__4);
	                this.state = 97;
	                this.match(ModelParser.T__8);
	                this.state = 98;
	                this.subscriptList();
	                this.state = 99;
	                this.match(ModelParser.T__9);
	                this.state = 105;
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
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, ModelParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 109;
	            this.match(ModelParser.Id);
	            this.state = 110;
	            this.match(ModelParser.T__5);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 2550530177) !== 0)) {
	                this.state = 111;
	                this.exprList();
	            }

	            this.state = 114;
	            this.match(ModelParser.T__6);
	            break;

	        case 2:
	            localctx = new LookupCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 115;
	            this.match(ModelParser.Id);
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 116;
	                this.match(ModelParser.T__8);
	                this.state = 117;
	                this.subscriptList();
	                this.state = 118;
	                this.match(ModelParser.T__9);
	            }

	            this.state = 122;
	            this.match(ModelParser.T__5);
	            this.state = 123;
	            this.expr(0);
	            this.state = 124;
	            this.match(ModelParser.T__6);
	            break;

	        case 3:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 126;
	            this.match(ModelParser.T__12);
	            this.state = 127;
	            this.expr(15);
	            break;

	        case 4:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 128;
	            this.match(ModelParser.Minus);
	            this.state = 129;
	            this.expr(14);
	            break;

	        case 5:
	            localctx = new PositiveContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 130;
	            this.match(ModelParser.Plus);
	            this.state = 131;
	            this.expr(13);
	            break;

	        case 6:
	            localctx = new VarContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 132;
	            this.match(ModelParser.Id);
	            this.state = 137;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            if(la_===1) {
	                this.state = 133;
	                this.match(ModelParser.T__8);
	                this.state = 134;
	                this.subscriptList();
	                this.state = 135;
	                this.match(ModelParser.T__9);

	            }
	            break;

	        case 7:
	            localctx = new ConstContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 139;
	            this.match(ModelParser.Const);
	            break;

	        case 8:
	            localctx = new KeywordContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 140;
	            this.match(ModelParser.Keyword);
	            break;

	        case 9:
	            localctx = new LookupArgContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 141;
	            this.lookup();
	            break;

	        case 10:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 142;
	            this.match(ModelParser.T__5);
	            this.state = 143;
	            this.expr(0);
	            this.state = 144;
	            this.match(ModelParser.T__6);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 171;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 169;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 148;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 149;
	                    this.match(ModelParser.T__13);
	                    this.state = 150;
	                    this.expr(13);
	                    break;

	                case 2:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 151;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 152;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 153;
	                    this.expr(12);
	                    break;

	                case 3:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 154;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 155;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===23 || _la===24)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 156;
	                    this.expr(11);
	                    break;

	                case 4:
	                    localctx = new RelationalContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 157;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 158;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 503316480) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 159;
	                    this.expr(10);
	                    break;

	                case 5:
	                    localctx = new EqualityContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 160;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 161;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===29 || _la===31)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 162;
	                    this.expr(9);
	                    break;

	                case 6:
	                    localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 164;
	                    this.match(ModelParser.T__14);
	                    this.state = 165;
	                    this.expr(8);
	                    break;

	                case 7:
	                    localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ModelParser.RULE_expr);
	                    this.state = 166;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 167;
	                    this.match(ModelParser.T__15);
	                    this.state = 168;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 173;
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
	    this.enterRule(localctx, 14, ModelParser.RULE_exprList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.expr(0);
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 175;
	            this.match(ModelParser.T__4);
	            this.state = 176;
	            this.expr(0);
	            this.state = 181;
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
	    this.enterRule(localctx, 16, ModelParser.RULE_subscriptSequence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(ModelParser.T__5);
	        this.state = 183;
	        this.match(ModelParser.Id);
	        this.state = 184;
	        this.match(ModelParser.Minus);
	        this.state = 185;
	        this.match(ModelParser.Id);
	        this.state = 186;
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



	subscriptList() {
	    let localctx = new SubscriptListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ModelParser.RULE_subscriptList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(ModelParser.Id);
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 189;
	            this.match(ModelParser.T__4);
	            this.state = 192;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 33:
	                this.state = 190;
	                this.match(ModelParser.Id);
	                break;
	            case 6:
	                this.state = 191;
	                this.subscriptSequence();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 198;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(ModelParser.T__5);
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 200;
	            this.lookupRange();
	        }

	        this.state = 203;
	        this.lookupPointList();
	        this.state = 204;
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



	lookupRange() {
	    let localctx = new LookupRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ModelParser.RULE_lookupRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(ModelParser.T__8);
	        this.state = 207;
	        this.lookupPoint();
	        this.state = 208;
	        this.match(ModelParser.Minus);
	        this.state = 209;
	        this.lookupPoint();
	        this.state = 210;
	        this.match(ModelParser.T__9);
	        this.state = 211;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.lookupPoint();
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 214;
	            this.match(ModelParser.T__4);
	            this.state = 215;
	            this.lookupPoint();
	            this.state = 220;
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
	        this.state = 221;
	        this.match(ModelParser.T__5);
	        this.state = 222;
	        this.expr(0);
	        this.state = 223;
	        this.match(ModelParser.T__4);
	        this.state = 224;
	        this.expr(0);
	        this.state = 225;
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



	constList() {
	    let localctx = new ConstListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ModelParser.RULE_constList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 227;
	            this.expr(0);
	            this.state = 230; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 228;
	                this.match(ModelParser.T__4);
	                this.state = 229;
	                this.expr(0);
	                this.state = 232; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===5);
	            break;

	        case 2:
	            this.state = 243; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 234;
	                this.expr(0);
	                this.state = 237; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 235;
	                    this.match(ModelParser.T__4);
	                    this.state = 236;
	                    this.expr(0);
	                    this.state = 239; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===5);
	                this.state = 241;
	                this.match(ModelParser.T__16);
	                this.state = 245; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 2550530177) !== 0));
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
ModelParser.RULE_subscriptMappingList = 2;
ModelParser.RULE_subscriptMapping = 3;
ModelParser.RULE_equation = 4;
ModelParser.RULE_lhs = 5;
ModelParser.RULE_expr = 6;
ModelParser.RULE_exprList = 7;
ModelParser.RULE_subscriptSequence = 8;
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
        this.op = null;;
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
        this.op = null;;
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
        this.op = null;;
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
        this.op = null;;
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


	subscriptSequence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubscriptSequenceContext);
	    } else {
	        return this.getTypedRuleContext(SubscriptSequenceContext,i);
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
ModelParser.SubscriptMappingListContext = SubscriptMappingListContext; 
ModelParser.SubscriptMappingContext = SubscriptMappingContext; 
ModelParser.EquationContext = EquationContext; 
ModelParser.LhsContext = LhsContext; 
ModelParser.ExprContext = ExprContext; 
ModelParser.ExprListContext = ExprListContext; 
ModelParser.SubscriptSequenceContext = SubscriptSequenceContext; 
ModelParser.SubscriptListContext = SubscriptListContext; 
ModelParser.LookupContext = LookupContext; 
ModelParser.LookupRangeContext = LookupRangeContext; 
ModelParser.LookupPointListContext = LookupPointListContext; 
ModelParser.LookupPointContext = LookupPointContext; 
ModelParser.ConstListContext = ConstListContext; 
