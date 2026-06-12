import type { Router } from 'express'
import { expressRouteAdapter } from '../../../expressRouteAdapter'
import { addTaskControllerFactory } from '../../../factories/addTaskControllerFactory'
import { removeTaskControllerFactory } from '../../../factories/removeTaskControllerFactory'

export default (router: Router): void => {
  const addTaskController = addTaskControllerFactory()
  const removeTaskController = removeTaskControllerFactory()
  router.post('/tasks', expressRouteAdapter(addTaskController))
  router.delete('/tasks', expressRouteAdapter(removeTaskController))
}
