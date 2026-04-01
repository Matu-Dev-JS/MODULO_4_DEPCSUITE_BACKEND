import {Router} from 'express'
import authMiddleware from '../middlewares/auth.middleware.js'
import taskMiddleware from '../middlewares/task.middleware.js'
import taskController from '../controllers/task.controller.js'

const taskRouter = Router()

taskRouter.patch(
    '/:user_id/:task_id/status', 
    authMiddleware(), 
    taskMiddleware,
    taskController.updateStatus
)


export default taskRouter