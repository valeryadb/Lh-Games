/** Estrutura de um produto, igual aos objetos salvos no db.json */
export interface Produto {
  id?: number;        // opcional: o JSON-server gera o id ao cadastrar
  produto: string;    // nome do produto
  descricao: string;
  foto: string;       // nome do arquivo da imagem (ex.: jogo1.PNG)
  preco: number | null;
}
