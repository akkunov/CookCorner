// import {useAppDispatch} from "./reduxHooks";
// import {useMemo} from "react";
// import {bindActionCreators} from "@reduxjs/toolkit";
// import * as userActions from '../store/user/userSlice';
// import * as mealActions from '../store/user/userSlice';
//
// const actions = {...userActions, mealActions}
//
//
// export const useActions= () =>{
//     const dispatch  = useAppDispatch();
//     return useMemo(() =>{
//         bindActionCreators(actions,dispatch)
//     },[dispatch])
// }