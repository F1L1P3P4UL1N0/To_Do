export class Model{
  user;
  items;

  public sortByDataItem(): void {
    this.items.sort((a: TodoItem, b: TodoItem) => {
        return +new Date(a.data) - +new Date(b.data);
    });
}

  constructor(){
    this.user = "Elmano";
    this.items = []
  }
}

export class TodoItem{
  action;
  done;
  prioridade;
  data;

  constructor(action, done, prioridade, data){
    this.action = action;
    this.done = done;
    this.prioridade = prioridade;
    this.data = data;
  }
}