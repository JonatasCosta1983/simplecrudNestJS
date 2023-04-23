export declare class UserController {
    crie(corpo: any): Promise<{
        corpo: any;
    }>;
    leiaTodos(): Promise<{
        usuarios: any[];
    }>;
    leiaUm(parametro: any): Promise<{
        usuario: {};
        parametro: any;
    }>;
    altereTodosOsDados(corpo: any, parametro: any): {
        metodo: string;
        corpo: any;
        parametro: any;
    };
    alteraDadosParcial(corpo: any, parametro: any): Promise<{
        metodo: string;
        corpo: any;
        parametro: any;
    }>;
    deletar(parametro: any): Promise<{
        parametro: any;
    }>;
}
