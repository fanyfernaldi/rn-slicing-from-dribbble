import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/home_page';
import DetailPage from '../pages/detail_page';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
