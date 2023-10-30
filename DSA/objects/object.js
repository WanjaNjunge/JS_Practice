const meals = {
    breakfast: "Oatmeal",
    lunch: "Caesar salad",
    dinner: "Chimichangas",
  };

  console.log(meals.lunch);

  console.log(meals["lunch"]);

  let mealName = "lunch";
  console.log(meals[mealName]);

  const wednesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };

  console.log(Object.keys(wednesdayMenu));

  console.log(Object.keys(wednesdayMenu.cheesePlate));

  console.log(Object.values(wednesdayMenu));

  console.log(Object.values(wednesdayMenu.cheesePlate));


