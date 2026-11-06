import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../servicos/produto.service';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.component.html',
  styleUrl: './painel-principal.component.css'
})
export class PainelPrincipalComponent implements OnInit {

  produtos: Produto[] = [];
  erro = false;

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  // GET: busca a lista de produtos na API
  listarProdutos(): void {
    this.produtoService.obterProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.erro = false;
      },
      error: () => this.erro = true
    });
  }

  // DELETE: remove o produto e atualiza a lista
  excluirProduto(id: number): void {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.deletarProduto(id).subscribe(() => {
        alert('Produto excluído com sucesso!');
        this.listarProdutos();
      });
    }
  }

  // Abre a tela de cadastro em modo edição, passando o id na URL
  editarProduto(id: number): void {
    this.router.navigate(['/cadastro-produto', id]);
  }

  // Se a imagem não existir na pasta, mostra o logo no lugar
  imagemPadrao(evento: Event): void {
    (evento.target as HTMLImageElement).src = 'assets/imagens/logo.png';
  }
}
