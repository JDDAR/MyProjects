import { useSelector } from "react-redux";
import CardItem from "./CardItem";

const CardsContainer = () => {
	const { cardsItems } = useSelector((store) => store.cards);
	return (
		<>
			<section className="cards-container" >
				<div className="cards-container__header" >
					<h2>Mis Proyectos</h2>
				</div>
				<article className="cards-container__articles">
					<ul >
						{
							cardsItems.map(item => {
								return <CardItem key={item.id} {...item} />;
							}
							)
						}
					</ul>
				</article>
			</section>
		</>
	);
};

export default CardsContainer;