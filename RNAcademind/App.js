import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Your course"
					style={styles.textInput}
				></TextInput>
				<Button title="Add a Course"></Button>
			</View>
			<View style={styles.courseList}>
				<Text>List of courses</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: "10%",
		paddingHorizontal: 16,
		flex: 1,
	},
	inputContainer: {
		height: 100,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 2,
		borderColor: "lightgray",
		marginBottom: "12%",
	},
	textInput: {
		borderWidth: 2,
		borderColor: "#cccccc",
		width: "65%",
		marginRight: 12,
		padding: 5,
		paddingLeft: 8,
	},
	courseList: {
		flex: 4,
	},
});
