import { AddTaskMongoRepository, DbAddTask, LogErrorMongoRepository } from '../../dataSources'
import { AddTaskController } from '../controllers/task/addTask'
import { LogErrorControllerDecorator } from '../decorator/logErrorControllerDecorator'
import { addTaskValidationCompositeFactory } from './addTaskValidationCompositeFactory'

export const addTaskControllerFactory = () => {
  const addTaskMongoRepository = new AddTaskMongoRepository()
  const dbAddTask = new DbAddTask(addTaskMongoRepository)
  const addTaskController = new AddTaskController(dbAddTask, addTaskValidationCompositeFactory())
  const logErrorMongoRepository = new LogErrorMongoRepository()
  return new LogErrorControllerDecorator(addTaskController, logErrorMongoRepository)
}
