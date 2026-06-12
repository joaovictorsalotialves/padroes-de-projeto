import type { RemoveTask } from '../../../usecases/removeTask'
import type { Controller, HttpRequest, HttpResponse, Validation } from '../../interfaces'
import { badRequest, noContent, serverError } from '../../presentations/api/httpResponses/httpResponses'

export class RemoveTaskController implements Controller {
  constructor(
    private readonly removeTask: RemoveTask,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.body

      const isValid = this.validation.validate({ id })
      if (isValid) {
        return badRequest(isValid)
      }

      const error = await this.removeTask.remove({ id })
      if (error) {
        return badRequest(error)
      }

      return noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
