import React from "react";
import styled from "styled-components";

const Conrainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 1%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Green = styled.div`
  color: green;
  font-size: 25px;
`;

const Bold = styled.div`
  font-weight: bold;
`;

const BasicStats = ({ data }) => {
  const aviable = data.map((vehicle) =>
    vehicle.status === "AVAILABLE" ? vehicle : null
  );

  return (
    <Conrainer>
      Available:
      <Bold>
        <Green>{aviable.length}</Green>
      </Bold>
      / <Bold>{data.length}</Bold>
    </Conrainer>
  );
};

export default BasicStats;
