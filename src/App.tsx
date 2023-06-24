import { Route } from 'react-router-dom';
import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './theme/index.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Page from './components/page';
import Add from './components/add';
import { GET_TODO, GET_TODO_DONE } from './data';
import Todo from './components/Todo';
import DonePage from './components/done';


import { StatusBar, Style } from '@capacitor/status-bar';


setupIonicReact();



StatusBar.setOverlaysWebView({ overlay: true });
StatusBar.setStyle({style:Style.Dark});

const App: React.FC = () => {



GET_TODO();
GET_TODO_DONE();
  return(
  <IonApp>
    <IonReactRouter>
    <Route exact path={'/'} >
        <Page/>
    </Route>
    <Route exact path={'/add'} >
        <Add/>
    </Route>
    <Route exact path={'/todo/:index'} >
        <Todo/>
    </Route>
    <Route exact path={'/done'} >
        <DonePage/>
    </Route>
    </IonReactRouter>
  </IonApp>)
  }


export default App;
