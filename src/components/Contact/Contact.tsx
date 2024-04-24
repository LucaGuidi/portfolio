import { motion } from "framer-motion";
import { Gradient } from "../Shared";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import "./consacts.scss";

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export function Contact() {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    emailjs
      .sendForm("service_qamttlu", "template_g219h9p", formRef.current, {
        publicKey: "-mOm-c87OklMMqUPU",
      })
      .then(
        () => {
          setSuccess(true);
        },
        () => {
          setError(true);
        }
      );
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="contact col-lg-10 col-12"
    >
      <motion.div variants={variants} className="textContainer">
        <motion.h1 variants={variants}>
          Want to start a new <Gradient>Project</Gradient>?
        </motion.h1>

        <motion.div variants={variants} className="item">
          <h2>Email</h2>
          <span>luca03.guidi@gmail.com</span>
        </motion.div>

        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+39 392-2557049</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} required placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </motion.div>
  );
}
