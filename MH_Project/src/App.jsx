import {Outlet} from "react-router-dom"

function App() {

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default App
