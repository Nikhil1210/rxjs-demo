import {ArrayObserver} from "./src/class-observer";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from'; 
import {sourceObserver, sourceObserverIntervals} from "./src/async-observable";
import { CreateObservables } from "./src/create-observables";

let numArr = [1, 6, 10];
let arraySource = Observable.from(numArr);
/**
 * Observer implmented using a class
 */
//  arraySource.subscribe(new ArrayObserver());
/**
 * Observer created inline using arrow functions
 */
// arraySource.subscribe( x => console.log(`value of x: ${x}`), 
//                 err => console.log(`value of x: ${err}`),
//                 () => console.log(`completed`));

/**
 * Here, sourceObserver is an observable on changing observer
 */
// sourceObserverIntervals.subscribe( (x: any) => console.log(`value of x: ${x}`), 
//                 (err: any) => console.log(`value of x: ${err}`),
//                 () => console.log(`completed`));

/**
 * 
 */
new CreateObservables();