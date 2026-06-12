import type { RemoveTask, RemoveTaskModel } from '../../usecases/removeTask'
import type { RemoveTaskRepository } from '../../usecases/repository/removeTaskRepository'

export class DbRemoveTask implements RemoveTask {
  constructor(private readonly RemoveTaskRepository: RemoveTaskRepository) {}

  async remove(task: RemoveTaskModel): Promise<void> {
    await this.RemoveTaskRepository.remove(task)
  }
}
