import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";

const Button = ({ value }) => {
    return (
        <TouchableOpacity
            style={styles.button}
        >
            <Text
                style={styles.buttonText}
            >
                {value}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.blue,
        borderRadius: 12,
        paddingVertical: 18,
        width: '100%'
    },

    buttonText: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '125%',
        color: COLORS.white,
        textAlign: 'center'
    }
})

export default Button;








// import React, { useState, useRef, useEffect } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from "react-native";

// const { width } = Dimensions.get('window');

// // пример добавления двойной кнопки
// // <DoubleBtn
// //    textLeft={'Карта'}   название кнопок
// //    textRight={'Склады'}   название кнопок
// //    stocksDialog={stocksDialog}   useState (false/true)
// //    setStocksDialog={setStocksDialog}   useState (false/true)
// // />
// //        _______________________________
// //       /;;;;;;;;;;;;\                  \
// //       |;;;;;;;;;;;;;|                  |
// //       |;;;;;TEXT;;;;|       TEXT       |
// //       |;;;;;;;;;;;;;|                  |
// //       \;;;;;;;;;;;;/__________________/

// const Button = ({ textLeft, textRight, stocksDialog, setStocksDialog }) => {
//   //Ввести названия левой и правой кнопки & действия левой и правой кнопки
//   const [activeButton, setActiveButton] = useState('left');
//   const translateX = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.spring(translateX, {
//       toValue: stocksDialog === false ? 0 : width / 2 - 20, // Adjusting width for the container padding/margin
//       useNativeDriver: false,
//     }).start();
//   }, [stocksDialog, translateX]);



//   return (
//     <View style={styles.container}>
//       <View style={styles.group}>
//         <Animated.View
//           style={[
//             styles.animatedBackground,
//             { transform: [{ translateX }] },
//           ]}
//         />
//         <TouchableOpacity
//           style={[styles.button, stocksDialog && styles.inactiveButton]}
//         >
//           <Text style={stocksDialog ? styles.activeText : styles.text}>
//             {textLeft}
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, stocksDialog && styles.inactiveButton]}
//         >
//           <Text style={stocksDialog ? styles.activeText : styles.text}>
//             {textRight}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#ccc',
//     borderRadius: 25,
//   },
//   group: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     position: 'relative',
//     borderRadius: 25,
//   },
//   button: {
//     alignItems: 'center',
//     padding: 15,
//     width: '50%',
//     zIndex: 1, // Ensuring buttons are above the animated background
//   },
//   inactiveButton: {
//     backgroundColor: 'transparent',
//   },
//   animatedBackground: {
//     position: 'absolute',
//     width: '50%',
//     height: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     zIndex: 0,
//     // Shadow for iOS
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     // Shadow for Android
//     elevation: 5,
//   },
//   text: {
//     color: '#000',
//   },
//   activeText: {
//     color: '#000', // Changing the color of the text in active button
//   },
// });

// export default Button;
