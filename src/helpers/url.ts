export function formatApiUrl(uri: string) {
  const apiHost = import.meta.env.VITE_API_HOST ?? ''
  return `${apiHost === 'msw ' ? '' : apiHost}/api/${uri}`
}
