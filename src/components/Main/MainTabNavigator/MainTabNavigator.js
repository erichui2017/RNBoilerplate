import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import TabComponent from './TabComponent';

import Home from "../Home";
import Mine from '../Mine';
import Newest from '../Newest';
import Fire from '../Fire';

// tab pages
const routeConfigs = { 
    Home: {screen:Home},
    Fire: {screen:Fire},
    Newest: {screen:Newest},
    Mine: {screen:Mine},
};

const MainTabNavigator = createBottomTabNavigator(
    routeConfigs,
    {
      tabBarPosition: "bottom",
      tabBarComponent: props =>
        <TabComponent
          {...props}
          style={{ borderTopColor: '#605F60' }}
        />
    }
);

export default MainTabNavigator;