# Learnings on Rxjs Observable

In simple terms, observable is some kind of interface that will give you zero or multiple data event, synchronously or asynchronously. It's similiar to JavaScript Promise, except that Promise has maximum one event. It's like the radio channel that is broadcasting there and you can turn on your radio and connect to it. It's like a product manufacturing line, at each step, you get the result from the last step, add something to it and pass it to the next step or end.

# # The first baby step, plug into the event source

You may get three kinds of events: next, complete and error

```js
import { Observable } from 'rxjs';

/*
 * Next and complete
 */
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

/*
 * Next and error
 */
const nextAndErrorObservable = new Observable((observer) => {
  // Emit values to the observer
  observer.next('Hello');
  observer.error('Error');
});

nextAndErrorObservable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
});
```

# # The second step, unsubscribe

For "unsubscribe", some advanced concepts might need to refer to `Subscription`. We can only unsubscribe asynchronous source, but not synchronous source.

```js
import { fromEvent } from 'rxjs';

cosnt clickSubscription = fromEvent(document, 'click').subscribe(() => console.log(`Clicked`));

/*
 * after some time
 */
clickSubscription.unsubscribe();
```

# # The third step, pipe

# # Error handling

When there is error thrown directly inside (first callstack) the "subscribe" function, if error handler defined in the observer, the error will be emited to the error handler function. If no error handler defined in the observer, then the error will be thrown asynchronously to the global.

```js
const hasErrorObservable = new Observable((observer) => {
  observer.next(1);

  throw new Error('Error before emitting values');

  observer.next(2);
});

const handleErrorObserver = {
  next: (next) => console.log(`next value: `, next),
  error: (err) => console.log(`err: `, err),
};
```
