import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    // Change bg-black to bg-slate-900 or bg-gray-900 just to test
<div className="relative min-h-screen bg-black text-white md:cursor-none">
      {/* <CustomCursor /> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
