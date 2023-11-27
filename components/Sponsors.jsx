import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-full md:h-[25rem] px-10 md:px-28 md:mt-20">
      <div className="space-y-3 text-center">
        <div className="text-5xl font-semibold text-rose-800">Our Sponsors</div>
        <div className="text-gray-500">
          People who have helped us throughout our journey constantly.
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <Image
            src={
              "https://mms.businesswire.com/media/20210414005467/en/871272/23/horz-full-color.jpg"
            }
            alt="InterLedger Foundation"
            width={500}
            height={500}
          />
        </div>

        <div className="flex justify-center">
          <Image
            src={
              "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699637800/NS_dvg3st.png"
            }
            alt="Newton School"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
