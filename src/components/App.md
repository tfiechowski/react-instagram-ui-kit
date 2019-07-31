It's a root component holding all the children like `Grid` or `Profile`.

```jsx static
import App from "./App";
import Grid from "./Grid";
import Profile from "./Profile";

<App>
  <Profile />
  <Grid>{/* ... */}</Grid>
</App>;
```
