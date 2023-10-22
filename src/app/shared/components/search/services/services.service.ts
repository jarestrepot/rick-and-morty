import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  @Output() keypress: EventEmitter<string> = new EventEmitter();
  constructor() { }
}
