/* eslint-disable array-callback-return */
import React, { useEffect, useRef } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";

const headerNav = [
    { display: "Home", path: "/" },
    { display: "Movies", path: "/movie" },
    { display: "TV Seried", path: "/tv" },
];

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const stickyHeader = () => {
            if (
                window.scrollY > 60 ||
                document.documentElement.scrollTop > 60
            ) {
                headerRef.current.classList.add("sticky");
            } else {
                headerRef.current.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", stickyHeader);
        return () => {
            window.addEventListener("scroll", stickyHeader);
        };
    }, []);
    return (
        <div ref={headerRef} className="header">
            <div className="header-wrap container">
                <div className="logo">
                    <Link to="/">NUNFLIX</Link>
                </div>
                <ul className="header-nav">
                    {headerNav.map((e, i) => {
                        return (
                            <li
                                key={i}
                                className={`${i === active ? "active" : ""}`}
                            >
                                <Link to={e.path}>{e.display}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Header;
