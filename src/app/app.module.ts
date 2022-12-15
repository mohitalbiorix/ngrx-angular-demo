import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CounterDemoComponent } from './counter/counter-demo/counter-demo.component';
import { counterReducer } from './counter/store/reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({count:counterReducer}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
