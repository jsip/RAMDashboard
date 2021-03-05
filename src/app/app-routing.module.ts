import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FillingsComponent } from './components/fillings/fillings.component';
import { FundamentalsComponent } from './components/fundamentals/fundamentals.component';
import { LoggingComponent } from './components/logging/logging.component';
import { ResearchComponent } from './components/research/research.component';
import { TechnicalsComponent } from './components/technicals/technicals.component';

const routes: Routes = [
  { path: 'research', component: ResearchComponent },
  { path: 'fundamentals', component: FundamentalsComponent },
  { path: 'technicals', component: TechnicalsComponent },
  { path: 'fillings', component: FillingsComponent },
  { path: 'logging', component: LoggingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
