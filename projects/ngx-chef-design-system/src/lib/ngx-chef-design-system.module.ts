import { NgModule } from '@angular/core';
import { NgxChefDesignSystemComponent } from './ngx-chef-design-system.component';
import { NgxChefButtonComponent } from './button/button.component';



@NgModule({
  declarations: [NgxChefDesignSystemComponent, NgxChefButtonComponent],
  imports: [
  ],
  exports: [NgxChefDesignSystemComponent, NgxChefButtonComponent]
})
export class NgxChefDesignSystemModule { }
