{/* aqui estamos importando cada parte de la pagina para "vincular" */ }
import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"

{/* aqui cambio todo para ir dandole forma a las cartas */ }
const cards = [
	{
		image: "https://picsum.photos/id/10/200/300",
		title: "Card Title",
		description: "Lorem kkfioppsjskjkss",
	},
	{
		image: "https://picsum.photos/id/20/200/300",
		title: "Card Title",
		description: "Lorem kkfioppsjskjkss",
	},
	{
		image: "https://picsum.photos/id/30/200/300",
		title: "Card Title",
		description: "Lorem kkfioppsjskjkss",
	},
	{
		image: "https://picsum.photos/id/40/200/300",
		title: "Card Title",
		description: "Lorem kkfioppsjskjkss",
	},
];

// esto lo principal de la pagina 
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			
			<div className="container mt-4">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card card={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;