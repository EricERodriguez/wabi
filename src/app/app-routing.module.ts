import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'wabi',
  loadChildren: () => import('./app.module').then(m => m.AppModule),
  data: { title: 'wabi' }
},

{ path: '**', pathMatch: 'full', redirectTo: 'wabi' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
