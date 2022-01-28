/**
 * Unit tests on the source code minifier functionality.
 */

/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import test from 'ava';
import { JSDOM } from 'jsdom';
import {
  collapseEmptyAttributes,
  minifyGenericTagNames,
} from './index';

test(
  'collapseEmptyAttributes() => All empty attributes in the HTML page are '
+ 'collapsed.',
  async (t) => {
    const html: string = `
      <html>
        <body>
          <p test1=""></p>
          <p test2=""></p>
          <p test3=""></p>
        </body>
      </html>
    `;

    const collapsedHtml: string = collapseEmptyAttributes(html);
    const testResult: boolean = true
      && collapsedHtml.includes('<p test1>')
      && collapsedHtml.includes('<p test2>')
      && collapsedHtml.includes('<p test3>');

    t.is(testResult, true);
  },
);

test(
  'minifyGenericTagNames() => Generic tags name such as `<div>` and `<span>` '
+ 'are minified.',
  async (t) => {
    const html: string = `
      <html>
        <body>
          <div></div>
          <span></span>
        </body>
      </html>
    `;

    const document = new JSDOM(html).window.document;

    minifyGenericTagNames(document);

    const testResult: boolean = true
      && document.querySelector('d') !== null
      && document.querySelector('n') !== null;

    t.is(testResult, true);
  },
);
