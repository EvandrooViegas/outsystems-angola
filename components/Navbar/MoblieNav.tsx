"use client"

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { LinksList } from "./LinksList";

export default function MoblieNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <button
        className="relative nav-z-index"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RxHamburgerMenu />
      </button>

      {/* NAVLINKS FOR SMALL DEVICES */}
   
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/60 backdrop-blur"
          >
            <LinksList />
          </motion.div>
        ) : null}
      </AnimatePresence> 
    </div>
  );
}
