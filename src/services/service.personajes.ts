import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Personaje } from "../models/personaje";
import { environment } from "../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()

export class ServicePersonajes {
    constructor(
        private _http: HttpClient
    ){}

    async getPersonajesAsync(): Promise<Personaje[]> {
        let request = "api/pixar"
        let url = environment.apipixar + request
        return firstValueFrom(
            this._http.get<Personaje[]>(url)
        )
    }

    async insertarPersonajeAsync(personaje: Personaje): Promise<any> {
        let request = "api/pixar/"
        let url = environment.apipixar + request
        let header = new HttpHeaders().set("content-type", "application/json")
        return firstValueFrom(
            this._http.post(url, personaje, {headers: header})
        )
    }

    async deletePersonaje(idpersonaje: number): Promise<any> {
        let request = "api/pixar/" + idpersonaje
        let url = environment.apipixar + request
        return firstValueFrom(
            this._http.delete(url)
        )
    }

}