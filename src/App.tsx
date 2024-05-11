import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Home from './pages/home'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</>
	)
}

export default App
