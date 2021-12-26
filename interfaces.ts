interface bookTypes {
  name: string;
  img_URL: any;
  auth: string;
  rating: string;
  buy_link: string;
  price: number;
  description: string;
}
interface titleType {
  Recommendations: string;
  Programming: string;
  Biography: string;
  Science: string;
  Fiction: string;
}
export default interface types {
  Recommendations?: bookTypes[];
  Programming?: bookTypes[];
  Biography?: bookTypes[];
  Science?: bookTypes[];
  Fiction?: bookTypes[];
}
