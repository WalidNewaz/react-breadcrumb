import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import MobilePhones from "./pages/MobilePhones";
import Product from "./pages/Product";
import Layout from "./Layout";
import NotFound from "./404";

const routes = [
  {
    // path: "/",
    id: "home",
    element: <Layout />,
    errorElement: <NotFound />,
    breadcrumb: "Home",
    handle: { breadcrumb: "Home" },
    children: [
      {
        // index: true,
        path: "/",
        element: <Home />,
        // breadcrumb: "Home",
        // handle: { breadcrumb: "Home" },
      },
      {
        id: "electronics",
        path: "/electronics",
        element: <Electronics />,
        breadcrumb: "Electronics",
        handle: { breadcrumb: "Electronics" },
        // children: [
        //   {
        //     id: "mobile-phones",
        //     path: "/electronics/mobile-phones",
        //     element: <MobilePhones />,
        //     breadcrumb: "Mobile Phones",
        //     handle: { breadcrumb: "Mobile Phones" },
        //     children: [
        //       {
        //         path: ":productId",
        //         element: <Product />,
        //         breadcrumb: "Product Details",
        //         handle: { breadcrumb: "Product Details" },
        //       },
        //     ],
        //   },
        // ],
        // children: [
        //   {
        //     path: "mobile-phones",
        //     element: <MobilePhones />,
        //     breadcrumb: "Mobile Phones",
        //     handle: { breadcrumb: "Mobile Phones" },
        //     children: [
        //       {
        //         path: ":productId",
        //         element: <Product />,
        //         breadcrumb: "Product Details",
        //         handle: { breadcrumb: "Product Details" },
        //       },
        //     ],
        //   },
        // ],
      },
      {
        id: "/electronics/mobile-phones",
        path: "/electronics/mobile-phones",
        element: <MobilePhones />,
        breadcrumb: "Mobile Phones",
        handle: { breadcrumb: "Mobile Phones" },
      },
      {
        path: "/electronics/mobile-phones/:productId",
        element: <Product />,
        breadcrumb: "Product Details",
        handle: { breadcrumb: "Product Details" },
      },
    ],
  },
];
export default routes;
