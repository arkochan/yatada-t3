import InputBox from "./Inputbox";
import React from "react";

const Home = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-black font-mono">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white">
                    Welcome to Next.js!
                </h1>

                <p className=" text-white">
                    This is the homepage of your Next.js app.
                </p>
                <InputBox />
            </div>
        </div>
    );
};

export default Home;
