// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd, ActivatedRoute  } from '@angular/router';
//
// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.scss']
// })
// export class AboutComponent implements OnInit {
//
// constructor( private route: ActivatedRoute, private router: Router ) {}
//
//   ngOnInit() {
//       this.router.events.subscribe(s => {
//         if (s instanceof NavigationEnd) {
//           const tree = this.router.parseUrl(this.router.url);
//           if (tree.fragment) {
//             const element = document.querySelector("#" + tree.fragment);
//             if (element) { element.scrollIntoView(element); }
//           }
//         }
//       });
//     }
//
//   onAnchorClick ( ) {
//     this.route.fragment.subscribe ( f => {
//       const element = document.querySelector ( "#" + f )
//       if ( element ) element.scrollIntoView ( element )
//     });
//   }
//
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
} )
export class AboutComponent {

  constructor( private router: Router ) {}

  gotoHashtag( prodID: string ) {
    this.router.navigate( [ '/my-app-route' ], { fragment: prodID } );
  }

}
