import { Observable } from 'rxjs';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { Usuario } from 'src/app/autenticacao/usuario/usuario';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }


}
