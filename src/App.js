import { Provider } from 'react-redux';
import './App.css';
import QuestionPage from './pages/QuestionPage';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import appStore from './utils/appStore';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <QuestionPage/>
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true
    },
  }
  )
  return (
    <Provider store = {appStore}>
      <RouterProvider router={appRouter}/>
      <ToastContainer />
    </Provider>
  );
}

export default App;
