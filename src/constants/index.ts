import image1 from "../assets/img1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export const cards = [
  {
    id: 1,
    title: "This is a one line title",
    description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
    image: image1,
    price: 1050,
    discount: 250,
    free: false,
    header: "When course has",
    extra:"Discount",
    time: "10 hour",
    like: "308",
    comment: "17",
  },
  {
    id: 2,
    title: "This is a one line title",
    description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
    image: image2,
    price: 750,
    discount: null,
    free: false,
    header: "When course has",
    extra:"No Discount",
    time: "10 hour",
    like: "308",
    comment: "17",
  },
  {
    id: 3,
    title: "This is a one line title",
    description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
    image: image3,
    price: 0,
    discount: null,
    free: true,
    header: "When course is",
    extra:"Free",
    time: "10 hour",
    like: "308",
    comment: "17",
  },
];
