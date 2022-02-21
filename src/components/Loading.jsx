import React from "react";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

const LoadingSpiner = () => {
  return (
    <>
      <ClockLoader color={`black`} loading={true} css={override} size={150} />
    </>
  );
};

export default LoadingSpiner;
