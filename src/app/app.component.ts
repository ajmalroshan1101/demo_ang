import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';

  constructor(private http:HttpClient){}

  backend!:string 

  demofunction():Observable<any>{

    return this.http.get<any>(`http://localhost:5000/common/demo`);
  }

  ngOnInit(): void {
    
    this.demofunction().subscribe({
      next:(data)=>{
        console.log(data);

        this.backend= data
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}


