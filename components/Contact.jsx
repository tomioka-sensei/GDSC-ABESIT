import Image from "next/image";
import image1 from "@/assets/image1.jpg";

const Contact = () => {
  return (
    <div className="text-black w-full py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-3/4 mx-auto">
        <div className="flex flex-col justify-around bg-slate-200 p-4 rounded-3xl">
          <h2 className="font-bold text-3xl text-center mb-4">Contact Us</h2>
          <form className="flex flex-col gap-3 w-3/4 mx-auto">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-white px-3 py-2 rounded-md shadow-md"
              placeholder="Enter your name"
            />
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-white px-3 py-2 rounded-md shadow-md"
              placeholder="Enter your email"
            />
            <label htmlFor="message" className="font-bold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-white px-3 py-2 rounded-md shadow-md"
              placeholder="Enter your message"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white w-1/3 mx-auto my-4 px-3 py-2 rounded-xl shadow-md hover:bg-gray-400 hover:text-black transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
        <div className="relative">
          <Image
            src={image1}
            width={900}
            className="rounded-3xl shadow-md"
            alt="Contact us image"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;