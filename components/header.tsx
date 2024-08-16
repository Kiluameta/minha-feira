import Colors from "@/constants/Colors";
import { 
    View, 
    ViewProps, 
    TextProps, 
    Text, 
    StyleSheet 
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize";


function Header({children, ...rest}: ViewProps) {
    return (
        <View style={style.container} {...rest}>
            {children}
        </View>
    )
}

function Title({children}: TextProps) {
    return (
        <Text style={style.title}>Olá, {children}{"\n"}<Text style={style.subtitle}>Dia de feira,{"\n"}prepare sua lista!</Text></Text>
    )
}

Header.Title = Title

export { Header }

const style = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight() + RFValue(10),
        paddingLeft: RFValue(30),
        paddingBottom: RFValue(30),
        borderBottomRightRadius: 50,
        backgroundColor: Colors.green[500],
        width: "100%",
        justifyContent: "center",
    },
    title: {
        color: Colors.green[300],
        fontSize: 16,
        fontFamily: "Lexend_400Regular",
    },
    subtitle: {
        color: "white",
        fontSize: 20,
        fontFamily: "Lexend_400Regular"
    }
})