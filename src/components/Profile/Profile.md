### Profile example

Profile header

```jsx
import App from "../App";
import Profile from "./Profile";

import { angusYoung } from "../../utils/examplePhotos";

<Profile
  bio={`
    Lead guitarist of AC⚡DC
  `}
  pictureSrc={angusYoung.src}
  username="angusyoung"
  fullname="Angus Young"
  followersData={[31, 3, 55]}
/>;
```
