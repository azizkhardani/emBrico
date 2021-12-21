import { Router } from 'express';
import { getTest, getTestCount, getTeste, createTest, DeletTest, UpdateTest } from '../controllers/test'

const router = Router()

router.get('/test', getTest)
router.get('/test/coutnt', getTestCount)
router.get('/test/:id', getTeste)
router.post('/test', createTest)
router.delete('/test/:id', DeletTest)
router.put('/test/:id', UpdateTest)

export default router