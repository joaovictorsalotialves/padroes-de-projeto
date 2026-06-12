import type { Router } from 'express'
import { expressRouteAdapter } from '../../../expressRouteAdapter'
import { addTaskControllerFactory, removeTaskControllerFactory } from '../../../factories'

export default (router: Router): void => {
  const addTaskController = addTaskControllerFactory()
  const removeTaskController = removeTaskControllerFactory()
  router.post('/tasks', expressRouteAdapter(addTaskController))
  router.delete('/tasks', expressRouteAdapter(removeTaskController))
}
