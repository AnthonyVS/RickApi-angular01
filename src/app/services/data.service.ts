import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { enviroment } from "src/enviroment/enviroment";

export class Dataservice {
    private readonly http = inject(HttpClient);
    private readonly API_URL = enviroment.api;
    
    getData():Observable<unknown>{
        const lat = '40.730610';
        const lon = '-73.935242';
        return this.http.get(`${enviroment.api}?lat=${lat}&lon=${lon}&appid=${enviroment.key}`);
    }
}