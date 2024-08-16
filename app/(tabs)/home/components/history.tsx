import Colors from "@/constants/Colors"
import { FontAwesome6 } from "@expo/vector-icons"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"

type HistoryProps = {
    title: string
    itens: string[]
}

const ItemMock: HistoryProps =  {
    title: "Feirinha do salgado",
    itens: [
        "",
        "",
        ""
    ]
}

export function History() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.ContentTitle}>
                <Text style={styles.title}>Última feira</Text>
                <FontAwesome6 name='arrow-right-long' size={20} color={Colors.green[300]} />
            </View>
            <View style={styles.Card}>
                <View>
                    <View style={styles.CardHeader}>
                        <FontAwesome6 name='shop' size={22} color="white" />
                        <Text style={styles.CardTitle}>{ItemMock.title}</Text>
                    </View>
                    <Text style={{color: "white"}}>Feirinha do salgado</Text>
                    <Text style={{color: "white"}}>Feirinha do salgado</Text>
                    <Text style={{color: "white"}}>Feirinha do salgado</Text>
                </View>
                <Text style={{color: "white"}}>14 de Janeiro</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "100%",
        paddingHorizontal: RFValue(20)
    },
    title: {
      fontSize: 16,
      fontFamily: "Lexend_400Regular",
      color: Colors.green[300],
    },
    ContentTitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    Card: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Colors.green[500],
        marginTop: 6,
        borderRadius: 18,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    CardHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 10
    },
    CardTitle: {
        color: "white",
        fontSize: 14,
        fontFamily: "Lexend_400Regular"
    }
})