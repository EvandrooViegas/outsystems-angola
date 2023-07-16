"use client"

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { LinksList } from "./LinksList";
import { useNavbarContext } from "./context";

export default function MoblieNav() {
  const { isMobileNavbarOpned, toggleMobileNavbar } = useNavbarContext()
  return (
    <div className="block md:hidden">
      <button
        className={`relative nav-z-index `}
        onClick={toggleMobileNavbar}
      >
        {isMobileNavbarOpned  ? <IoCloseSharp /> : <RxHamburgerMenu />}
      </button>

      {/* NAVLINKS FOR SMALL DEVICES */}
      
      <AnimatePresence>
        {isMobileNavbarOpned ? (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl fixed inset-0 bg-white backdrop-blur-xl"
          >
            <LinksList />
          </motion.div>
        ) : null}
      </AnimatePresence> 
    </div>
  );
}
