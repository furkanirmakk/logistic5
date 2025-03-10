import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import MailTel from "../components/MailTel";

const Contact: React.FC = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="bg-white w-full min-h-screen py-32 ">
        <div className="container mx-auto px-4 pt-2 flex flex-col md:flex-row justify-center items-center">
          {/* Sol Kısım: İletişim Bilgileri */}
          <div className="cursor-pointer group overflow-hidden p-1 duration-1000 hover:duration-1000 relative w-full md:w-1/2 h-[500px] bg-gradient-to-r from-gray-900 via-gray-600 to-[#D89A45] rounded-xl">
            <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
            <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
            <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
            <div className="group-hover:-top-44 bg-transparent top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
            <div className="group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
            <div className="group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
            <div className="group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
            <div className="w-full h-full shadow-xl shadow-neutral-600 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap-2 flex justify-center">
              <div className="text-center mb-8">
                <span className="text-neutral-50 text-center font-bold text-xl italic">
                  İletişim
                </span>
                <p className="text-neutral-300 text-center">
                  Bize aşağıdaki bilgiler üzerinden ulaşabilirsiniz.
                </p>
              </div>

              <div className="text-center mb-8">
                <ul className="space-y-6 text-lg md:text-xl text-neutral-300 opacity-90">
                  <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
                    <i className="fas fa-envelope text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-neutral-50 transition-all duration-300"></i>
                    <span className="text-sm sm:text-xl md:text-2xl">
                      hoopreis@gmail.com
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
                    <i className="fas fa-phone-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-neutral-50 transition-all duration-300"></i>
                    <span className="text-sm sm:text-xl md:text-2xl">
                      +90 555 555 55 55
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
                    <i className="fas fa-map-marker-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-neutral-50 transition-all duration-300"></i>
                    <span className="text-sm sm:text-xl md:text-2xl">
                      beylikdüzü erkin konutları
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sağ Kısım: Harita */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
            <div className="w-10/12 h-[500px] bg-gradient-to-r from-gray-600 via-gray-400 to-[#D89A45] rounded-xl shadow-lg p-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560.148005158312!2d34.509217163599516!3d38.54999327191223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a0a75430b14c1%3A0xe439e41edb656fab!2zQWPEsWfDtmwgT3NiIE3DvGTDvHJsw7zEn8O8!5e0!3m2!1str!2str!4v1732579390172!5m2!1str!2str"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps"
                className="rounded-xl shadow-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full min-h-screen py-32 ">
        <div className="container mx-auto px-4 pt-2 flex flex-col md:flex-row justify-center items-center">
          {/* Sol Kısım: İletişim Bilgileri */}
          <div className="cursor-pointer group overflow-hidden p-1 duration-1000 hover:duration-1000 relative w-full md:w-1/2 h-[500px] bg-gradient-to-r from-gray-900 via-gray-600 to-[#D89A45] rounded-xl">
            
            <div className="w-full h-full shadow-xl shadow-neutral-800 p-3 bg-neutral-400 opacity-50 rounded-xl flex-col gap-2 flex justify-center">
              <div className="text-center mb-8">
                <span className="text-gray-800 text-center font-bold text-xl italic">
                  İletişim
                </span>
                <p className="text-gray-800 text-center">
                  Bize aşağıdaki bilgiler üzerinden ulaşabilirsiniz.
                </p>
              </div>

              <div className="text-center mb-8">
                <ul className="space-y-6 text-lg md:text-xl text-gray-800 opacity-90">
                  <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
                    <i className="fas fa-envelope text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-gray-800 transition-all duration-300"></i>
                    <span className="text-sm sm:text-xl md:text-2xl">
                      hoopreis@gmail.com
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
                    <i className="fas fa-phone-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-gray-800 transition-all duration-300"></i>
                    <span className="text-sm sm:text-xl md:text-2xl">
                      +90 555 555 55 55
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
                    <i className="fas fa-map-marker-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-gray-800 transition-all duration-300"></i>
                    <span className="text-sm sm:text-xl md:text-2xl">
                      beylikdüzü erkin konutları
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sağ Kısım: Harita */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
            <div className="w-10/12 h-[500px] bg-gradient-to-r from-gray-600 via-gray-400 to-[#D89A45] rounded-xl shadow-lg p-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560.148005158312!2d34.509217163599516!3d38.54999327191223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a0a75430b14c1%3A0xe439e41edb656fab!2zQWPEsWfDtmwgT3NiIE3DvGTDvHJsw7zEn8O8!5e0!3m2!1str!2str!4v1732579390172!5m2!1str!2str"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps"
                className="rounded-xl shadow-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
        <div className="col-span-2 text-lg font-bold capitalize rounded-md">
          İletişim
        </div>
        <div className="col-span-2 text-lg font-bold capitalize rounded-md">
          Bize aşağıdaki bilgiler üzerinden ulaşabilirsiniz.
        </div>

        <div className="text-center mb-8">
          <ul className="space-y-6 text-lg md:text-xl text-neutral-300 opacity-90">
            <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
              <i className="fas fa-envelope text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-neutral-50 transition-all duration-300"></i>
              <span className="text-sm sm:text-xl md:text-2xl">
                hoopreis@gmail.com
              </span>
            </li>
            <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
              <i className="fas fa-phone-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-neutral-50 transition-all duration-300"></i>
              <span className="text-sm sm:text-xl md:text-2xl">
                +90 555 555 55 55
              </span>
            </li>
            <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
              <i className="fas fa-map-marker-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-neutral-50 transition-all duration-300"></i>
              <span className="text-sm sm:text-xl md:text-2xl">
                beylikdüzü erkin konutları
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <MailTel />
      </div>
    </div>
  );
};

export default Contact;
