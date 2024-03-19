import { Document } from 'mongoose';

export interface Todo extends Document {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly isComplete: boolean;
}
