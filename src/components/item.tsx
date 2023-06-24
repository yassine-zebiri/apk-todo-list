import { IonButton, IonTitle } from "@ionic/react";
import { useHistory } from "react-router";

const Item:React.FC<{data:any,i:any}>=(props)=>{
    const history=useHistory();
    return(
        <div className="item" onClick={()=>{history.push(`/todo/${props.i}`)}}>
            <div className="item-name">
                {props.data.title}
            </div>
            <div className="item-date">
                {props.data.date}
            </div>
            <div className="item-btn">
                <IonButton size="small" fill="clear" color={"light"}>
                    <p>more</p>
                </IonButton>
            </div>
        </div>
    )
}
export default Item;