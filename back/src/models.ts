import { Schema, model } from 'mongoose';
import mongoosePaginate, { paginate } from 'mongoose-paginate-v2';


const paymentSchema = new Schema(
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

const Payment = model('payment', paymentSchema);

export { Payment }