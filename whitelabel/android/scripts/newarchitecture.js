const {JavaPathAndroid} = require('../../global/javaPath');
const fs = require('fs');

function newArchitectureWhitelabel(brand) {
  console.log('Initilizing changes to new architecture fabric: ');
  ChangePackageTurboModuleManagerDelegate(brand.packageName);
  ChangePackageMainApplicationReactNativeHost(brand.packageName);
  ChangeImportBuildConfigReactNativeHost(brand.packageName);
  ChangeImportComponentRegistryReactNativeHost(brand.packageName);
  ChangeImportTurboModuleManagerDelegateReactNativeHost(brand.packageName);
  ChangeImportMainApplicationReactNativeHost(brand.packageName);
  ChangePackageMainComponentsRegistry(brand.packageName);
}

function ChangePackageTurboModuleManagerDelegate(newPackage) {
  const turboModulePath = `${JavaPathAndroid()}/newarchitecture/modules/MainApplicationTurboModuleManagerDelegate.java`;
  const turboModuleFile = fs.readFileSync(turboModulePath, 'utf-8');

  const currentPackage = turboModuleFile.split('\n')[0];
  const setNewPackageNameTurboModule = turboModuleFile.replace(
    currentPackage,
    `package ${newPackage}.newarchitecture.modules;`,
  );

  console.log(
    `Reescrevendo package TurboModuleManagerDelegate,  package: ${newPackage}`,
  );
  fs.writeFileSync(turboModulePath, setNewPackageNameTurboModule);
}

function ChangePackageMainApplicationReactNativeHost(newPackage) {
  const mainAppReactNativeHostPath = `${JavaPathAndroid()}/newarchitecture/MainApplicationReactNativeHost.java`;

  const mainAppReactNativeHostFile = fs.readFileSync(
    mainAppReactNativeHostPath,
    'utf-8',
  );

  const currentPackage = mainAppReactNativeHostFile.split('\n')[0];
  const setNewPackageNameTurboModule = mainAppReactNativeHostFile.replace(
    currentPackage,
    `package ${newPackage}.newarchitecture;`,
  );

  console.log(
    `Reescrevendo package MainApplicationReactNativeHost,  package: ${newPackage}`,
  );
  fs.writeFileSync(mainAppReactNativeHostPath, setNewPackageNameTurboModule);
}

function ChangeImportBuildConfigReactNativeHost(newPackage) {
  const mainAppReactNativeHostPath = `${JavaPathAndroid()}/newarchitecture/MainApplicationReactNativeHost.java`;

  const mainAppReactNativeHostFile = fs.readFileSync(
    mainAppReactNativeHostPath,
    'utf-8',
  );

  const regexBuildConfig = /com.(.*?).(BuildConfig)/;
  const setNewBuildConfigImport = mainAppReactNativeHostFile.replace(
    regexBuildConfig,
    `${newPackage}.$2`,
  );
  console.log(
    `Reescrevendo import BuildConfig MainApplicationReactNativeHost ,  package: ${newPackage}`,
  );
  fs.writeFileSync(mainAppReactNativeHostPath, setNewBuildConfigImport);
}

function ChangeImportComponentRegistryReactNativeHost(newPackage) {
  const mainAppReactNativeHostPath = `${JavaPathAndroid()}/newarchitecture/MainApplicationReactNativeHost.java`;

  const mainAppReactNativeHostFile = fs.readFileSync(
    mainAppReactNativeHostPath,
    'utf-8',
  );

  const regex = /com.(.*?).(newarchitecture.components.MainComponentsRegistry)/;
  const setNewMainComponentRegistryImport = mainAppReactNativeHostFile.replace(
    regex,
    `${newPackage}.$2`,
  );

  console.log(
    `Reescrevendo import ComponentRegistry MainApplicationReactNativeHost ,  package: ${newPackage}`,
  );
  fs.writeFileSync(
    mainAppReactNativeHostPath,
    setNewMainComponentRegistryImport,
  );
}

function ChangeImportTurboModuleManagerDelegateReactNativeHost(newPackage) {
  const mainAppReactNativeHostPath = `${JavaPathAndroid()}/newarchitecture/MainApplicationReactNativeHost.java`;

  const mainAppReactNativeHostFile = fs.readFileSync(
    mainAppReactNativeHostPath,
    'utf-8',
  );

  const regexTurboModuleManagerDelegate =
    /com.(.*?).(newarchitecture.modules.MainApplicationTurboModuleManagerDelegate)/;

  const setNewTurboModuleManagerDelegateImport =
    mainAppReactNativeHostFile.replace(
      regexTurboModuleManagerDelegate,
      `${newPackage}.$2`,
    );

  console.log(
    `Reescrevendo import TurboModuleManagerDelegate MainApplicationReactNativeHost ,  package: ${newPackage}`,
  );
  fs.writeFileSync(
    mainAppReactNativeHostPath,
    setNewTurboModuleManagerDelegateImport,
  );
}

function ChangeImportMainApplicationReactNativeHost(newPackage) {
  const mainApplicationPath = `${JavaPathAndroid()}/MainApplication.java`;
  const mainApplicationFile = fs.readFileSync(mainApplicationPath, 'utf-8');

  const regex = /com.(.*?).(newarchitecture.MainApplicationReactNativeHost)/;

  const setNewMainApplicationReactNativeHostImport =
    mainApplicationFile.replace(regex, `${newPackage}.$2`);

  console.log(
    `Reescrevendo import MainApplicationReactNativeHost ,  package: ${newPackage}`,
  );
  fs.writeFileSync(
    mainApplicationPath,
    setNewMainApplicationReactNativeHostImport,
  );
}

function ChangePackageMainComponentsRegistry(newPackage) {
  const mainComponentsRegistryPath = `${JavaPathAndroid()}/newarchitecture/components/MainComponentsRegistry.java`;

  const mainComponentsRegistryFile = fs.readFileSync(
    mainComponentsRegistryPath,
    'utf-8',
  );

  const newPackageMainComponentsRegistry = `package ${newPackage}.newarchitecture.components;`;
  const currentPackage = mainComponentsRegistryFile.split('\n')[0];

  const setNewPackageMainComponentsRegistry =
    mainComponentsRegistryFile.replace(
      currentPackage,
      newPackageMainComponentsRegistry,
    );

  console.log(
    `Reescrevendo package MainComponentsRegistry,  package: ${newPackage}`,
  );

  fs.writeFileSync(
    mainComponentsRegistryPath,
    setNewPackageMainComponentsRegistry,
  );
}

module.exports = {
  newArchitectureWhitelabel,
};
