import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/cards/cardsSlice";

import CardItem from "./CardItem";
import FilterButtons from "./FilterMenu";

const CardsContainer = () => {
	// obtenemos la funcion dispatch de redux 
	const dispatch = useDispatch();
	//Extraemos los datos del store de redx usando useSelector
	const { cardsItems, filter } = useSelector((store) => store.cards);
	//Funcion para manejar el cambio de filtro 
	const handleFilterChange = (newFilter) => {
		//despachamos la accion setFilter con el nuevo filtro 
		dispatch(setFilter(newFilter));
	}
	//Filtramos las tarjetas segun el filtro seleccionado 
	const filteredCards = filter === "all" ? cardsItems : cardsItems.filter(item => item.type === filter);
	return (
		<>
			<section className="cards-container">
				<div className="cards-container__header">
					<h2>Mis Proyectos</h2>
					{/* Usa el componente FilterButtons aquí */}
					<FilterButtons filter={filter} handleFilterChange={handleFilterChange} />
				</div>
				<article className="cards-container__articles">
					<ul>
						{filteredCards.map((item) => (
							<CardItem key={item.id} {...item} />
						))}
					</ul>
				</article>
			</section>
		</>
	);
};

export default CardsContainer;