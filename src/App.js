import React from "react";
import Footer from "./components/Footer";
import MyInfo from "./components/MyInfo";
import Header from "./components/Header";
import "./style.css";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard contact={{ name: "Mr. Biggelsworth", job: "Sailor" }} />
      <ContactCard contact={{ name: "Whiskers", job: "Contruction Worker" }} />
      <ContactCard contact={{ name: "ButtFace", job: "Biker" }} />
    </div>
  );
}

export default App;
