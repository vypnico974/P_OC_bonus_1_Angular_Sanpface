import { FaceSnapsService } from '../../../core/services/face-snap.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
// import { interval,tap,take, Subject, takeUntil,map } from 'rxjs';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
}

}
// export class FaceSnapListComponent implements OnInit, OnDestroy {
//   faceSnaps!: FaceSnap[];
//   private destroy$!: Subject<boolean>;
//   constructor(private faceSnapsService: FaceSnapsService) { }

//   ngOnInit(): void {
//     this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
//     this.destroy$ = new Subject<boolean>();
//     // interval(1000).pipe(
//     //   tap(console.log),
//     //   takeUntil(this.destroy$)
//     // ).subscribe();

//     // interval(1000).subscribe(value => console.log(value !== 3 ? 'Tick' : 'BANG'));
//     // interval(1000).subscribe(value => console.log(value % 3 !== 0 ? 'Tick' : 'BANG'));
//     // interval(500).pipe(
//     //   tap(console.log),
//     //   map(value => 2 * (value + 100))
//     // ).subscribe();
//   }
//   ngOnDestroy(): void {
//     this.destroy$.next(true);
//   }
//     // interval(1000).pipe(tap(console.log)).subscribe();
//     // this.faceSnaps = [
     
//     // ];
// }
