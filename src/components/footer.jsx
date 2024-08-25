import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="/icon/logo.png"
                width={48}
                height={48}
                className="me-3"
                alt="Kuala Lumpur Christian Disciples Church Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-wrap">
                Kuala Lumpur Christian Disciples Church
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  {/* <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a> */}
                  Pastor Peter Wong
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=60123564644"
                    className="hover:underline"
                  >
                    012-3564644
                  </a>
                  , 03-74994478
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.christiandiscipleschurch.org/"
                    className="hover:underline "
                  >
                    Main Website (Christian Disciples Church)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rootedto_rise/"
                    className="hover:underline"
                  >
                    Instagram (Rooted To Rise)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-center pt-16 ">
          <span className="text-sm text-gray-500 dark:text-gray-400 cursor-default text-center">
            © {year} {""}
            Kuala Lumpur Christian Disciples Church. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
