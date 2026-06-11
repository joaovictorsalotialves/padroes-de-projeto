import type { Router } from 'express'
import { AddTaskController } from '../../../controllers/task/addTask'
import { DateValidatorAdapter } from '../../../dateValidadeAdapter'
import { expressRouteAdapter } from '../../../expressRouteAdapter'

export default (router: Router): void => {
  const dateValidadeAdapter = new DateValidatorAdapter()
  const addTaskController = new AddTaskController(dateValidadeAdapter)
  router.post('/tasks', expressRouteAdapter(addTaskController))
}
