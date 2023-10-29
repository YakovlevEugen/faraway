import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:svg-icons-register'

import { setDefaultOptions } from 'date-fns'
import locale from 'date-fns/locale/ru'

import { ConfigProvider, theme } from 'antd'

import { SWRConfig } from '@/providers/swr'
import { RootContextProvider } from '@/context/root'

import App from '@/App'

setDefaultOptions({ locale })

if (import.meta.env.VITE_API_HOST === 'msw') {
  const { worker } = await import('./mocks/browser')
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RootContextProvider>
          <App />
        </RootContextProvider>
      </ConfigProvider>
    </SWRConfig>
  </React.StrictMode>
)
