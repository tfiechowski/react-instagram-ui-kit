<br />
<br />

It's not and is not intended to be Instagram clone, rather a set of basic building blocks for creating more complex applications that in one way or another need to preview Instagram interface.

### Full example:

```js
import App from "./components/App";
import Grid from "./components/Grid";
import Profile from "./components/Profile";
import Photo from "./components/Photo";
import GridControlBar  from "./components/Grid/GridControlBar";
import GridControlBarItem  from "./components/Grid/GridControlBarItem";

import examplePhotos from "./utils/examplePhotos";

<App fluid>
  <Profile avatarSrc={examplePhotos[0].src} username="Angus Young">
  </Profile>
  <Grid>
    <GridControlBar>
      <GridControlBarItem>𐄹 Posts</GridControlBarItem>
      <GridControlBarItem>웃 Tagged</GridControlBarItem>
    </GridControlBar>
    {examplePhotos.map(photo => (
      <Photo src={photo.src} key={photo.id} />
    ))}
  </Grid>
</App>;
```
