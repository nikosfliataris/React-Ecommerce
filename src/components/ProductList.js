import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_Products, grid_view } = useFilterContext();
  if (filtered_Products.length < 1)
    return <h5>No products match your search</h5>;
  if (grid_view === false)
    return <ListView products={filtered_Products}></ListView>;
  return <GridView products={filtered_Products}></GridView>;
};

export default ProductList;
