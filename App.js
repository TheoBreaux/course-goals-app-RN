import { Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Hello World!</Text>
      </View>
      <Button title="Click Me Theo!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "blue",
  },
});

export default App;
