/**
 * Importing and re-exporting the source code minifier code.
 */
import { minifyHtml, minifyCss, minifyJs, minifyGenericTagNames, collapseEmptyAttributes } from './lib/index';
import { minifyHtmlPlugin, minifyCssPlugin, minifyJsPlugin, minifyGenericTagNamesPlugin, collapseEmptyAttributesPlugin } from './lib/plugin';
export { minifyHtml, minifyCss, minifyJs, minifyGenericTagNames, collapseEmptyAttributes, };
export declare const plugins: {
    minifyHtmlPlugin: typeof minifyHtmlPlugin;
    minifyCssPlugin: typeof minifyCssPlugin;
    minifyJsPlugin: typeof minifyJsPlugin;
    minifyGenericTagNamesPlugin: typeof minifyGenericTagNamesPlugin;
    collapseEmptyAttributesPlugin: typeof collapseEmptyAttributesPlugin;
};
//# sourceMappingURL=index.d.ts.map