import { Observable } from 'rxjs';

// const obs = new Observable((observer) => {
//   observer.next(1);
//   observer.next(2);
// });

// obs.subscribe({
//   next: (value) => {
//     console.log(value);

//     throw new Error('Error with value: ' + value);
//   },
//   error: (error) => {
//     console.error(
//       'Can handle error which is thrown in the next callback:',
//       error
//     );
//   },
// });

// console.log(
//   'Even though there was an error, this will still run. Because the error was caught by Rxjs and re-throws it asynchronously.'
// );

const obs = new Observable((observer) => {
  throw new Error('Error before emitting values');

  observer.next(1);
  observer.next(2);
});

obs.subscribe({
  next: (value) => {
    console.log(value);
  },
  //   error: (error) => {
  //     console.log('get the error here');
  //   },
});
