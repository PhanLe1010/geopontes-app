import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit, AfterViewChecked {

  private scrollExecuted: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private router: Router ) {}

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

  ngAfterViewChecked() {

    if ( !this.scrollExecuted ) {
      let routeFragmentSubscription: Subscription;

      // Automatic scroll
      routeFragmentSubscription =
        this.activatedRoute.fragment
          .subscribe( fragment => {
            if ( fragment ) {
              let element = document.getElementById( fragment );
              if ( element ) {
                element.scrollIntoView();

                this.scrollExecuted = true;

                // Free resources
                setTimeout(
                  () => {
                    console.log( 'routeFragmentSubscription unsubscribe' );
                    routeFragmentSubscription.unsubscribe();
                }, 1000 );

              }
            }
          } );
    }

  }

}
