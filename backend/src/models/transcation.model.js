import mongoose from "mongoose";

const transcationSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["PENDING", "COMPLETE", "FAILED", "REFUNDED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const Transcation = mongoose.model("Transcation", transcationSchema);

export default Transcation;
