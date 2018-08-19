import { TokenService } from './app/services/token.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService:TokenService){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
            let  bearer = "Bearer: " + this.tokenService.TOKEN;
            const httpHeaders =new HttpHeaders().set("Authorization",bearer);
            const clonedRequest = req.clone( {
                    headers:httpHeaders
                });
            return next.handle(clonedRequest);
            
    }

    
}