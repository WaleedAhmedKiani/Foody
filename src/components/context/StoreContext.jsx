import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";



export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem, setcartItem] = useState({});

    //    ^Add Item To Cart
    const Add_Cart = (Itemid) => {
        if (!cartItem[Itemid]) {
            setcartItem((prev) => ({ ...prev, [Itemid]: 1 }))
        }
        else {
            setcartItem((prev) => ({ ...prev, [Itemid]: prev[Itemid] + 1 }))
        }
    }
    //   *Remove Item From Cart
    const Remove_Cart = (Itemid) => {
        setcartItem((prev) => ({ ...prev, [Itemid]: prev[Itemid] - 1 }))
    }
    // &Total Amount Function
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {

            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItem[item];
            }
         
        }
        return totalAmount;
    }

    const contextValue = {
        food_list, cartItem, setcartItem, Add_Cart, Remove_Cart, getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;