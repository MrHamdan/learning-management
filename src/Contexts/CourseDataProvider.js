import { createContext, useState } from "react";


export const CourseDataContext = createContext();

const DataProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);


    return (
        <div>
            <CourseDataContext.Provider
                value={[
                    cart,
                    setCart,
                    subTotal,
                    setSubTotal,
                    total,
                    setTotal,
                    discount,
                    setDiscount,
                ]}
            >
                {children}
            </CourseDataContext.Provider>
        </div >
    );
};

export default DataProvider;