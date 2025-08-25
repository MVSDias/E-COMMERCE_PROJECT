import CardProductProvider from "./context/CardProductProvider";
import AppRoutes from "./routes/Routes";


function App() {

  return (    
    <CardProductProvider>
      <AppRoutes />
    </CardProductProvider>
  )
}

export default App;
