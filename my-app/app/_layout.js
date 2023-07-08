import { Stack } from "expo-router";    
import { useCallback } from "react";
import { useFont } from "expo-font";
// this is importing everything
import * as SplashScreen from 'expo-splash-screen';
// Makes the native splash screen (configured in app.json) remain visible until hideAsync is called.
SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
    const onLayoutRootView = useCallback(async ()=> {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }

    }, [fontsLoaded])

    return <Stack  />;
}

export default Layout;