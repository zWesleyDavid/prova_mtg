import { Schema, Document } from 'mongoose';

export const DeckSchema = new Schema({
  commander: Object,
  deck: Array,
});

export interface DeckDocument extends Document {
  commander: any;
  deck: any[];
}
