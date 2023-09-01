import React, {useState} from 'react'

export default function TextArea(props) {
    const onchangehandler = (event)=>{
        setText(event.target.value);
        // console.log("on change handler");
    }
    const changeToUp = () =>{
        // console.log('on click event');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Change to Uppsercase','success');
    }
    const changeTolower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Change to Lowercase','success');
    }
    const clearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert('Text has been cleared','success');
    }
    const copyToClipboard = ()=>{
       
        navigator.clipboard.writeText(text);
        //let newText = text.select();
        props.showAlert('Text has been Copied','success');
          
    }
    const removeSpaces = () =>{
       let newText = text.replace(/  +/g, ' ');
        setText(newText);
        props.showAlert('Extra Spaces has been removed','success');
    }

    const [text, setText] = useState("");
    
  return (
    <div>
        <div className="container">
            <h1 style={{color:props.mode==='light'?'black':'white'}}>Enter Text Below </h1>
            <textarea className='w-100' name="text" value={text} id="text" onChange={onchangehandler} cols="100" rows="8" style={{background:props.mode==='light'?'#fff':'#104b73',color:props.mode==='light'?'black':'white'}}></textarea> <br />
            <button disabled={text.length===0} className="btn btn-primary" onClick={changeToUp}>Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={changeTolower}>Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyToClipboard}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removeSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear</button>
        </div>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=> {return element!=0}).length}  Words and {text.length} no. of Character </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </div>
  )
}
