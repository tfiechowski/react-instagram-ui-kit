### Profile example

Profile header

```jsx
import { App, Profile } from "react-instagram-ui-kit";
import { angusYoung } from "utils/examplePhotos";

<Profile
  bio={`
    Lead guitarist of AC⚡DC
  `}
  pictureSrc={angusYoung.src}
  username="angusyoung"
  fullname="Angus Young"
  followersData={[31, 3000000, 55]}
/>;
```
