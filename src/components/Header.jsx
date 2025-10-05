import { Link } from "react-router-dom";
import { menuItems } from "@/data/menu";
import MobileMenuNavBar from "@/components/MobileMenuNavBar";
import HeaderSearch from "@/components/HeaderSearch";
import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 400) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-area">
      <div className="">
        <div className="navigation">
          <div className="container">
            <div className="header-inner-box">
              {/* Logo */}
              <Link to="/" className="logo">
                Decorilla
              </Link>

              {/* Desktop Menu */}
              <div className="main-menu d-none d-lg-block">
                <ul>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={item.subMenu ? "has-submenu" : ""}
                    >
                      <Link to={item.link} className="navlink">
                        {item.label}
                      </Link>

                      {item.subMenu && (
                        <ul className="sub-menu">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.link}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Header Right (Search, Menu Trigger) */}
              <div className="header-right">
                <button
                  className="btn text-white px-5"
                  style={{
                    backgroundColor: "#b19f6f",
                    marginTop: "20px",
                    fontWeight: "500",
                  }}
                >
                  Get Started
                </button>
              </div>

              {/* Mobile Menu */}
              <MobileMenuNavBar menuItems={menuItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
