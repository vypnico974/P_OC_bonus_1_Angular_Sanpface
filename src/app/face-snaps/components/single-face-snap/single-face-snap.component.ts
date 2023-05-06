import { Component, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snap.services';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  // @Input()
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!:string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route:ActivatedRoute) {};

  ngOnInit() {
   this.buttonText = 'Oh Snap!';
  /*Ajouter le  +  au début de l'expression permet de cast
  (changer le type d'une variable) une string  de nombres en  number */
   const faceSnapId = +this.route.snapshot.params['id'];
   this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  // onSnap() {
  //   if (this.buttonText === 'Oh Snap!') {
  //     this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
  //     this.buttonText = 'Oops, unSnap!';
  //   } else {
  //     this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  //     this.buttonText = 'Oh Snap!'
  //   }
  // }
  // onSnap(faceSnapId: number) {
  //   if (this.buttonText === 'Oh Snap!') {
  //       this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap');
  //       this.buttonText = 'Oops, unSnap!';
  //   } else {
  //       this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap');
  //       this.buttonText = 'Oh Snap!';
  // }
  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => this.buttonText = 'Oops, unSnap!')
        );
    } else {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => this.buttonText = 'Oh Snap!')
        );
    }
  }

}
