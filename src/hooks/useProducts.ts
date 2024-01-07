import { useQuery } from "@tanstack/react-query";

import { CACHE_KEY_PRODUCTS } from "../constants";
import productService, { Product } from "../services/productService";

const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: CACHE_KEY_PRODUCTS,
    queryFn: productService.getAll,
  });
};

export default useProducts;
