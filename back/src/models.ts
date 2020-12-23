import { Schema, model, Document, PaginateModel } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface IPaymnet extends Document {
    creator: string;
    kind: string;
    amountCurrencyCode: string;
    amountValue: number;
    status: string;
    provider: string;
};

const paymentSchema: Schema = new Schema(
    {
        creator: {
            type: String,
            required: true
        },
        kind: {
            type: String,
            required: true
        },
        amountCurrencyCode: {
            type: String,
            default: 'USD'
        },
        amountValue: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        provider: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

paymentSchema.plugin(mongoosePaginate);
interface PaymnetModel<T extends Document> extends PaginateModel<T> { }

const Payment: PaymnetModel<IPaymnet> = model<IPaymnet>('payment', paymentSchema);

export { Payment }