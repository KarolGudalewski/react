import React from "react";
import ProductStyle from "./components/ProductStyle";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";

const Product = ({ image, name, price }) => {
	return (
			<ProductStyle>
			<Image url={image} description={name}/>
			<Price value={price} />
			<Name name={name} />
			</ProductStyle>
	);
};

export default Product;
