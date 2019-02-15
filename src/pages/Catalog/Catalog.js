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

import catalog from "../../products.json";

class Catalog extends React.Component {

	constructor() {
		super();
		this.state = {
			brand: "All",
			searchText: ""
		};

		this.onChangeSearchText = this.onChangeSearchText.bind(this);
		this.onBrandChange = this.onBrandChange.bind(this);
		this.onClickClear = this.onClickClear.bind(this);

	};

	onClickClear() {
		this.setState({
			brand: "All",
			searchText: ""
		});
	}

	onBrandChange(event) {
		this.setState({ brand: event.target.value });
	}

	onChangeSearchText(event) {
		this.setState({ searchText: event.target.value });
	}

	renderProduct(product) {
		return <Product
			key={product.id}
			image={product.image}
			name={product.name}
			price={product.amount}
		/>
	};

	renderBrands(product) {
		return <BrandRadio
			key={product.id}
			name={"manufacturere"}
			brand={product.manufacture}
			stateBrand={this.state.brand}
			onBrandChange={this.onBrandChange}
			checked={this.state.brand === product.manufacture}
		/>
	}

	render() {

		const products = catalog
			.filter(product => (product.name.includes(this.state.searchText)
				&& (this.state.brand === "All" ? product.manufacture : product.manufacture === this.state.brand)))
			.map(p=>this.renderProduct(p));

		const brands = catalog
			.filter((p, index, self) => index === self.findIndex((t) => (t.manufacture === p.manufacture)))
			.map(product => this.renderBrands(product));

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
								<Clear onClick={this.onClickClear}>Clear</Clear>
							</FilterHeader>
							<div>
								<Search
									placeholder={"search..."}
									searchText={this.onChangeSearchText}
									defaultValue={this.state.searchText}
								/>
							</div>
							<h4>Manufacturer</h4>
							<div>
								<div>
									<BrandRadio
										name={"manufacturere"}
										brand={"All"}
										stateBrand = {this.state.brand}
										checked = {this.state.brand === "All"}
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
