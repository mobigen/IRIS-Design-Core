const rm = require("rimraf"),
  path = require("path"),
  chalk = require("chalk");

const destPath = path.resolve(__dirname, "./dist");

// dist 폴더 삭제를 위한 스크립트
// webpack clean-webpack-plugin을 사용하면, 
// watch가 돌때마다 dist 폴더를 삭제하기 때문에 따로 스크립트 처리 했음
function cleanDistFolder() {
  rm(path.join(destPath, "*"), (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }

    console.log(chalk.white("  Clean Dist Folder\n"));

  });
}

function init() {
  cleanDistFolder();
}

init();