import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioExiste(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap( (nomeUsuario) => this.novoUsuarioService.verificaExistenciaUsuario(nomeUsuario)),
        map((existe) =>
          existe ? {usuarioExistente: true} : null
        ),
        first(),
      );
    };
  }
}
