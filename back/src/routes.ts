import server from 'express';
import { payment } from './controllers';

const router = server.Router();

router.post('/payment', payment);


export default router;
