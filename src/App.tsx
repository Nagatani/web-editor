import React, { useState } from 'react'
import './App.css'
import Editor, { Monaco, OnChange, OnMount } from '@monaco-editor/react'
import type { editor } from 'monaco-editor'
import { emmetHTML } from 'emmet-monaco-es';
import Preview from './Preview'


const App: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, World!</h1>')
  const [cssCode, setCssCode] = useState('body { background-color: #282c34 }')
  const [jsCode, setJsCode] = useState('console.log("Hello, World!")')
  const [monacoInstance, setMonacoInstance] = useState<Monaco | null>(null)
  const handleEditorDidMount: OnMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
    setMonacoInstance(monaco)
  }
  const handleEditorWillMountHtml = (monaco: Monaco) => {
    emmetHTML(monaco, ['html'])
  }
  const handleEditorWillMountCss = (monaco: Monaco) => {
    emmetHTML(monaco, ['css'])
  }

  return (
    <div className="App">
      <div className='html-editor-wrapper'>
        <Editor
          language={'html'}
          className={'html-editor'}
          wrapperProps={{ className: 'html-editor-section' }}
          theme={'vs-dark'}
          value={htmlCode}
          onChange={(value, _event) => setHtmlCode(value || '')}
          beforeMount={handleEditorWillMountHtml}
          onMount={handleEditorDidMount}
        />
      </div>
      <div className='css-editor-wrapper'>
        <Editor
          language='css'
          className={'css-editor'}
          wrapperProps={{ className: 'css-editor-section' }}
          theme={'vs-dark'}
          value={cssCode}
          onChange={(value, _event) => setCssCode(value || '')}
          beforeMount={handleEditorWillMountCss}
          onMount={handleEditorDidMount}
        />
      </div>
      <div className='js-editor-wrapper'>
        <Editor
          language={'javascript'}
          className={'js-editor'}
          wrapperProps={{ className: 'js-editor-section' }}
          theme={'vs-dark'}
          value={jsCode}
          onChange={(value, _event) => setJsCode(value || '')}
          onMount={handleEditorDidMount}
        />
      </div>

      <Preview
        html={htmlCode}
        css={cssCode}
        js={jsCode}
      />
    </div>
  )
}

export default App