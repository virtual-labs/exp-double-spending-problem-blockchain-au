import * as React from "react";
import Radio from "@mui/material/Radio";
import { useDispatch, useSelector } from "react-redux";
import {
  updateRadionChange,
  updateShowSideOption,
} from "../../redux/slices/doubleSpendingSlice";
import { Typography, colors } from "@mui/material";

export default function RadioButtons() {
  const { radioClicked } = useSelector((state) => state.DoubleSpendingReducer);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(updateRadionChange(event.target.value));
    dispatch(updateShowSideOption(true));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Radio
          checked={radioClicked === "conventional"}
          onChange={handleChange}
          value="conventional"
          name="radio-buttons"
          sx={{
            color: colors.blue[500],
            "&.Mui-checked": {
              color: colors.blue[600],
            },
          }}
        />
        <Typography
          style={{
            color: "white",
          }}
        >
          Conventional
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Radio
          checked={radioClicked === "blockChain"}
          onChange={handleChange}
          value="blockChain"
          name="radio-buttons"
          sx={{
            color: colors.blue[500],
            "&.Mui-checked": {
              color: colors.blue[600],
            },
          }}
        />
        <Typography
          style={{
            color: "white",
          }}
        >
          BlockChain
        </Typography>
      </div>
    </div>
  );
}
