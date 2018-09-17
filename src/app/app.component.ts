import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/Observable/TimerObservable';

@Component({
  selector: 'app-timer',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private countdownMinutes: number;
  private countdownSeconds: number;
  private rows: number;
  private cols: number;
  private grid: any = {};
  private gameSelected: boolean;
  private totalScore: number;
  private gameStarted: boolean;
  private gridHighlightInterval: any;
  private rowHighlight: number;
  private colHighlight: number;
  private counter: number;
  private highestScore: number;
  private gameOver: boolean;
  private _timerObservable$: TimerObservable;
  private sub: Subscription;

  constructor(private ele: ElementRef) {}

  ngOnInit(): void {
    this.gameSelected = false;
    this.counter = 120;
    this.totalScore = 0;
  }

  selectGame(gameType: string): void {
    const grid = this.getGrid(gameType);
    this.constructGrid(grid);
  }

  setBackGroundColor(row: number, col: number): any {
    if (row === this.rowHighlight && col === this.colHighlight) {
      return { 'background' : 'green' };
    }
    return { 'background' : '#f5f5f5' };
  }

  calculateScore(row: number, col: number): void {
    if (row === this.rowHighlight && col === this.colHighlight) {
      this.totalScore += 1;
    } else {
      this.totalScore = this.totalScore > 0 ? this.totalScore - 1 : 0;
    }
    console.log('Score: ', this.totalScore);
  }

  startGame(): void {
    this.gameStarted = true;
    this._setCountdownTimer();
  }

  resetGame(): void {
    this.totalScore = 0;
    this.gameStarted = false;
    this.gameSelected = false;
    this.counter = 120;
    this.gameOver = false;
    if (this.sub && typeof this.sub.unsubscribe === 'function') {
      this.sub.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.resetGame();
  }

  highlightGrid(): void {
    this.rowHighlight = this.getRandomNumber(0, this.grid.cols);
    this.colHighlight = this.getRandomNumber(0, this.grid.cols);
    console.log('Row: ' + this.rowHighlight + ' Col: ' + this.colHighlight);
  }

  getRandomNumber(min: number = 0, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  constructGrid(grid: any = {}): void {
    if (!grid) {
      this.gameSelected = false;
      return;
    }
    this.gameSelected = true;
    this.grid = grid;
    this.gameStarted = false;
    this.rowHighlight = -1;
    this.colHighlight = -1;
  }

  getGrid(gameType: string): any {
    switch (gameType) {
      case 'easy':
        return {rows: 3, cols: 3};
      case 'medium':
        return {rows: 4, cols: 4};
      case 'hard':
        return {rows: 6, cols: 6};
    }
  }

  private _setCountdownTimer(): void {
    const that = this;
    this.sub = Observable.timer(0, 1000).take(this.counter)
    .map( () => --this.counter)
    .subscribe(
      res => {
      if (res <= 0) {
        that._notifyUser();
      } else {
        that.highlightGrid();
        that._showCountdown(res);
      }
    });
  }

  private _notifyUser(): void {
    this.gameOver = true;
    if (localStorage.getItem('highestScore')) {
      this.highestScore = parseInt(localStorage.getItem('highestScore'), 10);
      if (this.highestScore < this.totalScore) {
        this.highestScore = this.totalScore;
      }
      localStorage.setItem('highestScore', '' + this.highestScore);
    } else {
      localStorage.setItem('highestScore', '' + this.totalScore);
    }
  }
  private _showCountdown(time: number) {
    this.countdownMinutes = this._calMinutes(time);
    this.countdownSeconds = this._calSeconds(time);
  }
  private _calSeconds(ticks: number) {
    return this._pad(Math.floor(ticks % 60));
  }
  private _calMinutes(ticks: number) {
    return this._pad((Math.floor(ticks / 60)) % 60);
  }
  private _pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }
}
