import { Button, TextInput, View } from "react-native"

const Item = ({ name, id, handleChange, done, count }) => {

    return (
        <View>
            <TextInput
                value={name}
                name={id}
            >

            </TextInput>
            <Button
                name={id}
                title="Mark as completed"
                onPress={() => handleChange(id)}
                checked={done}>
            </Button>

        </View>
    )
}
export default Item;