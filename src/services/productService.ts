import APIClient from "./apiClient";

export interface Product {
  id: number;
  sku: string;
  shortName: string;
  longName: string;
  brand: string;
  description: string;
}

export default new APIClient<Product>("/products");
