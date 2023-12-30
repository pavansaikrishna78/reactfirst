import { menuItems } from "./menudata";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;