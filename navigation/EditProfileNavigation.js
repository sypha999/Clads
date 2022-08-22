import React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';

import EditProfileAccount from '../screens/profile/EditProfile/EditProfileAccount';
import EditProfileSecurity from '../screens/profile/EditProfile/EditProfileSecurity';


const EditProfile = () => {
    const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Account', title: 'Account' },
    { key: 'Security', title: 'Security' },
  ]);

  const renderScene = SceneMap({
    Account: EditProfileAccount,
    Security: EditProfileSecurity,
  });
    
    
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: "30%" }}
            style={{backgroundColor: 'white'}}
            sceneContainerStyle={{backgroundColor: 'white'}}
        />
        
    )
}

export default EditProfile