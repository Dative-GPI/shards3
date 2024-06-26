"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importPlugin = void 0;
const path_1 = require("path");
const generateImports_1 = require("./generateImports");
const url_1 = require("url");
function parseId(id) {
    const { query, pathname } = (0, url_1.parse)(id);
    return {
        query: query ? Object.fromEntries(new url_1.URLSearchParams(query)) : null,
        path: pathname ?? id
    };
}
function importPlugin(skipShared, skipCore, skipAdmin, skipExtension) {
    return {
        name: 'foundation:import',
        configResolved(config) {
            if (config.plugins.findIndex(plugin => plugin.name === 'foundation:import') < config.plugins.findIndex(plugin => plugin.name === 'vite:vue')) {
                throw new Error('Foundation plugin must be loaded after the vue plugin');
            }
        },
        async transform(code, id) {
            const { query, path } = parseId(id);
            if (((!query || !('vue' in query)) && (0, path_1.extname)(path) === '.vue' && !/^import { render as _sfc_render } from ".*"$/m.test(code)) ||
                (query && 'vue' in query && (query.type === 'template' || (query.type === 'script' && query.setup === 'true')))) {
                const { code: imports, source } = (0, generateImports_1.generateImports)(code, skipShared, skipCore, skipAdmin, skipExtension);
                return {
                    code: source + imports,
                    map: null,
                };
            }
            return null;
        }
    };
}
exports.importPlugin = importPlugin;
