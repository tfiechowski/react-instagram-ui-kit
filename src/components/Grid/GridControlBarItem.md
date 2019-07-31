See GridControlBar

### Example

```jsx
import GridControlBarItem from "./GridControlBarItem";

<GridControlBarItem>𐄹 Posts</GridControlBarItem>;
```

### Click handler and active state

```jsx
import GridControlBarItem from "./GridControlBarItem";

const handleClick = () => alert("hello!");

<GridControlBarItem isActive onClick={handleClick}>
  𐄹 Posts
</GridControlBarItem>;
```
