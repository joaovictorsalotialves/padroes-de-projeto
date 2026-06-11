import { DbAddTask } from '../../dataSources/db/dbAddTask'
import { TaskMongoRepository } from '../../dataSources/db/repository/taskMongoRepository'
import { AddTaskController } from '../controllers/task/addTask'
import { DateValidatorAdapter } from '../dateValidadeAdapter'

export const taskControllerFactory = () => {
  const taskMongoRepository = new TaskMongoRepository()
  const dbAddTask = new DbAddTask(taskMongoRepository)
  const dateValidadeAdapter = new DateValidatorAdapter()
  return new AddTaskController(dbAddTask, dateValidadeAdapter)
}
