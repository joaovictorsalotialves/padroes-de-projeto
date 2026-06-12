import type { RemoveTaskModel } from '../removeTask'

export interface RemoveTaskRepository {
  remove(idTask: RemoveTaskModel): Promise<Error | void>
}
