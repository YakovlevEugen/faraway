import { formatApiUrl } from './url'

describe('formatApiUrl', () => {
  test('some/path -> /api/some/path', () => {
    expect(formatApiUrl('some/path')).toBe('/api/some/path')
  })
})
