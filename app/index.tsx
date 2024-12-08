import { Text, View } from 'react-native';
import Login from './../components/Login.jsx'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, }}>
		{/* <Text style={{ fontSize: 30, fontFamily: 'outfit-bold' }}>Testing index</Text> */}
		<Login></Login>
	</View>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
