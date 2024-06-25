"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importPlugin_1 = require("./importPlugin");
function FoundationSharedAutoImport({ skipShared = false, skipCore = false, skipAdmin = false, skipExtension = false } = {}) {
    const plugins = [];
    plugins.push((0, importPlugin_1.importPlugin)(skipShared, skipCore, skipAdmin, skipExtension));
    return plugins;
}
module.exports = FoundationSharedAutoImport;
exports.default = FoundationSharedAutoImport;
