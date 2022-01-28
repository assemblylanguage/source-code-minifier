"use strict";
/**
 * Plugins for humble.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.minifyGenericTagNamesPlugin = exports.minifyJsPlugin = exports.minifyCssPlugin = exports.minifyHtmlPlugin = void 0;
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
const index_1 = require("./index");
/**
 * A plugin wrapper for the `minifyHtml` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function minifyHtmlPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        humble.html = yield index_1.minifyHtml(humble.document.documentElement.outerHTML, humble.options.minifyHtmlOptions);
    });
}
exports.minifyHtmlPlugin = minifyHtmlPlugin;
/**
 * A plugin wrapper for the `minifyCss` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function minifyCssPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.minifyCss(humble.document, humble.options.minifyCssOptions);
    });
}
exports.minifyCssPlugin = minifyCssPlugin;
/**
 * A plugin wrapper for the `minifyJs` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function minifyJsPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.minifyJs(humble.document, humble.options.minifyJsOptions);
    });
}
exports.minifyJsPlugin = minifyJsPlugin;
/**
 * A plugin wrapper for the `minifyGenericTagNames` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function minifyGenericTagNamesPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.minifyGenericTagNames(humble.document);
    });
}
exports.minifyGenericTagNamesPlugin = minifyGenericTagNamesPlugin;
//# sourceMappingURL=plugin.js.map