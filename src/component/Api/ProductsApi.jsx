import store from "../../redux/store";
import { getProducts } from "../../redux/actions/productsActions";

export const getProductData = async () => {
  console.log("produtsApi");
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => {
//       console.log(res.json());
//       store.dispatch(getProducts(res.json))
//     })
fetch('https://fakestoreapi.com/products').then(function (res) {
  return res.json();
}).then(function (json) {
    store.dispatch(getProducts(json));
});
    // .then((json) => store.dispatch(getProducts(json)));
};
