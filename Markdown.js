import React from "https://esm.sh/react"
import ReactDOM from "https://esm.sh/react-dom"
import {createRoot} from "https://esm.sh/react-dom/client"
import $ from "https://esm.sh/jquery"
import {marked} from "https://esm.sh/marked"


class MarkdownApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: "# Big Text\n ## smaller text\n `console.log('Hello!');`\n\n [da link](https://www.freecodecamp.org)\n\n ```\n for(int i = 0; i < 5; i++) {\n\t cout << i << endl;\n }\n``` \n 1. Thing to do\n 1. Another thing\n 1. Final thing\n\n > To block quote, or not to block quote. That is the question\n\n **This is a bold thing to say...**\n ![dummy picture](https://i.imgur.com/iHZXVYP.png)\n\n ### I know this is a really barebones starting value, I will come back later to tweak it and some of the css"
    }
    
    this.handleChange = this.handleChange.bind(this);
    
  }
  
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  
  
  render() {
    return (
      <div id="container" class="container-fluid">
        <div id="editor-box">
          <h3 id="editor-title"><i class="fas fa-pen"></i> Editor</h3>
          
          
          <div id="text-container">
            <textarea id="editor" placeholder="Enter in your text here" onChange={this.handleChange} value={this.state.text}></textarea>
          </div>
        
          
          
        </div>
        
        <br/>
        <div id="output-box">
          <h3 id="output-title"><i class="fas fa-file"></i> Preview</h3>
          <div id="preview" class="{this.state.text.length}-chars" dangerouslySetInnerHTML={{ __html: marked(this.state.text)}}>
        </div>
        
        
          
        </div>
      </div>
      
    );
  }
}

const root = createRoot(document.getElementById("markdown-window"));

root.render(<MarkdownApp />)
