import React from 'react';

export default function Square(props){
    if (props.visibility==='hidden'){
        return(<button className={`square ${props.shade}`} onClick={props.onClick} style = {{...props.style, backgroundImage:""}}></button>);
    }
    return (
        <button className={`square ${props.shade}`} onClick={props.onClick} style = {props.style}></button>
    );
}