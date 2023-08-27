import { Image as IImage, Image } from "sanity";

export interface IProduct {
  title: string;
  _id: string;
  price: number;
  alt: string;
  slug: {
    current: string;
  };
  kind: {
    kind: string;
  };
  category: {
    category: string;
  };
  image: IImage;
}

export interface ICarousel {
  title: string;
  _id: string;
  price: number;
  alt: string;
  slug: {
    current: string;
  };
  image: IImage;
}

export interface CounterState {
  initialValue: number;
  items: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

export interface ICart {
  num: number;
  _id: string;
}

export interface IProductCart {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  totalPrice: number;
  subcat: string;
  image: Array<Image>;
  userId: string;
  quantity: number;
}
