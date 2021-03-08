import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

export default function Explore(props) {
    return (
        <View style={styles.container}>
            <Text>Explore!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
