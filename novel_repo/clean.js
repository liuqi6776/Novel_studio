const fs = require('fs');

function cleanFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/(极其|极度|极大)+/g, '');
    fs.writeFileSync(filePath, content, 'utf8');
}

cleanFile('/novel_repo/04-chapters/chapter-09.md');
cleanFile('/novel_repo/04-chapters/chapter-10.md');
console.log('Cleanup complete.');
