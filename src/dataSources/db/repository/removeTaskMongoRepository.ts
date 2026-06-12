import { ObjectId } from 'mongodb'
import { InvalidParamError } from '../../../adapters/presentations/api/errors/invalid-param-error'
import { NotFoundError } from '../../../adapters/presentations/api/errors/not-found-error'
import type { RemoveTaskModel } from '../../../usecases/removeTask'
import type { RemoveTaskRepository } from '../../../usecases/repository/removeTaskRepository'
import { MongoManager } from '../../config/mongoManager'

export class RemoveTaskMongoRepository implements RemoveTaskRepository {
  async remove(taskData: RemoveTaskModel): Promise<Error | void> {
    const taskCollection = MongoManager.getInstance().getCollection('tasks')

    if (!ObjectId.isValid(taskData.id)) {
      return new InvalidParamError(taskData.id)
    }

    const { deletedCount } = await taskCollection.deleteOne({ _id: new ObjectId(taskData.id) })

    if (!deletedCount) return new NotFoundError('task')
  }
}
