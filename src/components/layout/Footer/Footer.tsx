import logo from "public/logo.webp";
import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper>
        <section className="grid grid-cols-5 py-20">
          <div className="grid col-span-2 mr-28">
            <figure>
              <Image src={logo} alt="Logo" />
            </figure>
            <p className="my-8">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="flex gap-4">
              <div className="bg-[#F1F1F1] p-4 rounded-md shrink-0 text-black">
                <TwitterIcon />
              </div>
              <div className="bg-[#F1F1F1] p-4 rounded-md shrink-0">
                <FacebookIcon />
              </div>
              <div className="bg-[#F1F1F1] p-4 rounded-md shrink-0">
                <LinkedinIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[#666666] text-lg font-bold ">Company</h3>
            <Link href={""}>About</Link>
            <Link href={""}>Terms of Use</Link>
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>How it Works</Link>
            <Link href={""}>Contact Us</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[#666666] text-lg font-bold ">Support</h3>
            <Link href={""}>Support Carrer</Link>
            <Link href={""}>24h Service</Link>
            <Link href={""}>Quick Chat</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[#666666] text-lg font-bold ">Contact</h3>
            <Link href={""}>WhatsApp</Link>
            <Link href={""}>Support 24h</Link>
            <Link href={""}>Our Projects</Link>
          </div>
        </section>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
