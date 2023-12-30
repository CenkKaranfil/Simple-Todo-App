import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { removeItem, selectList, updateList } from "../redux/TodoReducer";
import { View, StyleSheet } from "react-native";

const List = () => {

    const TodoList = useSelector(selectList);

    const dispatch = useDispatch();

    const handleChange = (id) => {

        dispatch(removeItem(id));

    }

    return (
        <View style={styles.container}>
            {TodoList.map((item) => (
                <Item

                    style={styles.item}
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    done={item.done}
                    handleChange={handleChange}
                />


            ))}
        </View>
    )
}
export default List;
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',

        justifyContent: 'flex-start',
    },
    item: {


        justifyContent: 'flex-start',

    }
});