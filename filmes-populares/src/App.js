import GlobalProvider from './global/GlobalContext'
import Router from './routes/Router'

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </div>
  )
}

export default App
