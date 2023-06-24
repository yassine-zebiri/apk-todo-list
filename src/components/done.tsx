import {  IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonPage } from "@ionic/react";
import {  chevronBack, trash } from 'ionicons/icons';
import { useState } from "react";
import { useHistory } from "react-router";
import { SetStateTodoDone, StateTodoDone } from "../data";












const DonePage:React.FC=()=>{
    const[data,SetData]:any=useState(StateTodoDone().done);
    const history=useHistory();

    return(
        <IonPage>
            <IonContent fullscreen className="bg">
            <div className="header">
            
                    <IonButton color={"light"} fill="outline" onClick={()=>history.goBack()} >
                        <IonIcon icon={chevronBack} />
                    </IonButton>
                    <p>done todo</p>
            </div>
                <div className=" content todo">
                
                <div className="list-items">
                    {
                        data.length>0?(
                        data.map((i:any,index:any)=>(
                            <div className="item" key={index} >
                                <div className="item-name">
                                    {i.title}
                                </div>
                                <div className="item-date">
                                    {i.date}
                                </div>
                                
                            </div>
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
                        <IonFabButton color={"light"} onClick={()=>{
                            SetStateTodoDone([]);
                            SetData([]);
                            }} >
                            <IonIcon icon={trash}></IonIcon>
                        </IonFabButton>
                    </IonFab>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default DonePage;