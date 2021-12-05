import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcactComponent } from './concact/concact.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share-modules/share.module';

const routes : Routes = [
  {
    path:'',
    component : ConcactComponent,
  }
]


@NgModule({
  declarations: [
    ConcactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    // AgmCoreModule.forRoot({
    //   apiKey :''
    // })
  ],
})
export class ConcactModuleModule { }
