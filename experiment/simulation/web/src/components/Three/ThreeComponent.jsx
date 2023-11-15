import React from "react";
import Scene from "./Scene";
import Ledger from "./Ledger";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Backdrop, Button, Card, Snackbar } from "@mui/material";
import {
  resetAnimation,
  startAnimation,
  updateInstruction,
  updateRquest,
  updateShowAlert,
  updateStopAnimation,
} from "../../redux/slices/doubleSpendingSlice";
import CommonCard from "../CommonCard";
import { Html } from "@react-three/drei";
const ThreeComponent = () => {
  const dispatch = useDispatch();
  const { showLedger, showCancelAlert } = useSelector(
    (state) => state.DoubleSpendingReducer
  );
  const onHanldeConfirm = () => {
    dispatch(startAnimation());
    dispatch(updateRquest("cancel"));
    dispatch(updateInstruction([]));
    dispatch(updateShowAlert(false));
  };
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Snackbar
        open={showCancelAlert}
        severity="info"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Confirm the cancellation of the DD request?
          <div
            style={{ marginTop: 10, display: "flex", justifyContent: "center" }}
          >
            <button
              onClick={onHanldeConfirm}
              style={{ width: 150, padding: 2 }}
            >
              Confirm
            </button>
          </div>
        </Alert>
      </Snackbar>
      <Scene />
      {showLedger && <Ledger />}
    </div>
  );
};

export default ThreeComponent;
