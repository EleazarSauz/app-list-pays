import { Schema, model, Document } from 'mongoose';

import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';

type Payment = Document & {
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

paymentSchema.plugin(mongoosePagination);

const Payment: Pagination<Payment> = model<Payment, Pagination<Payment>>('payments', paymentSchema);

export { Payment }