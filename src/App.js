import { Provider } from 'react-redux';
import './App.css';
import QuestionPage from './pages/QuestionPage';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import appStore from './utils/appStore';
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <QuestionPage/>
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },}
  )
  return (
    <Provider store = {appStore}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
