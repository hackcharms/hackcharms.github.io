import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../../utils/motion";
import { styles } from "../../../constants/styles";
import EarthCanvas from "./canvas/Earth";
import SectionWrapper from "../../HigherOrder/SectionWrapper";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "JavaScript Mastery",
    //       from_email: form.email,
    //       to_email: "sujata@jsmastery.pro",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error: unknown) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("Ahh, something went wrong. Please try again.");
    //     }
    //   );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="rounded-lg border-none bg-motion-primary-800 px-6 py-4 font-medium text-white outline-none placeholder:text-motion-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="rounded-lg border-none bg-motion-primary-800 px-6 py-4 font-medium text-white outline-none placeholder:text-motion-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="rounded-lg border-none bg-motion-primary-800 px-6 py-4 font-medium text-white outline-none placeholder:text-motion-secondary"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-motion-primary-800 px-8 py-3 font-bold text-white shadow-md shadow-motion-primary outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
