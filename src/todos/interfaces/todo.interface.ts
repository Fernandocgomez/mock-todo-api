import { Document } from 'mongoose';

export interface Todo extends Document {
  readonly title: string;
  readonly content: string;
  readonly isComplete: boolean;
}
