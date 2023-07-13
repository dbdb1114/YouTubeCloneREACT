import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from "./components/Main/Main";
import Header from './components/Main/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}

export default App;
