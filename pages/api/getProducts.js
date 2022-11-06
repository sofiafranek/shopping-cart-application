import axios from "axios";

const getProducts = () =>
  new Promise((resolve, reject) => {
    axios
      .get("https://dummyjson.com/products?limit=20")
      .then((result) => {
        const products = result.data;
        resolve(products);
      })
      .catch(reject);
  });

export { getProducts };
