import image1 from './images/serviceimage/dread lock.jpg'
import image2 from './images/serviceimage/facetreatment.jpg'
import image3 from './images/serviceimage/haircut.jpg'
import image4 from './images/serviceimage/hairdye.jpg'
import image5 from './images/serviceimage/hairtwistlock.jpg'
import image6 from './images/serviceimage/nails treatment.jpg'
import image7 from './images/serviceimage/scalp.jpg'
import image8 from './images/serviceimage/waves.jpg'
import { nanoid } from "nanoid";

export const services = [
  {
    id: nanoid(),
    service: "Hair Cut",
    description: "Hair treatment and cut",
    image: image3,
  },
  {
    id: nanoid(),
    service: "Hair Trim",
    description: "Hair trimming and styling",
    image: image3,
  },
  {
    id: nanoid(),
    service: "Hair Dye",
    description: "Hair coloring and dyeing",
    image: image4,
  },
  {
    id: nanoid(),
    service: "Beard Trim",
    description: "Beard grooming and trim",
    image: image3
  },
  {
    id: nanoid(),
    service: "DreadLock",
    description: "Dreadlock styling and maintenance",
    image: image1,
  },
  {
    id: nanoid(),
    service: "Face Treatment",
    description: "Facial cleansing and care",
    image: image2,
  },
  {
    id: nanoid(),
    service: "Nails Treatment",
    description: "Nail care and polish",
    image: image6,
  },
  {
    id: nanoid(),
    service: "Braiding/Twisting",
    description: "Hair braiding and styling",
    image: image5,
  },
  {
    id: nanoid(),
    service: "Sportin Waves",
    description: "Sportin Waves styling",
    image: image8,
  },
  {
    id: nanoid(),
    service: "Scalp Treatment",
    description: "Scalp care and treatment",
    image: image7,
  },
];