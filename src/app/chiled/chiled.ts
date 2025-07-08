import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chiled',
  imports: [],
  templateUrl: './chiled.html',
  styleUrl: './chiled.css',
})
export class Chiled
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor inslized');
  }
  @Input() name: string = '';
  @ViewChild('firstP') firstParag!: ElementRef;
  @ViewChild('p') parag!: ElementRef;
  @ViewChild('lastP') lastParag!: ElementRef;
  @ContentChild('fromHome', { static: true }) fromHome!: ElementRef;
  ngOnInit(): void {
    console.log('ngOnInit inslized');
    //console.log('Chiled component initialized with name:', this.name);
  }
  ngOnChanges(changes: any): void {
    //console.log('ngOnChanges inslized');
    console.log('Changes detected:', changes);
    //console.log('Chiled component name changed to:', this.name);
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('do check', this.name);
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit inslized');
    console.log(this.fromHome, 'from home');
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked inslized');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit inslized');
    this.parag.nativeElement.style.color = 'red';
    console.log(this.firstParag.nativeElement);
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked inslized');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed. Use it to clean up subscriptions and detach event handlers to avoid memory leaks.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy inslized');
    alert('Chiled component is being destroyed');
  }
}
