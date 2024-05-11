import React from "react";

const Services = () => {
  return (
    <div className="w-[80%]  m-auto pb-8">
      <div className="mb-10">
        <h1 className="text-[40px] font-bold  text-center ">SERVICES</h1>
      </div>
      <div>
        <h1 className="text-[40px] text-center font-semibold mb-8">
          We provide Artificial Intelligence Services
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col w-auto bg-slate-100 rounded-lg p-6 ">
          <div className="mb-20">
            <h1 className="text-green-600 text-[36px] font-semibold">
              {" "}
              <span className="text-gray-600 text-[36px] font-bold opacity-50">
                01
              </span>{" "}
              Biometrics
            </h1>{" "}
          </div>
          <div>
            {" "}
            <p className="text-gray-600 text-[20px] font-semibold text-wrap">
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </p>{" "}
          </div>
        </div>
        <div className="flex flex-col w-auto bg-slate-100 rounded-lg p-6 ">
          <div className="mb-20">
            <h1 className="text-blue-600 text-[36px] font-semibold">
              {" "}
              <span className="text-gray-600 text-[36px] font-bold opacity-50">
                02
              </span>{" "}
              Image Analysis
            </h1>{" "}
          </div>
          <div>
            {" "}
            <p className="text-gray-600 text-[20px] font-semibold text-wrap">
              Outsource the overly complex image analysis work to our
              intelligent machines that adaptively learn, so you can focus on
              making the best decisions for your business.
            </p>{" "}
          </div>
        </div>

        <div className="flex flex-col w-auto bg-slate-100 rounded-lg p-6 ">
          <div className="mb-20">
            <h1 className="text-pink-700 text-[36px] font-semibold">
              {" "}
              <span className="text-gray-600 text-[36px] font-bold opacity-50">
                03
              </span>{" "}
              Cross-Media Translation
            </h1>{" "}
          </div>
          <div>
            {" "}
            <p className="text-gray-600 text-[20px] font-semibold text-wrap">
              Will something like Siri or Alexa enhance your business? We can
              deliver text-to-speech, text-to-image, speech-to-text,
              speech-to-image, speech-to-image, image-to-text and
              image-to-speech solutions for maximum convenience.
            </p>{" "}
          </div>
        </div>

        <div className="flex flex-col w-auto bg-slate-100 rounded-lg p-6 ">
          <div className="mb-20" >
            <h1 className="text-orange-500 text-[36px] font-semibold ">
              {" "}
              <span className="text-gray-600 text-[36px] font-bold opacity-50">
                0<span >4</span> 
              </span>{" "}
            <span  className="hover:text-gray-600" >3D Modelling and Design.</span>  
            </h1>{" "}
          </div>
          <div>
            {" "}
            <p className="text-gray-600 text-[20px] font-semibold text-wrap">
              We offer services for automated generation of 3D assets with
              realistic shapes and textures. We animate the 3D models with voice
              and videos with an aim to retarget voice and/or expressions with
              pose from a single Image/video.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
