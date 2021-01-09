import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import orphanagesMap from "./pages/orphanagesMap";
import orphanageDetails from "./pages/orphanageDetails";
import selectMapPosition from "./pages/createOrphanage/selectMapPosition";
import orphanageData from "./pages/createOrphanage/orphanageData";
import Header from "./components/Header";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="orphanagesMap" component={orphanagesMap} />
        <Screen
          name="orphanageDetails"
          component={orphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />,
          }}
        />

        <Screen
          name="selectMapPosition"
          component={selectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione a localização" />,
          }}
        />
        <Screen
          name="orphanageData"
          component={orphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
