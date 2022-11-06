import axios from "axios";

const getPage = (currentPage) =>
  new Promise((resolve, reject) => {
    axios
      .get(`https://dummyjson.com/products?limit=20&skip=${currentPage * 20}`)
      .then((result) => {
        const products = result.data;
        resolve(products);
      })
      .catch(reject);
  });

export { getPage };
