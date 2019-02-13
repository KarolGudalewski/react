import React from "react";
import Container from "../../components/Container/Container";
import HeaderBig from "../../components/HeaderBig/HeaderBig";
import CatalogStyle from "./components/CatalogStyle";
import ColumnLeft from "./components/ColumnLeft";
import Filter from "./components/Filter";
import FilterHeader from "./components/FilterHeader";
import Clear from "./components/Clear";
import Search from "./components/Search";
import BrandRadio from "./components/BrandRadio";
import ColumnRight from "./components/ColumnRight";
import Products from "../../components/Products/Products";
import Product from "../../components/Product/Product";

import catalog from "../../catalog.json";

const renderProduct = product => (
	<Product
		key={product.id}
		id={product.id}
		image={product.img}
		description={product.description}
		name={product.name}
		price={product.price}
	/>
);

const renderBrands = (product, chosenBrand) => (
	<BrandRadio
		key={product.id}
		name={"manufacturere"}
		brand={product.brand}
		stateBrand = {chosenBrand.state.brand}
		onBrandChange = {chosenBrand.onBrandChange}
	/>
);

class Catalog extends React.Component {

	constructor() {
		super();
		this.state = {
			brand: "All",
			searchText: ""
		};

		this.baseState = this.state;

		this.onChangeSearchText = this.onChangeSearchText.bind(this);
		this.onBrandChange = this.onBrandChange.bind(this);
		this.onClickClear = this.onClickClear.bind(this);

	};

	onClickClear(event) {
		this.setState(this.baseState);
	}

	onBrandChange(event) {
		this.setState({ brand: event.target.value });
	}

	onChangeSearchText(event) {
		this.setState({ searchText: event.target.value });
	}

	render() {

		const products = catalog
			.filter(product => (product.name.includes(this.state.searchText)
				&& (this.state.brand === "All" ? product.brand : product.brand === this.state.brand)))
			.map(p=>renderProduct(p));

		const brands = catalog
			.filter((p, index, self) => index === self.findIndex((t) => (t.brand === p.brand)))
			.map(product => renderBrands(product, this));

		return (
			<Container>
				<HeaderBig>
					Catalog
				</HeaderBig>
				<CatalogStyle>
					<ColumnLeft>
						<Filter>
							<FilterHeader>
								<h4>Search</h4>
								<Clear href="#" onClick={this.onClickClear}>Clear</Clear>
							</FilterHeader>
							<div>
								<Search
									placeholder={"search..."}
									searchText={this.onChangeSearchText}
								/>
							</div>
							<h4>Manufacturer</h4>
							<div>
								<div>
									<BrandRadio
										name={"manufacturere"}
										brand={"All"}
										stateBrand = {this.state.brand}
										onBrandChange = {this.onBrandChange}
									/>
									{brands}
								</div>
							</div>
						</Filter>
					</ColumnLeft>
					<ColumnRight>
						<Products>
							{products}
						</Products>
					</ColumnRight>
				</CatalogStyle>
			</Container>
		)
	}
}

export default Catalog;
