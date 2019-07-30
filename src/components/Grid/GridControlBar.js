import React from "react";
import styled from "@emotion/styled";
import { fontFamily } from "../../utils/cssConfig";

const GridControlBarWrapper = styled.div`
  font-family: ${fontFamily};

  border-top: 1px solid #efefef;
  padding: 0;
  margin: 0;

  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function GridControlBar({ children }) {
  return <GridControlBarWrapper>{children}</GridControlBarWrapper>;
}
