"use strict";
/**
 * Importing and re-exporting the source code minifier code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugins = exports.collapseEmptyAttributes = exports.minifyGenericTagNames = exports.minifyJs = exports.minifyCss = exports.minifyHtml = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const index_1 = require("./lib/index");
Object.defineProperty(exports, "minifyHtml", { enumerable: true, get: function () { return index_1.minifyHtml; } });
Object.defineProperty(exports, "minifyCss", { enumerable: true, get: function () { return index_1.minifyCss; } });
Object.defineProperty(exports, "minifyJs", { enumerable: true, get: function () { return index_1.minifyJs; } });
Object.defineProperty(exports, "minifyGenericTagNames", { enumerable: true, get: function () { return index_1.minifyGenericTagNames; } });
Object.defineProperty(exports, "collapseEmptyAttributes", { enumerable: true, get: function () { return index_1.collapseEmptyAttributes; } });
const plugin_1 = require("./lib/plugin");
exports.plugins = {
    minifyHtmlPlugin: plugin_1.minifyHtmlPlugin,
    minifyCssPlugin: plugin_1.minifyCssPlugin,
    minifyJsPlugin: plugin_1.minifyJsPlugin,
    minifyGenericTagNamesPlugin: plugin_1.minifyGenericTagNamesPlugin,
    collapseEmptyAttributesPlugin: plugin_1.collapseEmptyAttributesPlugin,
};
//# sourceMappingURL=index.js.map