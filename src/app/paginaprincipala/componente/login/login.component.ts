import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  verificare(nume: String, parola: String) {
    if (nume == "admin" && parola == "admin") {
      console.log("Merge");
      this.router.navigate(['/create']).then();
    }
    else
      console.log("Nu merge");

  }
}
