import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: fit-content;
  border-bottom: 1px dashed grey;
  justify-content: space-around;
  align-items: center;
  background-color: #f0ece3;
  flex-wrap: wrap;
`;

function Navbar({ children }) {
  return <Container>{children}</Container>;
}

export default Navbar;
