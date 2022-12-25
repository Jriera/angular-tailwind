import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

const Theme = {
  primary: ['bg-materialPurple-primary', 'hover:bg-materialPurple-primaryLight', 'text-materialPurple-textOnPrimary','py-2', 'px-4','m-2','rounded'],
  secondary: ['bg-materialPurple-secondary', 'hover:bg-materialPurple-secondaryLight', 'text-materialPurple-textOnSecondary','py-2', 'px-4','m-2','rounded'],
  dark: ['bg-materialPurple-primaryDark', 'hover:bg-materialPurple-secondaryDark', 'text-materialPurple-textOnPrimary','py-2', 'px-4','m-2','rounded'],
  error: ['bg-materialPurple-error', 'hover:bg-materialPurple-errorLight', 'text-materialPurple-textOnPrimary','py-2', 'px-4','m-2','rounded'],
  warning: ['bg-materialPurple-warning', 'hover:bg-materialPurple-warningLight', 'text-materialPurple-textOnPrimary','py-2', 'px-4','m-2','rounded'],
} as const


@Directive({
  selector: '[tw-button-flat]',
  standalone: true,
})
export class TwButtonDirective implements OnInit {
@Input() colorStyle!: keyof typeof Theme; //we create a type from Theme object and map its keys to a type

  constructor(private hostEl:ElementRef,private renderer:Renderer2) {
    console.log(this.hostEl);
  }

  ngOnInit(){
    Theme[this.colorStyle].forEach((item)=>{
      this.renderer.addClass(this.hostEl.nativeElement,item);
    });





  }

  //'bg-blue-500 hover:bg-blue-700 text-white font-bold '

}
