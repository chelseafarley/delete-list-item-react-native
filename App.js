import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListItem from "./ListItem";

export default function App() {
  const [data, setData] = useState([
    { id: 1, text: "Hello YouTubers!" },
    { id: 2, text: "Hello Friends..." },
    { id: 3, text: "Hello from MissCoding" },
    { id: 4, text: "Hello World" },
  ]);

  const handleDeleteItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const renderItem = ({ item }) => (
    <ListItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    alignSelf: "stretch",
  },
});
