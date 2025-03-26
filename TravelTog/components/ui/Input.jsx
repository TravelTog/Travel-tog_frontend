import { COLORS } from "@/assets/variables";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ placeholder, keyboardType, icon: IconComponent, isPassword }) => {
    const [text, setText] = useState("");
    const [isSecure, setIsSecure] = useState(isPassword);

    const handleChange = (newText) => {
        setText(newText);
    }

    return (
        <View style={styles.wrapperInput}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={text}
                onChangeText={handleChange}
                secureTextEntry={isSecure} // Это скрывает текст для пароля
            />
            {IconComponent && <IconComponent width={24} height={24} style={styles.icon} />}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapperInput: {
        width: '100%',
        height: 56,
        borderRadius: 12,
        backgroundColor: COLORS.input,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },

    input: {
        width: '100%',
        height: '100%',
        paddingLeft: 18,
        borderRadius: 12,
    },

    icon: {
        position: 'absolute',
        right: 18
    }
});

export default Input;
