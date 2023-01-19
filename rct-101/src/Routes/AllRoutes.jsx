
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/HomePage"
import Breakfast from "../Pages/Breakfast"
import Salads from "../Pages/Salads"
import Entrees from "../Pages/Entrees"
import Restaurant from "../Pages/RestaurantPage"
import SingleRestaurant from "../Pages/SingleRestaurantPage"

function AllRoutes(){
    return(
        <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu/breakfast" element={<Breakfast />} />
            <Route path="/menu/salads" element={<Salads />} />
            <Route path="/menu/entrees" element={<Entrees />} />
            <Route path="/locations" element={<Restaurant />} />
            <Route path="/restaurant/:id" element={<SingleRestaurant />} />
         </Routes>
        </>
    )
}

export default AllRoutes;