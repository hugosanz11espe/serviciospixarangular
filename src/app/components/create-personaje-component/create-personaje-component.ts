import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServicePersonajes } from '../../../services/service.personajes';
import { Personaje } from '../../../models/personaje';

@Component({
  selector: 'app-create-personaje-component',
  standalone: false,
  styleUrl: './create-personaje-component.css',
  templateUrl: './create-personaje-component.html',
})
export class CreatePersonajeComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajaimagen") cajaimagen!: ElementRef
  @ViewChild("cajapelicula") cajapelicula!: ElementRef
  mensaje!: string

  constructor(
    private _service: ServicePersonajes,
    private _cdr: ChangeDetectorRef
  ){}

  async insertarPersonaje(): Promise<void> {
    let id = parseInt(this.cajaid.nativeElement.value)
    let nombre = this.cajanombre.nativeElement.value
    let imagen = this.cajaimagen.nativeElement.value
    let pelicula = this.cajapelicula.nativeElement.value
    let personaje = new Personaje(id, nombre, imagen, pelicula)
    await this._service.insertarPersonajeAsync(personaje)
    this.mensaje = "Personaje insertado"
    this._cdr.detectChanges()
  }


}
