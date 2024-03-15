import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  title: String,
  content: String,
  isComplete: Boolean,
});