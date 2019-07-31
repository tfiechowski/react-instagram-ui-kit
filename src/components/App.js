import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { fontFamily } from "../utils/cssConfig";

const App = styled.div`
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

App.propTypes = {
  /**
   * Use `fluid` to make App full width, spanning the entire available space.
   */
  fluid: PropTypes.bool
};

/** @component */
export default App;
