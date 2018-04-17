import { Observable, Observer } from "rxjs";

let number = [1, 5, 10,16];
let source = Observable.from(number);

/*
class MyObservable implements Observer<number> {
    next(value: number){
        console.log(`Value ${value}`);
    };
    error(err: any){
        console.log(`Error ${err}`);
    };
    complete(){
        console.log(`Cumplete`);
    };
}
//Suscripcion creando clase

ource.subscribe(new MyObservable);*/


//Otra opcion -> Lambdas , mejor practica
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