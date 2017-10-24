import {Observable, Observer} from 'rxjs';
export class ArrayObserver implements Observer<number>{
  
    next(value:any){
        console.log(`value: ${value}`);
    }
    error(err: any){
        console.log(`error: ${err}`);
    }
    complete(){
        console.log(`complete`);
    }
}