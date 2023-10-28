import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { ContributorData } from "@/ContributorData/contributorData";
function Contributors() {
  //   Contribute here guys!! Idhar udhar mat nikal jaana (ㆆ_ㆆ)


  const [LoadMoreValue, setLoadMoreValue] = useState(10);
  // Do not touch this return function guys!(ㆆ_ㆆ)
  // Bahaut mehnat se banaya hai yaar. Upar jaao wapis （*＾-＾*）
  console.log(ContributorData.length, LoadMoreValue);
  return (
    <div className="bg-white w-full py-16 md:py-6">
      <section className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-4 pb-16 pt-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900  sm:text-4xl md:mx-auto">
                Our awesome{" "}
                <span className="text-yellow-500">Contributors</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                The list of people who've successfully contributed with this
                hands-on workshop. Get your name on GDSC's website too!
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
            >
              {ContributorData &&
                ContributorData.slice(0, LoadMoreValue).map((member) => {
                  return (
                    <div key={member.id} class="scale-75 sm:scale-100">
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full sm:h-80"
                          src={member.img}
                          alt={member.name}
                        />

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            {member.name}
                          </p>
                          <p className="mb-4 text-xs text-gray-100">
                            {member.role}
                          </p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            {member.desc}
                          </p>

                          <div className="flex items-center justify-center space-x-3">
                            <SocialIcon
                              url={member.social1}
                              target="_blank"
                              style={{ height: 35, width: 35 }}
                              bgColor="black"
                            />

                            <SocialIcon
                              url={member.social2}
                              target="_blank"
                              style={{ height: 35, width: 35 }}
                              bgColor="black"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </motion.div>
          </div>
          <div className="flex justify-center items-center text-black box-border lg:pb-20 md:pb-24 pb-16">
            <button
              className={`mb-2 font-semibold leading-5 text-blue-500 bg-blue-100 w-fit p-3 rounded hover:bg-gray-500 hover:text-white transition-colors duration-500 ease-in-out ${
                LoadMoreValue === 40 && ` opacity-50 cursor-not-allowed`
              }`}
              onClick={() => {
                if (LoadMoreValue < 40) {
                  setLoadMoreValue(LoadMoreValue + 10);
                }
              }}
            >
              Explore more contributors
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Bola tha na Upar jaao ( ˘︹˘ )
// sorry bro just update it

export default Contributors;