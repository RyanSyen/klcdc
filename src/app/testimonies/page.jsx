import Image from "next/image";
import Link from "next/link";

const Testimonies = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div>
          <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Testimonies</h2>
        </div>
        <div className="pt-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
            How I Have Come To Know God –  Pastor Eric Chang
          </h3>
          <Link href={"https://www.christiandiscipleschurch.org/content/ehhc-testimony"} target="_blank" >
            <Image src={"https://www.christiandiscipleschurch.org/sites/default/files/bookstore/pictures/banners/ehhc.jpg"} height={250} width={600} alt="Pastor Eric's Testimony" />
          </Link>
        </div>

      </div>
    </section>
  )
};

export default Testimonies;
