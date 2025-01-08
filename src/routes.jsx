import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import MobilePhones from "./pages/MobilePhones";
import Product from "./pages/Product";
import Layout from "./Layout";
import NotFound from "./404";

import withOutlet from "./hocs/withOutlet"

const HomePage = withOutlet(Home, "home");
const ElectronicsPage = withOutlet(Electronics, "electronics");
const MobilePhonesPage = withOutlet(MobilePhones, "mobile-phones");
const ProductPage = withOutlet(Product, "product");

const routes = [
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        id: "home",
        path: "/",
        element: <HomePage />,
        handle: { breadcrumb: "Home" },
        children: [
          {
            id: "electronics",
            path: "electronics",
            element: <ElectronicsPage />,
            handle: { breadcrumb: "Electronics" },
            children: [
              {
                id: "mobile-phones",
                path: "mobile-phones",
                element: <MobilePhonesPage />,
                handle: { breadcrumb: "Mobile Phones" },
                children: [
                  {
                    id: "product",
                    path: ":productId",
                    element: <ProductPage />,
                    handle: { breadcrumb: "Product Details" },
                  }
                ],
              }
            ],
          }
        ],
      },
    ],
  },
];
export default routes;
