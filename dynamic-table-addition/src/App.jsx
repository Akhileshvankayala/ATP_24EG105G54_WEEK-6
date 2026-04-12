import UsersList from "./UsersList";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Counter from "./Counter";
import TestRefTypes from "./TestRefTypes";
import APIDemo from "./APIDemo";
import FormDemo from "./FormDemo";
import FormTask from "./FormTask";
function App(){

  return(
    <div>
      <NavBar />
      <div className="m-16 min-h-screen">
        {/* <UsersList/> */}
        {/* <Counter/>
        <TestRefTypes /> */}
        {/* <APIDemo /> */}
        {/* <FormDemo /> */}
        <FormTask />
      </div>
      <Footer />
    </div>
  )
  
}
export default App;