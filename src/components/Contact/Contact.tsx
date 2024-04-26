import { AnimatePresence, motion } from "framer-motion";
import { Alert, AlertType, Gradient } from "../Shared";
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

const alertVariants = {
  initial: { x: 500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const CLOSE_AFTER = 3 * 1000; // 3 Seconds

export function Contact() {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_qamttlu", "template_g219h9p", formRef.current, {
        publicKey: "-mOm-c87OklMMqUPU",
      })
      .then(
        () => {
          setLoading(false);
          setShowAlert(true);
          setError(false);
          setAlertTimer();
        },
        () => {
          setLoading(false);
          setShowAlert(true);
          setError(true);
          setAlertTimer();
        }
      );
  }

  function setAlertTimer() {
    setTimeout(() => {
      setShowAlert(false);
    }, CLOSE_AFTER);
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      exit="initial"
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
          <button
            type="submit"
            disabled={loading}
            className={loading ? "disabled" : ""}
          >
            Submit
          </button>
          <AnimatePresence>
            {showAlert && (
              <motion.div
                key="modal"
                variants={alertVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                className="alert"
              >
                <Alert
                  type={error ? AlertType.error : AlertType.success}
                  title={error ? "Ops! Something went wrong" : "Success!"}
                  message={
                    error
                      ? "A problem has occurred. Please try again later"
                      : "Your message has been sent successfully."
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </motion.div>
  );
}
