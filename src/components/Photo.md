### Photo example

Because of the way `Photo` is styled, it always must be a child of a `Grid`

```js
import Grid from "./Grid";

import examplePhotos from "../utils/examplePhotos";

<Grid>
  <Photo src={examplePhotos[0].src}> </Photo>
</Grid>;
```
