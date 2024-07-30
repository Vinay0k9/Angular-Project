import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrackapplicationComponent } from './trackapplication/trackapplication.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {DeptstaffattendanceentryComponent } from './deptstaffattendanceentry/deptstaffattendanceentry.component';
import { DeptstaffhomepageComponent } from './deptstaffhomepage/deptstaffhomepage.component';
import { DeptstaffmarksentryComponent } from './deptstaffmarksentry/deptstaffmarksentry.component';
import { DepttopperpageComponent } from './depttopperpage/depttopperpage.component';
import { StudenthomepageComponent } from './studenthomepage/studenthomepage.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AboutdeptartmentComponent } from './aboutdeptartment/aboutdeptartment.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IndexComponent,RegistrationComponent,TrackapplicationComponent,AboutComponent,ContactusComponent,LoginpageComponent,DeptstaffattendanceentryComponent,DeptstaffhomepageComponent,DeptstaffmarksentryComponent,DepttopperpageComponent,StudenthomepageComponent,AdminhomepageComponent,AboutdeptartmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'casestudy';
}
