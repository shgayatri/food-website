
 const resList = [
  {
    info: {
      id: "608590",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/26c11635-0a07-4890-be0c-b65a767481b7_608590.JPG",
      locality: "DM Colony",
      areaName: "Shiv Colony",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.6,
      sla: {
        deliveryTime: 20,
        slaString: "20-25 mins",
      },
    },
  },
  {
    info: {
      id: "382414",
      name: "Gupta Sweet Mart",
      cloudinaryImageId: "xdbhwpbbnyfs1s4pls9o",
      locality: "Malviya Marg",
      areaName: "Shiv Colony",
      costForTwo: "₹350 for two",
      cuisines: ["Sweets", "Bakery"],
      avgRating: 4.2,
      veg: true,
      sla: {
        deliveryTime: 17,
        slaString: "15-20 mins",
      },
    },
  },
  {
    info: {
      id: "143148",
      name: "Bansal Family Restaurant",
      cloudinaryImageId: "wavebpd0ptnewvnxyavg",
      locality: "Moti Bagh",
      areaName: "Shiv Colony",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Tandoor", "Salads"],
      avgRating: 4.2,
      veg: true,
      sla: {
        deliveryTime: 18,
        slaString: "15-20 mins",
      },
    },
  },
  {
    info: {
      id: "493722",
      name: "Chai Sutta Yaari",
      cloudinaryImageId: "e8da64ac09a033d15959ee3dbf661a4d",
      locality: "Shivpuri",
      areaName: "Shiv Colony",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Chinese", "Burgers"],
      avgRating: 4.2,
      sla: {
        deliveryTime: 31,
        slaString: "30-40 mins",
      },
    },
  },
  {
    info: {
      id: "705534",
      name: "Sachin Family Dhaba",
      cloudinaryImageId: "f34657e4f398eec0e714971b58f8be69",
      locality: "GT Road",
      areaName: "Shiv Colony",
      costForTwo: "₹400 for two",
      cuisines: ["Indian", "Fast Food", "Chinese"],
      avgRating: 4.3,
      veg: true,
      sla: {
        deliveryTime: 26,
        slaString: "25-30 mins",
      },
    },
  },
  {
    info: {
      id: "142633",
      name: "Alka Motel",
      cloudinaryImageId: "vxcjtg48vfsjhr6kaib0",
      locality: "Bhoor Chauraha",
      areaName: "Bur Churaha",
      costForTwo: "₹599 for two",
      cuisines: ["North Indian", "Chinese", "Continental"],
      avgRating: 4.4,
      sla: {
        deliveryTime: 29,
        slaString: "25-30 mins",
      },
    },
  },
];

export const mockMenuData = {
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "608590",
              name: "Pizza Hut",
              cuisines: ["Pizzas", "Pasta"],
              costForTwoMessage: "₹350 for two",
              avgRating: 4.6,
              sla: {
                deliveryTime: 20,
                slaString: "20-25 mins",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            groupedItemsV2: [
              {
                groupId: "1",
                groupName: "Pizzas",
                items: [
                  {
                    id: "1",
                    name: "Margherita",
                    description: "Classic pizza with tomato and mozzarella",
                    price: 25000,
                  },
                  {
                    id: "2",
                    name: "Pepperoni",
                    description: "Pepperoni and cheese pizza",
                    price: 35000,
                  },
                  {
                    id: "3",
                    name: "Veggie Supreme",
                    description: "Mixed vegetables pizza",
                    price: 30000,
                  },
                ],
              },
              {
                groupId: "2",
                groupName: "Pasta",
                items: [
                  {
                    id: "4",
                    name: "Spaghetti Carbonara",
                    description: "Creamy pasta with bacon",
                    price: 32000,
                  },
                  {
                    id: "5",
                    name: "Fettuccine Alfredo",
                    description: "Pasta with cream sauce",
                    price: 28000,
                  },
                ],
              },
              {
                groupId: "3",
                groupName: "Beverages",
                items: [
                  {
                    id: "6",
                    name: "Coca Cola",
                    description: "Soft drink",
                    price: 5000,
                  },
                  {
                    id: "7",
                    name: "Fresh Juice",
                    description: "Orange juice",
                    price: 8000,
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },
};

export default resList;