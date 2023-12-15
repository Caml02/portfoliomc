"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MC_Logo from '@/img/MC_Logo.svg';
import {scrollTo} from '@/utils/scrollTo'

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('About Me');

  const handleNavClick = (sectionId: React.SetStateAction<string>) => {
    setActiveTab(sectionId);
    scrollTo(sectionId);
  };

    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <Image
                            src={MC_Logo}
                            height={40}
                            width={40}
                            style={{color: '#fffff'}}
                            alt="Logo"
                            loading="lazy"
                        ></Image>
                    </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${activeTab === 'About Me' && 'active'}`} onClick={() => handleNavClick('About Me')} aria-current="page" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeTab === 'Skills' && 'active'}`} onClick={() => handleNavClick('Skills')} href="#Skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeTab === 'Projects' && 'active'}`} onClick={() => handleNavClick('Projects')} href="#Projects">Projects</a>
                            </li>
                        </ul>
                            <div className="d-flex">
                                <button className="social-icon">
                                    <a className="nav-link" href="https://github.com/Caml02/" target="_blank"><i className="bi bi-github"></i></a>
                                </button>
                                <button className="social-icon">
                                    <a className="nav-link" href="https://www.linkedin.com/in/cristian-morales-87311b18a/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                </button>
                            </div>
                            <button className="btn-connect me-2" type="button">Let's Connect</button>
                    </div>
                </div>
            </nav>        
    )
}

export default NavBar;
