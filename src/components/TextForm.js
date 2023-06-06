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
    // const handleClick=()=>
    // {
    //     //console.log("Upper case was clicked"+ text);
    //     let newText= text.();
    //     setText(newText);
    // }
    const handleOnChange=(event)=>
    {
        //console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //above is a state variable
    return (
      <>
        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters!</p>
            <p>{0.008*text.split(" ").length} minutes to read!</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
      </>
  )
}
