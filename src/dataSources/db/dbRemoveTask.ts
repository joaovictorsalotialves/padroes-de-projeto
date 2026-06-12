import type { RemoveTask, RemoveTaskModel, RemoveTaskRepository } from '../../usecases'

export class DbRemoveTask implements RemoveTask {
  constructor(private readonly RemoveTaskRepository: RemoveTaskRepository) {}

  async remove(task: RemoveTaskModel): Promise<void> {
    await this.RemoveTaskRepository.remove(task)
  }
}
