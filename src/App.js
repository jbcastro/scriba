import React from "react";
import ProductData from "./components/ProductData";
import Product from "./components/Product";

function App() {
  const productComponet = ProductData.map(item => (
    <Product key={item.id} product={item} />
  ));

  return <div>{productComponet}</div>;
}

export default App;

// function App() {
//   const productComponet = ProductData.map(product => (
//     <Product
//       key={product.id}
//       name={product.name}
//       description={product.description}
//       price={product.price}
//     />
//   ));

//   return <div>{productComponet}</div>;
// }

// import Footer from "./components/Footer";
// import MyInfo from "./components/MyInfo";
// import Header from "./components/Header";
// import "./style.css";
// import ContactCard from "./components/ContactCard";

// function App() {
//   return (
//     <div className="contacts">
//       <ContactCard contact={{ name: "Mr. Biggelsworth", job: "Sailor" }} />
//       <ContactCard contact={{ name: "Whiskers", job: "Contruction Worker" }} />
//       <ContactCard contact={{ name: "ButtFace", job: "Biker" }} />
//     </div>
//   );
// }
