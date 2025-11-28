import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GroceryList from "./components/GroceryList";
import HomePage from "./ComPages/HomePage";

export default function App() {
  return (
    <SafeAreaProvider>
      <HomePage />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
