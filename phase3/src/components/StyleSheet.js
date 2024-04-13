import React from 'react';
import './StyleSheet.css';

function StyleSheet(props)
{
    let className =  props.isvalue ? 'demo' : 'demo1';
    return (
        <div>
            <h1 className = {className}>StyleSheet </h1>
{/* //             <h1 className = { '${className} demo3' }>StyleSheet </h1> */}

        </div>
    );
}

export default StyleSheet;