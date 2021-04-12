import { KittyApi } from "./kitties.api-model";
import image1 from 'assets/images/kitty_1.png';
import image2 from 'assets/images/kitty_2.png';
import image3 from 'assets/images/kitty_3.png';
import image4 from 'assets/images/kitty_4.png';

export const mockKittiesList: KittyApi[] = [
  {
    id: "kitty-1",
    pictureUrl: image1,
    title: "Gatito 1",
  },
  {
    id: "kitty-2",
    pictureUrl: image2,
    title: "Gatito 2",
  },
  {
    id: "kitty-3",
    pictureUrl: image3,
    title: "Gatito 3",
  },
  {
    id: "kitty-4",
    pictureUrl: image4,
    title: "Gatito 4",
  }
]