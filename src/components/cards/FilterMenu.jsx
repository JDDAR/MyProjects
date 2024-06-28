
import React from "react";

const FilterButtons = ({ filter, handleFilterChange }) => {
	// Definir los tipos de proyectos disponibles
	const projectTypes = ["all", "react", "javascript", "python", "java", "sass"]; // Agrega más tipos según tus necesidades

	return (
		<div className="filter-menu">
			{projectTypes.map(type => (
				<a
					key={type}
					href="#"
					onClick={() => handleFilterChange(type)}
					className={filter === type ? "active" : ""}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitaliza el primer carácter */}
				</a>
			))}
		</div>
	);
};

export default FilterButtons;