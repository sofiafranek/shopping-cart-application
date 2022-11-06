import axios from "axios";

const getProductsMatchingQuery = (query) =>
  new Promise((resolve, reject) => {
    axios
      .get(`https://dummyjson.com/products/search?q=${query}`)
      .then((result) => {
        const products = result.data;
        resolve(products);
      })
      .catch(reject);
  });

export { getProductsMatchingQuery };
