/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BsCaretRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";
import { useState } from "react";
import CodePart from "../components/DocsCodePart";

const javaScriptCode = `const emailservice = require('emailsevice');
async function sendEmail(){
  const response = await emailservice({toEmail:"afridayan01@gmail.com",title:"this is my title",subject:"this is my subject",body:"this is my body"})
  // you can pass fromEmail and passkey also if you want
  console.log(response);
}
sendEmail();
`;

const pythonCode = `
from emailotp import emailotp
emailotp = emailotp()
#you can pass fromemail,passkey,title,subject,body also if you want
responseFromEmailOtp = emailotp.send("toemail@gmail.com")
print(responseFromEmailOtp["message"])
`;

const dartCode = `import 'package:email_sender/email_sender.dart';
void main() async{
  EmailSender emailsender = EmailSender();
  //Enter your email in send method, you can pass many parameters like fromemail,passkey,
  title,subject,body
  var response = await emailsender.send("toemail@gmail.com");
  print(response["message"]);
}
`;

const javaCode = `//for java you need to copy emailservice package from github
package org.emailservice;

public class main {
  public static void main(String[] args) {
    emailservice emailSender = new emailservice("afridayan01@gmail.com", "title", "subject", "hello world!");
    var response = emailSender.sendEmail();
    //System.out.println(response.get("message"));
    System.out.println(response);
  }
}
`;

const languageOptions = [
  {
    name: "Dart",
    id: 0,
    install1: "pub add email_sender",
    gif: "dart.png",
    code: dartCode,
  },
  {
    name: "Java",
    id: 1,
    install1: "github.com/afriddev/email_service",
    gif: "java.gif",
    code: javaCode,
  },

  {
    name: "JavaScript",
    id: 2,
    install1: "npm i @afriddev/emailservice",
    gif: "js.gif",
    code: javaScriptCode,
  },
  {
    name: "Python",
    id: 3,
    install1: "pip install emailotp",
    gif: "python.gif",
    code: pythonCode,
  },
];

export default function Docs() {
  const [code, setCode] = useState(dartCode);
  const [selectedCodeId, setSelectedCodeId] = useState(0);

  function handleLanguageChange(languageId: any) {
    const selectedLanguage = languageOptions.find(
      (lang) => lang.id === languageId
    );
    if (selectedLanguage) {
      setCode(selectedLanguage.code);
      setSelectedCodeId(languageId);
      const elm = document.querySelector("#dependencies");
      elm?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="bg-gray-100 py-12 px-4 w-full flex items-center justify-center">
      <div className="container ">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4 lg:text-4xl">
            Welcome to the Email Sender Docs
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            The Email Sender platform empowers developers to build features that
            connect to every email provider. Enjoy seamless integration,
            pre-built security and compliance, and a 99.99% guaranteed uptime.
            Our platform is secure, reliable, and easy to use and maintain.
          </p>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 px-3 text-white font-semibold py-3  rounded-md flex items-center transition duration-300 ease-in-out"
            onClick={() => {
              const elm = document.querySelector("#dependencies");
              elm?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Quick Start
            <BsCaretRight className="text-xl ml-2" />
          </button>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 lg:text-3xl">
            Developer Tools
          </h2>
          <div className="flex flex-wrap flex-grow gap-8">
            {languageOptions.map((lang) => (
              <div
                key={lang.id}
                className={`flex flex-col items-center cursor-pointer transition duration-200 ease-in-out ${
                  selectedCodeId === lang.id
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
                onClick={() => handleLanguageChange(lang.id)}
              >
                <img
                  src={lang.gif}
                  alt={lang.name}
                  className="w-12 h-12 object-contain mb-2"
                />
                <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                  {lang.name}
                  <AiOutlineArrowRight className="text-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="dependencies" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 lg:text-3xl">
            Setup
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Create a new file and install the required dependencies to start
            using our Email API.
            <br />
            If you want to use a custom email for your app, create a new{" "}
            <span
              className="text-indigo-600 font-medium text-lg border-b border-indigo-600 cursor-pointer"
              onClick={() => {
                window.open(
                  "https://support.google.com/accounts/answer/185833?hl=en",
                  "_blank"
                );
              }}
            >
              app password
            </span>
            .
          </p>

          <div className="mb-8 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 lg:text-2xl">
              Installing Dependencies
            </h3>
            {languageOptions.map(
              (lang) =>
                selectedCodeId === lang.id && (
                  <CodePart key={lang.id} codeObj={lang} />
                )
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 lg:text-2xl">
              Example Code (
              {languageOptions.find((lang) => lang.id === selectedCodeId)?.name}
              )
            </h3>
            <div>
              <Editor
                value={code}
                onValueChange={setCode}
                highlight={(code) => highlight(code, languages.js, "js")}
                padding={20}
                className="border border-gray-200  bg-white text-gray-800 font-mono text-xl shadow-sm"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 15,
                  lineHeight: "1.6",
                  minHeight: "150px",
                  caretColor: "#2563eb",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
