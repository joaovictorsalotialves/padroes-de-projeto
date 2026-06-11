import type { Router } from 'express'
import { DbAddTask } from '../../../../dataSources/db/dbAddTask'
import { TaskMongoRepository } from '../../../../dataSources/db/repository/taskMongoRepository'
import { AddTaskController } from '../../../controllers/task/addTask'
import { DateValidatorAdapter } from '../../../dateValidadeAdapter'
import { expressRouteAdapter } from '../../../expressRouteAdapter'

export default (router: Router): void => {
  const taskMongoRepository = new TaskMongoRepository()
  const dbAddTask = new DbAddTask(taskMongoRepository)
  const dateValidadeAdapter = new DateValidatorAdapter()
  const addTaskController = new AddTaskController(dbAddTask, dateValidadeAdapter)
  router.post('/tasks', expressRouteAdapter(addTaskController))
}
