import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { FilterContext } from "../../FilterContext";

const Container = styled.div`
  padding: 1%;
`;
const Filter = () => {
  const { setFilter } = useContext(FilterContext);

  return (
    <Container>
      <Dropdown style={{ zindex: "3", position: "relative" }}>
        <Dropdown.Toggle
          id="dropdown"
          style={{
            color: "black",
            backgroundColor: "transparent",
            border: "1px dashed grey",
            fontSize: "12px",
            borderRadius: "10px",
          }}
        >
          Vehicle Filter
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{
            borderRadius: "18px",
            backgroundColor: "#f0ece3",
          }}
        >
          <Dropdown.Item
            style={{
              borderRadius: "10px 10px 0px 0px",
              backgroundColor: "#f0ece3",
            }}
            onClick={() => setFilter("ALL")}
          >
            All
          </Dropdown.Item>
          <Dropdown.Item
            style={{ backgroundColor: "#f0ece3" }}
            onClick={() => setFilter("AVAILABLE")}
          >
            Only Available
          </Dropdown.Item>
          <Dropdown.Item
            style={{ backgroundColor: "#f0ece3" }}
            onClick={() => setFilter("DISABLE")}
          >
            Only Disable
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              borderRadius: "0px 0px 10px 10px",
              backgroundColor: "#f0ece3",
            }}
            onClick={() => setFilter("50")}
          >
            More than 50%
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default Filter;
