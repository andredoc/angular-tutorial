import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HabitService } from './habit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-tutorial'

  constructor() {}
}

// export class AppComponent implements OnInit, OnDestroy{
//   title = 'angular-tutorial';
//   comments:any;
//   comments$:Observable<any> = new Observable();
//   commentsSubscription: Subscription = new Subscription();
//   constructor(
//     private habitSrv: HabitService
//   ){}
//   ngOnInit(){
//      this.commentsSubscription = this.habitSrv.getPostComments()
//     .subscribe((response)=>{
//       console.log(response);
//       this.comments = response;
//     })

//     // this.comments$ = this.habitSrv.getPostComments()
//   }

//   ngOnDestroy(): void {
//     this.commentsSubscription.unsubscribe();
//   }
// }

