import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
 const navigation = useNavigation();
 const isLoading = navigation.state === "loading";
 console.log(navigation)
  return (
    <div className="grid h-screen first-line:h-[600px] bg-red grid-rows-[auto_1fr_auto] gird-col-2  border-yellow-100" >
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
      <main className="mx-auto  max-w-3x  ">
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
