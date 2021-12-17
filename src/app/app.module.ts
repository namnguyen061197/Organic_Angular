import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './share-modules/footer/footer.component';
import { HeaderComponent } from './share-modules/header/header.component';
import { ShareModule } from './share-modules/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TypeofPipe } from './client/pipes/typeof.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { MenuAdminComponent } from './share-modules/menu-admin/menu-admin.component';
import { HeaderAdminComponent } from './share-modules/header-admin/header-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    AdminComponent,
    MenuAdminComponent,
    HeaderAdminComponent,
    TypeofPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar:true,
      preventDuplicates: true,
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
