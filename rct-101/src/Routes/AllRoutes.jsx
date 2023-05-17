
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/HomePage"
import Breakfast from "../Pages/Breakfast"
import Salads from "../Pages/Salads"
import Entrees from "../Pages/Entrees"
import Restaurant from "../Pages/RestaurantPage"
import SingleRestaurant from "../Pages/SingleRestaurantPage"

import Form from "../Pages/Form"
import Dashboard from "../Pages/AdminDashboard"
import UberEats from "../Pages/UberEats"
import SingleUberEats from "../Pages/SingleUberEats"

import Login from "../Pages/login"
import LoginAdmin from "../Pages/Loginadmin"

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
            <Route path="/login" element={<Login />} />
            <Route path="/adminform" element={<Form />} />
            <Route path="/admindashboard" element={<Dashboard />} />
            <Route path="/deliveryuber" element={<UberEats />} />
            <Route path="/items/:id" element={<SingleUberEats />} />
            <Route path="/adminlogin" element={<LoginAdmin />} />
         </Routes>
        </>
    )
}

export default AllRoutes;