import React from "react";
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

export function Photo({ src, children, ...props }) {
  return (
    <Wrapper {...props} ref={props.forwardedRef}>
      <span style={{ backgroundImage: `url("${src}")` }} />
      <div>{children}</div>
    </Wrapper>
  );
}

export default React.forwardRef((props, ref) => (
  <Photo forwardedRef={ref} {...props} />
));
