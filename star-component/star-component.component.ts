import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})

// implements OnInit

export class StarComponentComponent  {
  private _url: string='../../assets/data/rating.json'
  constructor(private http: HttpClient,
    private router : Router,) { }

    url='http://httpbin.org/post'

  finalRating={
      feedbackText: '',
      currentRate: 0
    }
   getVal(val: number) {
     this.finalRating.currentRate=val
   }


  rated() {
    // console.log(`it is pressed ${this.currentRate}`);
    return  this.http.post<any>(this.url, this.finalRating).subscribe((data:any)=>{
      console.log(data);
      console.log(data.json);
       this.finalRating.feedbackText=""
      this.finalRating.currentRate=0
      this.getVal(0)
      
      window.setTimeout(function(){location.reload()},4000)
     
    })

   

  }
 
 


}
