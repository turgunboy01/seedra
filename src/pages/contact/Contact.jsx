import React, { useState } from "react";
import img1 from "../../assets/contact/img1.png";
import img2 from "../../assets/contact/img2.png";
import img3 from "../../assets/contact/img3.png";
import img4 from "../../assets/contact/img4.png";
import { ContaactIcon1, ContaactIcon2 } from "../../assets/contact/ContactSvg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission
      console.log("Form data submitted: ", formData);
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="bg-[]">
      <div className="max-w-[1150px] mx-auto px-5 py-[50px]">
        <div className="bg-[#eaf1eb] h-auto md:h-[550px] relative rounded-[24px] flex flex-col md:flex-row gap-[30px]">
          <img src={img1} alt="" className="absolute top-0 left-0" />
          <img src={img2} alt="" className="absolute top-0 right-0" />
          <img src={img3} alt="" className="absolute top-0 right-10" />
          <img src={img4} alt="" className="absolute top-[20px] right-0" />

          <div className="w-full md:w-[50%] p-[20px] md:p-[50px] flex relative z-40 flex-col justify-between">
            <span>
              <h2 className="text-[30px] md:text-[48px] leading-[52px] text-[#1F2533] font-semibold">
                Contact us
              </h2>
              <p className="pt-[10px] text-[14px] md:text-[16px] text-[#1F2533] md:w-[55%] font-light">
                Send us your request and we will get in touch with you as soon
                as possible
              </p>
            </span>
            <div className="flex flex-col gap-3 mt-4 md:mt-0">
              <span className="flex gap-4 items-center">
                <div className="w-[56px] h-[56px] rounded-[15px] bg-[#fff] flex justify-center items-center">
                  <ContaactIcon1 />
                </div>
                <p className="text-[20px] md:text-[24px] font-bold text-[#70737C]">
                  +380 98 782 82 23
                </p>
              </span>
              <span className="flex gap-4 items-center">
                <div className="w-[56px] h-[56px] rounded-[15px] bg-[#fff] flex justify-center items-center">
                  <ContaactIcon2 />
                </div>
                <p className="text-[16px] md:text-[24px] font-bold text-[#70737C]">
                  mailmail@gmail.com
                </p>
              </span>
            </div>
          </div>
          <div className="w-full md:w-[60%] p-[20px] md:p-[50px] relative z-40 h-full">
            <div className="bg-[#fff] h-full rounded-[30px] p-[20px] md:p-[30px]">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between h-full"
              >
                <div className="flex flex-col">
                  <label
                    className="text-[14px] pb-1 text-[#70737C] font-medium"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="outline-none border rounded py-3 px-5 text-[15px]"
                    placeholder="Your name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-[12px]">{errors.name}</p>
                  )}
                  <label
                    className="text-[14px] pb-1 pt-[10px] text-[#70737C] font-medium"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="outline-none border rounded py-3 px-5 text-[15px]"
                    placeholder="Your email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[12px]">{errors.email}</p>
                  )}
                  <label
                    className="text-[14px] pt-[10px] pb-1 text-[#70737C] font-medium"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="outline-none h-[90px] border rounded py-3 px-5 resize-none text-[15px]"
                    placeholder="Your message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[12px]">{errors.message}</p>
                  )}
                </div>
                <div className="flex gap-3 flex-col pt-[10px] sm:pt-0 sm:flex-row items-center mt-2">
                  <button
                    type="submit"
                    className="py-[11px] h-[51px] w-full md:w-[160px] text-[14px] rounded-lg bg-[#359740] text-[#fff] font-semibold"
                  >
                    Send request
                  </button>
                  <p className="text-[13px] lg:text-[14px] text-[#70737C] w-full md:w-[80%] mt-2 md:mt-0">
                    By sending a request you agree to our Privacy & Policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
