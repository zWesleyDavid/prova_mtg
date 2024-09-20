<<<<<<< HEAD
import { Schema, Document } from 'mongoose';

export const DeckSchema = new Schema({
  commander: Object,
  deck: Array,
});

export interface DeckDocument extends Document {
  commander: any;
  deck: any[];
}
=======
import { Schema, Document } from 'mongoose';

export const DeckSchema = new Schema({
  commander: Object,
  deck: Array,
});

export interface DeckDocument extends Document {
  commander: any;
  deck: any[];
}
>>>>>>> c97005e54684d39103809c27e2c9aa6fbec032d4
