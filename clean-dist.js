const rm = require("rimraf"),
  path = require("path"),
  chalk = require("chalk");

const destPath = path.resolve(__dirname, "./dist");
const viewsPath = path.resolve(__dirname, "./views");
const cleanFolderList = [destPath, viewsPath];

const cleanFolder = () => {
  for (let i = 0; i < cleanFolderList.length; i++) {
    rm(path.join(cleanFolderList[i], "*"), (err) => {
      if (err) {
        console.log(chalk.red(err));
        throw err;
      }

      console.log(chalk.white(`  Clean Dist Folder ${cleanFolderList[i]}\n`));
    })
  }
}

const init = () => {
  cleanFolder();
};

init();