const isDirectory = require("./isDirectory");
const { statSync } = require("node:fs");
const { parse } = require("path");

/**
 * @param   {string} path file Or folder path
 * @returns {statObject} a `statObject`.
 */
module.exports = function getStatObject(path) {
  const { name, base, ext } = parse(path);
  const { size, atime, mtime, birthtime } = statSync(path);

  let statObject = {
    name,
    path,
    fullName: base,
    lastAccessTime: atime, // :נפתח
    creationTime: birthtime, // :נוצר
    lastModificationTime: mtime, // :השתנה
  };

  return isDirectory(path)
    ? { ...statObject, isDirectory: true, isFile: false }
    : { ...statObject, isDirectory: false, isFile: true, size, extension: ext };
};
