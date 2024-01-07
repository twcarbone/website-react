import APIClient from "./apiClient";

export interface Product {
  id: number;
  sku: string;
  short_name: string;
  long_name: string;
  brand: string;
  description: string;
}

export default new APIClient<Product>("/products");
