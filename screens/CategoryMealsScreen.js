import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({route, navigation}) => {
  const {categoryTitle, categoryId} = route.params

  const catId = categoryId//...รับข้อมูล id ของประเภทอาหาร...

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList listData={displayedMeals} navigation={navigation}  />
  );
};

export default CategoryMealsScreen;