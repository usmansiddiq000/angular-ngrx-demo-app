import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store'
import { Reducers } from './store/reducer'

import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/dummyapi.effects'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadStoreComponent } from './read-store/read-store.component';
import { WriteStoreComponent } from './write-store/write-store.component';
import { EffectComponentComponent } from './effect-component/effect-component.component';

import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ReadStoreComponent,
    WriteStoreComponent,
    EffectComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(Reducers),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
