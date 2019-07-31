<br />
<br />

It's not intended to be the Instagram clone, rather a set of basic building blocks for creating more complex applications that in one way or another need to preview Instagram interface.

### Full example:

```jsx
import App from "./components/App";
import Grid from "./components/Grid";
import Profile from "./components/Profile";
import Photo from "./components/Photo";
import GridControlBar from "./components/Grid/GridControlBar";
import GridControlBarItem from "./components/Grid/GridControlBarItem";

import examplePhotos, { angusYoung } from "./utils/examplePhotos";

<App fluid>
  <Profile
    pictureSrc={angusYoung.src}
    username="angusyoung"
    followersData={[31, 3, 55]}
    fullname="Angus Young"
  />
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
