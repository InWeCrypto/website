const path = require("path");
const fs = require("fs");
const rootPath = path.resolve(__dirname);

let file = fs.readFileSync(path.join(rootPath, "./index.html"), "utf8");
fs.writeFile(path.join(rootPath, "../dist/index.html"), file, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("文件写入成功");
  }
});
