import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuth = false;

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (<>
    <section className="flex flex-1 justify-center items-center flex-col h-screen py-10">
      <Outlet />
   
    </section>
    <img 
        src="/assets/images/side-img.svg" 
        alt="logo" 
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat" 
      />
    </>
  );
};

export default AuthLayout;
