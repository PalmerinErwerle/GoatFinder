import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdatePlayerComponent } from './components/add-update-player/add-update-player.component';
import { FullViewPlayerComponent } from './components/full-view-player/full-view-player.component';
import { MercatoPipe } from './pipes/mercato.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    AddUpdatePlayerComponent,
    FullViewPlayerComponent,
    MercatoPipe
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    AddUpdatePlayerComponent,
    FullViewPlayerComponent,
    MercatoPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
