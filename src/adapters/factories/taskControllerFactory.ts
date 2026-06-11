import { DbAddTask } from '../../dataSources/db/dbAddTask'
import { TaskMongoRepository } from '../../dataSources/db/repository/taskMongoRepository'
import { AddTaskController } from '../controllers/task/addTask'
import { DateValidatorAdapter } from '../dateValidadeAdapter'
import { LogErrorControllerDecorator } from '../decorator/logErrorControllerDecorator'

export const taskControllerFactory = () => {
  const taskMongoRepository = new TaskMongoRepository()
  const dbAddTask = new DbAddTask(taskMongoRepository)
  const dateValidadeAdapter = new DateValidatorAdapter()
  const taskController = new AddTaskController(dbAddTask, dateValidadeAdapter)
  return new LogErrorControllerDecorator(taskController)
}
