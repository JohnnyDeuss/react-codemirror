"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5162],{45162:function(e,t,n){n.r(t),t.default={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Xcode Theme\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-xcode.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-xcode)\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/xcode/dark\">\n  <img width=\"436\" alt=\"codemirror-theme-xcode dark\" src=\"https://user-images.githubusercontent.com/1680273/206087681-537b9c1f-0dce-42a4-854d-036147935e82.png\">\n</a>\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/xcode/light\">\n  <img width=\"436\" alt=\"codemirror-theme-xcode light\" src=\"https://user-images.githubusercontent.com/1680273/206087526-9613a546-f129-4e01-9263-5a75f3f039a7.png\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-xcode --save\n```\n\n```jsx\nimport { xcodeLight, xcodeLightInit, xcodeDark, xcodeDarkInit } from '@uiw/codemirror-theme-xcode';\n\n<CodeMirror theme={xcodeLight} />\n<CodeMirror\n  theme={xcodeLightInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    }\n  })}\n/>\n```\n\n## API\n\n```ts\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsXcodeLight: CreateThemeOptions['settings'];\nexport declare function xcodeLightInit(options?: Partial<CreateThemeOptions>): import('@codemirror/state').Extension;\nexport declare const xcodeLight: import('@codemirror/state').Extension;\nexport declare const defaultSettingsXcodeDark: CreateThemeOptions['settings'];\nexport declare const xcodeDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const xcodeDark: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { xcodeLight, xcodeDark } from '@uiw/codemirror-theme-xcode';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={xcodeLight}\n      extensions={[javascript({ jsx: true })]}\n      onChange={(value, viewUpdate) => {\n        console.log('value:', value);\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { xcodeLight, xcodeDark } from '@uiw/codemirror-theme-xcode';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [xcodeDark, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);