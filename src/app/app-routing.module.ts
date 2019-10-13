import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';


const routes: Routes = [{
  path: 'about',
  component: BreweryAboutComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
