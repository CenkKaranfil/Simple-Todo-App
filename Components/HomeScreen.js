import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { addItem, selectListLength, resetList, removeItem } from '../redux/TodoReducer'; //diğerlerini de ekle
import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import CounterReducer, {increaseVal, resetVal, value } from '../redux/CounterReducer';


function HomeScreen({ }) {

    const dispatch = useDispatch();

    //for setting todo items
    const [todo, setTodo] = useState('');
    const listLength = useSelector(selectListLength);

    const counterValue = useSelector(value);

    // for setting counter
    //const [value, setValue] = useState(0);



    // add item to todo list
    const handleAddItem = () => {
        const newItem = {
            name: todo,
            id: listLength,
            done: false,
        };

        dispatch(addItem(newItem));
        setTodo('');
    };

    //reset todo list
    const handleReset = () => {
        dispatch(resetList())
    };



    // handling increment
    const increaseCount = (val) => {
        dispatch(increaseVal(val));
    }

    // reset counter
    const resetCounter = () => {
        dispatch(resetVal());
    }


    return (

        <View style={styles.container}>
            <View style={styles.textArea}>
                <TextInput style={styles.input}
                    value={todo}
                    onChangeText={(e) => (setTodo(e))}
                    placeholder='Enter a todo item'>
                </TextInput>
            </View>
            <View style={styles.set}>

                <Button title='add item' onPress={handleAddItem} />
                <Button title='+1' onPress={() => increaseCount(1)} />
                <Button title='+5' onPress={() => increaseCount(5)} />
                <Button title='reset counter' onPress={() => resetCounter()} />
                <Button title='reset list' onPress={handleReset} />


            </View>
            <View style={styles.list}>

                <Text style={styles.counter}>{counterValue} days remanining</Text>

                <List />
            </View>


        </View>

    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textArea: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    set: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    input: {
        flex: 0.9,
        borderWidth: 1.5,
        paddingHorizontal: 2,

    },
    list: {
        flex: 2,
        marginHorizontal: 20,

    },
    counter: {
        marginVertical: 20,
        borderBottomWidth: 0.5,

    }

});