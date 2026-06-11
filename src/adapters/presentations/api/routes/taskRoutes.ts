import type { Router } from 'express'
import { expressRouteAdapter } from '../../../expressRouteAdapter'
import { taskControllerFactory } from '../../../factories/taskControllerFactory'

export default (router: Router): void => {
  const addTaskController = taskControllerFactory()
  router.post('/tasks', expressRouteAdapter(addTaskController))
}
