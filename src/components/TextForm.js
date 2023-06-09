import React,{useState} from 'react'
//useState is a hook

export default function TextForm(props) {
    const handleUpClick=()=>
    {
        //console.log("Upper case was clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>
    {
        //console.log("Upper case was clicked"+ text);
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>
    {
        let newText= "";
        setText(newText);
    }
    const handleOnChange=(event)=>
    {
        //console.log("On Change")
        setText(event.target.value);
    }

    const handleCopy=()=>
    {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>
    {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const [text, setText] = useState('');
    //above is a state variable
    return (
      <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}` } >
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>

        </div>
        
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}` }>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters!</p>
            <p>{0.008*text.split(" ").length} minutes to read!</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview here"}</p>
        </div>
      </>
  )
}
