import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

export function Footer() {
  return (
          <footer
        className="smPhone:containerMyspaceDeviceHand smLaptop:containerMyspace bottom-0 flex items-center 
            gap-7 
            pb-[1rem] 
            smPhone:justify-center 
            smLaptop:absolute 
            smLaptop:w-full 
            smLaptop:justify-between
            "
      >
        <div>
          <span>{new Date().getFullYear()} © All rights reserved</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/juliochiuchi"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juliochiuchi/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://twitter.com/juliochiuchi"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare className="h-[1.1rem] w-[1.1rem]" />
          </a>
        </div>
      </footer>
  )
}