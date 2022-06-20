import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { customblockchainportfolio, dexportfolio, marketplaceportfolio, mintingsiteportfolio, cryptowalletportfolio, stakingportfolio, botportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* custom blockchain */}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Blockchain Explorer - Layer1 </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {customblockchainportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        {/* dex portfolio */}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> DEX </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {dexportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        {/* NFT marketplace portfolio */}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> NFT marketplace </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {marketplaceportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        {/* NFT minting site portfolio */}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> NFT minting </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {mintingsiteportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        {/* NFT staking */}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> NFT staking </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {stakingportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        {/* crypto wallet portfolio */}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Crypto Wallet </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {cryptowalletportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        {/* Bot */}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Bot </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {botportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        {/* websites */}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Websites </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {dexportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        {/* Mobile */}
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Mobile </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {dexportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>              
      </Container>
    </HelmetProvider>
  );
};
