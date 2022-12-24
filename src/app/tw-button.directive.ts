import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

const Theme = {
  primary: ['bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold']
} as const


@Directive({
  selector: '[appTwButton]',
})
export class TwButtonDirective implements OnInit {
@Input() colorStyle!: keyof typeof Theme; //

  constructor(private hostEl:ElementRef,private renderer:Renderer2) {
    console.log(this.hostEl);
  }

  ngOnInit(){

    //this.renderer.addClass(this.hostEl.nativeElement,Theme[this.colorStyle])
    console.log(Object.keys(Theme));
    console.log(Object.values(Theme));
    const index = Object.keys(Theme).filter((key)=>{
      return key === this.colorStyle;
    })[0]
    console.log(index);
    type ThemeType = typeof Theme;
    type ThemeKeys = keyof ThemeType;
    const a:ThemeType = Theme;
    const b:ThemeKeys = this.colorStyle;
    const value = Theme[b];
    console.log(value);
    Theme[this.colorStyle].forEach((item)=>{
      this.renderer.addClass(this.hostEl.nativeElement,item);
    });





  }

  //'bg-blue-500 hover:bg-blue-700 text-white font-bold '

}
