const fs = require("fs");

const getFiles = function(path) {
  const files = fs.readdirSync(path, { withFileTypes: true });
  const dirs = files.filter(file => file.isDirectory());
  const markdownFiles = files.filter(({ name }) => name.includes(".md"));
  return markdownFiles.concat(
    dirs
      .map(({ name }) => name)
      .reduce(
        (acc, curr) =>
          acc.concat(
            getFiles(curr).map(file => {
              file.name = `${curr}/${file.name}`;
              return file;
            })
          ),
        []
      )
  );
};
const files = getFiles(".");
files
  .map(({ name: path }) => ({
    path,
    content: fs.readFileSync(path, { encoding: "utf8" })
  }))
  .filter(({ content }) => content.match(/image = ".+"/))
  .map(({ path, content }) => ({ path, lines: content.split("\n") }))
  .map(({ path, lines }) => {
    const indexOfImage = lines.findIndex(line => line.includes("image = "));
    const url = lines[indexOfImage].match(/".+"/)[0];
    lines.splice(indexOfImage, 1);
    const indexOfEndFrontMatter = lines
      .slice(1)
      .findIndex(line => line.includes("+++"));
    lines.splice(indexOfEndFrontMatter + 1 + 1, 0, `![](${url.slice(1).slice(0, -1)})`);
    return { path, content: lines.join("\n") };
  })
  .forEach(({ path, content }) => {
    fs.writeFileSync(path, content, {
      flag: "w"
    });
  });
