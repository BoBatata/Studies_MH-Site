import {Outlet} from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <div className="min-h-screen bg-stone-800 text-white">
      <Header></Header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default App
