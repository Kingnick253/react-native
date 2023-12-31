import { View, ScrollView, SafeAreaView } from 'react-native';
import {useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants' ;
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

const Home = () => {
    // defining the router
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")
    return (
        // SafeAreaView allows me to show the content without being covered by device hardware
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{headerStyle: {backgroundColor: COLORS.lightWhite}, 
                          headerShadowVisible: false,
                        //   these two headerLeft and headerRight adds the menus on the right and left side.
                          headerLeft: () => (
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension ="60%" />
                          ),
                          headerRight: () => (
                            <ScreenHeaderBtn iconUrl={images.profile} dimension ="100%" />
                          ),
                        // This hides the Index name for the title 
                          headerTitle: ""
                                          
            }}
            
            />
                {/* this prop showsVScroll gets rid of the in scroll indicator on the right hand side when set to false */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if(searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;