import React from "react";
import { Button, StatusBar, Text, View } from "react-native";
import styles  from "../styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";

type Props = NativeStackScreenProps<RootStackParamList>;
export default  function Home({navigation}:Props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <Text>Home screen</Text>
            <Button title="Settings" onPress={()=>navigation.navigate("Settings")}/>
        </View>
    );
}