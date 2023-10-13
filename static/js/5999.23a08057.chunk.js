"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5999],{15999:function(n,e,o){o.r(e),e.default={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Atom One Theme\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-atomone.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-atomone)\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/atomone\">\n  <img width=\"436\" alt=\"codemirror-theme-atomone\" src=\"https://user-images.githubusercontent.com/1680273/181795374-7a25cb90-5d77-4f86-9cbc-b1e12dc939d3.png\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-atomone --save\n```\n\n```jsx\nimport { tags as t } from '@lezer/highlight';\nimport { atomone, atomoneInit } from '@uiw/codemirror-theme-atomone';\n\n<CodeMirror theme={atomone} />\n<CodeMirror\n  theme={atomoneInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    },\n    styles: [\n      { tag: t.comment, color: '#6272a4' },\n    ]\n  })}\n/>\n```\n\n## API\n\n```tsx\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsAtomone: CreateThemeOptions['settings'];\nexport declare const atomoneInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const atomone: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { atomone } from '@uiw/codemirror-theme-atomone';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={atomone}\n      extensions={[javascript({ jsx: true })]}\n      onChange={(value, viewUpdate) => {\n        console.log('value:', value);\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { atomone } from '@uiw/codemirror-theme-atomone';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [atomone, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);