import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Personaje } from '../../../models/personaje';
import { ServicePersonajes } from '../../../services/service.personajes';

@Component({
  selector: 'app-personajes-component',
  standalone: false,
  styleUrl: './personajes-component.css',
  templateUrl: './personajes-component.html',
})
export class PersonajesComponent implements OnInit{
  arraypersonajes: Personaje[] = []

  constructor(
    private _service: ServicePersonajes,
    private _cdr: ChangeDetectorRef
  ){}


  async eliminarPersonaje(idpersonaje: number): Promise<void> {
    await this._service.deletePersonaje(idpersonaje)
    this.arraypersonajes = await this._service.getPersonajesAsync()
    this._cdr.detectChanges()
  }

  async ngOnInit(): Promise<void> {
    this.arraypersonajes = await this._service.getPersonajesAsync()
    this._cdr.detectChanges()
  }

}
