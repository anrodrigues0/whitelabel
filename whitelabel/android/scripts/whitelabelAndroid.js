const fs = require('fs');
const path = require('path');

const {JavaPathAndroid} = require('../../global/javaPath');
const {newArchitectureWhitelabel} = require('./newarchitecture');
const {ChangeAppJsonRN} = require('../../global/changeAppJsonRN');

const mainPath = path.resolve(__dirname, '../../../', 'android');

function WhitelabelAndroid(brand) {
  if (brand) {
    console.log(`Iniciando whitelabel para Android versao ${brand.nameApp}`);
    // ChangeIconsApp(brand.nameApp);
    // ChangeAppJsonRN(brand.nameApp);
    ChangeNameApp(brand.nameApp);
    // ChangeGradlewApplicationId(brand.packageName);
    // ChangePackageAndroidManifest(brand.packageName);
    // ChangePackageBuck(brand.packageName);
    // ChangeNameFolderJava(brand.nameApp);
    // ChangePackageMainApplication(brand.packageName);
    // ChangePackageMainActivity(brand.packageName);
    // ChangeGetMainComponentNameReturn(brand.nameApp);
    // newArchitectureWhitelabel(brand);
    return;
  }
}

function ChangeNameApp(name) {
  console.log(mainPath)
  const appNamePath = `${mainPath}/app/src/main/res/values/strings.xml`;
  const androidStringsFile = fs.readFileSync(appNamePath, 'utf-8');

  const regex = new RegExp('(<string name="app_name">)(.*?)(</string>)');
  const setNewNameApp = androidStringsFile.replace(regex, `$1${name}$3`);

  console.log(`Reescrevendo nome do app, app: ${name}`);
  fs.writeFileSync(appNamePath, setNewNameApp);
}

function ChangeGradlewApplicationId(applicationId) {
  const applicationIdPath = `${mainPath}/app/build.gradle`;
  const buildGradleFile = fs.readFileSync(applicationIdPath, 'utf-8');
  const regex = /applicationId .*?\".*?\"/;

  const currentApplicationId = buildGradleFile.replace(
    regex,
    `applicationId "${applicationId}"`,
  );

  console.log(`Reescrevendo gradlew applicationId, id: ${applicationId}`);
  fs.writeFileSync(applicationIdPath, currentApplicationId);
}

function ChangePackageAndroidManifest(manifestAndroidId) {
  const androidManifestPath = `${mainPath}/app/src/main/AndroidManifest.xml`;
  const androidManifestFile = fs.readFileSync(androidManifestPath, 'utf-8');

  const regex = /(package=)(.*?\".*?\")/;

  const setNewPackageAndroidManifest = androidManifestFile.replace(
    regex,
    `$1"${manifestAndroidId}"`,
  );

  console.log(
    `Reescrevendo Android Manifest Package,  package: ${manifestAndroidId}`,
  );
  fs.writeFileSync(androidManifestPath, setNewPackageAndroidManifest);
}

function ChangePackageBuck(packageBuck) {
  const _buckPath = `${mainPath}/app/_BUCK`;
  const _buckFile = fs.readFileSync(_buckPath, 'utf-8');

  const regex = /(package =)(.*?\".*?\")/g;
  const setNewPackageBuck = _buckFile.replace(regex, `$1 "${packageBuck}"`);

  console.log(`Reescrevendo package BUCK,  package: ${packageBuck}`);
  fs.writeFileSync(_buckPath, setNewPackageBuck);
}

function ChangeNameFolderJava(nameApp) {
  const dirJavaPath = `${mainPath}/app/src/main/java/com`;
  const currentFolderNameJava = fs.readdirSync(dirJavaPath)[0];

  const currentFolderJava = `${mainPath}/app/src/main/java/com/${currentFolderNameJava}`;
  const newNameFolderJava = `${mainPath}/app/src/main/java/com/${nameApp}`;

  if (fs.existsSync(currentFolderJava)) {
    try {
      console.log(`Reescrevendo folder java,  folder: ${nameApp}`);
      return fs.renameSync(currentFolderJava, newNameFolderJava);
    } catch (error) {
      throw console.error('Folder java nao encontrado');
    }
  }
  throw console.error('Folder java nao encontrado');
}

function ChangePackageMainApplication(newPackage) {
  const mainApplicationPath = `${JavaPathAndroid()}/MainApplication.java`;

  const mainApplicationFile = fs.readFileSync(mainApplicationPath, 'utf-8');
  const currentPackage = mainApplicationFile.split('\n')[0];
  const setNewPackageNameMainApplication = mainApplicationFile.replace(
    currentPackage,
    `package ${newPackage};`,
  );

  console.log(`Reescrevendo package MainApplication,  package: ${newPackage}`);
  fs.writeFileSync(mainApplicationPath, setNewPackageNameMainApplication);
}

function ChangePackageMainActivity(newPackage) {
  const mainActivityPath = `${JavaPathAndroid()}/MainActivity.java`;

  const mainActivityFile = fs.readFileSync(mainActivityPath, 'utf-8');
  const currentPackage = mainActivityFile.split('\n')[0];

  const setNewPackageNameMainActivity = mainActivityFile.replace(
    currentPackage,
    `package ${newPackage};`,
  );

  console.log(`Reescrevendo package MainActivity,  package: ${newPackage}`);
  fs.writeFileSync(mainActivityPath, setNewPackageNameMainActivity);
}

function ChangeGetMainComponentNameReturn(nameApp) {
  const mainActivityPath = `${JavaPathAndroid()}/MainActivity.java`;
  const mainActivityFile = fs.readFileSync(mainActivityPath, 'utf-8');

  const regex = /(return) (.*?\".*?\")/;
  const setReturnMainComponentName = mainActivityFile.replace(
    regex,
    `$1 "${nameApp}"`,
  );

  console.log(
    `Reescrevendo return getMainComponentName,  return function: ${nameApp}`,
  );
  fs.writeFileSync(mainActivityPath, setReturnMainComponentName);
}

// function ChangeIconsApp(nameApp) {
//   const currentIconsApp = `${mainPath}/app/src/main/res`;
//   const newIconPath = path.resolve(__dirname, '../', `brands/${nameApp}/res`);

//   fs.rmSync(currentIconsApp, {recursive: true, force: true});
//   try {
//     fse.copySync(newIconPath, currentIconsApp, {overwrite: false});
//     console.log(`Reescrevendo icones do app ${nameApp}`);
//   } catch (err) {
//     console.error(err);
//   }
// }

module.exports = {
  WhitelabelAndroid,
};
