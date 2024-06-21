"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) {k2 = k;}
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) {k2 = k;}
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) {return mod;}
    var result = {};
    if (mod != null) {for (var k in mod) {if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) {__createBinding(result, mod, k);}}}
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImports = void 0;
const parseTemplate_1 = require("./parseTemplate");
const sharedImportMap = __importStar(require("./mapping/foundation-shared-components-imports-map.json"));
const coreImportMap = __importStar(require("./mapping/foundation-core-components-imports-map.json"));
const adminImportMap = __importStar(require("./mapping/foundation-admin-components-imports-map.json"));
function getImports(source, skipShared, skipCore, skipAdmin) {
    const { components, directives } = (0, parseTemplate_1.parseTemplate)(source);
    const resolvedComponents = [];
    const resolvedDirectives = [];
    const imports = new Map();
    console.log('skipShared', skipShared);
    console.log('skipCore', skipCore);
    console.log('skipAdmin', skipAdmin);
    if (components.size || directives.size) {
        components.forEach(component => {
            if (!skipShared && component.name in sharedImportMap.components) {
                resolvedComponents.push(component);
                addImport(imports, component.name, component.symbol, sharedImportMap.components[component.name].from);
            }
            else if (!skipCore && component.name in coreImportMap.components) {
                resolvedComponents.push(component);
                addImport(imports, component.name, component.symbol, coreImportMap.components[component.name].from);
            }
            else if (!skipAdmin && component.name in adminImportMap.components) {
                resolvedComponents.push(component);
                addImport(imports, component.name, component.symbol, adminImportMap.components[component.name].from);
            }
        });
    }
    return {
        imports,
        components: resolvedComponents,
        directives: resolvedDirectives,
    };
}
exports.getImports = getImports;
function addImport(imports, name, as, from) {
    if (!imports.has(from)) {
        imports.set(from, []);
    }
    imports.get(from).push(`${as}`);
}
