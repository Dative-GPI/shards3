"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importPlugin_1 = require("./importPlugin");
function FoundationSharedAutoImport() {
    const plugins = [];
    plugins.push((0, importPlugin_1.importPlugin)());
    return plugins;
}
module.exports = FoundationSharedAutoImport;
exports.default = FoundationSharedAutoImport;
