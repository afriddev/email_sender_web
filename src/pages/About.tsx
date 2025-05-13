"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate()
  return (
    <div className="px-3 flex flex-col">
      <div className="py-16 lg:py-14 bg-gray-50 ">
        <div className="container mx-auto px-">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="font-semibold text-3xl lg:text-4xl text-blue-900 mb-4">
                One Email API. <br className="hidden lg:inline" />
                <span className="text-indigo-600">Every Provider.</span>
              </h1>
              <p className="font-light text-lg lg:text-xl text-gray-700 mb-6">
                Launch powerful native email capabilities quickly and securely
                with a single API.
              </p>
              <ul className="list-none space-y-3 text-gray-600">
                <li className="flex items-center">
                  <MdKeyboardArrowRight  className="h-5 w-5 mr-2 text-indigo-600" />
                  <span className="text-base">
                    Deliver standout email features in months, not years.
                  </span>
                </li>
                <li className="flex items-center">
                  <MdKeyboardArrowRight  className="h-5 w-5 mr-2 text-indigo-600" />
                  <span className="text-base">
                    Let your developers focus on your core roadmap.
                  </span>
                </li>
                <li className="flex items-center">
                  <MdKeyboardArrowRight  className="h-5 w-5 mr-2 text-indigo-600" />
                  <span className="text-base">
                    Enjoy maintenance-free connections with 99.9% uptime.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                className="object-contain rounded-lg shadow-lg"
                src="aboutHero.png"
                alt="Email API Illustration"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto ">
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-800 text-center mb-8">
            Build email features that empower users to send with confidence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-6">
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border">
              <embed src="user.svg" className="h-20 mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Service accounts
              </h3>
              <p className="text-center text-gray-600 text-lg font-light">
                Onboard enterprise customers faster.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border">
              <embed src="lock.svg" className="h-20 mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easily navigate OAuth Verification
              </h3>
              <p className="text-center text-gray-600 text-lg font-light">
                Complete Google's assessment with expert assistance from EMAIL
                SENDER for free.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border">
              <embed src="scheduler.svg" className="h-20 mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Scheduled send
              </h3>
              <p className="text-center text-gray-600 text-lg font-light">
                Schedule messages to maximize open rates and replies.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border">
              <embed src="barchart.svg" className="h-20 mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                High-volume send
              </h3>
              <p className="text-center text-gray-600 text-lg font-light">
                Enable high-volume sends for free.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border">
              <embed src="fingerprint.svg" className="h-20 mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Authentication scopes
              </h3>
              <p className="text-center text-gray-600 text-lg font-light">
                Improve security with granular authentication scopes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-800 mb-8">
            Get started in 3 simple steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-indigo-500 text-white text-xl font-semibold shadow-md flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get an App Password
              </h3>
              <p className="text-center text-gray-600 text-lg font-light">
                Create an app password for your Gmail account - no credit card
                required.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-indigo-500 text-white text-xl font-semibold shadow-md flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Build Integration Quickly
              </h3>
              <p className="text-center text-gray-600 text-lg font-light">
                With just a few lines of code, you gain full control of email
                sending.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-indigo-500 text-white text-xl font-semibold shadow-md flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Connect All Your Users
              </h3>
              <p className="text-center text-gray-600 text-lg font-light">
                Whether you're connecting 100 or 100 million accounts, your
                data is safe.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-semibold text-3xl text-gray-900 mb-8">
            Ready to start building?
          </h2>
          <button
            onClick={() => {
              navigate("/docs");
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Integrate for free
          </button>
        </div>
      </div>
    </div>
  );
}