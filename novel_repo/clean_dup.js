const fs = require('fs');
const filePath = './04-chapters/chapter-04.md';
let content = fs.readFileSync(filePath, 'utf-8');

let lines = content.split('\n');
let startIdx = -1;
let endIdx = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('林渊没理会这些目光') && lines[i].includes('极度的恐慌和求生本能')) {
        startIdx = i;
        break;
    }
}

for (let i = startIdx + 1; i < lines.length; i++) {
    if (lines[i].includes('林渊没理会这些目光') && lines[i].includes('异样的冰冷波动')) {
        endIdx = i;
        break;
    }
}

if (startIdx !== -1 && endIdx !== -1) {
    // delete from startIdx up to endIdx (exclusive), keeping endIdx.
    lines.splice(startIdx, endIdx - startIdx);
    fs.writeFileSync(filePath, lines.join('\n'));
    console.log(`Deleted lines ${startIdx} to ${endIdx-1}`);
} else {
    console.log(`Indices not found: start=${startIdx}, end=${endIdx}`);
}
