import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Cadastro from './pages/cadastro/cadastro'
import Login from './pages/login/login'
import { AuthProvider } from './context/AuthContext'


function App() {
	return (
		<>
    <AuthProvider>
			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh]">
					<Routes> 
            <Route path="/" element={<Login />} />
						<Route path="/home"	element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
    </AuthProvider>
		</>
	)
}

export default App
