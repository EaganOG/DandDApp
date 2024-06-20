//Create an array of objects with the following properties: ID, Name, ArmourType, Effect1, Effect2, Value, AC, Proficiency
// ID: Unique identifier for the item
// Name: Name of the item
// ArmourType: Type of armour (e.g. Light, Medium, Heavy)
// Effect1: The effect of the item (e.g. +1 AC, +2 AC)
// Effect2: The secondary effect of the item (e.g. +1 DEX, +1 STR)
// Value: The value of the item in gold pieces
// AC: The armour class of the item
// Proficiency: The proficiency required to use the item
export let chest = [
  {
    ID: 1,
    Name: "Leather Armour",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/armour1.png",
  },
  {
    ID: 2,
    Name: "Chain Shirt",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 50,
    AC: 13,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/armour2.png",
  },
  {
    ID: 3,
    Name: "Studded Leather Armour",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 45,
    AC: 12,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/armour3.png",
  },
  {
    ID: 4,
    Name: "Padded Armour",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 5,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/armour4.png",
  },
  {
    ID: 5,
    Name: "Hide Armour",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 12,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/armour5.png",
  },
  {
    ID: 6,
    Name: "Chainmail",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 75,
    AC: 16,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/armour6.png",
  },
  {
    ID: 7,
    Name: "Scale Mail",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 50,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/armour7.png",
  },
  {
    ID: 8,
    Name: "Breastplate",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 400,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/armour8.png",
  },
];

//do the same for helmets
export let helmet = [
  {
    ID: 1,
    Name: "Leather Helmet",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/helmet1.png",
  },
  {
    ID: 2,
    Name: "Chain Helmet",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 50,
    AC: 13,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/helmet2.png",
  },
  {
    ID: 3,
    Name: "Studded Leather Helmet",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 45,
    AC: 12,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/helmet3.png",
  },
  {
    ID: 4,
    Name: "Padded Helmet",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 5,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/helmet4.png",
  },
  {
    ID: 5,
    Name: "Hide Helmet",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 12,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/helmet5.png",
  },
  {
    ID: 6,
    Name: "Chainmail Helmet",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 75,
    AC: 16,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/helmet6.png",
  },
  {
    ID: 7,
    Name: "Scale Helmet",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 50,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/helmet7.png",
  },
  {
    ID: 8,
    Name: "Breastplate Helmet",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 400,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/helmet8.png",
  },
];

//do the same for boots
export let boots = [
  {
    ID: 1,
    Name: "Leather Boots",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/boots1.png",
  },
  {
    ID: 2,
    Name: "Chain Boots",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 50,
    AC: 13,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/boots2.png",
  },
  {
    ID: 3,
    Name: "Studded Leather Boots",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 45,
    AC: 12,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/boots3.png",
  },
  {
    ID: 4,
    Name: "Padded Boots",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 5,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/boots4.png",
  },
  {
    ID: 5,
    Name: "Hide Boots",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 12,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/boots5.png",
  },
  {
    ID: 6,
    Name: "Chainmail Boots",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 75,
    AC: 16,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/boots6.png",
  },
  {
    ID: 7,
    Name: "Scale Boots",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 50,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/boots7.png",
  },
  {
    ID: 8,
    Name: "Breastplate Boots",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 400,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/boots8.png",
  },
];

//do the same for gloves
export let gloves = [
  {
    ID: 1,
    Name: "Leather Gloves",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/gloves1.png",
  },
  {
    ID: 2,
    Name: "Chain Gloves",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 50,
    AC: 13,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/gloves2.png",
  },
  {
    ID: 3,
    Name: "Studded Leather Gloves",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 45,
    AC: 12,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/gloves3.png",
  },
  {
    ID: 4,
    Name: "Padded Gloves",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 5,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/gloves4.png",
  },
  {
    ID: 5,
    Name: "Hide Gloves",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 12,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/gloves5.png",
  },
  {
    ID: 6,
    Name: "Chainmail Gloves",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 75,
    AC: 16,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/gloves6.png",
  },
  {
    ID: 7,
    Name: "Scale Gloves",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 50,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/gloves7.png",
  },
  {
    ID: 8,
    Name: "Breastplate Gloves",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 400,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/gloves8.png",
  },
];
