import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const { title, ingredient, step } = route.params;
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>{title}</Text>
      <Text
        style={{ textAlign: "justify", marginBottom: 10, marginHorizontal: 30 }}
      >
        Ingredients : {ingredient}
      </Text>
      <Text
        style={{ marginBottom: 30, textAlign: "justify", marginHorizontal: 30 }}
      >
        {step}
      </Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate("Categories");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
