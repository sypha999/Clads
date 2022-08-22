import { createStackNavigator } from "@react-navigation/stack"

import CustomHeader from "../components/CustomHeader"
import MediaScreen from "../screens/dashboard/MediaScreen"
import { ImageFullScreen, setHeaderTitle } from "../screens/dashboard/ImageFullScreen"

const Stack = createStackNavigator()

const MediaManagementStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                        name='MediaScreen' 
                        component={MediaScreen}
                        options={{
                            header: ({ navigation, route, options }) => {
                                const title = 'Photo Gallery'
                                return <CustomHeader title={title} style={options.headerStyle} navigation={navigation} iconFlag={false} backNav={false} />;
                            },
                        }}
            />
            <Stack.Screen 
                        name='ImageFullScreen' 
                        component={ImageFullScreen}
                        options={{
                            header: ({ navigation, route, options }) => {
                                const title = setHeaderTitle()
                                return <CustomHeader title={title} style={options.headerStyle} navigation={navigation} iconFlag={false} backNav={true} menu={true}/>;
                            },
                        }}/>
        </Stack.Navigator>
    )
}

export default MediaManagementStack