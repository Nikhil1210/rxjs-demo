import { Observable } from "rxjs/Observable";
import 'rxjs';
export class CreateObservables{
 emptyObser = Observable.empty();
 ofObsrv = Observable.of('foo', 'bar', 'hello');
 fromObservable2 = Observable.from('World');
 fromObservable = Observable.from(new Promise(
                                        (resolve:any, reject:any) => resolve('promise reolved')));
 IntervalObsrv = Observable.interval(1000)
                            .take(4);
 promiseObsrv= Observable.fromPromise(fetch("https://jsonplaceholder.typicode.com/posts/10")
                                        .then()
                                        .then((res:any) => res.json()));
 eventObsrv = Observable.fromEvent(document, 'click');
 eventMapObsrv = Observable.fromEvent(document, 'click').map((x:any) => x.clientX && x.clientY) ;
 
 constructor(){
    // create an empty observable which copletes immidiately
    this.emptyObser.subscribe(x => console.log(`Inside subscribe of emptyObser: ${x}`)
                                    ,err => console.log(`error: ${err}`)
                                    ,() => console.log(`Inside subscribe of emptyObser: completed`)); 

    // create observable from one or more static variables
    this.ofObsrv.subscribe(x => console.log(`Inside subscribe of ofObsrv: ${x}`)
                                    ,err => console.log(`error: ${err}`)
                                    ,() => console.log(`completed`));

    // from observable, for arrays and iterables, all contained values will be emitted as a sequence!
    this.fromObservable.subscribe(x=> console.log(`Inside subscribe of fromObservable: ${x}`));
    // In case of string, data stream is emitted as an array of characters 
    this.fromObservable2.subscribe(x=> console.log(`Inside subscribe of fromObservable2: ${x}`));

    // Use Interval and consider only first 4 elements
    this.IntervalObsrv.subscribe(x => console.log(x));

    // from promise
    this.promiseObsrv.subscribe(x =>  console.log( x));

    // from click event
    this.eventObsrv.subscribe( x => console.log(x));

    //map the click event to get some useful information
    this.eventMapObsrv.subscribe( x => console.log(`clicked at (x,y): ${x}`));
    }
}