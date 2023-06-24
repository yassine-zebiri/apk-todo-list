import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory, useParams } from "react-router";
import { SetStateTodo, SetStateTodoDone, StateTodo, StateTodoDone } from "../data";
import { addOutline, arrowForward, arrowForwardOutline, chevronBack, chevronForward, playForward } from 'ionicons/icons';
import { useState } from "react";
const Todo:React.FC=()=>{
    const param:any=useParams();
    const data:any=StateTodo().lists[param.index];
    const[input,SetInput]:any=useState(data.title);
    const[input1,SetInput1]:any=useState(data.content);
    const history=useHistory();
    const date=new Date();

/*  let arr=StateTodo().lists; 
    arr[0]={title:"yassine",context:'hhhh',date:arr[0].date}
    console.log(arr); */
    const Save=(data:any)=>{
        
        if(data.title.length>0){
            let arr=StateTodo().lists; 
            arr[param.index]={title:data.title,content:data.content,date:arr[0].date}
            SetStateTodo([...arr]);
        }
    }
    const Remove=()=>{
        let arr=StateTodo().lists;
        arr.splice(param.index,1);
        SetStateTodo([...arr]);
        history.replace('/');
    }
    const Done=()=>{
        let arr=StateTodoDone().done;
        arr.push({title:data.title,date:date.toDateString()});
        SetStateTodoDone([...arr]);
        Remove();
        
    }
    return(
        <IonPage>
        <IonContent fullscreen>
            <div className="header">
            
                    <IonButton color={"light"} fill="outline" onClick={()=>history.goBack()} >
                        <IonIcon icon={chevronBack} />
                    </IonButton>
                    <p>show todo</p>
            </div>

            
            <div className=" content todo">
                    <div className="form">
                        <p>date : {data.date} </p>
                    </div>
                    <div className="form">
                        <p>title</p>
                        <input onChange={(e)=>{SetInput(e.target.value)}} value={input} />
                    </div>
                    <div className="form">
                        <p>content</p>
                        <textarea onChange={(e)=>{SetInput1(e.target.value)}} value={input1}></textarea>
                    </div>
                    <div className="btns">
                        <IonButton size="small" fill="outline" color={"light"}
                        onClick={()=>Remove()}
                        >remove</IonButton>
                        <IonButton size="small" fill="outline" color={"light"}
                        onClick={()=>Done()}
                        >Done</IonButton>
                        <IonButton size="small" color={"light"} 
                        onClick={()=>Save({title:input,content:input1})}
                        >save</IonButton>                   
                    </div>
            </div>

            </IonContent>
        </IonPage>
    )
}
export default Todo;