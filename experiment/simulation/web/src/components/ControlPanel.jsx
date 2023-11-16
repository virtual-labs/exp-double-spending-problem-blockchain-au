import React from "react";
import RadioComponent from "./common/RadioComponent";
import { radioData } from "../Data";
import PlayerGround from "./PlayerGround";
import { RestartAlt } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateRetart } from "../redux/slices/doubleSpendingSlice";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const onHandleRestart = () => {
    dispatch(updateRetart());
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(170deg, rgb(56 68 139 / 59%) -70.38%, rgba(3, 124, 235, 0.00) 140.44%)",
        padding: 2,
        height: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            margin: 0,
            paddingBlock: 15,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontSize: 15,
            color: "black",
          }}
        >
          Double Spending
        </h4>
        <IconButton
          onClick={onHandleRestart}
          style={{ position: "absolute", right: 0, top: 2 }}
        >
          <Tooltip title="restart">
            <RestartAlt style={{ color: "#313b5e" }} color="#313b5e" />
          </Tooltip>
        </IconButton>
      </div>

      <div style={{ paddingTop: 15, marginBottom: 40 }}>
        <RadioComponent />
      </div>
      <div style={{ height: "80%" }}>
        <PlayerGround />
      </div>
    </div>
  );
};

export default ControlPanel;
