const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'elementor-editable-templates');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.endsWith('-plain-text.json'));

let totalPassed = 0;
let totalFailed = 0;

files.forEach(file => {
  const fullPath = path.join(dir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  let sec = 0, col = 0, cont = 0, wid = 0;

  function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (node.elType === 'section') sec++;
    if (node.elType === 'column') col++;
    if (node.elType === 'container') cont++;
    if (node.elType === 'widget') wid++;
    if (Array.isArray(node.content)) node.content.forEach(walk);
    if (Array.isArray(node.elements)) node.elements.forEach(walk);
  }

  walk(data);

  if (sec === 0 && col === 0 && cont > 0) {
    console.log(`[PASS] ${file} -> Containers: ${cont}, Widgets: ${wid}`);
    totalPassed++;
  } else {
    console.error(`[FAIL] ${file} -> Sections: ${sec}, Columns: ${col}, Containers: ${cont}`);
    totalFailed++;
  }
});

console.log(`\n================================`);
console.log(`Summary: ${totalPassed} PASSED, ${totalFailed} FAILED`);
console.log(`================================`);
