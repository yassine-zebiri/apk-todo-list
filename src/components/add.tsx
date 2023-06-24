import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { SetStateTodo, StateTodo } from "../data";

const Add:React.FC=()=>{
    const d=StateTodo();
    const[input,SetInput]:any=useState('');
    const[input1,SetInput1]:any=useState('');
    const date=new Date();
    const history=useHistory();
    const add=(data:any)=>{
        if(data.title.length>0){
            d.lists.push(data);
            SetStateTodo([...d.lists]);
            SetInput('')
            SetInput1('')
            history.replace('/');
        }
    }
    
    return(
        <IonPage>
            <IonContent fullscreen>
            <div className="header">
            
                <IonButton color={"light"} fill="outline" onClick={()=>history.goBack()} >
                    <IonIcon icon={chevronBack} />
                </IonButton>
                <p>add todo</p>
            </div>
                <div className=" content todo">
        
                    <div className="form">
                        <p>title</p>
                        <input onChange={(e)=>SetInput(e.target.value)} value={input} />
                    </div>
                    <div className="form">
                        <p>content</p>
                        <textarea onChange={(e)=>SetInput1(e.target.value)} value={input1}></textarea>
                    </div>
                    <div style={{width:"100%"}}>
                    <IonButton color={'light'} expand={"full"}
                    onClick={()=>{add({title:input,content:input1,date:date.toDateString()})}} >add</IonButton></div>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Add;