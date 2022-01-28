/**
 * Importing and re-exporting the source code minifier code.
 */
import { minifyHtml, minifyCss, minifyJs, minifyGenericTagNames } from './lib/index';
import { minifyHtmlPlugin, minifyCssPlugin, minifyJsPlugin, minifyGenericTagNamesPlugin } from './lib/plugin';
export { minifyHtml, minifyCss, minifyJs, minifyGenericTagNames, };
export declare const plugins: {
    minifyHtmlPlugin: typeof minifyHtmlPlugin;
    minifyCssPlugin: typeof minifyCssPlugin;
    minifyJsPlugin: typeof minifyJsPlugin;
    minifyGenericTagNamesPlugin: typeof minifyGenericTagNamesPlugin;
};
//# sourceMappingURL=index.d.ts.map