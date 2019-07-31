Grid is a component holding the photos.

### Basic grid example

Default grid view, images are displayed with rows of three.

```jsx
import {Grid, Photo} from "react-instagram-ui-kit";
import examplePhotos from "utils/examplePhotos";

<Grid>
  {examplePhotos.map(photo => (
    <Photo src={photo.src} key={photo.id} />
  ))}
</Grid>;
```

### Feed grid example

Images are displayed with a full available width.

```jsx
import Grid from "./Grid";
import Photo from "../Photo";

import examplePhotos from "../../utils/examplePhotos";

<Grid feed>
  {examplePhotos.map(photo => (
    <Photo src={photo.src} key={photo.id} />
  ))}
</Grid>;
```
