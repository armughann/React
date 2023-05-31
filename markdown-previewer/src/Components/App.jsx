import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.scss';

function MyComponent() {
  const defaultText = `# Default Markdown Text\nWrite your Markdown here.\n
## Subheading\nThis link man [links](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)\n
This is an inline code \`<div></div>\`\n
\`\`\`
// This is a code block
const myFunction = () => {
    console.log('Hello World!');
}
\`\`\`
- This is a list item
- This is another list item
> This is a blockquote
**This is bolded text**\n
![Awesome Image](https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)
    `;
  const [input, setInput] = useState(defaultText);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <h1>Markdown Previewer</h1>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h2 id="header">Editor</h2>
            <textarea id="editor" rows="10" cols="100" value={input} onChange={handleChange}></textarea>
          </div>
          <div className="col-sm-6">
            <h2 id="header">Previewer</h2>
            <div id="preview">
              <ReactMarkdown components={
                {
                    h1: ({node, ...props}) => <h1 {...props} className="heading-1" />,
                    h2: ({node, ...props}) => <h2 {...props} className="heading-2" />,
                    code: ({node, ...props}) => <code {...props} className="code"></code>,
                    img: ({ alt, src }) => <div className="image-container"><img src={src} alt={alt} className="custom-image" /></div>
                }
              }>{input}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
