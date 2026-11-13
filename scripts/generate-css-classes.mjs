
import fs from 'node:fs';
import path from 'node:path';

const tsxFile = process.argv[2];

if (!tsxFile || !fs.existsSync(tsxFile)) {
    console.error('TSX file not found');
    process.exit(1);
}

const source = fs.readFileSync(tsxFile, 'utf8');

// Знаходимо всі css.className
const classes = [
    ...new Set(
        [...source.matchAll(/\bcss\.([a-zA-Z_$][\w$]*)/g)]
            .map((match) => match[1])
    ),
];

// Знаходимо відповідний CSS Module
const fileName = path.basename(tsxFile).replace(/\.(tsx|jsx)$/, '');
const cssFile = path.join(
    path.dirname(tsxFile),
    `${fileName}.module.css`
);

if (!fs.existsSync(cssFile)) {
    console.error(`CSS Module not found: ${cssFile}`);
    process.exit(1);
}

let css = fs.readFileSync(cssFile, 'utf8');
const missingClasses = [];

for (const className of classes) {
    const escaped = className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const selectorRegex = new RegExp(
        `\\.${escaped}(?=[\\s,{:#.\\[>+~]|$)`
    );

    if (!selectorRegex.test(css)) {
        missingClasses.push(className);
    }
}

if (missingClasses.length === 0) {
    console.log('All CSS classes already exist.');
    process.exit(0);
}

const additions = missingClasses
    .map((className) => `.${className} {\n\n}`)
    .join('\n\n');

css = `${css.trimEnd()}\n\n${additions}\n`;

fs.writeFileSync(cssFile, css, 'utf8');

console.log(`Added CSS classes: ${missingClasses.join(', ')}`);
