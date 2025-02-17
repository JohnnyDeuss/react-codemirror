<!--rehype:ignore:start-->

# MonokaiDimmed Theme

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-monokai-dimmed.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-monokai-dimmed)

MonokaiDimmed theme for cm6, generated from [vscode themes](https://github.com/microsoft/vscode/blob/main/extensions/theme-monokai-dimmed/themes/dimmed-monokai-color-theme.json).

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/monokai-dimmed">
  <img width="436" alt="codemirror-theme-monokai-dimmed" src="https://github.com/uiwjs/react-codemirror/assets/1680273/1b61ce79-b0b6-4fad-9707-b31804c625a2">
</a>

## Install

```bash
npm install @uiw/codemirror-theme-monokai-dimmed --save
```

```jsx
import { monokaiDimmed, monokaiDimmedInit } from '@uiw/codemirror-theme-monokai-dimmed';

<CodeMirror theme={monokaiDimmed} />
<CodeMirror
  theme={monokaiDimmedInit({
    settings: {
      caret: '#c6c6c6',
      fontFamily: 'monospace',
    }
  })}
/>
```

## API

```tsx
import { CreateThemeOptions } from '@uiw/codemirror-themes';
export declare const defaultSettingsQuietlight: CreateThemeOptions['settings'];
export declare const monokaiDimmedInit: (
  options?: Partial<CreateThemeOptions>,
) => import('@codemirror/state').Extension;
export declare const monokaiDimmed: import('@codemirror/state').Extension;
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { monokaiDimmed } from '@uiw/codemirror-theme-monokai-dimmed';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={monokaiDimmed}
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { monokaiDimmed } from '@uiw/codemirror-theme-monokai-dimmed';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [monokaiDimmed, javascript({ jsx: true })],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
