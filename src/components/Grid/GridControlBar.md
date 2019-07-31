### Example

Holds the control buttons of the grid. Children should be `GridControlBarItem` components.

```jsx
import App from "../App";
import Grid from "./Grid";
import GridControlBar from "./GridControlBar";
import GridControlBarItem from "./GridControlBarItem";

<Grid>
  <GridControlBar>
    <GridControlBarItem isActive>𐄹 Posts</GridControlBarItem>
    <GridControlBarItem>웃 Tagged</GridControlBarItem>
  </GridControlBar>
</Grid>;
```
