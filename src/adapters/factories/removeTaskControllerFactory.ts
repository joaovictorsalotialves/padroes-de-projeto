import { DbRemoveTask } from '../../dataSources/db/dbRemoveTask'
import { LogErrorMongoRepository } from '../../dataSources/db/repository/logErrorMongoRepository'
import { RemoveTaskMongoRepository } from '../../dataSources/db/repository/removeTaskMongoRepository'
import { RemoveTaskController } from '../controllers/task/removeTask'
import { LogErrorControllerDecorator } from '../decorator/logErrorControllerDecorator'
import { RequiredFieldsValidation } from '../validations/requiredFieldsValidation'

export const removeTaskControllerFactory = () => {
  const removeTaskMongoRepository = new RemoveTaskMongoRepository()
  const dbRemoveTask = new DbRemoveTask(removeTaskMongoRepository)
  const removeTaskController = new RemoveTaskController(dbRemoveTask, new RequiredFieldsValidation('id'))
  const logErrorMongoRepository = new LogErrorMongoRepository()
  return new LogErrorControllerDecorator(removeTaskController, logErrorMongoRepository)
}
