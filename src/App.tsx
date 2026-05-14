import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormPostagem from './components/postagem/formpostagem/FormPostagem'
import ListaPostagens from './components/postagem/listapostagens/ListaPostagens'
import DeletarTema from './components/tema/deletartema/DeletarTema'
import FormTema from './components/tema/formtema/FormTema'
import ListaTemas from './components/tema/listatemas/ListaTemas'
import Perfil from './pages/perfil/Perfil'
import { AuthProvider } from './context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import DeletarPostagem from './components/postagem/deletarpostagem/DeletarPostagen'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import Cadastro from './pages/cadastro/cadastro'
import Home from './pages/home/home'
import Login from './pages/login/login'


function App() {
	return (
		<>
			<AuthProvider>
        <ToastContainer />
				<BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/login" element={<Login />} />
							<Route path="/home" element={<Home />} />
							<Route path="/cadastro"	element={<Cadastro />}/>
							<Route path="/temas" element={<ListaTemas />} /> 
							<Route path="/cadastrartema" element={<FormTema />} />
							<Route path="/editartema/:id" element={<FormTema />} />
							<Route path="/deletartema/:id" element={<DeletarTema />} />
							<Route path="/postagens" element={<ListaPostagens />} />
							<Route path="/cadastrarpostagem" element={<FormPostagem />} />
							<Route path="/editarpostagem/:id" element={<FormPostagem />} />
							<Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
							<Route path="/perfil" element={<Perfil />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	)
}

export default App