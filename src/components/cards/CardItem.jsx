

const CardItem = ({ id, img, title, description, link, type, tacks }) => {
	return (
		<>
			<section className="cardContainer">
				<div className="cardContainer__img">
					<img src={img} alt="Imagen del trabajo" />
				</div>
				<div className="cardContainer__info">
					<span className="tacks">{tacks}</span>
					<h3>{title}</h3>
					<p>{description}</p>
					<a href={link}>Ver</a>
				</div>
			</section>
		</>
	);
}

export default CardItem;