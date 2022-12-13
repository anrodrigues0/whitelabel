const fs = require('fs');
const path = require('path');

const mainPath = path.resolve(__dirname, '../../', 'android');

function JavaPathAndroid() {
  const dirJavaPath = `${mainPath}/app/src/main/java/com`;
  const currentNameFolderJava = fs.readdirSync(dirJavaPath)[0];

  return `${mainPath}/app/src/main/java/com/${currentNameFolderJava}`;
}

module.exports = {
  JavaPathAndroid,
};
