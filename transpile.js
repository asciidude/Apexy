import { writeFileSync } from 'fs';
let content = [];

export default async function(filename, tokens, output, options) {
    content.push('// Transpiled using Apexy | https://github.com/asciidude/Apexy\r\n');
    content.push('// If there are any issues, make an issue on GitHub\r\n');
    content.push('\'use strict\'\r\n\r\n');
    content.push('import {each,split,concat,push,join} from \'./built-in/require.js\';\r\n\r\n');

    for(let i in tokens) {
        switch(tokens[i].type) {
            case 'whitespace':
                content.push(tokens[i].text);
                break;
            
            case 'newline':
                content.push(tokens[i].text);
                break;
                
            case 'split':
                content.push(',');
                break;
            
            case 'paren':
                content.push(tokens[i].text);
                break;

            case 'brace':
                content.push(tokens[i].text);
                break;
    
            case 'bracket':
                content.push(tokens[i].text);
                break;
            
            case 'math':
                content.push(tokens[i].text);
                break;

            case 'string':
                content.push(tokens[i].text);
                break;

            case 'number':
                content.push(tokens[i].text);
                break;
            
            case 'boolean':
                content.push(tokens[i].text);
                break;

            case 'statement':
                if(tokens[i].text == 'print')
                    content.push('console.log');
                else if(tokens[i].text == 'fn')
                    content.push('const');
                else
                    content.push(tokens[i].text);

                break;
            
            case 'set':
                content.push('let');
                break;
            
            case 'semicolon':
                content.push(';');
                break;
            
            case 'arrow':
                content.push('=>');
                break;

            case 'assign':
                content.push('=');
                break;

            case 'identifier':
                content.push(tokens[i].text);
                break;
                
            case 'comment':
                content.push(`// ${tokens[i].text.substring(3)}`);
                break;
            
            default:
                break;
        }
    }

    // EOF
    (await writeFileSync(output, content.join('')));

    if(options.runAfter)
        (await import(output));

    if(options.notifyDone)
        console.log(`COMPLETE >> TRANSPILE for ${filename}`);
}