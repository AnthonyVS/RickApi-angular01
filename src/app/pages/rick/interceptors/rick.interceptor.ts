import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { enviroment } from "src/enviroment/enviroment";

export class RickInterceptor implements HttpInterceptor{
    
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{

        const cloneReq = req.clone({
            params: req.params.appendAll({
                //'page': '19',
                //'appid': enviroment.key
            })
        })
        return next.handle(cloneReq);
    }
}