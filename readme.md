# Netlify-CMS-Responsive-Iframe-Widget

Adds a iframe widget to your editor allowing you to embed HTML contents, Youtube Video, Vimeo Video, and Images responsibly.

## Installation

```

npm install --save https://github.com/jsdev63/netlify-cms-responsive-block-widget.git
or
npm install --save netlify-cms-responsive-block-widget

```

## Usage

Within your `cms.js` file:

```js
import CMS from 'netlify-cms';
import ResponsiveIframeBlockEditorWidget from 'netlify-cms-responsive-block-widget';

CMS.registerEditorComponent(ResponsiveIframeBlockEditorWidget);
```

If you're using Gatsby you need to direct Netlify CMS to your `cms.js` file like this:

```js
    ...
   {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
            modulePath: `${__dirname}/src/cms/cms.js`
        }
    }
    ...
```
