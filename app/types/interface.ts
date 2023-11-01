// for newest product
export interface simplifiedProduct {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
}

// product data
export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
}
