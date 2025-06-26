"use client";

import React from "react";
import useFormPayload from "../hooks/useContactForm";
import Button from "./Button";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";

const ContactForm = () => {
  const { formData, handleChange, handleSubmit } = useFormPayload();

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[40px]"
      >
        <div className="border-b border-b-gray-700 hover:border-b-primary focus-within:border-b-primary pb-[8px] lg:pb-[10px] xl:pb-[12px]">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full bg-transparent border-none focus:outline-none text-[14px] lg:text-[16px] xl:text-[18px]"
          />
        </div>

        <div className="border-b border-b-gray-700 hover:border-b-primary focus-within:border-b-primary pb-[8px] lg:pb-[10px] xl:pb-[12px]">
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
            className="w-full bg-transparent border-none focus:outline-none text-[14px] lg:text-[16px] xl:text-[18px]"
          />
        </div>
        <div className="border-b border-b-gray-700 hover:border-b-primary focus-within:border-b-primary pb-[8px] lg:pb-[10px] xl:pb-[12px]">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your project"
            required
            className="w-full bg-transparent border-none focus:outline-none text-[14px] lg:text-[16px] xl:text-[18px]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            text="Send"
            icon={<RiSendPlaneLine />}
            size="48px"
            border="white"
            type="submit"
          />
          <span className="text-[18px]">or</span>
          <Button
            text="Contact me"
            icon={<IoMailOutline />}
            size="48px"
            border="white"
            type="button"
          />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
