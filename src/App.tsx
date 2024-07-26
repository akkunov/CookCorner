import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route, Navigate
} from "react-router-dom";


import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Root from "./pages/main/root";
import {Category1, Category2, Category3} from "./components/tabs/tabs";
import Main from "./pages/main/main";
import Search from "./pages/search/search";
import Profile from "./pages/profile/profile";
import {FC} from "react";
import MealDetail from "./pages/detail/mealDetail";
import Saved from "./pages/profile/saved/saved";
import MyRecipe from "./pages/profile/myRecipe/myRecipe";
import Author from "./pages/profile/author/author";


const App:FC = () =>  {
 const router = createBrowserRouter(
     createRoutesFromElements(
         <Route>
           <Route  path={'/'}  element={<Root />}>
               <Route path="" element={<Navigate to="main" />} />
               <Route  path={'main'} element={<Main />}>
                   <Route path="" element={<Navigate to="breakfast" />} />
                   <Route path="breakfast" element={<Category1 />} index />
                   <Route path="lunch" element={<Category2 />} />
                   <Route path="dinner" element={<Category3 />} />
               </Route>

               <Route  path={'search'}  index element={<Search />}/>

               <Route  path={'profile'}  element={<Profile />}>
                   <Route path="" element={<Navigate to="myRecipe" />} />
                   <Route path={'myRecipe'} element={<Saved />} index />
                   <Route path={'savedRecipe'} element={<MyRecipe />} />
               </Route>

               <Route path={'/detail/:id'} element={<MealDetail />} />
               <Route path={'/author/:id'} element={<Author />} />
           </Route>
           <Route  path={'/login'} element={<Login />}/>
           <Route  path={'/register'} element={<Register />}/>
         </Route>
     )
 )
  return <RouterProvider  router={router}/>
}

export default App
