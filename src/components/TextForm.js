import React, {useState }from 'react'


export default function TextForm(props) {
  const handleupClick=() => {
   // console.log('clicked');
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Convert to upperCase', 'success');


  }
  const handlelowClick =()=>{
   let newText= text.toLowerCase();
    setText(newText)
    props.showAlert('Convert to lowerCase', 'success');

  }

  const handleclearClick =()=>{
    let newText= '';
     setText(newText)
     props.showAlert('Text cleared', 'success');
   }

   const handleCopyClick=()=>{
    let newText = navigator.clipboard.writeText(text)
    setText(newText)
    props.showAlert('Text copied', 'success');
   }

   




  const handleOnChange=(event) => {
    setText(event.target.value);

  }
  const[text ,setText] = useState('');
  const result = typeof text === 'string' ? 'ok' : '';
  console.log(result);

  
 
  

  return (
    <>
     <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', 
      color: props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        
        <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>copy Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>Your text Summary</h2>
      <p>{text.trim()===""?0:text.trim().split(" ").length} words and {text.length} characters</p>
      <p>{(0.008 * text.toString().split(" ").length)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : 'Enter in the textbox to preview'}</p>
    </div>
    </>
  )
}
