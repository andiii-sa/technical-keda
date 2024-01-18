import "./assets/style/main.css";
import {
  Bubble1,
  Bubble2,
  IllustratorBusiness,
  IllustratorContact,
  IllustratorMetrics,
} from "./assets/icon/iconSVG";
import { useState } from "react";

function App() {
  const pricing = [
    {
      tier: "Basic",
      caption_tier: "Best for newbie",
      price: 2,
      features: [
        "Mencatat barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuntungan",
      ],
    },
    {
      tier: "Business",
      caption_tier: "Best for business management",
      price: 4,
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
      ],
    },
    {
      tier: "Entrepreneur",
      caption_tier: "Business for large teams",
      price: 8,
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
        "Export data ke Excel",
        "AI Prediksi penghasilan",
      ],
    },
  ];
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="min-h-screen mb-20">
      <ModalLogin
        isOpen={openModal}
        onClose={() => setOpenModal((prev) => !prev)}
      />
      <Bubble1 className="absolute -z-[1]" />
      <nav className="flex gap-2 justify-between items-center py-5 px-12">
        <div className="flex gap-2 items-center">
          <i className="bx bxl-xing text-white text-5xl"></i>
          <span className="text-2xl font-bold text-white">Home</span>
        </div>
        <div className="gap-8 items-center hidden sm:flex">
          <span className="text-2xl font-bold text-black">About</span>
          <span className="text-2xl font-bold text-black">Pricing</span>
          <span className="text-2xl font-bold text-black">Contact</span>
          <button
            className="px-10 py-2 border border-blue-1 text-blue-1 rounded-lg hover:bg-blue-1 hover:text-white font-medium"
            onClick={() => setOpenModal((prev) => !prev)}
          >
            Login
          </button>
        </div>
        <i className="bx bx-menu block sm:hidden text-black text-xl"></i>
      </nav>

      <section className="flex justify-center sm:justify-end mt-14">
        <span className="mr-0 sm:mr-40 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          non quos rem ullam, expedita ipsam sit! Debitis corporis quisquam
        </span>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 mt-14">
        <div className="flex flex-col justify-center gap-20 ml-12">
          <span>
            <i>" Exceptur sint occaceat cupidatat non proident "</i>
          </span>
          <IllustratorMetrics className="w-64 h-auto" />
        </div>
        <Bubble2 className="ml-auto hidden md:block" />
      </section>

      <section className="about grid grid-cols-1 sm:grid-cols-2 gap-2 px-12 mt-14">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-semibold">Software ERP KeDA</h1>
          <h2 className="text-3xl font-bold">
            Software ERP untuk operasional bisnis lebih efisien
          </h2>
          <p>
            Aplikasi & software ERP dari KeDA dirancang untuk meningkatkan
            efisiensi operasional perusahaan melalui solusi otomasi bisnis yang
            aman dan terintegrasi.
          </p>
        </div>
        <IllustratorBusiness className="w-[80%] h-auto justify-self-center" />
      </section>

      <section className="pricing px-12 mt-14">
        <div className="flex justify-center flex-col gap-3">
          <h2 className="text-center text-3xl font-bold">
            Temukan solusi akuntansi online yang tepat <br /> untuk bisnis Anda
          </h2>
          <p className="text-center">Pelatihan gratis, tanpa biaya tambahan</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
          {pricing?.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col p-3 border-2 rounded-lg hover:scale-110 bg-white transition-all"
            >
              <h4
                className={`text-2xl font-bold ${
                  item.tier === "Business"
                    ? "text-[#F913E3]"
                    : item.tier === "Entrepreneur"
                    ? "text-[#7612F9]"
                    : "text-[#1E7CFE]"
                }`}
              >
                {item.tier}
              </h4>
              <span className="text-md font-medium mt-0.5 text-slate-500">
                {item.caption_tier}
              </span>
              <div
                className={`flex font-bold mt-3 ${
                  item.tier === "Business"
                    ? "text-[#F913E3]"
                    : item.tier === "Entrepreneur"
                    ? "text-[#7612F9]"
                    : "text-[#1E7CFE]"
                } `}
              >
                <span className="text-2xl">$</span>
                <span className="text-7xl">{item.price}</span>
              </div>
              <button
                className={`px-4 py-3 rounded-md text-white font-bold mt-3 border border-gray-400 ${
                  item.tier === "Business"
                    ? "bg-[#F913E3]"
                    : item.tier === "Entrepreneur"
                    ? "bg-[#7612F9]"
                    : "bg-[#1E7CFE]"
                }`}
              >
                Get started
              </button>
              <span className="text-center text-gray-500 mt-0.5">
                billed per month
              </span>
              <span className="font-bold text-lg mt-3">Key Features:</span>
              {item?.features?.map((feature, idy) => (
                <div key={idy} className="flex gap-2 items-center mt-1">
                  <i className="bx bx-check text-green-700 font-medium text-lg"></i>
                  <span className="text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="contact px-12 mt-14">
        <div className="grid grid-cols-3 gap-2 rounded-lg bg-blue-100 p-10">
          <div className="flex flex-col gap-3 col-span-3 sm:col-span-2 self-center">
            <h3 className="text-2xl font-semibold text-blue-3">
              Kembangkan bisnis Anda dengan KeDA sekarang
            </h3>
            <p>
              Selesaikan lebih banyak tanpa mengkompromikan akurasi dan <br />
              kecepatan dengan berbagai solusi dari Mekari yang telah digunakan{" "}
              <br />
              oleh ribuan bisnis
            </p>
            <button className="w-fit px-4 py-2 bg-blue-3 text-white font-semibold rounded-md flex gap-2 items-center mt-4">
              <i className="bx bxl-whatsapp text-lg font-bold" />
              <span>Whatsapp</span>
            </button>
          </div>
          <IllustratorContact className="w-[450px] h-auto rounded-full justify-self-center hidden sm:block" />
        </div>
      </section>
    </main>
  );
}

export default App;

const ModalLogin = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <div
      className={`fixed bg-gray-500 min-h-screen w-screen bg-opacity-60 bg-scroll ${
        !isOpen ? "!hidden" : ""
      }`}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg min-w-[500px] p-5">
          <div className="flex justify-end">
            <i
              className="bx bx-x text-xl cursor-pointer font-bold"
              onClick={onClose}
            ></i>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold">Login</h2>
            <p>login untuk mengakses semua fitur</p>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="" className="text-sm text-slate-800">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="rounded-lg w-full px-4 py-2 border-gray-500 border"
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="" className="text-sm text-slate-800">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="rounded-lg w-full px-4 py-2 border-gray-500 border"
            />
          </div>
          <button
            className="bg-blue-3 text-white px-3 py-2 rounded-lg font-semibold w-full mt-5"
            onClick={onClose}
          >
            Sign In
          </button>
          <div className="flex justify-center mt-4">
            <p className="text-gray-400" onClick={onClose}>
              Not have account?{" "}
              <span className="text-blue-500 underline">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
