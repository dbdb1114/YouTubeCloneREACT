import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from "./components/Main/Main";
import Header from './components/Main/Header';
import { DarkModeProvider } from './context/DarkModeContext';
import MainVideoList from './components/Main/MainVideoList';
import DetailPage from './components/Detail/DetailPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children:[
      {
        path: "",
        element: <MainVideoList/>
      },
      {
        path:"video/:id",
        element: <DetailPage/>
      }
    ]
  }
])

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </DarkModeProvider>
  );
}

export default App;
