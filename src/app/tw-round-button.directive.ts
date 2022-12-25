import {Directive, ElementRef, OnInit, Renderer2} from "@angular/core";
import {TwButtonDirective} from "./tw-button.directive";


@Directive({
  selector: '[tw-button-round]',
  hostDirectives: [{directive:TwButtonDirective,inputs:['colorStyle']}],
  standalone: true,
})
export class TwRoundButtonDirective implements OnInit{

  constructor(private el: ElementRef,private renderer:Renderer2) {
    console.log(el);
  }

  ngOnInit(){
    this.renderer.addClass(this.el.nativeElement,'rounded-full');
  }



}
