import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./../../../constants/Colors.ts";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/firebaseConfig.jsx";

export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter(); // needed when navigation to other screens

	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();
	const [ fullName, setFullName ] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []); // this 2nd param is needed to be added [] to prevent calling it twice

	const onCreateAccount = () => {

		if ( ! email || ! password || ! fullName ) {
			ToastAndroid.show("Please enter all details!", ToastAndroid.BOTTOM);
		}

		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed up
			const user = userCredential.user;
			// console.log(user);
			// redirect to sign in page or make the user auto login
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// console.log(errorCode, errorMessage);
			// TODO: error alerts?
			ToastAndroid.show("Error signing up. Please try again", ToastAndroid.BOTTOM);
		});
	}

    return (
        <View style={styles.container}>
			<StatusBar
				style="light"
				translucent={true}
				backgroundColor="transparent"
			/>
			<TouchableOpacity onPress={() => router.back() }>
				<Ionicons name="arrow-back-circle" size={35} color="black" />
			</TouchableOpacity>

			<Text
				style={{
					fontFamily: "outfit-bold",
					fontSize: 30,
					marginTop: 10,
				}}
			>
				Create New Account
			</Text>

			{/* Full Name Input */}
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
					Full Name
				</Text>
				<TextInput
					type="text"
					placeholder="Enter Full Name"
					style={styles.input}
					onChangeText={(value) => { setFullName(value); }}
				/>
			</View>

			{/* Email Input */}
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
					Email
				</Text>
				<TextInput
					type="email"
					placeholder="Enter Email"
					style={styles.input}
					onChangeText={(value) => { setEmail(value); }}
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
					secureTextEntry={true}
					placeholder="Enter Password"
					style={styles.input}
					onChangeText={(value) => { setPassword(value); }}
				/>
			</View>

			{/* Create Account button */}
			<TouchableOpacity
				style={styles.signin_button}
				onPress={onCreateAccount}
			>
				<Text
					style={{
						color: Colors.WHITE,
						textAlign: "center",
						fontFamily: "outfit",
						fontSize: 17,
					}}
				>
					Create Account
				</Text>
			</TouchableOpacity>

			{/* Sign In button */}
			<TouchableOpacity
				style={styles.create_button}
				onPress={() => router.push("auth/sign-in")}
			>
				<Text
					style={{
						textAlign: "center",
						fontFamily: "outfit",
						fontSize: 17,
					}}
				>
					Already have an account?
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
        color: Colors.PRIMARY,
    },
});
