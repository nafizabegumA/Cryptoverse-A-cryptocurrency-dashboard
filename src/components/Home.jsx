import React from "react";
import milify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import Loader from "./Loader";

const Home = () => {
  const { data, isFetching, error } = useGetCryptosQuery(10);

console.log("API Data:", data);
console.log("Fetching Status:", isFetching);
console.log("Error:", error);

if (isFetching) return <Loader />;
if (error) return <p>Error fetching data...</p>;

const globalStats = data?.data?.stats;
console.log("Global Stats:", globalStats);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
  <Col span={12}>
    <Statistic title="Total Cryptocurrencies" value={globalStats?.total || "N/A"} />
  </Col>
  <Col span={12}>
    <Statistic title="Total Exchanges" value={globalStats?.totalExchanges ? milify(globalStats.totalExchanges) : "N/A"} />
  </Col>
  <Col span={12}>
    <Statistic title="Total Market Cap" value={globalStats?.totalMarketCap ? milify(globalStats.totalMarketCap) : "N/A"} />
  </Col>
  <Col span={12}>
    <Statistic title="Total 24h Volume" value={globalStats?.total24hVolume ? milify(globalStats.total24hVolume) : "N/A"} />
  </Col>
  <Col span={12}>
    <Statistic title="Total Markets" value={globalStats?.totalMarkets ? milify(globalStats.totalMarkets) : "N/A"} />
  </Col>
</Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
    </>
  );
};

export default Home;
