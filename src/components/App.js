import styled from "@emotion/styled";
import { fontFamily } from "../utils/cssConfig";

export default styled.div`
  overflow-y: scroll;

  width: ${props => (props.fluid ? "100%" : "30vw")};
  max-width: 935px;
  height: 75vh;

  font-family: ${fontFamily};

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
