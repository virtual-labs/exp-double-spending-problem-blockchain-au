import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  onHandleChangeVerifer,
  onHandlePlayBlokChain,
  sendMoneyToReceiver,
  sendReceiverName,
  startAnimation,
  transactionProgresing,
  updateBalance,
  updateBalanceBlockChain,
  updateClickTime,
  updateInstruction,
  updateIsCancel,
  updateLedger,
  updateLedgerAnimation,
  updateRetart,
  waitingStart,
} from "../redux/slices/doubleSpendingSlice";
import React, { useEffect, useState } from "react";
import DefinitionCard from "./DefinitionCard";
import { Oval } from "react-loader-spinner";

const PlayerGround = () => {
  const {
    userDetails,
    userBalance,
    playBlockChain,
    showCard,
    isTransactionProgressing,
    showSideOption,

    instructionMessage,

    radioClicked,
    clickedTime,
    userBalanceBlockChain,
    isRestart,
  } = useSelector((state) => state.DoubleSpendingReducer);

  const [state, setState] = useState({
    receiver: "",
    amount: 0,
    isErr: false,
    isAmountErr: false,
    showCard: false,
    id: 1,
    clickedTime: 0,
  });
  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value.toUpperCase(),
    }));
  };
  const onHandleSend = () => {
    if (state.receiver !== "" && state.amount > "0") {
      const newReceiver = {
        id: state.id,
        receiverName: state.receiver,
        amount: Number(state.amount),
      };
      setState((prev) => ({
        ...prev,
        isErr: false,
        isAmountErr: false,
        id: state.id + 1,
      }));
      if (radioClicked === "conventional") {
        dispatch(
          updateInstruction([
            ...instructionMessage,
            `Ram has chosen to transmit ${state.amount} rupees to ${state.receiver} by means of a Demand Draft (DD).`,
          ])
        );
        dispatch(updateLedger(true));
        dispatch(sendReceiverName(state.receiver));
        dispatch(sendMoneyToReceiver(newReceiver));
        dispatch(transactionProgresing());
        dispatch(updateBalance(state.amount));
        dispatch(startAnimation());
      } else {
        if (["B", "C", "D", "E"].includes(state.receiver)) {
          dispatch(sendReceiverName(state.receiver));
          dispatch(
            updateBalanceBlockChain(userBalanceBlockChain - state.amount)
          );
          dispatch(sendMoneyToReceiver(newReceiver));
          dispatch(waitingStart(true));
          dispatch(transactionProgresing());
          dispatch(updateLedgerAnimation(false));
          dispatch(onHandleChangeVerifer("W"));
          dispatch(updateClickTime(clickedTime + 1));

          if (clickedTime >= 1) {
            dispatch(
              updateInstruction([
                `Intially there will be five users, with each block repersenting distinct blocks in the blockchain `,
                `A initiates a transfer of  Rs ${state.amount}  to ${state.receiver}`,
              ])
            );
          } else {
            dispatch(
              updateInstruction([
                ...instructionMessage,
                `A initiates a transfer of  Rs ${state.amount}  to ${state.receiver}`,
              ])
            );
          }
        } else {
          setState((prev) => ({
            ...prev,
            isErr: true,
          }));
        }
      }
    }
    if (state.receiver === "") {
      setState((prev) => ({
        ...prev,
        isErr: true,
      }));
    }
    if (state.amount === 0) {
      setState((prev) => ({
        ...prev,
        isAmountErr: true,
      }));
    }
  };
  console.log(state.amount);
  const onHandlePlay = () => {
    if (radioClicked !== "conventional") {
      dispatch(
        onHandlePlayBlokChain({
          setType: "playBlockChain",
          showCard: true,
        })
      );
      dispatch(
        updateInstruction([
          ...instructionMessage,
          `Intially there will be five users, with each block repersenting distinct blocks in the blockchain `,
        ])
      );
    } else {
      dispatch(
        onHandlePlayBlokChain({
          setType: "conventional",
          showCard: true,
        })
      );
    }
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      isAmountErr: false,
      receiver: "",
      amount: 0,
      isErr: false,
    }));
  }, [radioClicked, isRestart]);
  console.log(state.isAmountErr, state.isErr);
  return (
    <div
      style={{
        paddingBlock: 15,
        paddingInline: 10,
        borderWidth: 5,
      }}
    >
      {showCard ? (
        showSideOption ? (
          <div
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderBlockColor: "#1BFAFF",
              position: "relative",
              borderInlineColor: "#1bfaff",
            }}
          >
            <div
              style={{
                position: "absolute",
                background: "#313b5d",
                top: -25,
                left: "35%",
                width: 100,
                padding: 3,
                display: "flex",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <p style={{ fontSize: 15, color: "white" }}>User Account</p>
            </div>
            <Card
              style={{
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    width: "100%",
                    paddingBlock: 15,
                  }}
                >
                  {radioClicked !== "conventional" && (
                    <div style={{ display: "flex" }}>
                      <Typography sx={{ color: "white", fontSize: 15 }}>
                        Balance :{"     "}
                      </Typography>
                      <Typography
                        sx={{ color: "yellow", fontWeight: 800, fontSize: 16 }}
                      >
                        {"      "}
                        {userBalanceBlockChain} ₹
                      </Typography>
                    </div>
                  )}

                  <div style={{ display: "flex" }}>
                    <Typography sx={{ color: "white", fontSize: 15 }}>
                      Sender :{"  "}
                    </Typography>
                    <Typography
                      sx={{ color: "yellow", fontWeight: 800, fontSize: 16 }}
                    >
                      {" "}
                      {radioClicked === "conventional" ? "Ram" : " A"}
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      marginBlock: 2,
                    }}
                  >
                    <label style={{ color: "white" }}>Receiver</label>
                    <input
                      name="receiver"
                      value={state.receiver}
                      style={{
                        padding: 10,
                        border: "none",
                        outline: "none",
                        marginBlock: 5,
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        width: 240,
                      }}
                      placeholder="Receiver"
                      onChange={onHandleChange}
                    />
                    {state.isErr && radioClicked !== "conventional" && (
                      <span style={{ color: "red" }}>
                        {!["B", "C", "D", "E"].includes(state.receiver) &&
                          "Please Enter valid reciver name (B,C,D,E)"}
                      </span>
                    )}
                    {state.isErr && radioClicked === "conventional" && (
                      <span style={{ color: "red" }}>
                        Please enter receiver name
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      marginBlock: 2,
                    }}
                  >
                    <label style={{ color: "white" }}>Amount</label>
                    <input
                      name="amount"
                      value={state.amount}
                      type="number"
                      style={{
                        padding: 10,
                        border: "none",
                        outline: "none",
                        marginBlock: 5,
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        width: 240,
                      }}
                      placeholder="Amount"
                      onChange={onHandleChange}
                    />
                    {state.isAmountErr && (
                      <span style={{ color: "red" }}>
                        Amount should be greater than 0
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardActions>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <button
                    disabled={isTransactionProgressing}
                    style={{
                      backgroundColor: "#64aed0",
                      border: "none",
                      padding: 10,
                      borderRadius: 20,
                      width: "120px",
                      marginBottom: 10,
                      color: "white",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                    onClick={onHandleSend}
                  >
                    {isTransactionProgressing ? (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Oval
                          height={15}
                          width={15}
                          color="yellow"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                          ariaLabel="oval-loading"
                          secondaryColor="yellow"
                          strokeWidth={2}
                          strokeWidthSecondary={2}
                        />
                        <span style={{ marginLeft: 5 }}>processing</span>
                      </div>
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </CardActions>
            </Card>
          </div>
        ) : (
          <></>
        )
      ) : radioClicked !== "conventional" ? (
        <DefinitionCard onClick={onHandlePlay} />
      ) : (
        <DefinitionCard onClick={onHandlePlay} isConventional={true} />
      )}
    </div>
  );
};

export default PlayerGround;
