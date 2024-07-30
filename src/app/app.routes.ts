import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrackapplicationComponent } from './trackapplication/trackapplication.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DeptstaffattendanceentryComponent } from './deptstaffattendanceentry/deptstaffattendanceentry.component';
import { DeptstaffhomepageComponent } from './deptstaffhomepage/deptstaffhomepage.component';
import { DeptstaffmarksentryComponent } from './deptstaffmarksentry/deptstaffmarksentry.component';
import { DepttopperpageComponent } from './depttopperpage/depttopperpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { StudenthomepageComponent } from './studenthomepage/studenthomepage.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AboutdeptartmentComponent } from './aboutdeptartment/aboutdeptartment.component';
export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'track-application', component: TrackapplicationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'loginpage', component:LoginpageComponent },
  {path:'contactus',component:ContactusComponent},
  {path:'deptstaffattendanceentry',component:DeptstaffattendanceentryComponent},
  {path:'deptstaffhomepage',component:DeptstaffhomepageComponent},
  {path:'deptstaffmarksentry',component:DeptstaffmarksentryComponent},
  {path:'depttopperpage',component:DepttopperpageComponent},
  {path:'studenthomepage',component:StudenthomepageComponent},
  {path:'adminhomepage',component:AdminhomepageComponent},
  {path:'aboutdepartment',component:AboutdeptartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
