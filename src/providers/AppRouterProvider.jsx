import { RouterProvider, createHashRouter } from "react-router-dom";
import Preview from "../pages/preview/Preview";
import FormData from "../pages/formData/FormData";
const router=createHashRouter(
  [
    {
        path:"/",
        element:<FormData/>

    },
 {
        path:"/preview",
        element:<Preview/>

    },
]);
export const AppRouterProvider = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default AppRouterProvider