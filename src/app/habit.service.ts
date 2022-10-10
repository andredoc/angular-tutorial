import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Habit } from './habit'

@Injectable({
  providedIn: 'root'
})
export class HabitService {
//https://jsonplaceholder.typicode.com/posts/1/comments
  //habits: Habit[];

  // constructor(
  //   private http:HttpClient
  // ) { }
  // getPostComments(): Observable<any>{
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')    
  // }
  constructor (private http: HttpClient) {}

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>('/api/habits')
  }

  addHabit($event:any) {
    // const id= this.habits.length + 1;
    // $event.id = id;
    // this.habits.push($event);
  }
}
