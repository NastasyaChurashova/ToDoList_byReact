import {useRef} from "react";
import "./Input.css";

export const Input = ({ text, handleText, onFocus, onBlur }) => {
    const textRef = useRef(text);
    const handleInput = (e) => {
        handleText(e.target.innerText);
    };
    const handleFocus = () =>{
        console.log("focus");
    }
    return (
    <div 
    contentEditable 
    className="input" 
    suppressContentEditableWarning 
    onInput={handleInput} 
    onFocus={handleFocus} 
    onBlur={onBlur}
    >
        {textRef.current}
    </div>
    ); 
};