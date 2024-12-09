import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function Login() {

	const router = useRouter(); // needed when navigation to other screens

    return (
        <View>
            <StatusBar
                style="light"
                translucent={true}
                backgroundColor="transparent"
            />

            <Image
                source={require("./../assets/images/login.jpg")}
                style={{ width: "100%", height: 550 }}
            />

            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 28,
                        fontFamily: "outfit-bold",
                        textAlign: "center",
                    }}
                >
                    AI Travel Planner
                </Text>

                <Text
                    style={{
                        fontFamily: "outfit",
                        fontSize: 17,
                        textAlign: "center",
                        color: Colors.GRAY,
                        marginTop: 10,
                    }}
                >
                    Discover your next adventure effortlessly. Personalized
                    itineraries at your fingertips. Travel smarter with AI-
                    driven Insights.
                </Text>

                <TouchableOpacity
					style={styles.button}
					onPress={()=>router.push('auth/sign-in')}
				>
                    <Text
                        style={{
                            color: Colors.WHITE,
                            textAlign: "center",
                            fontFamily: "outfit",
                            fontSize: 17,
                        }}
                    >
                        Get started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: "100%",
        padding: 25,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: "15%",
    },
});
