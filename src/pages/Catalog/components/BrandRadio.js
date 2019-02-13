import React from "react";
import BrandLabel from "./BrandLabel";

const BrandRadio = ({ name, brand, stateBrand, onBrandChange }) =>
	<div>
		<input type="radio" name={name} id={brand} value={brand} defaultChecked={stateBrand === brand} onChange={onBrandChange}/>
		<BrandLabel	brand={brand}	/>
	</div>;
//const BrandRadio = ({ placeholder, searchText }) => <input type="text" placeholder={placeholder} onChange={searchText}/>;

export default BrandRadio;
