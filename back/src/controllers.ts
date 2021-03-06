import { Payment } from './models';
import { Request, Response } from 'express';


const newPayment = async (req: Request, res: Response) => {
    const { body } = req; 
    try {
        const newPayment = new Payment(body);

        return res.status(201).json(await newPayment.save());
    } catch (error) {
        res.status(400).json(error);
    }
}

const listPayment = async (req: Request, res: Response) => {
    const limit: number = Number(req.query.limit) || 10;
    const page: number = Number(req.query.page) || 1;
    try {
        const listPayment = await Payment.paginate({ limit, page })
        
        return res.status(200).json(listPayment);
    } catch (error) {
        res.status(400).json(error);
    }

}

export { newPayment, listPayment }