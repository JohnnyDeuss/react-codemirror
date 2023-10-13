"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5462],{5462:function(e,n,i){i.r(n),n.default={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Kimbie Theme\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-kimbie.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-kimbie)\n\nKimbie theme for cm6, generated from [vscode themes](https://github.com/microsoft/vscode/blob/main/extensions/theme-kimbie-dark/themes/kimbie-dark-color-theme.json).\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/kimbie\">\n  <img width=\"436\" alt=\"codemirror-theme-kimbie\" src=\"https://github.com/uiwjs/react-codemirror/assets/1680273/859e75f6-cc7c-4182-ac92-dbf3168784b0\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-kimbie --save\n```\n\n```jsx\nimport { kimbie, kimbieInit } from '@uiw/codemirror-theme-kimbie';\n\n<CodeMirror theme={kimbie} />\n<CodeMirror\n  theme={kimbieInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    }\n  })}\n/>\n```\n\n## API\n\n```tsx\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsQuietlight: CreateThemeOptions['settings'];\nexport declare const kimbieInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const kimbie: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { kimbie } from '@uiw/codemirror-theme-kimbie';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={kimbie}\n      extensions={[javascript({ jsx: true })]}\n      onChange={(value, viewUpdate) => {\n        console.log('value:', value);\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { kimbie } from '@uiw/codemirror-theme-kimbie';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [kimbie, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);