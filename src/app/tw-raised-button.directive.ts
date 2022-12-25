import {Directive, ElementRef, OnInit, Renderer2} from "@angular/core";
import {TwButtonDirective} from "./tw-button.directive";


@Directive({
  selector: '[tw-button-raised]',
  hostDirectives: [{directive:TwButtonDirective,inputs:['colorStyle']}],
  standalone: true,
})
export class TwRaisedButtonDirective implements OnInit{

  constructor(private el: ElementRef,private renderer:Renderer2) {
    console.log(el);
  }

  ngOnInit(){
    this.renderer.addClass(this.el.nativeElement,'drop-shadow-[0_2px_1px_rgba(0,0,0,0.9)]');
  }
}
