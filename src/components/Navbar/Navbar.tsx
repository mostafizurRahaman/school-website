import logo from "../../assets/logo.png";
const Navbar = () => {
   return (
      <>
         <nav className="flex px-10 py-5 bg-blue-500 text-white">
            <div className="logo-section md:w-1/2  w-full ">
               <img src={logo} alt="logo" className="w-10 h-10" />
            </div>
            <ul className=" w-full md:w-1/2 uppercase font-semibold  flex items-center justify-between gap-3">
               <li>about</li>
               <li>teachers</li>
               <li>students</li>
               <li>contact us</li>
               <li>login</li>
               <li>register</li>
            </ul>
         </nav>
      </>
   );
};

export default Navbar;
