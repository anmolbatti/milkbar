import React from "react";

function TextBlock(props) {
    return (
        <div className="text_block text-center">
            <p className="font-18">{props.Content}</p>
        </div>
    );
}

export default TextBlock;

