import { IoIosSearch } from "react-icons/io";
const MENUS = [
  {
    id: "wtc",
    label: "What to cook",
  },
  {
    id: "r",
    label: "Recipes",
  },
  {
    id: "i",
    label: "Ingredients",
  },
  {
    id: "o",
    label: "Occasions",
  },
  {
    id: "au",
    label: "About Us",
  },
];
const Header = () => {
  return (
    <>
      <header className="py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-20">
            <div className="flex flex-1 gap-6">
              <div className="overflow-hidden">
                <img
                  src="/chefify.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <form
                action=""
                className="flex w-full items-center gap-2 rounded-lg bg-[#F3F4F6] px-3 py-2"
              >
                <IoIosSearch className="text-[24px] font-bold" />
                <input
                  type="text"
                  name="search"
                  className="w-full text-[14px] outline-none"
                  placeholder="Search..."
                />
              </form>
            </div>
            <ul className="flex items-center justify-center gap-6">
              {MENUS.map((menu) => (
                <li key={menu.id} className="text-gray-400">
                  {menu.label}
                </li>
              ))}
            </ul>
            <div className="flex cursor-pointer items-center gap-4">
              <div className="flex items-center gap-1 rounded-lg bg-[#FBF0F5] px-3 py-2">
                <div className="">
                  <img src="/check.png" alt="" />
                </div>
                <div className="text-primary">Your Recipe Box</div>
              </div>
              <div className="">
                <div className="">
                  <img src="/avatar.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
