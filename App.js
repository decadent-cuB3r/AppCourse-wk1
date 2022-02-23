import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>三葉小六與我</Text>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={require('./assets/Me.jpg')}
          />
          <View style={styles.headerContentStyle}>
            <Text>110819022</Text>
            <Text>Ezra</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.imageStyle}
            source={require("./assets/Me.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  imageStyle: {
    height: 300,
    width: null,
  },
});

export default App;
