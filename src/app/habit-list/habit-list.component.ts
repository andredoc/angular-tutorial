import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitService } from '../habit.service';
import { map } from 'rxjs/operators';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent implements OnInit {

  habits$:Observable<Habit[]> = new Observable();

  constructor(private habitService : HabitService) { }

  ngOnInit(): void {
    this.habits$ = this.habitService.getHabits()
    .pipe(map(habits$ => {
      return habits$.map(habit => {
        habit.streak = habit.count > 5 ? true : false;
        return habit;
      })
    }))
  }

  onAddHabit($event:any) {
    this.habitService.addHabit($event)
  }
}
