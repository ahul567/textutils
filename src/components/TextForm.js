import React,{useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState("");
  const[num,setnum]=useState(0);
  const handleUpClick=()=>{
    console.log("Uppercase was clicked");
    setText(text.toUpperCase());
  }
  const handleUpChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
   
  }
  const handlelowClick=()=>{
    console.log("Lowercase was clicked");
    setText(text.toLowerCase());
  }
 
  return (
    <>
   <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <label htmlFor="mybox" className="form-label">Textarea</label>
  <textarea className="form-control" value={text} onChange={handleUpChange} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-danger mx-2" onClick={handlelowClick}>Convert to lowercase</button>
 
 
 </div>
<div className="container my-3">
  <h1>Your text summary is here</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
    
   
  )
}
