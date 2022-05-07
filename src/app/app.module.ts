import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AppRoutingModule } from './app-routing.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { RegisterpageComponent } from './registerpage/registerpage.component'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { LoginpageComponent } from './loginpage/loginpage.component'; 
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { MenuComponent } from './menu/menu.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HeaderComponent } from './header/header.component';

@NgModule({ 
  declarations: [ 
    AppComponent, 
    RegisterpageComponent, LoginpageComponent, HomepageComponent, DetailsComponent, DialogboxComponent, AddrestaurantComponent, MenuComponent, HeaderComponent 
  ], 
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatSnackBarModule, 
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatExpansionModule,
    DragDropModule 
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }