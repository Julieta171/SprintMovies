import { Component, inject } from '@angular/core';
import { LoginService } from '../login/service/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  
     loginService = inject(LoginService)
     router = inject(Router)
  
   ngOnInit(){
        
      if(!this.loginService.isLoggedIn ){
            
          this.router.navigateByUrl('/login')
          
        }
      } 

}
