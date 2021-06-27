import { AuthService} from '@abp/ng.core';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  username:any;
  IsClient:any;
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  

  constructor(private oAuthService: OAuthService, private authService: AuthService) {
    var claimObj=JSON.parse(localStorage.getItem("id_token_claims_obj"));
    if(claimObj!=null){
     this.username = claimObj.name;
     this.IsClient = claimObj.role=='client';
    }
  }

  login() {
  this.authService.navigateToLogin();
  }

}
