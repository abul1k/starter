import React, { useEffect, useState } from "react";

// react-redux
import { useDispatch, useSelector } from "react-redux";

// product's actions
import { createProduct, getProduct } from "../../feature/products/actions";

// utils
import { productFilter } from "../../utils/filter";

const Products = () => {
  const dispatch = useDispatch();
  const { list, isLoading } = useSelector((state) => state.products);
  const [filter] = useState({ limit: 10, offset: 0 });

  useEffect(() => {
    dispatch(getProduct(productFilter(filter.limit, filter.offset)));
  }, [dispatch, filter]);

  const handleCreat = () => {
    const product = {
      title: "Abula",
      price: 10,
      description: "A description",
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"],
    };
    dispatch(createProduct(product));
  };

  return (
    <div style={{ marginTop: 50 }}>
      Products: {isLoading ? "Loading..." : list.length}
      {list && list.map((item) => <button key={item.id}>{item.title}</button>)}
      <button onClick={handleCreat}>create</button>
    </div>
  );
};

export default Products;
