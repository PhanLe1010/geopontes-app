import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'App Work!'
  constructor(private router: Router) { }

  ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            else{
              window.scrollTo(0, 0);
                   
            }
        });
    }
}
