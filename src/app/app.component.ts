import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hub-movies';
//Esto se ocuopa para testing
  // form: FormGroup = new FormGroup({})
  // isCheck: any;
  // constructor(private fb: FormBuilder) { }
  
  // ngOnInit(): void{
  //   this.form = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password:['', [Validators.required]]
  //   })
    
  //   }
  }

