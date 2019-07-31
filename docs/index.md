<br />
<br />

It's not intended to be the Instagram clone, rather a set of basic building blocks for creating more complex applications that in one way or another need to preview Instagram interface.

### Full example:

```jsx
import {
  App,
  Grid,
  Profile,
  Photo,
  GridControlBar,
  GridControlBarItem
} from "react-instagram-ui-kit";
import examplePhotos, { angusYoung } from "utils/examplePhotos";

<App fluid>
  <Profile
    bio={`
      Lead guitarist of AC⚡DC
    `}
    pictureSrc={angusYoung.src}
    username="angusyoung"
    followersData={[31, 3000000, 55]}
    fullname="Angus Young"
  />
  <Grid>
    <GridControlBar>
      <GridControlBarItem isActive>𐄹 Posts</GridControlBarItem>
      <GridControlBarItem>웃 Tagged</GridControlBarItem>
    </GridControlBar>
    {examplePhotos.map(photo => (
      <Photo src={photo.src} key={photo.id} />
    ))}
  </Grid>
</App>;
```
