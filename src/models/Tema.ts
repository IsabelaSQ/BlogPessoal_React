import type Postagem from './Postagem'

export default interface Tema {
    id: number;
    descricao: string;
    postagens?: Postagem[] | null;
}