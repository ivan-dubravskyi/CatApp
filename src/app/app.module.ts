import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from '@angular/common/http';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {NgOptimizedImage} from "@angular/common";
import {FullScreenLoaderModule} from "./shared/full-screen-loader/full-screen-loader.module";
import {SkeletonModule} from "./shared/skeleton/skeleton.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatCardComponent,
    FilterFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    NgOptimizedImage,
    FullScreenLoaderModule,
    SkeletonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
