import React from "react";

//include images into your bundle
import { SimpleCounter } from "./simpleCounter";


//create your first component
const Home = () => {
	return (
		<div className="className text-center mt-5">

			<SimpleCounter />
		</div>
		
	);
};

export default Home;
