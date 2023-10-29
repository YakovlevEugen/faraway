import { initialize, mswLoader } from 'msw-storybook-addon'
import { withRouter } from 'storybook-addon-react-router-v6'
import type { Preview } from '@storybook/react'
import 'virtual:svg-icons-register'

import { setDefaultOptions } from 'date-fns'
import locale from 'date-fns/locale/ru'

import { mockHandlers } from '@/mocks/handlers'

import { ConfigProvider, theme } from 'antd'
import { SWRConfig } from '@/providers/swr'
import { RootContextProvider } from '@/context/root'

import '@/assets/styles/index.scss'

setDefaultOptions({ locale })

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize({
  onUnhandledRequest: 'bypass',
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$|week/,
      },
    },
    msw: mockHandlers,
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
  decorators: [
    withRouter,
    (Story) => (
      <SWRConfig>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <RootContextProvider>
            <Story />
          </RootContextProvider>
        </ConfigProvider>
      </SWRConfig>
    ),
  ],
}

export default preview
