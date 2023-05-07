import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
//import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
//import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
//import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';


// const routes: Routes = [
//   { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
//   { path: 'facesnaps', component: FaceSnapListComponent },
//   { path: '', component: LandingPageComponent },
//   { path: 'create', component: NewFaceSnapComponent },
//   { path: '**', component: PageNotFoundComponent }

// ];

const routes: Routes = [
  { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule) },
  { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule {}