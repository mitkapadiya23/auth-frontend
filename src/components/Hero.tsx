import React from "react";

const Hero: React.FC = () => {
  return (
    <div>
      <section
        className="relative w-full px-10 md:h-[500px] h-auto bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/hero.gif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 container mx-auto py-24 text-white grid grid-cols-1 gap-6 text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Facilisi. Integer ut lacus eget nunc interdum efficitur.
          </h1>
          <p className="text-lg leading-relaxed text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore
            <br />
            magna aliqua
          </p>
          <button className="mt-4 inline-block w-fit px-6 py-3 bg-pink-600 text-white text-md font-semibold rounded-full shadow-md transition hover:bg-pink-700">
            Start Curating
          </button>
        </div>
      </section>

      <section
        className="relative w-full bg-no-repeat bg-cover bg-center bg-white"
        style={{ backgroundImage: "url('/assets/images/doted_bg_img.png')" }}
      >
        <div className="relative z-10 container mx-auto px-4 py-10 text-center">
          <h1
            className="text-5xl font-black text-pink-600"
            style={{ fontFamily: "NotoSans-ExtraBold" }}
          >
            Lorem ipsum dolor sit amet
          </h1>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] text-center p-8 min-h-[250px] flex flex-col justify-center items-center">
              <img
                src="/assets/images/Features_Icon2.png"
                alt="Feature2"
                className="w-20 h-20 mb-4"
              />
              <p
                className="font-semibold text-black text-lg"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Lorem <span className="font-black">ipsum</span>
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] text-center p-8 min-h-[250px] flex flex-col justify-center items-center">
              <img
                src="/assets/images/Features_Icon1.png"
                alt="Feature1"
                className="w-20 h-20 mb-4"
              />
              <p
                className="font-semibold text-black text-lg"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Lorem <span className="font-black">ipsum</span>
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] text-center p-8 min-h-[250px] flex flex-col justify-center items-center">
              <img
                src="/assets/images/Features_Icon3.png"
                alt="Feature3"
                className="w-20 h-20 mb-4"
              />
              <p
                className="font-semibold text-black text-lg"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Lorem <span className="font-black">ipsum</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-white px-4 md:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-between">
            <h1
              className="text-5xl font-black leading-tight text-left"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Lorem ipsum <br />
              <span className="text-pink-600">dolor</span>
            </h1>
            <button className="mt-6 w-fit h-fit px-8 py-4 bg-pink-600 text-white font-black rounded-full shadow-md hover:bg-pink-700 transition text-lg">
              sit amet
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-pink-100 p-8 rounded-xl shadow-md text-left">
                <h2
                  className="text-pink-600 text-4xl font-black mb-4"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  01
                </h2>
                <p className="text-xl font-semibold">Sit Amet</p>
              </div>
              <div className="bg-pink-100 p-8 rounded-xl shadow-md text-left">
                <h2
                  className="text-pink-600 text-4xl font-black mb-4"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  02
                </h2>
                <p className="text-xl font-semibold">
                  <span className="font-black text-pink-600">Lorem</span> Ipsum
                  Dolor Sit Amet
                </p>
              </div>
            </div>
            <div className="bg-pink-100 p-8 rounded-xl shadow-md text-left">
              <h2
                className="text-pink-600 text-4xl font-black mb-4"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                03
              </h2>
              <p className="text-xl font-semibold">
                Consectetur{" "}
                <span className="font-black text-pink-600">Adipiscing</span>{" "}
                Elit, Ut Labore Et Dolore
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-gray-300 shadow-md"></div>
    </div>
  );
};

export default Hero;
