import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react"; // Importe FormEvent
import type UsuarioLogin from "../../models/UsuarioLogin";

function Login() {
    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
        usuario: '',
        senha: ''
    } as UsuarioLogin);

    useEffect(() => {
        if (usuario.token !== "") {
            navigate("/home");
        }
    }, [usuario, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        });
    }

    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
            {/* Adicionado o onSubmit aqui */}
            <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
                <h2 className="text-slate-900 text-5xl">Entrar</h2>
                <div className="flex flex-col w-full">
                    <label htmlFor="usuario">Usuário</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Usuario"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuarioLogin.usuario} // VINCULADO
                        onChange={atualizarEstado}   // VINCULADO
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuarioLogin.senha} // VINCULADO
                        onChange={atualizarEstado} // VINCULADO
                    />
                </div>
                <button 
                    type='submit' 
                    className="rounded bg-indigo-400 flex justify-center hover:bg-indigo-900 text-white w-1/2 py-2"
                    disabled={isLoading} // DESABILITA DURANTE O LOGIN
                >
                    {/* FEEDBACK DE CARREGAMENTO */}
                    {isLoading ? <span className="animate-spin text-xl">⏳</span> : <span>Entrar</span>}
                </button>

                <hr className="border-slate-800 w-full" />

                <p>
                    Ainda não tem uma conta?{' '}
                    <Link to="/cadastro" className="text-indigo-800 hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </form>
            <div className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat 
                            w-full min-h-screen bg-cover bg-center">
            </div>
        </div>
    );
}

export default Login;