import React from "react";
import Button from "./Button";
import Testimonials from "@/components/sections/home/Testimonials";

const Specialize = () => {
  return (
    <div className="md:mx-auto mx-10 md:w-fit md:my-18 md:flex flex-col">
      <p className="text-sm text-center my-8 py-4">OUR MISSION AND VISION</p>
      <div className="mb-8 md:flex mx-auto md:space-x-6 space-y-6 md:space-y-0">
        <div className="md:w-[400px] w-full flex-col p-4 md:flex md:justify-end md:h-[505px] bg-[#2F4F4F0D] shadow-md border border-[#00000033] rounded-xl">
          <div className="p-4 md:flex flex-col">
            <p className="font-semibold">Medical</p>
            <p className="pt-2 pb-6">
              Skilled healthcare professionals to meet the demands of the
              evolving medical field.
            </p>
          </div>

          <div className="flex mx-2 md:justify-around space-x-6">
            <Button className="bg-[#D4F3F3] text-sm" text="Become a Talent" />
            <Button
              className="bg-[#2F4F4F] text-sm text-white"
              text="Hire a Talent"
            />
          </div>
        </div>
        <div>
          <div className="md:w-[650px] mb-6 flex-col p-4 flex justify-between h-[240px] bg-[#2F4F4F0D] shadow-md border border-[#00000033] rounded-xl">
            <div className="p-4 flex flex-col">
              <p className="font-semibold">Construction</p>
              <p className="pt-2 pb-6">
                Experts to build and shape your vision into reality.
              </p>
            </div>

            <div className="flex mx-4 space-x-6">
              <Button className="bg-[#D4F3F3] text-sm" text="Become a Talent" />
              <Button
                className="bg-[#2F4F4F] text-sm text-white"
                text="Hire a Talent"
              />
            </div>
          </div>
          <div className="md:w-[650px] flex-col p-4 flex justify-between h-[240px] bg-[#4CB5A1] shadow-md border border-[#00000033] rounded-xl">
            <div className="p-4 flex flex-col text-white">
              <p className="font-semibold">I.T</p>
              <p className="pt-2 pb-6">
                Tech-savvy professionals ready to drive{" "}
                <br className="hidden md:block" /> innovation and growth.
              </p>
            </div>

            <div className="flex mx-4 space-x-6">
              <Button className="bg-[#D4F3F3] text-sm" text="Become a Talent" />
              <Button
                className="bg-[#2F4F4F] text-sm text-white"
                text="Hire a Talent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-14">
        <div className="w-full flex-col mb-6 p-4 flex justify-between md:h-[240px] bg-[#FAFFFF] shadow-md border border-[#00000033] rounded-xl">
          <div className="p-4 flex flex-col">
            <p className="font-semibold">Mechanic & Engineering</p>
            <p className="pt-2 pb-6">
              Highly skilled hands to maintain and repair your machinery.
            </p>
          </div>

          <div className="flex mx-4 space-x-6">
            <Button className="bg-[#D4F3F3] text-sm" text="Become a Talent" />
            <Button
              className="bg-[#2F4F4F] text-sm text-white"
              text="Hire a Talent"
            />
          </div>
        </div>
        <div className="md:flex md:space-x-6 space-y-6 md:space-y-0 mb-8">
          <div className="w-full flex-col p-4 flex justify-between md:h-[240px] bg-[#2F4F4F] shadow-md border border-[#00000033] rounded-xl">
            <div className="p-4 flex flex-col text-white">
              <p className="font-semibold">Retail Marketing</p>
              <p className="pt-2 pb-6">
                Professionals who bring creativity{" "}
                <br className="hidden md:block" /> and strategy to your
                business.
              </p>
            </div>

            <div className="flex mx-4 space-x-6">
              <Button className="bg-[#D4F3F3] text-sm" text="Become a Talent" />
              <Button
                className="bg-[#4CB5A1] text-sm text-white"
                text="Hire a Talent"
              />
            </div>
          </div>
          <div className="w-full flex-col p-4 flex justify-between md:h-[240px] bg-[#2F4F4F1A] shadow-md border border-[#00000033] rounded-xl">
            <div className="p-4 flex flex-col text-[#2F4F4F]">
              <p className="font-semibold">Agriculture</p>
              <p className="pt-2 pb-6">
                Dedicated talent to enhance agricultural{" "}
                <br className="hidden md:block" /> practices and output.
              </p>
            </div>

            <div className="flex mx-4 space-x-6">
              <Button className="bg-[#D4F3F3] text-sm" text="Become a Talent" />
              <Button
                className="bg-[#4CB5A1] text-sm text-white"
                text="Hire a Talent"
              />
            </div>
          </div>
        </div>

        <div className="mb-8 md:flex mx-auto md:space-y-0 space-y-6 md:space-x-6">
          <div className="md:w-[400px] flex-col p-4 justify-between flex md:h-[505px] bg-[#2F4F4F0D] shadow-md border border-[#00000033] rounded-xl">
            <div className="p-4 flex flex-col">
              <p className="font-semibold">Hospitality</p>
              <p className="pt-2 pb-6">
                Experienced individuals to elevate guest experiences.
              </p>
            </div>

            <div className="flex mx-2 md:justify-around space-x-4">
              <Button className="bg-[#D4F3F3] text-sm" text="Become a Talent" />
              <Button
                className="bg-[#2F4F4F] text-sm text-white"
                text="Hire a Talent"
              />
            </div>
          </div>
          <div>
            <div className="md:w-[650px] mb-6 flex-col p-4 flex justify-between md:h-[240px] bg-[#2F4F4F0D] shadow-md border border-[#00000033] rounded-xl">
              <div className="p-4 flex flex-col">
                <p className="font-semibold">Horse Riding</p>
                <p className="pt-2 pb-6">
                  Trained riders for specialized equestrian needs.
                </p>
              </div>

              <div className="flex mx-4 space-x-6">
                <Button
                  className="bg-[#D4F3F3] text-sm"
                  text="Become a Talent"
                />
                <Button
                  className="bg-[#2F4F4F] text-sm text-white"
                  text="Hire a Talent"
                />
              </div>
            </div>
            <div className="md:w-[650px] flex-col p-4 flex justify-between md:h-[240px] bg-[#4CB5A1] shadow-md border border-[#00000033] rounded-xl">
              <div className="p-4 flex flex-col text-white">
                <p className="font-semibold">Recycling</p>
                <p className="pt-2 pb-6">
                  TeProfessionals focused on sustainable{" "}
                  <br className="hidden md:block" /> solutions for a better
                  future.
                </p>
              </div>

              <div className="flex mx-4 space-x-6">
                <Button
                  className="bg-[#D4F3F3] text-sm"
                  text="Become a Talent"
                />
                <Button
                  className="bg-[#2F4F4F] text-sm text-white"
                  text="Hire a Talent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex-col mb-6 p-4 flex justify-between md:h-[240px] bg-[#FAFFFF] shadow-md border border-[#00000033] rounded-xl">
          <div className="p-4 flex flex-col">
            <p className="font-semibold">Transportation</p>
            <p className="pt-2 pb-6">
              Drivers and operators ensuring smooth logistics.
            </p>
          </div>

          <div className="flex mx-4 space-x-6">
            <Button className="bg-[#D4F3F3] text-sm" text="Become a Talent" />
            <Button
              className="bg-[#2F4F4F] text-sm text-white"
              text="Hire a Talent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialize;
