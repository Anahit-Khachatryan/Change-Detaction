import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Child2Component } from "../child-2/child-2.component";
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [Child2Component, AsyncPipe],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush // ete gites ches uzum inch vor inputic poxvi espes es anum
  //ed componenti bindingnery stugum e erb referencen e poxvum, ete che iran u ira childerin skip e anum
  // async pipen-i depkum el e change detectiony ashxatum dra hamar user.name poxvum e
})
export class Child1Component implements OnChanges {
  @Input() user?: {name: string};
  childTitle = 'ChildTitle'
  observable$ = new Observable((subscriber)=> {
    setTimeout(() => {
      subscriber.next();
      subscriber.complete();
      console.log('5 seconds')
    }, 5_000)
  })

  constructor(private changeDetectorRef: ChangeDetectorRef){}
  
  ngOnInit() {
    // setTimeout(() => {
    //  this.changeDetectorRef.detectChanges();
    // }, 1000) // sranov el karank noric trigger anenk u user.name kpoxvi ira u iranic nerkevneri hamar
    // setTimeout(() => {
    //   this.changeDetectorRef.markForCheck();
    //  }, 2000) // componenti vijaky sarkum e dirty, deteckChanges trigger e anum, isk markforCheck trigger chi anum

    this.observable$.subscribe(() => {
      this.childTitle = 'another child title'
    }) // ay es depkum chi poxi anuny, menak poxum e async pipe-i depkum
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  onClick() {
    //kani vor es clickic noric bindingnery stugum e , dra hetevankov click vor ani arden user.name poxvats cuyc kta
  }

}

//checking takic
// const appComponentInstance = new AppComponent();
// const childInstance = new Child1Component();
// childInstance.user = appComponentInstance.user;
// 'another name' == childInstance.user.name
