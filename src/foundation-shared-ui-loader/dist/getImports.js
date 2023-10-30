"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImports = void 0;
const parseTemplate_1 = require("./parseTemplate");
const importMap = __importStar(require("@dative-gpi/foundation-shared-ui-components/importMap.json"));
function getImports(source) {
    const { components, directives } = (0, parseTemplate_1.parseTemplate)(source);
    const resolvedComponents = [];
    const resolvedDirectives = [];
    const imports = new Map();
    if (components.size || directives.size) {
        components.forEach(component => {
            if (component.name in importMap.components) {
                resolvedComponents.push(component);
            }
        });
        directives.forEach(directive => {
            if (importMap.directives.includes(directive.name)) {
                resolvedDirectives.push(directive);
            }
        });
    }
    resolvedComponents.forEach(component => {
        addImport(imports, component.name, component.symbol, importMap.components[component.name].from);
    });
    // resolvedDirectives.forEach(directive => {
    //   addImport(imports, directive.name, directive.symbol, 'foundation/lib/directives/index.mjs')
    // })
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
