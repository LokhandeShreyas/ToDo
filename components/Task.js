import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default function Task(props) {
    return (
        <View style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 15,
            flexDirection: "row",
            alignItems:"center",
            justifyContent: "space-between",
            marginBottom: 20,
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                <TouchableOpacity style={{
                    width: 25,
                    height: 25,
                    backgroundColor: "#55BCF6" ,
                    borderRadius: 5,
                    marginRight: 15,
                }}></TouchableOpacity>
                <Text style={{
                    maxWidth: "80%",
                }}>{props.text}</Text>
            </View>
            <View style={{
                height: 12,
                width: 12,
                borderRadius: 10,
                borderColor: "#55BCF6",
                borderWidth: 2,
            }}>

            </View>
        </View>
    )
}
