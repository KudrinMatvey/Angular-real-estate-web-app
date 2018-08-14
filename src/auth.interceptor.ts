import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private token ="khskgf.,mfdshkll";
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

            const clonedRequest = req.clone( {
                    headers:req.headers.set('Authorisation',this.token)
                });
            return next.handle(clonedRequest);
            
    }
    setToken(token:string){
        this.token = token;
    }
    
}