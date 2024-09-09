import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Design1 from "./components/Design1";
import Design2 from "./components/Design2";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="w-full h-fit flex flex-col items-center p-6  bg-[#F9F1F0]">
      <motion.div
        className="box w-full max-w-[1400px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 3,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
          
        }}
      >
        <Navbar />
      </motion.div>
      <div className=" flex gap-x-[25px] w-full max-w-[1400px] ">
        <div className="flex flex-wrap mt-4 gap-x-[25px] w-[1000px]  gap-y-6">
          {" "}
          <div className="flex gap-x-[25px]">
            <motion.div
              className="box w-full max-w-[1400px]"
              initial={{ opacity: 0, scale: 0.5  }}
              animate={{ opacity: 1, scale: 1}}
              transition={{
                duration: 3,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="bg-[#fadcd9] h-[479px] w-[565px]  rounded-2xl relative">
                <div className="absolute right-[30px] top-[34px]">
                  <Design1 className="h-[119px] w-[119px]" />
                </div>
                <div className="w-[475px] text-[54px] font-bold absolute top-[225px] left-6 leading-[60px]">
                  Artist Redefining{" "}
                  <span className="font-light italic mr-4">Architecture </span>{" "}
                  with AI-Driven Design
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box w-full max-w-[1400px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="rounded-2xl  h-[479px]">
                <img src="https://i.ibb.co/LP4FRzJ/profile.jpg" alt="profile" />
              </div>
            </motion.div>
          </div>
          <div className="flex gap-x-[25px]">
            <motion.div
              className="box w-full max-w-[1400px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 3,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className=" w-[448px] h-[351px] bg-[#fadcd9] rounded-2xl px-6 py-8 flex flex-col justify-between">
                <div>
                  <Design2 className="w-[38px] h-[38px]" />
                </div>
                <div className="text-[20px] font-light">
                  Julia Huan is an innovative AI artist renowned for blending
                  cutting-edge technology with creative expression . Based in
                  LA, she crafts unique digital art experiences accesible
                  globally
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box w-full max-w-[1400px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 3,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="w-[448px] h-[351px] bg-[#f8afa6] rounded-2xl  px-6 py-8 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>Have some questions?</div>
                  <div>
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.321051 14.9014C-0.0174173 14.5629 -0.0174173 14.0141 0.321051 13.6758L11.8416 2.15518H4.40054C3.92189 2.15518 3.53387 1.76715 3.53387 1.28851C3.53387 0.809868 3.92189 0.421844 4.40054 0.421844H13.9339C14.1637 0.421844 14.3842 0.513157 14.5468 0.675691C14.7092 0.838226 14.8005 1.05865 14.8005 1.28851V10.8219C14.8005 11.3005 14.4124 11.6885 13.9339 11.6885C13.4553 11.6885 13.0672 11.3005 13.0672 10.8219V3.38084L1.54669 14.9014C1.20824 15.2398 0.659501 15.2398 0.321051 14.9014Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-[55px] font-medium .header_label">
                  Contact me
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div
            className="box w-full max-w-[1400px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="w-[447px] mt-4 h-[726px] bg-[#fadcd9] rounded-2xl px-6 py-[34px] font-medium">
              <div className="w-full flex justify-between items-center">
                <div className="text-[25px]">Musea</div>
                <div>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.321051 14.9014C-0.0174173 14.5629 -0.0174173 14.0141 0.321051 13.6758L11.8416 2.15518H4.40054C3.92189 2.15518 3.53387 1.76715 3.53387 1.28851C3.53387 0.809868 3.92189 0.421844 4.40054 0.421844H13.9339C14.1637 0.421844 14.3842 0.513157 14.5468 0.675691C14.7092 0.838226 14.8005 1.05865 14.8005 1.28851V10.8219C14.8005 11.3005 14.4124 11.6885 13.9339 11.6885C13.4553 11.6885 13.0672 11.3005 13.0672 10.8219V3.38084L1.54669 14.9014C1.20824 15.2398 0.659501 15.2398 0.321051 14.9014Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-5 rounded-2xl">
                <img
                  src="https://i.ibb.co/J3R55pm/lilcoderman-pink-chair-sitting-on-table-in-a-room-in-the-style-8f5e5aa9-38f8-4af0-89f3-8572b0ae9362.png"
                  alt="lilcoderman-pink-chair-sitting-on-table-in-a-room-in-the-style-8f5e5aa9-38f8-4af0-89f3-8572b0ae9362-"
                  className="rounded-2xl "
                />
              </div>
              <div className="border-b-2 mt-[30px] border-[#f8afa6]"></div>
              <div className="border-b-2 mt-[30px] border-[#f8afa6] h-[72px] text-[25px]">
                Elara
              </div>
              <div className="border-b-2 mt-[30px] border-[#f8afa6] h-[72px] text-[25px]">
                Verve
              </div>
              <div className="border-b-2 mt-[30px] border-[#f8afa6] h-[72px] text-[25px]">
                Zephyr
              </div>
            </div>
          </motion.div>
          <motion.div
            className="box w-full max-w-[1400px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="mt-6 w-[447px] h-[101px] bg-[#fadcd9] rounded-2xl flex justify-center items-center gap-x-[65px] text-[15px] font-light">
              <div>Instagram</div>
              <div>LinkedIn</div>
              <div>Twitter</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
