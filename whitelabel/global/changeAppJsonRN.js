const fs = require('fs');
const path = require('path');

const appJsonPath = path.resolve(__dirname, '../../', 'app.json');

function ChangeAppJsonRN(appName) {
  const newAppJson = JSON.stringify({
    name: appName,
    displayName: appName,
  });

  console.log('Reescrevendo app.json react native');
  fs.writeFileSync(appJsonPath, newAppJson);
}

module.exports = {
  ChangeAppJsonRN,
};
