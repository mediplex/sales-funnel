interface Shop {
  items: [];
}

interface Offer {
  highlighted: boolean;
  grade: string;
  productName: string;
  currentPrice: number;
  oldPrice: number;
  currency: string;
  discountPhrase: string;
  quantity: number;
}
