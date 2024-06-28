"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { faqs } from "@/constants";

export default function HomeFaqs() {
  return (
    <div id="faqs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <div className="space-y-4">
            <h2 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold leading-10 tracking-tight text-[#FA6923]">
              Frequently asked questions
            </h2>
            <p className="max-sm:text-sm text-muted-foreground">
              Find answers to common questions about our platform and services.
            </p>
          </div>

          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-[#615448]">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <div className="flex flex-col gap-5 pt-14">
            <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold">
              Still have questions?
            </h1>
            <p className="max-sm:text-sm text-muted-foreground">
              Contact us for further assistance.
            </p>
            <Link
              href={"/contact"}
              className={buttonVariants({
                variant: "outline",
                className: "w-fit",
              })}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
