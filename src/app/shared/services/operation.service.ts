import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }
  
}
