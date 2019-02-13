import React from "react";
import Container from "../../components/Container/Container";
import HeaderBig from "../../components/HeaderBig/HeaderBig";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
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

const uniqueDesktops = catalog
  .filter((p, index, self) => index === self.findIndex((t) => (t.name === p.name)))
  .filter(p=>p.type === "desktop")
  .map(p=>renderProduct(p));

const uniqueTablets = catalog
  .filter((p, index, self) => index === self.findIndex((t) => (t.name === p.name)))
  .filter(p=>p.type === "tablet")
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
