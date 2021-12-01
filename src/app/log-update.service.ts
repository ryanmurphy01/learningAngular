import { Injectable } from '@angular/core';
import {SwUpdate} from '@angular/service-worker'
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(updates: SwUpdate, private snackBar: MatSnackBar) 
  {
    updates.available.subscribe(event => { 
      console.log('current version is', event.current); //displays current hash
      console.log('available version is', event.available); //displays new available hash
      let snackBarRef = snackBar.open("Update available");


    }); 
    updates.activated.subscribe(event => { 
      console.log('old version was', event.previous); 
      console.log('new version is', event.current); 
      let snackBarRef = snackBar.open("Update activated");

    }); 
  }

  // runSnackbar(){
  //   let snackBarRef = this.snackBar.open("Update activated");
  // }
}
