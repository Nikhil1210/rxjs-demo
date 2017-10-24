import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

let arr =[2,4,6,8,10];
export let sourceObserver = Observable.create( (x:any )=>{
    for(let item of arr){
        x.next(item);
    }
    x.complete();
})
export let sourceObserverIntervals = Observable.create( (x:any) =>{
        let index=0;
        let sendData= ()=>{
            x.next(arr[index++]);
        if(index < arr.length){
            setTimeout(sendData, 1000);
        }else{
            x.complete();
        }
    }
    sendData();
}).map((x: any) => x * 2)
.filter((x:any) => x > 6)