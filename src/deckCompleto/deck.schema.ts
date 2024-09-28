import { Schema, Document } from 'mongoose';

export const DeckSchema = new Schema({
  commander: { type: Object, required: true },
  deck: { type: Array, required: true },
});

export interface DeckDocument extends Document {
  commander: any;
  deck: any[];
}
