import { z } from 'zod'

const REQUIRED_ERROR = 'Required field'
const REQUIRED_ERRORS = { required_error: REQUIRED_ERROR, invalid_type_error: REQUIRED_ERROR }

export const vRequiredString = z.string(REQUIRED_ERRORS).min(1, REQUIRED_ERROR)
