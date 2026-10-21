const fs = require('fs');

const file = process.argv[2];
if (!file) {
  console.error("Please provide a file path.");
  process.exit(1);
}

const raw = fs.readFileSync(file, 'utf8');
const data = JSON.parse(raw);

let sectionCount = 0;
let columnCount = 0;
let containerCount = 0;
let widgetCount = 0;

function walk(node) {
  if (!node || typeof node !== 'object') return;
  if (node.elType === 'section') sectionCount++;
  if (node.elType === 'column') columnCount++;
  if (node.elType === 'container') containerCount++;
  if (node.elType === 'widget') widgetCount++;

  if (Array.isArray(node.content)) {
    node.content.forEach(walk);
  }
  if (Array.isArray(node.elements)) {
    node.elements.forEach(walk);
  }
}

walk(data);

console.log(`--- Verification for: ${file} ---`);
console.log(`Root Type: ${data.type}`);
console.log(`Sections: ${sectionCount} (Should be 0)`);
console.log(`Columns: ${columnCount} (Should be 0)`);
console.log(`Containers: ${containerCount}`);
console.log(`Widgets: ${widgetCount}`);

if (sectionCount === 0 && columnCount === 0 && containerCount > 0) {
  console.log("PASSED: 100% Pure Elementor Flexbox Container!");
} else {
  console.error("FAILED: Found legacy sections or columns!");
  process.exit(1);
}
