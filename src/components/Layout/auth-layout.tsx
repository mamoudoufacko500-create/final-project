import { Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/auth/login";

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden items-center justify-center py-20 max-w-6xl mx-auto">
        <div className="w-1/2  h-full p-10">
      <Outlet />
      </div>
      <div className="w-1/2 h-full">
        <img
          src={
            isLoginPage
              ? "/photo-1.webp"
              : "/photo-2.webp"
          }
          alt=""
          className="w-full h-full object-cover hidden lg:block"
        />
      </div>
    </div>
  );
}
