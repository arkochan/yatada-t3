import InputBox from "./Inputbox";
import React from "react";
import { Montserrat } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

const Home = () => {
	return (
		<div className={`  m-20 mt-10 ${montserrat.variable} flex-rowfont-montserrat h-screen text-white `}>
			<div id="TEXTDIV" className="h-1/6 text-center">
				<h1 className="text-2xl font-bold">Yatada!</h1>
				<p className="">Yet Another To (and) Do App</p>
			</div>
			<InputBox />
		</div>
	);
};

export default Home;
