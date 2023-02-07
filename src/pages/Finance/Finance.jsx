import React from "react";
import "./Finance.style.css";
import PageHeading from "../../components/PageHeading/PageHeading.jsx";
import TextContainer from "../../components/TextContainer/TextContainer.jsx";
import { FinanceData } from "../../constants/FinanceData";

const Finance = () => {
  return (
    <div className="FinanceParent">
      <PageHeading heading="Finance" />
      <h2 style={{ textAlign: "center" }}>
        IT IS MAINTAINED BY BOARD OF TRUST
      </h2>
      <TextContainer
        heading={FinanceData[0].heading}
        description={FinanceData[0].description}
      />
    </div>
  );
};

export default Finance;
