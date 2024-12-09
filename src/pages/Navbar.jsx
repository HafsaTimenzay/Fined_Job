import React from "react";

const Navbar = () => {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo">
            <svg
              width="25"
              viewBox="0 0 25 42"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                {/* SVG paths here */}
              </defs>
              <g id="g-app-brand" stroke="none" fill="none" fillRule="evenodd">
                <g id="Brand-Logo" transform="translate(-27, -15)">
                  <g id="Icon" transform="translate(27, 15)">
                    <g id="Mask" transform="translate(0, 8)">
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1"></use>
                      </mask>
                      <use fill="#696cff" xlinkHref="#path-1"></use>
                      <g id="Path-3" mask="url(#mask-2)">
                        <use fill="#696cff" xlinkHref="#path-3"></use>
                        <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-3"></use>
                      </g>
                      <g id="Path-4" mask="url(#mask-2)">
                        <use fill="#696cff" xlinkHref="#path-4"></use>
                        <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-4"></use>
                      </g>
                    </g>
                    <g
                      id="Triangle"
                      transform="translate(19, 11) rotate(-300) translate(-19, -11)"
                    >
                      <use fill="#696cff" xlinkHref="#path-5"></use>
                      <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-5"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            Sneat
          </span>
        </a>

        <a
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li className="menu-item">
          <a href="index.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </a>
        </li>

        {/* Layouts */}
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Layouts">Layouts</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <a href="layouts-without-menu.html" className="menu-link">
                <div data-i18n="Without menu">Without menu</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-without-navbar.html" className="menu-link">
                <div data-i18n="Without navbar">Without navbar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-container.html" className="menu-link">
                <div data-i18n="Container">Container</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-fluid.html" className="menu-link">
                <div data-i18n="Fluid">Fluid</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-blank.html" className="menu-link">
                <div data-i18n="Blank">Blank</div>
              </a>
            </li>
          </ul>
        </li>

        {/* Other menu items */}
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Pages</span>
        </li>
        {/* Repeat similar corrections for other sections */}
      </ul>
    </aside>
  );
};

export default Navbar;
