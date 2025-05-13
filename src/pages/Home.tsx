import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";
import { DiDart, DiPython } from "react-icons/di";
import { LiaJava } from "react-icons/lia";
import { TbBrandJavascript } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { LuMailPlus } from "react-icons/lu";

export default function Home() {
  const navigate = useNavigate();
  const javaScriptCode = `const emailservice = require('email_service');
async function sendEmail() {
  const response = await emailservice({
    toEmail: "afridayan01@gmail.com",
    title: "this is my title",
    subject: "this is my subject",
    body: "<p>this is my HTML body</p>"
  });
  console.log(response);
}
sendEmail();`;

  const pythonCode = `from email_service import EmailService
email_service = EmailService()
response = email_service.send("toemail@gmail.com")
print(response["message"])`;

  const dartCode = `import 'package:email_service/email_service.dart';
void main() async {
  EmailService emailService = EmailService();
  var response = await emailService.send("toemail@gmail.com");
  print(response["message"]);
}`;

  const javaCode = `package org.emailservice;
public class Main {
  public static void main(String[] args) {
    EmailService emailService = new EmailService("afridayan01@gmail.com", "title", "subject", "<p>hello world!</p>");
    var response = emailService.sendEmail();
    System.out.println(response);
  }
}`;

  const [code, setCode] = React.useState(dartCode);
  const [activeLang, setActiveLang] = React.useState("dart");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center mb-6 md:flex-row">
            <h1 className="text-4xl md:text-5xl font-bold mr-0 md:mr-4 mb-4 md:mb-0">
              Email Service
            </h1>
            <img
              src="emailFlag.svg"
              alt="Email Flag"
              className="h-16 md:h-20"
            />
          </div>
          <p className="text-xl md:text-2xl mb-6">
            Powering email in your apps with HTML support & more
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => {
                navigate("/docs");
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:brightness-110 active:scale-95 transition duration-300 cursor-pointer"
            >
              <LuMailPlus className="w-5 h-5" />
              Integrate for Free
            </button>
            <a
              href="https://www.buymeacoffee.com/afriddev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                className=" h-[70px] w-full"
              />
            </a>
          </div>
          <p className="mt-4 text-lg">
            <span className="font-bold">
              Top <span className="text-2xl text-gray-300">#2</span> on{" "}
              <span
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://pub.dev/packages/email_sender");
                }}
              >
                pub.dev
              </span>
            </span>{" "}
            | 2,000+ Weekly Downloads
          </p>
          <img
            src="/html_email_preview.png"
            alt="Package Preview"
            className="mt-6 mx-auto w-full md:w-3/4 lg:w-2/4 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Code Editor Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Try Email Service in Your Language
          </h2>
          <div className="flex justify-center mb-4">
            <div className="flex flex-grow flex-wrap gap-2 w-full items-center justify-center  p-1 rounded-lg">
              <button
                onClick={() => {
                  setCode(dartCode);
                  setActiveLang("dart");
                }}
                className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${
                  activeLang === "dart"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <DiDart className="mr-2" /> Dart
              </button>
              <button
                onClick={() => {
                  setCode(pythonCode);
                  setActiveLang("python");
                }}
                className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${
                  activeLang === "python"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <DiPython className="mr-2" /> Python
              </button>
              <button
                onClick={() => {
                  setCode(javaScriptCode);
                  setActiveLang("js");
                }}
                className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${
                  activeLang === "js"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <TbBrandJavascript className="mr-2" /> JavaScript
              </button>
              <button
                onClick={() => {
                  setCode(javaCode);
                  setActiveLang("java");
                }}
                className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${
                  activeLang === "java"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <LiaJava className="mr-2" /> Java
              </button>
            </div>
          </div>
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              highlight(code, languages[activeLang] || languages.js, activeLang)
            }
            padding={20}
            className="w-full max-w-4xl mx-auto border border-gray-200  bg-white text-gray-800 font-mono text-lg shadow-sm"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: "1rem",
              lineHeight: "1.6",
              minHeight: "150px",
              caretColor: "#2563eb",
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Email Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="connectivity.svg"
                alt="Connectivity"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Universal Connectivity
              </h3>
              <p className="text-gray-600">
                Connect your app to user emails with seamless integration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="marketFaster.svg"
                alt="Time to Market"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Fast to Market</h3>
              <p className="text-gray-600">
                Launch features quickly with our CLI and templates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="productivity.svg"
                alt="Reliability"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">99.99% Uptime</h3>
              <p className="text-gray-600">
                Reliable performance with zero maintenance downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">1000+</h3>
            <p className="text-lg md:text-xl">Developers Worldwide</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">3000+</h3>
            <p className="text-lg md:text-xl">API Requests Daily</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">30MB+</h3>
            <p className="text-lg md:text-xl">Processed Daily Data</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Experience Email Service Today
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Dive into tutorials and integrate with your products.
          </p>
          <button
            onClick={() => navigate("/docs")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Start Building
          </button>
        </div>
      </section>
    </div>
  );
}
