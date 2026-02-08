import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative sidbarcontainer">

      {/* Menu Button */}
    <div className="micon">
        <Button
        onClick={() => setOpen(true)}
        className="text-3xl p-3 bg-transparent!important"
      >
        <IoMdMenu />
      </Button>
    </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-9 left-0 h-full w-1/4
        bg-white + shadow-2xl z-50 
        rounded-tr-3xl rounded-br-xl
        transform transition-transform duration-300 ease-in-out
        flex flex-col
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* ================= Top Section ================= */}
        <div className="close flex justify-end">
          <Button
         
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine />
          </Button>
        </div>

        {/* ================= Middle Section ================= */}
        <div className="flex-1 px-8 pt-4 middlesec middleFont">
          <ul className="flex flex-col gap-8 text-lg font-semibold">
          <li><Link><Button className="menuitem">sarees</Button></Link></li>
            <li><Link><Button  className="menuitem">lehengas</Button></Link></li>
              <li><Link><Button  className="menuitem">kurta sets</Button></Link></li>
                <li><Link><Button  className="menuitem">co-ord sets</Button></Link></li>
                  <li><Link><Button  className="menuitem">oders</Button></Link></li>
                    <li><Link><Button  className="menuitem">contact us</Button></Link></li>
          </ul>
        </div>

        {/* ================= Bottom Section ================= */}
      <div className="footer">
  <div className="icons">
 <Link to={'https://www.instagram.com/naariethnicbyprerna'}>   <Button><FaInstagram /></Button></Link>
  </div>

  <div className="rightsinfo">
    <p>© 2025 Naari-The Ethnic Store All rights reserved</p>
  </div>
</div>


      </div>
    </div>
  );
}

export default Sidebar;
