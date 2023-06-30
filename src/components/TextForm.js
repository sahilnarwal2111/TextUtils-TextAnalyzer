import React from 'react'
import PropTypes from 'prop-types'
import  { useState } from 'react';

export default function TextForm(props) {
    //Please note that when button is clicked page is not reloaded Benefits of using react!!
    const handleUpClick = ()=>{
        const str = text
        const uppercaseStr = str.toUpperCase();
        setText(uppercaseStr)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLoClick = ()=>{
        const str = text
        const uppercaseStr = str.toLowerCase();
        setText(uppercaseStr)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClearClick = ()=>{
        const uppercaseStr = ''
        setText(uppercaseStr)
        props.showAlert("Text Cleared!", "success")
    }
    const handleEmailClick = ()=>{
        
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
        const extractedEmails = text.match(emailRegex);
        if(extractedEmails!=null){
            const concatenatedEmails = extractedEmails.join(", ");
            setText(concatenatedEmails)
            props.showAlert("Finded all emails!", "success")
        }
        else{
            props.showAlert("Text does not contain any emails!", "success")
        }
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard!", "success")
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces are removed!", "success")
    }
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
        console.log(text)
    }
    const wordCounter=(text)=>{
        const words = text.split(" ")
        const filteredWords = words.filter(word => word.trim() !== "");
        return filteredWords.length;
    }
    return (
        <>
        <div className="container" style={{ color:props.mode==='light'? 'black': 'white' }}>

            <div className="mb-3">
                <h1 className={`my-3`}>Enter the text to analyze</h1>
                <textarea className="form-control" value={text} id="myBox" onChange={handleTextChange} style={{backgroundColor:props.mode==='dark'? 'grey': 'white', color:props.mode==='dark'? 'white': '#063883' }}  rows="10"/>
                <button className={`btn btn-${props.mode==='dark green'?'success':'primary'} my-3 mx-1`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className={`btn btn-${props.mode==='dark green'?'success':'primary'} my-3 mx-1`} onClick={handleLoClick}>Convert to LowerCase</button>
                <button className={`btn btn-${props.mode==='dark green'?'success':'primary'} my-3 mx-1`} onClick={handleClearClick}>Clear Text</button>
                <button className={`btn btn-${props.mode==='dark green'?'success':'primary'} my-3 mx-1`} onClick={handleEmailClick}>Find Email Address</button>
                <button className={`btn btn-${props.mode==='dark green'?'success':'primary'} my-3 mx-1`} onClick={handleCopyClick}>Copy</button>
                <button className={`btn btn-${props.mode==='dark green'?'success':'primary'} my-3 mx-1`} onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
        </div>
        <div className="container my-3" style={{ color:props.mode==='light'? 'black': 'white'  }}>
            <h2 className={`my-3`}>Your Test Summary</h2>
            <p>{wordCounter(text)} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length } Minute Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>

    </>
  )
}
