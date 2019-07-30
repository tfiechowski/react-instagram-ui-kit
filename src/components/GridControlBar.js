import React from "react";
import styled from "@emotion/styled";
import { fontFamily } from "../utils/cssConfig";

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

export const GridControlItemWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  margin-right: 60px;

  color: ${props => (props.isActive ? "#262626" : "#999")};
  border-top: 1px solid ${props => (props.isActive ? "#262626" : "#efefef")};

  div {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    height: 100%;
    padding: 10px;
  }

  :hover {
    cursor: pointer;
  }
`;

export function GridControlItem({ children, ...props }) {
  return (
    <GridControlItemWrapper {...props}>
      <div>{children}</div>
    </GridControlItemWrapper>
  );
}

export default function GridControlBar({ children }) {
  return <GridControlBarWrapper>{children}</GridControlBarWrapper>;
}
