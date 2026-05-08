import { createContext, type ReactNode, useState } from "react"
import { login } from "../services/Service"
import type UsuarioLogin from "../models/UsuarioLogin"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true);
        try {
            // Supondo que sua Service já chama o setUsuario
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            alert("Usuário logado com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Dados do usuário inconsistentes!");
        } finally {
            setIsLoading(false);
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        });
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}