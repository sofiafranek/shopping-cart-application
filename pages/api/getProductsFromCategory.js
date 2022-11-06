import axios from "axios";

const getProductsFromCategory = (category) =>
  new Promise((resolve, reject) => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((result) => {
        const categories = result.data;
        resolve(categories);
      })
      .catch(reject);
  });

export { getProductsFromCategory };
