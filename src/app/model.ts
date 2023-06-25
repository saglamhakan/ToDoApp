import { Action } from "rxjs/internal/scheduler/Action";

export class Model {
    user;
    items;

    constructor(){
        this.user = "Sağlam";
        this.items = [
            new TodoItem("Spor", true),
            new TodoItem("Kahvaltı", false),
            new TodoItem("Kitap Okumak", false),
            new TodoItem("Sinema", false)
           
        ]
    }
}

export class TodoItem{
    description;
    action;

    constructor(description:any, action:any){
        this.description = description;
        this.action = action;

    }
}