import React from "react";
import UI1 from "../assets/UI1.svg";
import UI2 from "../assets/UI2.svg";
import Arrow from "../assets/arrow.svg";
import IP14 from "../assets/IP14.svg";

const Product = () => {
  return (
    <div className="mx-5 min-h-screen md:mx-[93px]">
      <main>
        <h1 className="mb-10 text-center text-3xl font-semibold text-white">
          Our Products
        </h1>
        <section className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="flex flex-col items-center justify-between gap-10">
            <div className="flex items-end gap-6 rounded-3xl bg-white px-10 py-12 text-zinc-800">
              <img src={UI1} alt="" />
              <div className="max-w-56">
                <h3 className="mb-2 text-2xl font-medium capitalize ">
                  Mobile Apps
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div>
                <img src={Arrow} />
              </div>
            </div>
            <div className="flex items-end gap-6 rounded-3xl border border-white px-5 py-12">
              <img src={UI2} alt="" />
              <div className="max-w-56">
                <h3 className="mb-2 text-2xl font-medium capitalize">
                  Website
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div>
                <img src={Arrow} />
              </div>
            </div>
          </div>
          <div className="flex max-w-[48rem] flex-col items-center justify-center gap-5 rounded-3xl bg-white px-10 py-12 text-zinc-800">
            <div className="flex">
              <img src={IP14} alt="ip14" className="h-28 w-14" />
              <img src={IP14} alt="ip14" className="h-28 w-14" />
              <img src={IP14} alt="ip14" className="h-28 w-14" />
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-2xl font-medium capitalize">
                Mobile Apps
              </h3>
              <p className="">
                Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan
                fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli,
                Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan
                fitur GPS.
              </p>
            </div>
            <div className="cursor-pointer gap-2.5 rounded-lg bg-teal-500 px-6 py-2.5 font-medium text-white shadow">
              Pelajari Selengkapnya
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-6 mt-[100px] text-2xl font-semibold">Testimony</h3>
          <div className="flex flex-col justify-between gap-5 lg:flex-row">
            <div className="rounded-md bg-white px-5 py-4">
              <div className="mb-4 text-sm font-medium text-zinc-800">
                Buat aplikasi sama tim ini emang luar biasa dicarikan solusi
                yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2
                minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima
                kasih Nodewave.
              </div>
              <div className="text-sm font-medium text-teal-500">
                Ahmad Prasetyo
              </div>
            </div>
            <div className="rounded-md bg-white px-5 py-4">
              <div className="mb-4 text-sm font-medium text-zinc-800">
                Awalnya bingung mau buat website pada mahal. Hubungi tim
                Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan
                suami tinggal cerita aja lewat zoom maunya buat website seperti
                apa, langsung dibuatin dengan cepat sama Nodewave.
              </div>
              <div className="text-sm font-medium text-teal-500">
                Laras Ratnadewi
              </div>
            </div>
            <div className="rounded-md bg-white px-5 py-4">
              <div className="mb-4 text-sm font-medium text-zinc-800">
                Yang paling keren sih source codenya sekalian dikasih, pas pula
                bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi
                fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!
              </div>
              <div className="text-sm font-medium text-teal-500">
                Yusuf Uwais
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Product;
