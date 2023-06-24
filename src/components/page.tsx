import {  IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonPage } from "@ionic/react";
import { addOutline, checkmarkDoneCircleOutline } from 'ionicons/icons';
import { useHistory } from "react-router";
import { StateTodo } from "../data";
import Item from "./item";



const Page:React.FC=()=>{

    const history=useHistory();

    
    return(
        <IonPage>
            <IonContent fullscreen className="bg">
            <div className="bg header-home">
                <IonButton color={"light"} fill="clear" size="large"
                onClick={()=>history.push('/done')}
                >
                    <IonIcon icon={checkmarkDoneCircleOutline} />
                </IonButton>
            </div>
            
                <div className=" content ">
                <h1>Todo List</h1>
                <div className="list-items">
                    {
                        StateTodo().lists.length>0?(
                        StateTodo().lists.map((i:any,index:any)=>(
                            <Item key={index} data={i} i={index} />
                        ))):
                        (
                            <div className="item" style={{textAlign: 'center'}}>
                                <p style={{width:'100%'}}>nothing todo</p>
                            </div>
                        )
                    }
                
                </div>
                </div>
                <div className="btn-fab">
                    <IonFab color={""}>
                        <IonFabButton color={"light"} onClick={()=>{history.push('/add')}} >
                            <IonIcon icon={addOutline}></IonIcon>
                        </IonFabButton>
                    </IonFab>
                </div>

            </IonContent>
        </IonPage>
    )
}
export default Page;