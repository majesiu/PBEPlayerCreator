import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { PlayerCalcComponent } from './player-calc/player-calc.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { AppRoutingModule } from './app-routing.module';
import {MatNativeDateModule} from '@angular/material';
import { TooltipModule } from 'ng2-tooltip-directive';
@NgModule({
  declarations: [
    AppComponent,
    PlayerCalcComponent,
    PlayerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    AppRoutingModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
