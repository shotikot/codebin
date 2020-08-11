const Bin = require("../models/bin");
const shortid = require("shortid");

const newBin = async (req, res) => {
  const extHelper = {
    javascript: "js",
    java: "java",
    python: "py",
    xml: "xml",
    ruby: "",
    sass: "sass",
    markdown: "md",
    mysql: "sql",
    json: "json",
    html: "html",
    handlebars: "handlebars",
    golang: "go",
    csharp: "cs",
    elixir: "ex",
    typescript: "ts",
    css: "css",
  };
  const body = req.body;
  const bin = new Bin({
    code: body.code,
    mode: body.mode,
    private: body.private === true,
    filename: `${shortid.generate()}.${extHelper[body.mode]}`,
  });
  await bin.save();
  res.send(bin);
};
module.exports = newBin;
