import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from "./child1/child1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'change-detaction';
 
  user: {name: string} = {
    name: 'initial name',
  }

  constructor(private changeDetectorRef: ChangeDetectorRef){
    // this.changeDetectorRef.detach() //change detectiory anjatum e
    // setTimeout(() => {
    //   this.changeDetectorRef.reattach();//espes miacnum es detectiory
    // }, 1000)
    // this.changeDetectorRef.detectChanges() // sa vonc vor manual trigger anenk change detectiony, bayc eli hashvi e arnum strategyn
    this.changeDetectorRef.markForCheck(); // es componentum tsarum nshum e vor petk e check arvi, vor dranic heto erv cd sksi run anel, ktesni marka arats check kani
  } //sra mijocov karank angulari change detectioni het xaghal

  ngOnInit(): void {
     setTimeout(() => {
      this.title = 'anoter-title';
      // this.user = {
      //   name: 'John'
      // }
      this.user.name='another name' //objecti referencen e hamematum ete nuyn e sksum e propertinery avelacnel
      console.log('2 seconds')
     }, 2_000)
  }

  ngAfterViewChecked() {
     console.log('chch')
  }

  getNumbers() {
    return Math.random()  
    // error kta kani vor poxvela,hamematuma elia poxvum - mi hat kanchuma vornkari mi hat el vor stugi tesnum e tarbera
  }

}

//runtime js mej code e grats, vory vor poxum e native js-i liky baner harmaracnelov iren. Angular vor uzum e change detect ani,  
//bolor eventnery vor kan` setTimeout, DOM eventner, angulary takic poxum e, setTimeouti depkum inky ovveride e anum, 
// window.setTimeout = function(cb: any, timer) {
  //inch vor gortsoghutyun e anum - aystegh grvats e vor chenge detactiony run lini, nor setTimeout kanchvi
  //u kanchum iskakan timeouty
//   setTimeout(cb, timer)
// } 
//sa arel e


// ngAfterContentInit - erb ng-contentov inch vor baner unenk, erb galis e en masy vor petka nsti galis e ngAfterContentInit
//ngAfterContentCheck - ngAfterContentInit heto ashxatum e ngAfterContentCheck,  hamematum e inch bindingner stugel er ngAfterContentInit jamanak,
//noric stugum e, nra hamara vor stugi tesni vor poxevec dranic heto eli popoxvec te che
//ngAfterViewInit - sa erb view init e eghel, elementnery render en eghel

