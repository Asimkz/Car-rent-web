"use client";
import dynamic from "next/dynamic";
const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
  ssr: false,
});
import Link from "next/link";

export default function Header3({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  handleOffcanvas,
  isOffcanvas,
}: any) {
  return (
    <>
      <header
        className={`header sticky-bar header-home-2 border-0 ${
          scroll ? "stick" : ""
        }`}
      >
        <div className="container-fluid background-body">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/index-3">
                  <img
                    className="light-mode"
                    alt="Carento"
                    src="/assets/imgs/template/logo-d.svg"
                  />
                  <img
                    className="dark-mode"
                    alt="Carento"
                    src="/assets/imgs/template/logo-w.svg"
                  />
                </Link>
              </div>
              <div className="header-nav">
                {/* <nav className="nav-main-menu">
                  <ul className="main-menu">
                    <li className="">
                      <Link href="/index-3">Home</Link>
                    </li>

                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav> */}
              </div>
              <div className="header-right">
                <nav className="nav-main-menu">
                  <ul className="main-menu">
                    <li className="">
                      <Link href="/index-3">Home</Link>
                    </li>

                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="d-none d-xxl-inline-block align-middle mr-15">
                  <div className="d-none d-xxl-inline-block align-middle ">
                    <ThemeSwitch />
                  </div>
                </div>
                <div
                  className="burger-icon-2 burger-icon-white"
                  onClick={handleOffcanvas}
                >
                  <img
                    src="/assets/imgs/template/icons/menu.svg"
                    alt="Carento"
                  />
                </div>
                <div
                  className="burger-icon burger-icon-white"
                  onClick={handleMobileMenu}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid"> </span>
                  <span className="burger-icon-bottom"> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
