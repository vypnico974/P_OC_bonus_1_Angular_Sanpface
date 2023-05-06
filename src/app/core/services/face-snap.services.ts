import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {}

  faceSnaps: FaceSnap[] = [];


  // faceSnaps: FaceSnap[] = [
  //     // vos FaceSnap ici
  //     {
  //       id:1,
  //       title: 'Archibald',
  //       description: 'Mon meilleur ami depuis tout petit !',
  //       imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //       createdDate: new Date(),
  //       snaps: 250,
  //       location: 'Paris'
  //     },
  //     {
  //       id:2,
  //       title: 'Three Rock Mountain',
  //       description: 'Un endroit magnifique pour les randonnées.',
  //       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
  //       createdDate: new Date(),
  //       snaps: 126,
  //       location: 'la montagne'
  //     },
  //     {
  //       id:3,
  //       title: 'Un bon repas',
  //       description: 'Mmmh que c\'est bon !',
  //       imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
  //       createdDate: new Date(),
  //       snaps: 30
  //     }
  // ];
    // getAllFaceSnaps(): FaceSnap[] {
    //     return this.faceSnaps;
    // }
    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    // getFaceSnapById(faceSnapId: number): FaceSnap {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //     if (!faceSnap) {
    //         throw new Error('FaceSnap not found!');
    //     } else {
    //         return faceSnap;
    //     }
    //   }
    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

      // snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      // //  const faceSnap = this.getFaceSnapById(faceSnapId);
      // //  snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      // }
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
                `http://localhost:3000/facesnaps/${faceSnapId}`,
                updatedFaceSnap)
            )
        );
      }

      // addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
      //   const faceSnap: FaceSnap = {
      //       ...formValue,
      //       snaps: 0,
      //       createdDate: new Date(),
      //       id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
      //   };
      //   this.faceSnaps.push(faceSnap);
      // }
      addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
        return this.getAllFaceSnaps().pipe(
             map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
             map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
             map(previousFacesnap => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFacesnap.id + 1
            })),
            switchMap(newFacesnap => this.http.post<FaceSnap>(
                'http://localhost:3000/facesnaps',
                newFacesnap)
            )
        );
      }

    // snapFaceSnapById(faceSnapId: number): void {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //     if (faceSnap) {
    //         faceSnap.snaps++;
    //     } else {
    //         throw new Error('FaceSnap not found!');
    //     }
    // }

    // unsnapFaceSnapById(faceSnapId: number): void {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //     if (faceSnap) {
    //         faceSnap.snaps--;
    //     } else {
    //         throw new Error('FaceSnap not found!');
    //     }
    // }
}