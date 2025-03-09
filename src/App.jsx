import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import { Navbar, CryptoDetails, Cryptocurrencies, Home } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout> {/* Keep Layout here, but wrap only the content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          </Routes>
        </Layout>

        <div className="footer">
          <h1 className="footer-heading">
            Beyond the Banks: The Rise of Cryptocurrency <br />
          </h1>
        </div>
      </div>
    </div>
  );
};


export default App;
