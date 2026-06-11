import type { Validation } from '../interfaces/validation'
import { ValidationComposite } from '../validations/validationComposite'

export const AddTaskValidationCompositeFactory = (): ValidationComposite => {
  const validations: Validation[] = []

  // TODO: validation required fields
  // TODO: validation date validation
  return new ValidationComposite(validations)
}
