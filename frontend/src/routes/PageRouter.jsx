import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import routes from "./routes.json";
import ChatPage from "../pages/ChatPage";
import PageNotFound from "../pages/PageNotFound";

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      path: `${routes.HOME}`,
      element: <HomePage />,
      errorElement: <PageNotFound />,
    },
    {
      path: `${routes.CHAT}`,
      element: <ChatPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      {/* this is used for earlier version of react route but is doesn't support
      most of new feature comes with new version 6 and above  */}
      {/* <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.CHAT} element={<ChatPage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default PageRouter;
