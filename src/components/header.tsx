export function Header() {
  return (
    <header
        className="smPhone:containerMySpaceDeviceHand smLaptop:containerMyspace flex flex-wrap  
            items-center 
            pt-14 
            smPhone:flex-col 
            smPhone:justify-center 
            smPhone:gap-7 
            smLaptop:flex-row 
            smLaptop:justify-between
            "
      >
        {/* <div>
          <h3 className="font-bold tracking-widest smPhone:text-xl mdPhone:text-2xl">
            Julio
            <span className="text-blue-violet-default mdPhone:text-[2rem]">
              {' { '}
            </span>
            Chiuchi
            <span className="text-blue-violet-default mdPhone:text-[2rem]">
              {' } '}
            </span>
          </h3>
        </div> */}
        <div />

        <div
          className="flex items-center gap-3 text-2xl tracking-wider 
                smPhone:flex-col smPhone:justify-center
                smLaptop:flex-row
                "
        >
          <a href="#" className="text-blue-violet-default">
            about me
          </a>
          <a
            download
            href="/src/assets/juliochiuchi-cv.pdf"
            className="animate-pulse rounded-md border border-blue-violet-default p-3 text-lg transition-colors duration-700 ease-in-out hover:bg-blue-violet-default hover:text-white-ice smLaptop:ml-8"
          >
            download cv
          </a>
        </div>
      </header>
  )
}