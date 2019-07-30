import React, { Component } from "react";

import Grid from "./components/Grid";
import InstagramApp from "./components/InstagramApp";
import Photo from "./components/Photo";

export { Grid, InstagramApp, Photo };

const photos = [
  {
    src:
      "https://images.pexels.com/photos/2575279/pexels-photo-2575279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    id: "8c444080-9e02-4946-9205-ea65ed81a66f"
  },
  {
    src:
      "https://images.pexels.com/photos/1029609/pexels-photo-1029609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    id: "0a62f9fa-6f5c-4b09-8ff0-d2b9169426f9"
  },
  {
    src:
      "https://images.pexels.com/photos/1122414/pexels-photo-1122414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    id: "308f0373-a548-4802-8824-a1429ed3e801"
  },
  {
    src:
      "https://images.pexels.com/photos/2698761/pexels-photo-2698761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    id: "3c36057f-11de-4fc0-bc52-334c2339741a"
  }
];

export default class extends Component {
  render() {
    return (
      <div>
        <h2>Instagram UI Kit</h2>
        <div>
          <InstagramApp>
            <Grid>
              {photos.map(photo => (
                <Photo src={photo.src} key={photo.id} />
              ))}
            </Grid>
          </InstagramApp>
        </div>
      </div>
    );
  }
}
