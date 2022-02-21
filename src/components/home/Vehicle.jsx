import {
  faBatteryFull,
  faCar,
  faTruck,
  faBattery2,
  faBattery0,
  faBattery3,
  faBattery4,
  faBattery5,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  background: none;
  border: none;
`;

const Card = styled.div`
  box-shadow: 0 2px 8px grey;
  border-radius: 10px;
  min-width: 120px;
  display: grid;
  padding: 5px;
  min-height: 100px;
  position: absolute;
  transform: translateX(-45px);
  background: #f0ece3;
  z-index: 5;
`;

const Flex = styled.div`
  display: flex;
`;

const Name = styled.div`
  color: #481902;
  font-weight: bold;
  font-size: 12px;
  padding-bottom: 5px;
`;

const Td = styled.td`
  text-align: left;
`;

const TableBox = styled.div`
  padding-left: 5px;
  padding-top: 5px;
`;
const Vehicle = ({ data }) => {
  const [showDetail, setShowDetail] = useState(false);
  const color = data.status === "AVAILABLE" ? "green" : "red";
  const battery =
    data.batteryLevelPct > 90
      ? faBatteryFull
      : data.batteryLevelPct > 75
      ? faBattery5
      : data.batteryLevelPct > 50
      ? faBattery4
      : data.batteryLevelPct > 25
      ? faBattery3
      : data.batteryLevelPct > 0
      ? faBattery2
      : faBattery0;

  return (
    <CustomButton>
      <FontAwesomeIcon
        icon={
          data.type === "CAR" ? faCar : data.type === "TRUCK" ? faTruck : faCar
        }
        style={{ color: color, fontSize: "23px" }}
        onMouseOver={() => setShowDetail(true)}
        onMouseOut={() => setShowDetail(false)}
      />
      {showDetail === true ? (
        <Card>
          <Flex>
            <Name>{data.name}</Name>
          </Flex>
          <div style={{ flexDirection: "row" }}>
            <Flex style={{ color: "green" }}>Vehicle info:</Flex>
            <TableBox>
              <table>
                <tr>
                  <Td>number:</Td>
                  <Td>{data.platesNumber}</Td>
                </tr>
                <tr>
                  <Td>type:</Td>
                  <Td>{data.type}</Td>
                </tr>
                <tr>
                  <Td>color:</Td>
                  <Td>{data.color}</Td>
                </tr>
                <tr>
                  <Td>range:</Td>
                  <Td>
                    {data.rangeKm}km{" "}
                    <FontAwesomeIcon
                      icon={battery}
                      style={{ color: "grenn", paddingLeft: "5px" }}
                    />
                  </Td>
                </tr>
              </table>
            </TableBox>
          </div>
        </Card>
      ) : (
        ""
      )}
    </CustomButton>
  );
};

export default Vehicle;
