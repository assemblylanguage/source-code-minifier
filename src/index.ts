/**
 * Importing and re-exporting the source code minifier code.
 */

/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import {
  minifyHtml,
  minifyCss,
  minifyJs,
  minifyGenericTagNames,
} from './lib/index';

import {
  minifyHtmlPlugin,
  minifyCssPlugin,
  minifyJsPlugin,
  minifyGenericTagNamesPlugin,
} from './lib/plugin';

export {
  minifyHtml,
  minifyCss,
  minifyJs,
  minifyGenericTagNames,
};

export const plugins = {
  minifyHtmlPlugin,
  minifyCssPlugin,
  minifyJsPlugin,
  minifyGenericTagNamesPlugin,
};
