import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.yassine01',
  appName: 'todo-list',
  webDir: 'build',
  bundledWebRuntime: true,
 
  plugins: {
    CapacitorCookies:{
      enabled:true
    },
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      //backgroundColor: "#a98282",
      androidSplashResourceName: "splash",
      //androidScaleType: "CENTER_CROP",
      showSpinner: false,
      //androidSpinnerStyle: "large",
      //iosSpinnerStyle: "small",
      //spinnerColor: "#999999",
      splashFullScreen: false,
      splashImmersive: true,
      //layoutName: "launch_screen",
      //useDialog: true
    }
  }
};

export default config;
