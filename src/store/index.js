import {configureStore} from '@reduxjs/toolkit';

import { carReducer,addCar,removeCar,changeSearchTerm } from "./slices/carsSlice";

import {FormReducer,changeName,changeCost} from "./slices/formSlice";

const store = configureStore({
    reducer:{
        cars: carReducer,
        form:FormReducer,
    }


})

export{ store,changeName,changeCost,addCar,removeCar,changeSearchTerm}