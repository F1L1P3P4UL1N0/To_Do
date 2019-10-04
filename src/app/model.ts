export class Model{
  user;
  items;

  constructor(){
    this.user = "Elmano";
    this.items = []
  }
}

export class TodoItem{
  action;
  done;
  prioridade;

  constructor(action, done, prioridade){
    this.action = action;
    this.done = done;
    this.prioridade = prioridade;
  }
}