import type { Task } from '../../../entities/task'
import type { AddATaskModel, AddTaskRepository } from '../../../usecases'
import { MongoManager } from '../../config/mongoManager'

export class AddTaskMongoRepository implements AddTaskRepository {
  async add(taskData: AddATaskModel): Promise<Task> {
    const taskCollection = MongoManager.getInstance().getCollection('tasks')
    const { insertedId } = await taskCollection.insertOne(taskData)
    const taskById = await taskCollection.findOne({ _id: insertedId })
    if (!taskById) throw new Error('Task not found')

    const task: Task = {
      id: taskById._id.toHexString(),
      title: taskById.title,
      description: taskById.description,
      date: taskById.date,
    }

    return task
  }
}
