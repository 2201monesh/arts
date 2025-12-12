import React, { useEffect, useRef, useState } from "react";
import "./WalletCard.css";
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import visaLogo from "../assets/visa-logo-png-removebg-preview.png";
import masterCardLogo from "../assets/mastercard-logo-removebg-preview.png";

const amounts = ["$00.00", "$29,720.49", "$79,890.54"];

function WalletCard() {
  const cardOne = useRef(null);
  const cardTwo = useRef(null);
  const cardThree = useRef(null);

  useEffect(() => {
    const keyframes = [
      { transform: "translateY(-150px)", opacity: 0 },
      { transform: "translateY(-70px)", opacity: 1 },
      { transform: "translateY(0px)", opacity: 1 },
    ];

    const animateCard = async (el, duration) => {
      el.style.opacity = "1"; // make only THIS card visible
      el.style.display = "block";

      return el.animate(keyframes, {
        duration,
        easing: "linear",
        fill: "forwards",
      }).finished;
    };

    (async () => {
      // STEP 1: card 3 only
      cardTwo.current.style.opacity = "0";
      cardOne.current.style.opacity = "0";

      await animateCard(cardThree.current, 500);

      // STEP 2: card 2 only
      cardThree.current.style.opacity = "0";

      await animateCard(cardTwo.current, 500);

      // STEP 3: card 1 only
      cardTwo.current.style.opacity = "0";

      await animateCard(cardOne.current, 500);
    })();
  }, []);

  const cardVariants = {
    hidden: { y: -120, opacity: 1 },
    show: {
      y: 0,
      opacity: 2,
      transition: {
        duration: 0.7,
        ease: "linear",
      },
    },
  };

  const wrapperVariants = {
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <div className="h-[55%] w-[28%] flex items-center justify-center flex-col">
      <div className="flex flex-col justify-start items-start w-[90%] mb-2 ml-1">
        <p className="text-lg">Add all your cards &</p>
        <p className="text-lg flex items-center justify-between w-full">
          <span className="">make seamless payments</span>
          <span className="flex items-center text-neutral-600 cursor-pointer">
            Get Started <MdArrowOutward className="ml-1" size={22} />
          </span>
        </p>
      </div>
      <div className="w-[90%] h-[80%] rounded-4xl flex items-center justify-center bg-neutral-200 gray-box relative">
        <div className="w-[55%] h-[65%] rounded-3xl flex items-center justify-center bg-white shadow-sm relative absolute top-2">
          <div className="w-[94%] h-[55%] rounded-3xl flex items-center justify-center bg-white shadow-sm absolute top-21 border border-neutral-200 z-20">
            <div className="w-[93%] h-[87%] border border-dashed border-neutral-400 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-200">
              <span className="text-xs text-neutral-400 mb-1">
                Wallet Balance
              </span>
              <div className="slider-container">
                <div className="slider-wrapper">
                  <span className="value-one">$00.00</span>
                  <span className="value-two">$37,768.54</span>
                  <span className="value-three">$74,856.83</span>
                  <span className="value-three">$94,659.52</span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={cardOne}
            className="card-one border border-cyan-300 absolute top-[-22px] w-[85%] h-[55%] rounded-xl px-4 py-2 bg-cyan-100 text-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="w-10">
                <img src={visaLogo} alt="logo" />
              </span>
              <span className="text-neutral-700 text-xs">$19,802.69</span>
            </div>
            <div className="text-neutral-700 text-xs">1234 5678 9810</div>
          </div>
          <div
            ref={cardTwo}
            className="card-two border border-amber-300 absolute top-3 w-[85%] h-[55%] rounded-xl px-4 py-2 bg-amber-200 text-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="w-10">
                <img src={masterCardLogo} alt="logo" />
              </span>
              <span className="text-neutral-700 text-xs pb-2">$37,088.29</span>
            </div>
            <div className="text-neutral-700 text-xs">1234 5678 9810</div>
          </div>
          <div
            ref={cardThree}
            className="card-three border border-emerald-400 absolute top-12 w-[85%] h-[55%] rounded-xl px-4 py-2 bg-emerald-300 text-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="w-10">
                <img src={visaLogo} alt="logo" />
              </span>
              <span className="text-neutral-700 text-xs">$37,768.54</span>
            </div>
            <div className="text-neutral-700 text-xs">1234 5678 9810</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletCard;
