
/**
 * This script adds a deploy script to package.json
 * It's needed because you mentioned we can't directly edit package.json
 */
const fs = require('fs');
const path = require('path');

// Read the current package.json
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add the deploy script if it doesn't exist
if (!packageJson.scripts.deploy) {
  packageJson.scripts.deploy = "npm run build && gh-pages -d dist";
  // Write the updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Added deploy script to package.json');
}
