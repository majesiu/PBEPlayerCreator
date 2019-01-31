import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { PlayerCalcComponent } from './player-calc/player-calc.component';
import { TradeMachineComponent } from './trade-machine/trade-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCalcComponent,
    TradeMachineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
