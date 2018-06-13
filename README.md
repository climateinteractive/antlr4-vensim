# antlr4-vensim Vensim grammar in ANTLR 4

## Using the parser

Install the package with npm in your project.
~~~
npm install antlr4-vensim
~~~

Require the lexer, parser, and/or visitor.
~~~
const { ModelLexer, ModelParser, ModelVisitor } = require('antlr4-vensim')
~~~

Refer to the [ANTLR 4 JavaScript](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md) notes for further details about using the parser.

## Installing tools

The grammar development tools in this package require macOS. They are not required to use the parser.

Vensim grammar development uses the [ANTLR 4](http://www.antlr.org/) parser generator.

Install the latest [Java SE JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

Install ANTLR 4 Java tools version 4.7.1.
~~~
cd /usr/local/lib
sudo curl -O http://www.antlr.org/download/antlr-4.7.1-complete.jar
~~~

Set up ANTLR 4 in `.bash_profile`.
~~~
export CLASSPATH=".:/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH"
~~~

## Command line utilities

These scripts generate a lexer and parser in Java. They are useful in development when you are trying to understand how the lexer is tokenizing your model and what parse tree the parser is generating.

### build

Usage: build

Generate a Vensim parser in JavaScript in the `parser` directory.
~~~
ModelLexer.js
ModelParser.js
ModelVisitor.js
~~~

### lex

Usage: lex mdl-filename

Run the lexer on the .mdl file to print the token stream.

### tree

Usage: tree mdl-filename

Run the parser on the .mdl file to print the parse tree.

## npm scripts

The main development activity is to build the parser after modifying the grammar. You can do this from the project root directory with npm.
~~~
npm run clean
npm run build
~~~
