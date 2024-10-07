import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store";
import Footer from "@/components/Footer";
export default function Layout() {
  return (
    <ReduxProvider store={store}>
      <div className="flex min-h-dvh flex-col justify-center">
        <Navbar />
        <div className="mt-4 flex grow justify-center">
          <div className="max-w-6xl">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </ReduxProvider>
  );
}
