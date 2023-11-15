import React, { useEffect, useRef } from "react";
import { Html, Line, Text } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

import { useDispatch, useSelector } from "react-redux";
import {
  startAnimation,
  updateInstruction,
  updateIsCancel,
  updateLedger,
  updateRquest,
  updateShowAlert,
} from "../../redux/slices/doubleSpendingSlice";
import { Snackbar } from "@mui/material";
const Ledger = () => {
  const dispatch = useDispatch();

  const { instructionMessage } = useSelector(
    (state) => state.DoubleSpendingReducer
  );

  const onHandleClick = () => {
    dispatch(updateShowAlert(true));
  };
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        background: "#ffffff10",
        paddingInline: 10,
      }}
    >
      <h4
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {" "}
        Process
      </h4>
      {instructionMessage.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 5,
              marginLeft: 3 * index,
            }}
          >
            <div
              style={{
                display: "flex",
                margin: 0,

                flexDirection: "row",
              }}
            >
              <p
                style={{
                  marginInline: 2,
                  marginBlock: 0,
                  color: "white",
                  display: "flex",
                }}
              >
                {index + 1} {"   "}
                <span>.</span>
              </p>
              <p style={{ marginInline: 4, marginBlock: 0, color: "yellow" }}>
                {item}
              </p>
            </div>
            {index === 3 && (
              <button
                onClick={onHandleClick}
                style={{
                  width: 150,
                  padding: 3,
                  marginTop: 15,
                }}
              >
                Cancel Request
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Ledger;
