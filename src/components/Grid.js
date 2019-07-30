import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Wrapper as PhotoWrapper } from "./Photo";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  overflow-y: scroll;
  max-height: 100vh;

  ${PhotoWrapper} {
    width: ${props => (props.feed ? "100%" : "33.33%")};
    padding-bottom: ${props => (props.feed ? "100%" : "33.33%")};
  }
`;

const EmptyMessageWrapper = styled.div`
  color: #c1c7d0;

  display: flex;
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

function EmptyMessage() {
  return (
    <EmptyMessageWrapper>
      <h3>Empty</h3>
    </EmptyMessageWrapper>
  );
}

export default function Grid({ isEmpty, children, ...props }) {
  return (
    <Wrapper {...props}>
      {children}
      {isEmpty && <EmptyMessage />}
    </Wrapper>
  );
}

Grid.propTypes = {
  /**
   * Specifies if the grid is empty
   */
  isEmpty: PropTypes.bool,

  /**
   * When `true`, images are displayed with 100% width
   */
  feed: PropTypes.bool
};

Grid.defaultProps = {
  isEmpty: false,
  feed: false
};
