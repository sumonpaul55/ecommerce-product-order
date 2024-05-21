export type TProductVariants = {
  size: number;
  color: string;
  style: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TProductVariants[];
  inventory: TInventory;
};
