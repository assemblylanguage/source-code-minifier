/**
 * Plugins for humble.
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */

import {
  minifyHtml,
  minifyCss,
  minifyJs,
  minifyGenericTagNames,
} from './index';

/**
 * A plugin wrapper for the `minifyHtml` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function minifyHtmlPlugin(
  humble: any,
) : Promise<void> {
  humble.html = await minifyHtml(
    humble.document.documentElement.outerHTML,
    humble.options.minifyHtmlOptions,
  );
}

/**
 * A plugin wrapper for the `minifyCss` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function minifyCssPlugin(
  humble: any,
) : Promise<void> {
  await minifyCss(
    humble.document,
    humble.options.minifyCssOptions,
  );
}

/**
 * A plugin wrapper for the `minifyJs` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function minifyJsPlugin(
  humble: any,
) : Promise<void> {
  await minifyJs(
    humble.document,
    humble.options.minifyJsOptions,
  );
}

/**
 * A plugin wrapper for the `minifyGenericTagNames` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function minifyGenericTagNamesPlugin(
  humble: any,
) : Promise<void> {
  await minifyGenericTagNames(humble.document);
}
