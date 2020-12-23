import server from 'express';
import { newPayment, listPayment } from './controllers';

const router = server.Router();

router.post('/payment', newPayment);

router.get('/payment', listPayment);


export default router;
