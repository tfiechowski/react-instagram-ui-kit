import each from "jest-each";
import * as ReactIs from "react-is";
import App, {
  Grid,
  GridControlBar,
  GridControlBarItem,
  Photo,
  Profile
} from "./index";

describe("library exports", () => {
  each([
    ["App", App],
    ["Grid", Grid],
    ["GridControlBar", GridControlBar],
    ["GridControlBarItem", GridControlBarItem],
    ["Photo", Photo],
    ["Profile", Profile]
  ]).test("should import %s component", component => {
    expect(component).not.toBeUndefined();
    expect(ReactIs.isValidElementType(component)).toBeTruthy();
  });
});
