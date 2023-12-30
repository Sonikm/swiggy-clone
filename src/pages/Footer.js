import logo from "../assets/asset 47.svg";

function Footer() {
  return (
    <div className="text-medium mt-6 sm:grid xs:text-xs sm:grid-cols-2 sm:gap-6  flex w-full items-start justify-evenly gap-4 overflow-hidden bg-black p-12 text-gray-400 pb-24">
      <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap  sm:overflow-hidden">
        <h3 className="text-2xl xs:text-lg font-bold flex items-center gap-2 xs:gap-1 text-white"><img src={logo} className="w-8 xs:w-6" style={{ fill: 'green' }} alt="" />  <span>Swiggy</span></h3>
        <span className=""> &copy; 2024 Bundl </span>
        <span> Technologies Pvt. Ltd</span>
      </div>
      <div className="flex flex-col gap-2 xs:gap-1  whitespace-nowrap sm:overflow-hidden">
        <h3 className="text-lg xs:text-sm font-bold text-white">Company</h3>
        <span>About</span>
        <span>Careers</span>
        <span>Team</span>6tz
        <span>Swiggy One</span>
        <span>Swiggy Instamart</span>
        <span>Swiggy Genie</span>
      </div>
      <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap  sm:overflow-hidden">
        <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap mb-10">
          <h3 className="text-lg font-bold xs:text-sm text-white">Contact us</h3>
          <span>Help & Support</span>
          <span>Partner with us</span>
          <span>Ride with us</span>
        </div>
        <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap  sm:overflow-hidden">
          <h3 className="text-lg font-bold xs:text-sm text-white"> Legal</h3>
          <span>Terms & Conditions</span>
          <span>Cookie Policy</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap  sm:overflow-hidden">
        <h3 className="text-lg xs:text-sm font-bold text-white">We deliver to:</h3>
        <span>Bangalore</span>
        <span>Gurgaon</span>
        <span>Hyderabad</span>
        <span>Delhi</span>
        <span>Mumbai</span>
        <span>Pune</span>
      </div>
    </div>
  );
}

export default Footer;
