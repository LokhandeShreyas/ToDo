import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy =[...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={{
      backgroundColor: "lightblue",
      flex: 1,
    }}>
        <View style={{
          paddingTop: 60,
          paddingHorizontal: 20,
        }}>
          <Text style={{
            fontSize: 24,
            fontWeight: "bold",
          }}>Today's Tasks</Text>
          {taskItems == 0 ? 
            <View>
              <Text style={{
              marginTop: 60,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
              color:"#303030"
              }}>No Tasks Pending</Text>
            </View>
            :
            <View style={{
              marginTop: 30,
            }}>
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task key={index} text={item}/>
                  </TouchableOpacity>
                )
              })}
            </View>
          }
        </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{
        position: "absolute",
        bottom: 30,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <TextInput
          style={{
            paddingVertical: 15,
            width: 300,
            paddingHorizontal: 15,
            backgroundColor: "white",
            borderRadius: 60,
            borderColor: "lightgray",
            borderWidth: 1,
          }}
          placeholder='Write a Task!'
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={{
            width: 60,
            height: 60,
            backgroundColor: "white",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor : "lightgray"
          }}>
            <Text>➕</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
