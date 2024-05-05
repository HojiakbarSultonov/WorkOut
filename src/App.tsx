import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Home from './pages/home'
import Auth from './pages/auth'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
			</Routes>
		</>
	)
}

export default App
