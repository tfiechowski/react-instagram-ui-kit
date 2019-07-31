### Photo example

Because of the way `Photo` is styled, it always must be a child of a `Grid`

```jsx
import { Grid } from "react-instagram-ui-kit";
import examplePhotos from "utils/examplePhotos";

<Grid>
  <Photo src={examplePhotos[0].src} />
</Grid>;
```
