export interface Book {
  name: string;
  img_URL: any;
  auth: string;
  rating: string;
  buy_link: string;
  price: number;
  description: string;
}
export interface Title {
  Recommendations: string;
  Programming: string;
  Biography: string;
  Science: string;
  Fiction: string;
}
export interface Books {
  Recommendations: Book[];
  Programming: Book[];
  Biography: Book[];
  Science: Book[];
  Fiction: Book[];
}