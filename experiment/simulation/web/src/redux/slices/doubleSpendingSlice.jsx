import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  radioClicked: "conventional",
  userDetails: [],
  userBalance: 0,
  receiverAmt: 0,
  sendAnmiation: false,
  playBlockChain: "conventional",
  showCard: false,
  resetTheAnimation: false,
  isTransactionProgressing: false,
  receiverName: "",
  showLedger: false,
  transactionError: false,
  showSideOption: false,
  isLoadingReceipt: false,
  enableAlerts: false,
  moneySendToReciver: false,
  isCancelation: false,
  isReturnAmt: false,
  instructionMessage: [],
  // =================== conventional
  isAnimating: false,
  animationProgress: 0,
  showGlowCube: true,
  waiting: false,
  task: true,
  request: "normal",
  // ===============blockchain
  selectedColor: {
    sender: "#008000",
    receiver: "#ddddff",
    verifier: "#FFFF00",
  },
  verifierName: "",
  showLedgerAnimation: false,
  clickedTime: 0,
  isRestart: false,
  userBalanceBlockChain: 100,
  showCancelAlert: false,
};

const DoubleSpendingReducer = createSlice({
  name: "BlockChainDetails",
  initialState,
  reducers: {
    updateRadionChange: (state, action) => {
      state.radioClicked = action.payload;
      state.showCard = false;
      state.showLedger = false;
      state.instructionMessage = [];
      state.userBalance = 0;
      state.isTransactionProgressing = false;
      state.userDetails = [];
      state.waiting = false;
      state.selectedColor = {
        sender: "#008000",
        receiver: "#ddddff",
        verifier: "#FFFF00",
      };
      state.receiverName = "";
      state.verifierName = "";
      state.showLedgerAnimation = false;
      state.clickedTime = 0;
      state.isRestart = false;
      state.userBalanceBlockChain = 100;
    },
    updateRetart: (state, action) => {
      state.radioClicked = "conventional";
      state.showCard = false;
      state.showLedger = false;
      state.instructionMessage = [];
      state.userBalance = 0;
      state.isTransactionProgressing = false;
      state.waiting = false;
      state.userDetails = [];
      state.isRestart = true;
      state.isAnimating = false;
      state.animationProgress = 0;
      state.showGlowCube = true;
      state.waiting = false;
      state.task = true;
      state.request = "normal";
      state.selectedColor = {
        sender: "#008000",
        receiver: "#ddddff",
        verifier: "#FFFF00",
      };
      state.receiverName = "";
      state.verifierName = "";
      state.showLedgerAnimation = false;
      state.clickedTime = 0;
      state.isRestart = false;
      state.userBalanceBlockChain = 100;
    },
    sendMoneyToReceiver: (state, action) => {
      state.userDetails = [...state.userDetails, action.payload];
      state.receiverAmt = action.payload.amount;
      state.sendAnmiation = true;
      state.verifierName = "";
    },
    sendReceiverName: (state, action) => {
      state.receiverName = action.payload;
    },
    onHandlePlayBlokChain: (state, action) => {
      state.playBlockChain = action.payload.setType;
      state.showCard = action.payload.showCard;
    },
    transactionProgresing: (state, action) => {
      state.isTransactionProgressing = true;
    },
    onEnableAlerts: (state, action) => {
      state.enableAlerts = true;
    },
    UpdateMoneySendToReciver: (state, action) => {
      state.moneySendToReciver = action.payload;
    },
    transactionProgresingStop: (state, action) => {
      state.isTransactionProgressing = false;
    },
    updateBalance: (state, action) => {
      state.userBalance = action.payload;
    },
    updateBalanceBlockChain: (state, action) => {
      state.userBalanceBlockChain = action.payload;
    },
    resetAnimation: (state, action) => {
      state.resetTheAnimation = action.payload;
    },
    updateStopAnimation: (state, action) => {
      state.sendAnmiation = action.payload;
    },
    updateLedger: (state, action) => {
      state.showLedger = action.payload;
    },
    updateTranscationError: (state, action) => {
      state.transactionError = action.payload;
    },
    updateShowSideOption: (state, action) => {
      state.showSideOption = action.payload;
    },

    updateInstruction: (state, action) => {
      state.instructionMessage = action.payload;
    },
    startAnimation: (state) => {
      state.isAnimating = true;
      state.showGlowCube = true;
      state.animationProgress = 0;
    },
    stopAnimation: (state) => {
      state.isAnimating = false;
      state.animationProgress = 0;
      state.showGlowCube = false;
    },
    updateAnimationProgress: (state, action) => {
      state.animationProgress = action.payload;
    },
    waitingStart: (state, action) => {
      state.waiting = action.payload;
    },
    updateClickTime: (state, action) => {
      state.clickedTime = action.payload;
    },
    updateTask: (state, action) => {
      state.task = action.payload;
    },
    updateRquest: (state, action) => {
      state.request = action.payload;
    },
    updateSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    onHandleChangeVerifer: (state, action) => {
      state.verifierName = action.payload;
    },
    updateLedgerAnimation: (state, action) => {
      state.showLedgerAnimation = action.payload;
    },
    updateShowAlert: (state, action) => {
      state.showCancelAlert = action.payload;
    },
  },
});

export const {
  updateShowAlert,
  returnAmount,
  updateRadionChange,
  sendMoneyToReceiver,
  onHandlePlayBlokChain,
  updateShowSideOption,
  updateBalance,
  updateBalanceBlockChain,
  transactionProgresing,
  resetAnimation,
  updateTranscationError,
  updateLedger,
  transactionProgresingStop,
  sendReceiverName,
  updateStopAnimation,
  onEnableAlerts,
  UpdateMoneySendToReciver,
  updateIsCancel,
  updateInstruction,
  // =============
  startAnimation,
  stopAnimation,
  updateAnimationProgress,
  waitingStart,
  updateRetart,
  updateTask,
  updateRquest,
  updateSelectedColor,
  onHandleChangeVerifer,
  updateLedgerAnimation,
  updateClickTime,
} = DoubleSpendingReducer.actions;

export default DoubleSpendingReducer.reducer;
