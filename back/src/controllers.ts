import { Payment } from './models';

const payment = async (req, res) => {

    try {
        const newPayment = new Payment(req.body);

        return res.status(201).json(await newPayment.save());
    } catch (e) {
        res.status(500).json(e);
    }
}

export { payment }