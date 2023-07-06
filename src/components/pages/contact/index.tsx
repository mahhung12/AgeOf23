"use client";

import FormItem from "@/components/FormItem";
import TextInput from "@/components/FormItem/components/TextInput";
import Textarea from "@/components/FormItem/components/Textarea";
import showMessage from "@/components/Message";
import { InlineCode } from "@/components/Text/InlineCode";
import { MESSAGE_TYPE } from "@/constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

enum CONTACT_ENUM {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message",
}

interface IContact {
  [CONTACT_ENUM.NAME]: string;
  [CONTACT_ENUM.EMAIL]: string;
  [CONTACT_ENUM.MESSAGE]: string;
}

const DEFAULT_CONTACT_FORM = {
  [CONTACT_ENUM.NAME]: "",
  [CONTACT_ENUM.EMAIL]: "",
  [CONTACT_ENUM.MESSAGE]: "",
};

const schema = () =>
  z.object({
    [CONTACT_ENUM.NAME]: z.string().min(1, { message: "Name is required" }),

    [CONTACT_ENUM.EMAIL]: z
      .string()
      .min(1, { message: "Email is required" })
      .email("This is not a valid email"),

    [CONTACT_ENUM.MESSAGE]: z
      .string()
      .min(1, { message: "Message is required" }),
  });

const ContactPage = () => {
  const methods = useForm<IContact>({
    defaultValues: DEFAULT_CONTACT_FORM,
    resolver: zodResolver(schema()),
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<IContact> = (data) => {
    console.log(data);
    showMessage(MESSAGE_TYPE.SUCCESS, "Tks your submission");
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-700 dark:text-white">
          Contact <InlineCode dark>me</InlineCode>
        </h2>
        <p className="mb-8 lg:mb-10 font-light text-gray-500 dark:text-gray-400 sm:text-[16px]">
          Everything has beauty, but not everyone sees it. Tell me what you see
          !!
        </p>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="space-y-8"
          >
            <FormItem
              name={CONTACT_ENUM.NAME}
              label="Your name"
              labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              required
            >
              <TextInput
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your name"
              />
            </FormItem>

            <FormItem
              name={CONTACT_ENUM.EMAIL}
              label="Your email"
              labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              required
            >
              <TextInput
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="your-email@example.com"
              />
            </FormItem>

            <FormItem
              name={CONTACT_ENUM.MESSAGE}
              label="Your message"
              labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              required
            >
              <Textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
              />
            </FormItem>

            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center border border-solid rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default ContactPage;
