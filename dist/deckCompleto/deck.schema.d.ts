import { Schema, Document } from 'mongoose';
export declare const DeckSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    deck: any[];
    commander?: any;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    deck: any[];
    commander?: any;
}>> & import("mongoose").FlatRecord<{
    deck: any[];
    commander?: any;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export interface DeckDocument extends Document {
    commander: any;
    deck: any[];
}
