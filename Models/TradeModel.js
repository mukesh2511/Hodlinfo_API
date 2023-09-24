import mongoose from "mongoose";
const { Schema } = mongoose;

// name, last, buy, Sell, volume, base_unit

const tradeSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
    buy: {
      type: String,
      required: true,
    },
    sell: {
      type: String,
      required: true,
    },
    volume: {
      type: String,
      required: true,
    },
    base_unit: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Trade", tradeSchema);
