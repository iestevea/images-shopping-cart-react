import { PuppyApi } from "./puppies.api-model";
import image1 from 'assets/images/puppy_1.png';
import image2 from 'assets/images/puppy_2.png';
import image3 from 'assets/images/puppy_3.png';

export const mockPuppiesList: PuppyApi[] = [
  {
    id: "puppy-1",
    pictureUrl: image1,
    title: "Perrito 1",
  },
  {
    id: "puppy-2",
    pictureUrl: image2,
    title: "Perrito 2",
  },
  {
    id: "puppy-3",
    pictureUrl: image3,
    title: "Perrito 3",
  }
]