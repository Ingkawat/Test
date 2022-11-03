import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Categories from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MealsFavTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Meals">
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#191970",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={size}
                color={focused ? "#191970" : "grey"}
              />
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favorites"
        component={FavNavigator}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#191970",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="ios-star"
                size={size}
                color={focused ? "#191970" : "grey"}
              />
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
function MealsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: "Meal Categories" }}
        screenOptions
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({ title: route.params.categoryTitle })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.menuTitle })}
      />
    </Stack.Navigator>
  );
}
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{
        drawerActiveTintColor: "orange",
        drawerInactiveTintColor: "gray",
      }}
    >
      <Drawer.Screen
        name="MealsFav"
        component={MealsFavTabNavigator}
        options={{ drawerLabel: "Meals" , headerShown: false}}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Filters"
        component={FiltersNavigator}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
function FavNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: "Your Favorites" }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
function FiltersNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Filters" component={FiltersScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
