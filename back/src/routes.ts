import server from 'express';
import { test } from './controllers';

const router = server.Router();

router.get('/test', test);
router.post('/test', test);


export default router;
