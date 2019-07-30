import React from "react";
import styled from "@emotion/styled";

const GridControlBarItemWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  margin-right: 60px;

  color: ${props => (props.isActive ? "#262626" : "#999")};
  border-top: 1px solid ${props => (props.isActive ? "#262626" : "#efefef")};

  & > div {
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

export default function GridControlBarItem({ children }) {
  return (
    <GridControlBarItemWrapper>
      <div>{children}</div>
    </GridControlBarItemWrapper>
  );
}
