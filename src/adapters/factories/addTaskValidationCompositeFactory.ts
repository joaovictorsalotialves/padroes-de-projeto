import { DateValidatorAdapter } from '../dateValidadeAdapter'
import type { Validation } from '../interfaces/validation'
import { DateValidation, RequiredFieldsValidation, ValidationComposite } from '../validations'

export const addTaskValidationCompositeFactory = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['title', 'description', 'date']) {
    validations.push(new RequiredFieldsValidation(field))
  }

  validations.push(new DateValidation('date', new DateValidatorAdapter()))

  return new ValidationComposite(validations)
}
