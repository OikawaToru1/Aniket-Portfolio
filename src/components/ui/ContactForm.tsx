import { useForm, type SubmitHandler} from "react-hook-form";
import { CiUser, CiMail } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

interface ContactFormProps{
    name : string;
    email : string;
    message : string;
};

export function ContactForm(){
  const[mailSuccess, setMailSuccess] = useState<boolean | null >(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const {register,
         handleSubmit,
          reset,
        } = useForm<ContactFormProps>();

    const onsubmit: SubmitHandler<ContactFormProps> = (data) => {
        if(data.message.trim() === "" || data.name.trim() === "" || data.email.trim() === ""){
          setMailSuccess(false);
          if(timerRef.current) clearTimeout(timerRef.current)
          timerRef.current = setTimeout(() => {
            setMailSuccess(null);
          }, 7000);
          return;
        }
        if(timerRef.current) clearTimeout(timerRef.current)
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              name: data.name,
              email: data.email,
              message: data.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          )
          .then((response) => {
            reset();
            setMailSuccess(true);
            console.log(
              "Email sent successfully!",
              response.status,
              response.text,
            );
          })
          .catch((error) => {
            console.error("Failed to send email:", error);
            setMailSuccess(false);
          })
          .finally(()=>{
            timerRef.current = setTimeout(() => {
              setMailSuccess(null);
            }, 7000);
          });
        
        
    };

    return (
      <form
        className=" relative bg-gray-900/50 border border-gray-700 rounded-md p-8 flex flex-col items-start gap-4 w-full "
        onSubmit={handleSubmit(onsubmit)}
      >
        {mailSuccess !== null &&
          (mailSuccess === true ? (
            <div className="absolute  top-2 left-1/2 -translate-x-1/2  rounded-md w-[200px] h-[50px] flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-white/20 border">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
              <p>Mail sent succesfully !</p>
            </div>
          ) : (
            <div className="absolute  top-2 left-1/2 -translate-x-1/2  rounded-md w-[200px] h-[50px] flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-white/20 border">
              <span className="inline-block w-2 h-2 rounded-full bg-red-400" />
              <p>Failed to send email!</p>
            </div>
          ))}

        <h2 className="font-mono tracking-tight uppercase text-xl text-gray-100  ">
          Send a message
        </h2>

        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="name" className="text-sm font-medium text-gray-400">
            Your Name
          </label>
          <div className="flex items-center border border-gray-700  rounded-lg  px-3 gap-2 w-full transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <CiUser aria-hidden="true" size={20} className=" text-gray-400" />
            <input
              className="py-2 w-full bg-gray-900/40 border-none outline-none focus:ring-0"
              placeholder={"John Doe"}
              id="name"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-sm font-medium text-gray-400" htmlFor="email">
            Your Email
          </label>
          <div className="flex items-center px-3 gap-2 border border-gray-700 rounded-lg w-full transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <CiMail size={20} className="text-gray-400" aria-hidden="true" />
            <input
              id="email"
              type="email"
              placeholder={"abc@yahoo.com"}
              className="py-2 w-full bg-gray-900/40 border-none outline-none focus:ring-0"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-400"
          >
            Your Message
          </label>
          <div className="flex items-start px-3 gap-2 border border-gray-700 w-full rounded-lg transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <FiMessageSquare
              size={20}
              className="text-gray-400 mt-3"
              aria-hidden="true"
            />
            <textarea
              id="message"
              rows={4}
              placeholder={"Write anything"}
              {...register("message", { required: true })}
              className="py-2 w-full bg-gray-900/40 border-none outline-none focus:ring-0 resize-y min-h-[100px]"
            />
          </div>
        </div>

        <button
          className="w-full bg-white text-black py-2 rounded-lg text-md font-medium hover:cursor-pointer hover:ring-2 hover:ring-blue-500 hover:border-blue-500 hover:scale-[1.05] transition-all"
          type="submit"
        >
          Send
        </button>
      </form>
    );

}