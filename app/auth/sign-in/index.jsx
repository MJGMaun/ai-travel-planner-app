import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./../../../constants/Colors.ts";
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/firebaseConfig.jsx";

// TODO: fix UI for this screen

export default function SignIn() {
    const navigation = useNavigation();
	const router = useRouter(); // needed when navigation to other screens

	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []); // this 2nd param is needed to be added [] to prevent calling it twice

	const onSignIn = () => {

		if ( ! email || ! password ) {
			ToastAndroid.show("Please enter email and password!", ToastAndroid.BOTTOM);
		}

		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(user);

			// TODO: In order to persist auth state, use AsyncStorage
			// redirect to homescreen
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// console.log(errorCode, errorMessage);
			// TODO: error alerts?
			if ( errorCode === "auth/invalid-email") {
				ToastAndroid.show("Please enter valid email!", ToastAndroid.BOTTOM);
			}
			if ( errorCode === "auth/invalid-credential") {
				ToastAndroid.show("Invalid user credentials!", ToastAndroid.BOTTOM);
			}
		});
	}

    return (
        <View
			style={styles.container}
        >
		<TouchableOpacity onPress={() => router.back() }>
			<Ionicons name="arrow-back-circle" size={35} color="black" />
		</TouchableOpacity>
		<StatusBar
			style="light"
			translucent={true}
			backgroundColor="transparent"
		/>
		<Text
			style={{
				fontFamily: "outfit-bold",
				fontSize: 30,
				marginTop: 10,
			}}
		>
			Let's Sign You In
		</Text>
		<Text
			style={{
				fontFamily: "outfit",
				fontSize: 30,
				color: Colors.GRAY,
				marginTop: 20,
			}}
		>
			Welcome Back
		</Text>
		<Text
			style={{
				fontFamily: "outfit",
				fontSize: 20,
				color: Colors.GRAY,
				marginTop: 0,
			}}
		>
			You've been missed!
		</Text>

		{/* Email Input */}
		<View
			style={{
				marginTop: 50,
			}}
		>
			<Text
				style={{
					fontFamily: "outfit",
				}}
			>
				Email
			</Text>
			<TextInput
				type="email"
				placeholder="Enter Email"
				style={styles.input}
				onChangeText={(value) => setEmail(value)}
			/>
		</View>

		{/* Password Input */}
		<View
			style={{
				marginTop: 20,
			}}
		>
			<Text
				style={{
					fontFamily: "outfit",
				}}
			>
				Password
			</Text>
			<TextInput
				type="password"
				secureTextEntry={ true }
				placeholder="Enter Password"
				style={styles.input}
				onChangeText={(value) => setPassword(value)}
			/>
		</View>

		{/* Sign In button */}
		<TouchableOpacity
			style={styles.signin_button}
			onPress={onSignIn}
		>
			<Text
				style={{
					color: Colors.WHITE,
					textAlign: "center",
					fontFamily: "outfit",
					fontSize: 17,
				}}
			>
				Sign In
			</Text>
		</TouchableOpacity>

		{/* Create Account button */}
		<TouchableOpacity
			style={styles.create_button}
			onPress={()=>router.push('auth/sign-up')}
		>
			<Text
				style={{
					textAlign: "center",
					fontFamily: "outfit",
					fontSize: 17,
				}}
			>
				Create Account
			</Text>
		</TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
		paddingTop: 65,
		marginTop: StatusBar.currentHeight,
		backgroundColor: Colors.WHITE,
		height: "100%",
		flex: 1,
    	backgroundColor: '#fff',
	},
    input: {
		marginTop: 7,
        padding: 15,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: Colors.GRAY,
        fontFamily: "outfit",
    },
	signin_button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: "15%",
    },
	create_button: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: "5%",
		borderWidth: 1,
		color: Colors.PRIMARY
    },
});
