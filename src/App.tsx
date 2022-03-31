import { FC } from 'react';
import { BrowserRouter as BsRouter } from 'react-router-dom'

import Header from './shared/Header'
import Footer from './shared/Footer'
import AppRoutes from './routes/AppRoutes'

const App: FC = () => (
  <BsRouter>
    <Header />
    <AppRoutes />
    <Footer />
  </BsRouter>
)

export default App
