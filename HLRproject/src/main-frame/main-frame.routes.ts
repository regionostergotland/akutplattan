import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import {BarnHLRStartComponent} from "../components/barnhlr/barnhlr.component";
import {BarnHLRSettingsComponent} from "../components/barnhlrsettings/barnhlrsettings.component";

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'barnhlr', component: BarnHLRStartComponent},
  { path: 'barnhlr/calc', component: BarnHLRSettingsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
