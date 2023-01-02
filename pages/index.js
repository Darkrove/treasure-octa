import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    pcno: "",
    key: ""
  });

  const sendEmail = () => {
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      name: form.name,
      pcno: form.pcno,
      timestamp: new Date().toLocaleString(),
      replyto: "samaralishaikh212@gmail.com",
    }, EMAILJS_PUBLIC_KEY);
  };

  const handleFormFieldChange = (fieldName, e) => {
    setForm((state) => ({ ...state, [fieldName]: e.target.value }));
  };

  const handleSubmit = (event) => {
    if (form.key === '123456') {
      setIsLoading(true)
      event.preventDefault();
      sendEmail()
      setIsLoading(false)
      router.push(
        {
          pathname: '/treasure',
          query: {
            name: form.name
          }
        })
    }
    else if (form.key === "" || form.name === "" || form.pcno === "") {
      setIsError(true)
      setErrorMsg("Field can't be blank")
      setForm(() => ({ name: "", pcno: "", key: "" }));
      setTimeout(function () {
        setIsError(false)
      }, 5000)
    }
    else {
      setIsError(true)
      setErrorMsg("Invalid Key")
      setForm(() => ({ key: "" }));
      setTimeout(function () {
        setIsError(false)
      }, 5000)
    }
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-5xl font-bold">Hello there 👋</h1>

      <div className="mt-8 w-3/4 mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          <div className="flex flex-col">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your name?</span>
              </label>
              <input type="text" value={form.name} onChange={(e) => handleFormFieldChange("name", e)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your pc number?</span>
              </label>
              <input type="text" value={form.pcno} onChange={(e) => handleFormFieldChange("pcno", e)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Key?</span>
              </label>
              <input type="password" value={form.key} onChange={(e) => handleFormFieldChange("key", e)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            {isLoading
              ? <button disabled className="mt-8 btn btn-wide">Loading...</button>
              : <button className="mt-8 btn btn-wide" onClick={handleSubmit}>Submit</button>
            }
          </div>
        </div>
      </div>

      {isError ? (
        <AnimatePresence mode='wait'>
          <motion.div
            initial={{ x: -1800, y: 100, opacity: 0 }}
            animate={{ x: 161, y: 100, opacity: 1 }}
            exit={{ x: 1800, y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="toast">
              <div className="alert alert-error">
                <div className='w-64'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{errorMsg}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        null
      )}
    </div>
  )
}
