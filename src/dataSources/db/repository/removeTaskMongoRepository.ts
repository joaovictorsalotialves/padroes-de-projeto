import { ObjectId } from 'mongodb'
import { InvalidParamError, NotFoundError } from '../../../adapters/presentations/api/errors/'
import type { RemoveTaskModel, RemoveTaskRepository } from '../../../usecases'
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
