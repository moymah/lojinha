import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './redux'
import theme from './theme'
import Routes from './Routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>
)

export default App
