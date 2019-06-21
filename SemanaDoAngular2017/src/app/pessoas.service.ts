import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  
  lista: any[] = [
    {
      nome: 'Fulano',
      idade: 16,
      descricao: 'Fulano é um <strong>cara legal</strong>.'
    },
    {
      nome: 'Beltrano',
      idade: 17
    },
    {
      nome: 'Ciclano',
      idade: 18
    },
    {
      nome: 'Deltrano',
      idade: 19
    },
    {
      nome: 'Eltrano',
      idade: 20
    },
  ]

  pessoa_selecionada: any = {};
  boolMostrarApenasAdultos: boolean = false;

  constructor() { }

  selecionaPessoa(pessoa)
  {
    this.pessoa_selecionada = pessoa;
  }

  mostrarApenasAdultos()
  {
    this.boolMostrarApenasAdultos = true;
  }

  mostrarTodos()
  {
    this.boolMostrarApenasAdultos = false;
  }

  horaAtual()
  {
    return new Date();
  }
}
