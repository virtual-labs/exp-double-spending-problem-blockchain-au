import React, { useEffect, useState } from "react";
import ThreeComponent from "./Three/ThreeComponent";
import ControlPanel from "./ControlPanel";
import { useDispatch, useSelector } from "react-redux";
import {
  onHandleChangeVerifer,
  transactionProgresingStop,
  updateInstruction,
  updateLedgerAnimation,
  updateSelectedColor,
  waitingStart,
} from "../redux/slices/doubleSpendingSlice";

const MainContainer = () => {
  const {
    receiverName,
    verifierName,
    selectedColor,
    waiting,
    radioClicked,
    showCard,
    clickedTime,
    userBalanceBlockChain,
    instructionMessage,
  } = useSelector((state) => state.DoubleSpendingReducer);
  const dispatch = useDispatch();
  const { sender, receiver, verifier } = selectedColor;
  const [state, setState] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const message =
    receiverName === "B"
      ? `One among C,D,E is required to verify the transaction while A and ${receiverName} waits `
      : receiverName === "C"
      ? `One among ,B,D,E is required to verify the transaction while A and ${receiverName} waits`
      : receiverName === "D"
      ? `One among B,C,E is required to verify the transaction while A and ${receiverName} waits`
      : receiverName === "E"
      ? `One among B,C,D is required to verify the transaction while A and ${receiverName} waits`
      : "";
  const messagebtn =
    receiverName === "B"
      ? ["C", "D", "E"]
      : receiverName === "C"
      ? ["B", "D", "E"]
      : receiverName === "D"
      ? ["B", "C", "E"]
      : receiverName === "E"
      ? ["B", "C", "D"]
      : "";

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    const newvalue = {
      ...selectedColor,
      [name]: value,
    };
    dispatch(updateSelectedColor(newvalue));
  };
  useEffect(() => {
    let timer;

    if (waiting && radioClicked !== "conventional") {
      timer = setTimeout(() => {
        dispatch(updateInstruction([...instructionMessage, message]));
        setState(true);
        setDisableBtn(false);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [waiting]);
  useEffect(() => {
    let timer;

    if (state && radioClicked !== "conventional") {
      timer = setTimeout(() => {
        dispatch(
          updateInstruction([
            ...instructionMessage,
            "select from one of the three option to act as the verifier    ",
          ])
        );
        setState(true);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [state]);

  const onHandleClick = (name) => {
    console.log(clickedTime);
    dispatch(onHandleChangeVerifer(name));
    dispatch(
      updateInstruction([
        ...instructionMessage,
        `User-${name} Verifing the transaction.... `,
      ])
    );
    setTimeout(() => {
      dispatch(
        updateInstruction([
          ...instructionMessage,
          `User-${name} Verify the transaction to ensure it's valid and conforms to the network's rules, such as having sufficient funds in your account to make the transfer.`,
        ])
      );
    }, 2000);
    setTimeout(() => {
      if (userBalanceBlockChain < 0) {
        dispatch(
          updateInstruction([
            ...instructionMessage,
            `During the verification process, User-${name} detects that User A's account has insufficient balance to cover the transaction amount. `,
            `User-${name} concludes that the transaction should be rejected due to insufficient balance, and they communicate this decision to the network.`,
            `The majority of nodes agree with User-${name}'s verification and reject the transaction. This consensus is crucial to prevent fraudulent or invalid transactions from being added to the ledger..`,
          ])
        );
        dispatch(updateLedgerAnimation(false));
      } else {
        dispatch(updateLedgerAnimation(true));
        dispatch(transactionProgresingStop());
        dispatch(
          updateInstruction([
            ...instructionMessage,
            `User-${name} confirms that the sender has enough balance to cover the transaction, the transaction is considered valid.`,
          ])
        );
      }

      dispatch(waitingStart(false));
      setState(false);
    }, 7000);

    setDisableBtn(true);
  };
  const display = radioClicked !== "conventional" && showCard ? 0.5 : 0.8;

  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <div style={{ flex: display, position: "relative" }}>
        <ThreeComponent />
      </div>
      {radioClicked !== "conventional" && showCard && (
        <div style={{ flex: 0.3, backgroundColor: "#1d273a" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  padding: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  paddingBlock: 15,
                  width: "150px",
                  marginTop: 25,
                  borderWidth: 1,
                  borderColor: "yellow",
                  borderStyle: "dashed",
                  marginRight: 5,
                }}
              >
                <h4 style={{ color: "white", textTransform: "capitalize" }}>
                  custom color
                </h4>
                <div style={{ padding: 2 }}>
                  <span style={{ color: "yellow", marginRight: 5 }}>
                    Sender :
                  </span>
                  <input
                    onChange={onHandleChange}
                    value={sender}
                    type="color"
                    name="sender"
                  />
                </div>
                <div style={{ padding: 2 }}>
                  <span style={{ color: "yellow", marginRight: 5 }}>
                    Receiver :
                  </span>
                  <input
                    onChange={onHandleChange}
                    value={receiver}
                    name="receiver"
                    type="color"
                  />
                </div>
                <div v>
                  <span style={{ color: "yellow", marginRight: 5 }}>
                    Verifier :
                  </span>
                  <input
                    onChange={onHandleChange}
                    value={verifier}
                    name="verifier"
                    type="color"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <h4
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontFamily: "sans-serif",
                  }}
                >
                  Steps
                </h4>
                <div style={{ paddingLeft: 50 }}>
                  {instructionMessage.map((item, index) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBlock: 9,
                          fontFamily: "sans-serif",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          <span style={{ color: "yellow" }}>
                            {index + 1}
                            <span>)</span>
                          </span>
                          <p
                            style={{
                              color: "yellow",
                              marginBlock: 0,
                              marginInline: 3,
                              textAlign: "start",
                            }}
                          >
                            {item}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%",
                            marginBlock: 5,
                          }}
                        >
                          {index === 3 &&
                            messagebtn.map((item) => {
                              return (
                                <div>
                                  <button
                                    style={{
                                      width: 50,
                                      background: disableBtn
                                        ? item !== verifierName
                                          ? "grey"
                                          : "white"
                                        : "white",
                                      color: "black",
                                      borderRadius: 20,
                                      border: "none",
                                      marginInline: 2,
                                    }}
                                    onClick={() => onHandleClick(item)}
                                    disabled={
                                      disableBtn ? item !== verifierName : false
                                    }
                                  >
                                    {item}
                                  </button>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ flex: 0.2 }}>
        <ControlPanel />
      </div>
    </div>
  );
};

export default MainContainer;
