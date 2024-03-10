import { Observable } from 'rxjs';

const nextAndCompleteObservable = new Observable((observer) => {
  // Emit values to the observer
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});

nextAndCompleteObservable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Observable completed'),
});

const nextAndErrorObservable = new Observable((observer) => {
  // Emit values to the observer
  observer.next('Hello');
  observer.error('Error');
});

nextAndErrorObservable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
});
