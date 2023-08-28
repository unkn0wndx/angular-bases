import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  //? Valor de default
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }]

  //? Expone el id del character que se eliminara
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter = (id?: string): void => {

    if (!id) return;

    this.onDelete.emit(id);
  }

}
