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


//add object using dot or bracket notation
  const circle = {};

  circle.radius = 5;
  circle['diameter'] = 10;

  console.log(circle);

//Modify a Property Using Dot or Bracket Notation DESTRUCTIVELY
const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Curly",
    salad: "Cobb",
  };
  mondayMenu.cheesePlate.soft = "foo";
  mondayMenu['fries'] = 'crispy';
  console.log(mondayMenu);

// Update nondestructively using spread operator

function nondestructivelyUpdateObject(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;

    return newObj;
}

const sunMenu = nondestructivelyUpdateObject(
    mondayMenu,
    "fries",
    "Shoestring"
)

console.log(sunMenu);

delete mondayMenu.cheesePlate['hard'];


