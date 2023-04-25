import React from 'react'

interface PreviewProps {
  html: string
  css: string
  js: string
}

const Preview: React.FC<PreviewProps> = ({ html, css, js }) => {
  return (
    <iframe
      className="preview"
      title="preview"
      srcDoc={`<!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        </script>
      </body>
      </html>`}
    ></iframe>
  )
}

export default Preview
