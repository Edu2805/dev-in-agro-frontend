import { FuncionarioService } from './../funcionario.service';
import { Component, OnInit, Output } from '@angular/core';
import { Funcionario } from '../funcionario.model';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.scss'],
})
export class FuncionarioReadComponent implements OnInit {
  @Output() headerTitle = 'Funcionario';

  funcionarios: Funcionario[];
  funcionario: Funcionario = {
    nome: '',
    fazenda: '',
    data: '',
    update: '',
    cpf: '',
    telefone: '',
    cargo: '',
    ativo: false
  };

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.read().subscribe((funcionario) => {
      this.funcionarios = funcionario;
    });
  }
}
