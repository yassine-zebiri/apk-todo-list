import { getCookie, setCookie } from "./cookie";

export function GET_TODO(){
    let cart=null;
    if(getCookie("todo")){
        cart=JSON.parse(getCookie("todo"));
    
    }else{
        setCookie('todo',JSON.stringify({lists:[]}));
        cart=JSON.parse(getCookie("todo"));
    }
}


export function StateTodo(){
    let cart=null;
    cart=JSON.parse(getCookie("todo"));
    return cart
}
export function SetStateTodo(data:any){
    return setCookie('todo',JSON.stringify({lists:data}));
}



export function GET_TODO_DONE(){
    let cart=null;
    if(getCookie("todo-done")){
        cart=JSON.parse(getCookie("todo-done"));
    
    }else{
        setCookie('todo-done',JSON.stringify({done:[]}));
        cart=JSON.parse(getCookie("todo-done"));
    }
}

export function StateTodoDone(){
    let cart=null;
    cart=JSON.parse(getCookie("todo-done"));
    return cart
}
export function SetStateTodoDone(data:any){
    return setCookie('todo-done',JSON.stringify({done:data}));
}