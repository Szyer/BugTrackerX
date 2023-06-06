import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { User } from '../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  PATH_OF_API = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public registerStaff(user: any): Observable<any> {
    return this.httpClient.post(`${this.PATH_OF_API}/createNewStaff`, user)
      .pipe(
        catchError(error => {
          console.log(error);
          alert('Database is not connected');
          return of(null);
        })
      )
  }

  public getAlluser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PATH_OF_API}/getAll`);
  }

  public deleteStaffUser(userId: string) {
    return this.httpClient.delete(`${this.PATH_OF_API}/deleteStaff/${userId}`);
  }
}
