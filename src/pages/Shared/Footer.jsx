import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" p-10 border-t-[2px] rounded-tl-[100px] border-amber-500 mt-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-32  justify-between mt-10 mr-10">
        <div className="">
          <h3 className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text  text-2xl font-semibold">
            Ink Scape
          </h3>
          <p className="w-full">
            Join our community of art enthusiasts and unleash your own
            creativity today.
          </p>
        </div>

        <div className="flex flex-col md:ml-20  w-24">
          <h6 className="footer-title ">Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Art & Craft</a>
          <a className="link link-hover">Add Art</a>
          <a className="link link-hover">My Art</a>
        </div>

        <div>
          <form>
            <h6 className="footer-title ">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-gradient-to-br from-amber-400 to-amber-600 text-white join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
            <div className="flex text-2xl gap-8 items-center mt-6">
              <a href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/?lang=en">
                <FaTwitter />
              </a>
              <a href="https://web.whatsapp.com/">
                <IoLogoWhatsapp />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-amber-900 w-full mt-5">
        <p className="mt-5 text-center">
          Copyright © 2024 - All right reserved by Ink Scape
        </p>
      </div>
    </footer>
  );
};

export default Footer;
