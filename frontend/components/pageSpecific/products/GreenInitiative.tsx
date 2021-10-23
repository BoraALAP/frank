import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../layout/Container";
import data2 from "../../../data/greener2.json";
import Table from "../learn/Table";
import Tabs from "../../global/Tabs";

const GreenInitiative = ({ product }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const data = data2.filter((item) => {
    return item.series === product;
  });

  const newArray = data[0]?.types.map((item) => {
    return item.type;
  });

  if (data.length > 0) {
    return (
      <Container padding gap>
        <Tabs
          tabs={newArray}
          onClick={(e) => {
            console.log("clicked", e);

            setActiveTabIndex(e);
          }}
          active={activeTabIndex}
        />
        {data[0]?.types.map((category, index) => {
          console.log(index, activeTabIndex, index === activeTabIndex);
          if (index === activeTabIndex) {
            return (
              <Container key={index} gap>
                <Table product data={category.options} />
              </Container>
            );
          }
        })}
      </Container>
    );
  }
  return null;
};

export default GreenInitiative;
