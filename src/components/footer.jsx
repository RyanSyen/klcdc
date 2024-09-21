import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="w-full px-8 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
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
                <li className="mb-4">Pastor Peter Wong</li>
                <li>
                  <Link
                    href="https://api.whatsapp.com/send?phone=60123564644"
                    className="hover:underline"
                    target="_blank"
                  >
                    012-3564644
                  </Link>
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
                  <Link
                    href="https://www.christiandiscipleschurch.org/"
                    className="hover:underline "
                    target="_blank"
                  >
                    Main Website (Christian Disciples Church)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/rootedto_rise/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Instagram (Rooted To Rise)
                  </Link>
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
