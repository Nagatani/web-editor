import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

const editorOptions = {
  theme: 'monokai',
  fontSize: 14,
  wrap: true,
  showPrintMargin: false,
};

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  function onChangeHtml(newValue: string) {
    setHtmlCode(newValue);
  }

  function onChangeCss(newValue: string) {
    setCssCode(newValue);
  }

  function onChangeJs(newValue: string) {
    setJsCode(newValue);
  }

  const Preview = () => {
    const srcDoc = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;

    return (
      <iframe
        title="preview"
        srcDoc={srcDoc}
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    );
  };


  return (
    <div className="App">
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1 }}>
          <AceEditor
            mode="html"
            theme="github"
            onChange={onChangeHtml}
            value={htmlCode}
            name="html-editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={editorOptions}
          />
          <AceEditor
            mode="css"
            theme="github"
            onChange={onChangeCss}
            value={cssCode}
            name="css-editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={editorOptions}
          />
          <AceEditor
            mode="javascript"
            theme="github"
            onChange={onChangeJs}
            value={jsCode}
            name="js-editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={editorOptions}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Preview />
        </div>
      </div>
    </div>
  );
}

export default App;