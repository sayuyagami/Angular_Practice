import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterpageComponent } from './registerpage/registerpage.component'; 
 
const routes: Routes = [ 
  {path:'',redirectTo:'register',pathMatch:'full'}, 
  {path:'register',component:RegisterpageComponent},
  {path:'login',component:LoginpageComponent}, 
  {path:'home',component:HomepageComponent}, 
  {path:'header',component:HeaderComponent}, 
  {path:'menu/:rstrtname',component:MenuComponent}, 
  {path:'loaddetails',component:DetailsComponent}
]; 
 
@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
}) 
export class AppRoutingModule { }