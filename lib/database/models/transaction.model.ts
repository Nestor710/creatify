import { Document, Schema, model, models } from "mongoose";

interface ITransaction extends Document {
    createdAt?: Date;
    stripeId: string;
    amount: number;
    plan?: string;
    credits?: number;
    buyer?: string; // Assuming the ObjectId is represented as a string
}


const TransactionSchema = new Schema<ITransaction>(
    {
      stripeId: {
        type: String,
        required: true,
        unique: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      plan: {
        type: String,
      },
      credits: {
        type: Number,
      },
      buyer: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
        timestamps: true,
    }
);

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;