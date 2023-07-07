import { View, ScrollView, SafeAreaView } from 'react-native';
import {useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants' ;
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

const Home = () => {
    // defining the router
    const router = useRouter();
    
    return (
        // SafeAreaView allows me to show the content without being covered by device hardware
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{headerStyle: {backgroundColor: COLORS.lightWhite}, 
                          headerShadowVisible: false,
                          headerLeft: () => (
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension ="60%" />
                          ),
                          headerRight: () => (
                            <ScreenHeaderBtn iconUrl={icons.profile} dimension ="1000%" />
                          ),
                                          
            }}
            
            />
        </SafeAreaView>
    )
}

export default Home;