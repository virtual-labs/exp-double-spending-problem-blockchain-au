import { Backdrop, Card } from "@mui/material";
import Lottie from "lottie-react";
import React, { useEffect } from "react";
import done from "../Data/done.json";
import error from "../Data/error.json";
import doneAudio from "../assets/audio/done.mp3";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAnimation,
  updateStopAnimation,
} from "../redux/slices/doubleSpendingSlice";

const CommonCard = () => {
  const { resetTheAnimation, transactionError } = useSelector(
    (state) => state.DoubleSpendingReducer
  );
  const dispatch = useDispatch();
  const onClickClose = () => {
    dispatch(resetAnimation(false)), dispatch(updateStopAnimation());
  };
  useEffect(() => {
    console.log("loading");
    if (resetTheAnimation && !transactionError) {
      const audio = new Audio(doneAudio);
      audio.play();
    }
  }, [resetTheAnimation, transactionError]);
  console.log(transactionError);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={resetTheAnimation}
      onClick={onClickClose}
    >
      <Card style={{ width: 200, height: 250 }}>
        {transactionError ? (
          <>
            <Lottie animationData={error} loop={false} size={50} />
            <p style={{ fontSize: 16, textAlign: "center", fontWeight: 800 }}>
              Transaction Failed
            </p>
          </>
        ) : (
          <>
            <Lottie animationData={done} loop={false} size={50} />
            <p style={{ fontSize: 16, textAlign: "center", fontWeight: 800 }}>
              Transaction Succesfully
            </p>
          </>
        )}
      </Card>
    </Backdrop>
  );
};

export default CommonCard;
