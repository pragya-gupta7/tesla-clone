import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        heading="Model S"
        description="Order Online for Touchless Delivery"
        img="model-s.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        heading="Model Y"
        description="Order Online for Touchless Delivery"
        img="model-y.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        heading="Model X"
        description="Order Online for Touchless Delivery"
        img="model-x.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        heading="Model 3"
        description="Order Online for Touchless Delivery"
        img="model-3.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        heading="Lowest Cost Solar Panels in America"
        description="Money back guarantee"
        img="solar-panel.jpg"
        leftBtn="Order now"
        rightBtn="Learn more"
      />
      <Section
        heading="Solar for New Roof"
        description="Solar Roof Costs Less Than a New ROof"
        img="solar-roof.jpg"
        leftBtn="Order now"
        rightBtn="Learn more"
      />
      <Section
        heading="Accessories"
        description=""
        img="accessories.jpg"
        leftBtn="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
