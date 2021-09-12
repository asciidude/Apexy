import moo from 'moo';
import { readFileSync } from 'fs';
import transpile from './transpile.js';
let tokens = [];

let lexer = moo.compile({
  whitespace:   /[ \t]+/,
  comment:      /\>\>.*?$/,
  number:       /0|[1-9][0-9]*/,
  string:       /"(?:\\["\\]|[^\n"\\])*"/,
  paren:        ['(', ')'],
  brace:        ['{', '}'],
  bracket:      ['[', ']'],
  split:        ',',
  math:         ['+', '++', '-', '--', '/', '*', '**', '>', '<', '='],
  statement:    ['print', 'fn', 'while', 'return', 'break'],
  boolean:      ['true', 'false'],
  arrow:        ['=>', '->'],
  set:          'set',
  colon:        [';', ':'],
  identifier:   /[a-zA-Z][a-zA-Z_0-9]*/,
  newline:      { match: /\r\n/, lineBreaks: true },
});

async function main(filename='main.apex', output='./main.js') {
    const mainfile = (await readFileSync(filename)).toString();
    console.log(`INIT >> LEX for ${filename}`);

    lexer.reset(mainfile);

    while(true) {
        const token = lexer.next();
    
        if(!token)
            break;
    
        tokens.push(token);
    }

    console.log(`COMPLETE >> LEX for ${filename}`);

    console.log(`INIT >> TRANSPILE for ${filename}`);
    (await transpile(filename, tokens, output, {
        ignoreWS: false,
        runAfter: true,
        notifyDone: true
    }));
}

main().catch(err => console.log(err.stack));