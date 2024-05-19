"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Accordions() {
  const [isOpen, setIsOpen] = useState(true);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const activateIt = (id) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[65%] shadow-2xl ms-[10.5em] p-10">
        <Accordion>
          <AccordionItem
            onPress={() => activateIt(1)}
            key="1"
            aria-label="1. What is special about comparing rental car deals?
            "
            title="1. What is special about comparing rental car deals?
            "
          >
            <div>
              <p className="text-neutral-500 p-1">
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </p>
            </div>
          </AccordionItem>
          <AccordionItem
            className="p-2"
            onPress={() => activateIt(2)}
            key="2"
            aria-label="2. How do I find the car rental deals?
            "
            title="2. How do I find the car rental deals?
            "
          >
            <div>
              <p className="text-neutral-500 p-1">
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </p>
            </div>
          </AccordionItem>
          <AccordionItem
            className="p-2"
            onPress={() => activateIt(3)}
            key="3"
            aria-label="3. How do I find such low rental car prices?
            "
            title="3. How do I find such low rental car prices?
            "
          >
            <div>
              <p className="text-neutral-500 p-1">
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
