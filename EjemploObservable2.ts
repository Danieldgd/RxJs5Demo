import { Observable, Observer } from "rxjs";

let number = [1, 5, 10,16];
//SEGUNDA FORMA DE AHCERLO
let source2 = Observable.from(number).map(x=>x*2).filter(x=>x>=10);

//PRIMERA FORMA DE HACERLO
let source = Observable.create((observer)=>{

    let index=0;
    let produceValue=()=>{
    observer.next(number[index++])
    
    if(index<number.length){
        setTimeout(()=>{
            produceValue();
        },2000);
    }else{
        observer.complete();
    }
  }
  produceValue();
}).map(x=>x*2).filter(x=>x>=10);
    /*    number.forEach(element=>{

        /*if(element===10){
            observer.error('Ya valio');
        } 
        observer.next(element);
    });
    observer.complete();

});*/



source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);

//Para source2
source2.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);