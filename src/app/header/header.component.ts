import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent{
    @Output() triggerPageChange:EventEmitter<string>=new EventEmitter();
    changePage=(pageName:string)=>{
        console.log(pageName);
        this.triggerPageChange.emit(pageName);
    }
}