import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../servicos/produto.service';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = {
    produto: '',
    descricao: '',
    foto: '',
    preco: null
  };

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Se existir um id na URL (/cadastro-produto/3), carrega o produto para edição
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.obterProdutoPorId(Number(id)).subscribe((dados) => {
        this.produto = dados;
      });
    }
  }

  salvarProduto(): void {
    if (this.produto.id) {
      // PUT: atualiza o produto existente
      this.produtoService.atualizarProduto(this.produto.id, this.produto).subscribe(() => {
        alert('Produto atualizado com sucesso!');
        this.router.navigate(['/painel-principal']);
      });
    } else {
      // POST: cadastra um novo produto
      this.produtoService.adicionarProduto(this.produto).subscribe(() => {
        alert('Produto cadastrado com sucesso!');
        this.router.navigate(['/painel-principal']);
      });
    }
  }

  imagemPadrao(evento: Event): void {
    (evento.target as HTMLImageElement).src = 'assets/imagens/logo.png';
  }
}
