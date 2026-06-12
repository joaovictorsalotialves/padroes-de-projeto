export interface RemoveTaskModel {
  id: string
}

export interface RemoveTask {
  remove(task: RemoveTaskModel): Promise<Error | void>
}
