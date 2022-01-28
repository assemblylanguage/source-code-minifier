"use strict";
/**
 * Unit tests on the source code minifier functionality.
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
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const ava_1 = require("ava");
const jsdom_1 = require("jsdom");
const index_1 = require("./index");
ava_1.default('collapseEmptyAttributes() => All empty attributes in the HTML page are '
    + 'collapsed.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const html = `
      <html>
        <body>
          <p test1=""></p>
          <p test2=""></p>
          <p test3=""></p>
        </body>
      </html>
    `;
    const collapsedHtml = index_1.collapseEmptyAttributes(html);
    const testResult = true
        && collapsedHtml.includes('<p test1>')
        && collapsedHtml.includes('<p test2>')
        && collapsedHtml.includes('<p test3>');
    t.is(testResult, true);
}));
ava_1.default('minifyGenericTagNames() => Generic tags name such as `<div>` and `<span>` '
    + 'are minified.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const html = `
      <html>
        <body>
          <div></div>
          <span></span>
        </body>
      </html>
    `;
    const document = new jsdom_1.JSDOM(html).window.document;
    index_1.minifyGenericTagNames(document);
    const testResult = true
        && document.querySelector('d') !== null
        && document.querySelector('n') !== null;
    t.is(testResult, true);
}));
//# sourceMappingURL=tests.js.map