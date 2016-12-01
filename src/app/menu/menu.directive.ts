import { Directive, ElementRef, Input, Renderer, OnInit } from "@angular/core";

@Directive({
    selector: '[itemmenu-pai]'
})

export class ItemMenuPaiDirective implements OnInit {

    @Input('itemmenu-pai')
    public isPai: boolean;

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    public ngOnInit() {
        console.log("Init: " + this.isPai);

        this.renderer.setElementClass(this.el.nativeElement, "menu-pai", true);

    }

}