import PageNav from "../components/PageNav";

function Header({setIsSearchPlace}) {
  return (
    <div className="nav-shadow text-medium relative z-20 mb-20 mt-4 flex w-full items-center justify-center ">
      <PageNav setIsSearchPlace={setIsSearchPlace}/>
    </div>
  );
}

export default Header;
