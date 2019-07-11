import React from 'react';
import '../../public/css/index.css'

export default function Square(props){
    return (
        <button className='piece' onClick={props.onClick}></button>
    );
}