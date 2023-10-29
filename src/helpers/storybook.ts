import camelcaseKeys from 'camelcase-keys'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getMockResult(mock: any): any {
  return camelcaseKeys(mock, { deep: true })
}
