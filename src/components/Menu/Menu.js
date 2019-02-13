import React from "react";
import Container from "../../components/Container/Container";
import MenuStyles from "./components/MenuStyles";

const Menu = () => (

  <MenuStyles.NavBar>
      <Container>
          <MenuStyles.Nav>
              <MenuStyles.NavLi>
                  <MenuStyles.NavA exact to="/">Home</MenuStyles.NavA>
              </MenuStyles.NavLi>
              <MenuStyles.NavLi>
                  <MenuStyles.NavA to="/catalog">Catalog</MenuStyles.NavA>
              </MenuStyles.NavLi>
              <MenuStyles.NavLi>
                  <MenuStyles.NavA to="/about">About</MenuStyles.NavA>
              </MenuStyles.NavLi>
          </MenuStyles.Nav>
      </Container>
  </MenuStyles.NavBar>

);

export default Menu;
