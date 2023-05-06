import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap }
  from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {
    // interval(500).pipe(
    //   take(10),
    //   map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
    //   tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
    //   mergeMap(color => this.getTrainObservable$(color)),
    //   tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    // ).subscribe();
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }
}




// import { Component, OnInit } from '@angular/core';
// import { Observable, interval } from 'rxjs';
// import { map, filter, tap } from 'rxjs/operators';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {

//   // interval$!: Observable<number>;
//   interval$!: Observable<string>;
 

//   ngOnInit() {

//     this.interval$ = interval(1000).pipe(
//       filter(value => value % 3 === 0),
//       map(value => value % 2 === 0 ?
//           `Je suis ${value} et je suis pair` :
//           `Je suis ${value} et je suis impair`
//       ),
//       tap(text => this.logger(text))
//     ); 
//   }
//   logger(text: string): void {
//     console.log(`Log: ${text}`);
//   }
// }

//    // this.interval$ = interval(1000).pipe(
//     //   filter(value => value % 3 === 0),
//     //   map(value => value % 2 === 0 ?
//     //       `Je suis ${value} et je suis pair` :
//     //       `Je suis ${value} et je suis impair`
//     //   )
//     // );
//     // this.interval$.subscribe(value => console.log(value));


//     // this.interval$ = interval(1000).pipe(
//     //   map(value => value % 2 === 0 ?
//     //           `Je suis ${value} et je suis pair` :
//     //           `Je suis ${value} et je suis impair`
//     //       )
//     // ); 
//     // this.interval$.subscribe(value => console.log(value));

    


//     // this.interval$ = interval(1000).pipe(
//     //   map(value => value * 10)
//     // );      
//     // this.interval$.subscribe(value => console.log(value));



//     // interval$.subscribe(value => console.log(value));

//     // setTimeout(() => {
//     //   interval$.subscribe(value => console.log(value));
//     // }, 3000);

//     // interval$.subscribe(value => console.log(value));

//     // setTimeout(() => {
//     //     interval$.subscribe(value => console.log(value));
//     // }, 3000);
// // export class AppComponent implements OnInit {
// //   mySnap!: FaceSnap;
// //   myOtherSnap!: FaceSnap;
// //   myLastSnap!: FaceSnap;

// //   ngOnInit() {
// //     this.mySnap = {
// //       title: 'Archibald',
// //       description: 'Mon meilleur ami depuis tout petit !',
// //       imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
// //       createdDate: new Date(),
// //       snaps: 0,
// //       location:'Paris'
// //     };
// //     this.myOtherSnap = {
// //       title: 'Three Rock Mountain',
// //       description: 'Un endroit magnifique pour les randonnées.',
// //       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
// //       createdDate: new Date(),
// //       snaps: 0,
// //       location:'la Montagne'
// //     };
// //     this.myLastSnap = {
// //       title: 'Un bon repas',
// //       description: 'Mmmh que c\'est bon !',
// //       imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
// //       createdDate: new Date(),
// //       snaps: 0
// //     };
// //   }
// // }