import React from "react";
import Container from "../../components/Container/Container";
import HeaderBig from "../../components/HeaderBig/HeaderBig";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import Products from "../../components/Products/Products";
import Product from "../../components/Product/Product";

import catalog from "../../products.json";

const renderProduct = product => (
  <Product
    key={product.id}
    image={product.image}
    name={product.name}
    price={product.amount}
  />
);

const uniqueDesktops = catalog
  .filter(p=>p.category === "desktop")
  .filter(p=>p.featured === true)
  .map(p=>renderProduct(p));

const uniqueTablets = catalog
  .filter(p=>p.category === "tablet")
  .filter(p=>p.featured === true)
  .map(p=>renderProduct(p));

const Home = () => (
    <Container>
      <HeaderBig>
        Welcome to our store
      </HeaderBig>
      <HeaderSmall>
        Desktops
      </HeaderSmall>
      <Products>
        {uniqueDesktops}
      </Products>
      <HeaderSmall>
        Tablets
      </HeaderSmall>
      <Products>
        {uniqueTablets}
      </Products>
    </Container>
);

export default Home;
