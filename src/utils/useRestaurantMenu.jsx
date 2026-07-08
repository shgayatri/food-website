import { useEffect, useState } from "react";
import { mockMenuData } from "./mockData";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7041&lng=77.1025&restaurantId=${resId}&submitAction=ENTER`
      );

      const json = await response.json();
      setMenu(json.data);
    } catch (error) {
      console.log(error);
      setMenu(mockMenuData.data);
    }
  };

  return menu;
};

export default useRestaurantMenu;