import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ],
  exports: [NavbarModule, FooterModule]
})
export class SharedModule { }
