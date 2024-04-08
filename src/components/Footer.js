const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <footer class="bg-brown-900 font-serif dark:bg-gray-900">
        <div class="container px-6 pb-3 mx-auto flex  justify-between">
          <p class="font-serif p-8 text-start md:text-center md:text-lg md:p-4 text-white place-self-start">
            Gravel Geo-Technical Works
          </p >
          <p className=" font-serif p-8 text-start md:text-center md:text-lg md:p-4 text-white place-self-start">
            © {currentYear} All rights reserved.</p>

          <div class="flex flex-row">
            <div className="flex flex-row ">
              <div class="flex flex-row items-center gap-3">
                <a
                  href=""
                  class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-white hover:cursor-pointer hover:text-black rounded px-4 py-1 font-serif bg-brown-700"
                >
                  Home
                </a>
                <a
                  href=""
                  class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-white hover:cursor-pointer hover:text-black rounded px-4 py-1 font-serif bg-brown-700"
                >
                  Home
                </a>
                <a
                  href=""
                  class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-white hover:cursor-pointer hover:text-black rounded px-4 py-1 font-serif bg-brown-700"
                >
                  Home
                </a>
                <a
                  href=""
                  class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-white hover:cursor-pointer hover:text-black rounded px-4 py-1 font-serif bg-brown-700"
                >
                  Home
                </a>
                <a
                  href=""
                  class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-white hover:cursor-pointer hover:text-black rounded px-4 py-1 font-serif bg-brown-700"
                >
                  Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
