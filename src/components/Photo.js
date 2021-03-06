import React from "react";
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  float: left;
  position: relative;
  border: 1px solid white;
  box-sizing: border-box;

  margin: 0;

  & > span {
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    border: 0;
  }

  & > div {
    position: absolute;

    height: 100%;
    width: 100%;
  }
`;

/** @component */
export function Photo({ src, children, ...props }) {
  return (
    <Wrapper {...props} ref={props.forwardedRef}>
      <span style={{ backgroundImage: `url("${src}")` }} />
      <div>{children}</div>
    </Wrapper>
  );
}

Photo.propTypes = {
  /**
   * Source of the image in base64 format
   */
  src: PropTypes.string.isRequired,
}

export default React.forwardRef((props, ref) => (
  <Photo forwardedRef={ref} {...props} />
));
