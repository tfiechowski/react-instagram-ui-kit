import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { fontFamily } from "utils/cssConfig";

const GridControlBarItemWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  margin-right: 60px;

  color: ${props => (props.isActive ? "#262626" : "#999")};
  border-top: 1px solid ${props => (props.isActive ? "#262626" : "#efefef")};

  font-family: ${fontFamily};
  font-weight: 600;

  & > div {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    height: 100%;
    padding: 10px;
    text-align: center;
  }

  :hover {
    cursor: ${({ onClick }) => (Boolean(onClick) ? "pointer" : "inherit")};
  }
`;

export default function GridControlBarItem({ children, onClick, isActive }) {
  return (
    <GridControlBarItemWrapper onClick={onClick} isActive={isActive}>
      <div>{children}</div>
    </GridControlBarItemWrapper>
  );
}

GridControlBarItem.propTypes = {
  /**
   * Click handler for the control bar item.
   */
  onClick: PropTypes.func,

  /**
   * Indicates if the item is currently in active state.
   */
  isActive: PropTypes.bool
};
