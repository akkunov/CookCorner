import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route, Navigate
} from "react-router-dom";
import {FC, lazy,Suspense} from "react";

import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Root from "./pages/main/root";
import {Category1, Category2, Category3} from "./components/tabs/tabs";
import Main from "./pages/main/main";
import Search from "./pages/search/search";
import Profile from "./pages/profile/profile";

import MealDetail from "./pages/detail/mealDetail";
const Saved = lazy(() =>import  ("./pages/profile/saved/saved"))
const MyRecipe = lazy(() =>import  ("./pages/profile/myRecipe/myRecipe"))
const Author = lazy(() =>import  ("./pages/profile/author/author"))


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
                   <Route path={'myRecipe'}
                          element={<Suspense fallback={'loading ...'}>
                                <Saved />
                            </Suspense>} index />
                   <Route path={'savedRecipe'}
                          element={<Suspense fallback={'loading ...'}>
                              <MyRecipe />
                   </Suspense>} />
               </Route>

               <Route path={'/detail/:id'} element={<MealDetail />} />
               <Route path={'/author/:id'}
                      element={<Suspense fallback={'loading ...'}>
                            <Author />
                       </Suspense>} />
           </Route>
           <Route  path={'/login'} element={<Login />}/>
           <Route  path={'/register'} element={<Register />}/>
         </Route>
     )
 )
  return <RouterProvider  router={router}/>
}

export default App
