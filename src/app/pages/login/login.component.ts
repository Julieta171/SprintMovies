import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
   email!:string
   password!:string;
   loginService = inject(LoginService);
   router = inject(Router);
   toasterService = inject(ToastrService) //animaciones

 
    ngOnInit(){
        
         if(this.loginService.isLoggedIn)
           this.router.navigateByUrl("/browse");
    
          }

   onSubmit(){
       //validacion de correo y contrasena

       if(!this.email || !this.password){
         
        
             this.toasterService.error("Ingresa  email y contrasena") 
          
              return;
       }

       // si email y contra son correctos\

           this.loginService.login(this.email, this.password)
           //aqui deberiamos estar loggeados ya y hacer redireccion a pagina home 
           this.toasterService.success("éxito al iniciar sesión")
           this.router.navigateByUrl("/browse");
   }
  
      
      
}
