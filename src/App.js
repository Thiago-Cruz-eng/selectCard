import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './features/Index';
import List from './features/List';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />
    },
    {
      path: '/listagem',
      element: <List />
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
