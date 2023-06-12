"use client";
import React, { useState, type ChangeEvent } from "react";

function InputBox(): JSX.Element {
    const [inputText, setInputText] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div className="bg-black p-10 font-mono text-white">
            <div className="text-center">
                <p>{inputText}</p>
                <input
                    className="border-sky-800 bg-zinc-800"
                    type="text"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default InputBox;
