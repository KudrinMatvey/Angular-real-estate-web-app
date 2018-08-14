import { TokenService } from './app/services/token.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService:TokenService){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

            const clonedRequest = req.clone( {
                    headers:req.headers.set('Authorisation',this.tokenService.TOKEN)
                });
            return next.handle(clonedRequest);
            
    }

    
}