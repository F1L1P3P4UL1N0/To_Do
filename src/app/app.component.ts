import { Component } from '@angular/core';
import { Model, TodoItem } from "./model";

@Component({
  selector: "todo-app",
  templateUrl: './app.component.html'
})

export class AppComponent  {
  model = new Model();

  getName(){
    return this.model.user;
  }

  getTodoItems(){
    return this.model.items.filter(items => !items.done);
  }

  addItem(newItem, prioridade){
    if(newItem != ""){
      this.model.items.push(new TodoItem(newItem, false, prioridade));
    }
  }

  getItemsRealizados(){
    return this.model.items.filter(items => items.done);
  }
}
