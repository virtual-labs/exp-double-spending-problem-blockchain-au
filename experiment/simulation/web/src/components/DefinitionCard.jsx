import { PlayArrowRounded } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";

const DefinitionCard = ({ text, onClick, isConventional = false }) => {
  console.log(isConventional);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isConventional ? (
        <p
          style={{
            padding: 5,
            color: "white",
            fontFamily: "sans-serif",
            fontSize: 15,
            lineHeight: 1.4,
          }}
        >
          In a centralized banking system,When you make a payment or transfer
          money, the bank central authority keeps a ledger of all transactions.
          It ensures that you cannot spend the same money twice because it
          deducts the exact amount from your account when you make a payment.
          The bank has full control over the ledger and the ability to verify
          the authenticity of each transaction, so double spending is not a
          significant concern in this context.
        </p>
      ) : (
        <p
          style={{
            padding: 5,
            color: "white",
            fontFamily: "sans-serif",
            fontSize: 15,
            lineHeight: 1.4,
          }}
        >
          In a blockchain-based system, when you make a payment or transfer
          digital assets, the ledger is decentralized and distributed across a
          network of nodes. This technology ensures that you cannot spend the
          same digital assets twice because it records the transaction on a
          public ledger. The blockchain network collectively verifies the
          authenticity of each transaction, making it highly resistant to double
          spending, as there is no central authority controlling the ledger.
        </p>
      )}
      <Button
        style={{ width: "100px", backgroundColor: "white", height: 40 }}
        onClick={() => onClick(isConventional)}
      >
        <PlayArrowRounded />
        <p>Play</p>
      </Button>
    </div>
  );
};

export default DefinitionCard;
