"use client";

import { useState } from 'react';
import Image from "next/image";
import Navbar from "./component/Navbar/Navbar";
import { startConfetti } from './component/confetti/confetti';

export default function Home() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [percentage, setPercentage] = useState(null);
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = () => {
    const randomPercentage = Math.floor(Math.random() * 61) + 40; // generates a random number between 40 and 100
    setPercentage(randomPercentage);
    startConfetti(); // Panggil fungsi startConfetti ketika tombol "Hitung" diklik
    setCalculated(true);
  };

  const handleReset = () => {
    setName1("");
    setName2("");
    setPercentage(null);
    setCalculated(false);
  };

  return (
    <div className="bg-red-250 flex-grow">
      <Navbar />
      <div className="flex justify-center items-center pt-10">
        <div className="card bg-base-100 w-96 h-auto shadow-xl border-white border-">
          <figure className="px-10 pt-10">
            <img
              src="gambar.jpeg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Berapa Persen Cintamu ?</h2>
            <p>Masukkan Namamu dan Nama Pasanganmu</p>
            {!calculated ? (
              <div className='flex flex-row gap-2 items-center'>
                <div className="mb-4 text-sm">
                  <input
                    type="text"
                    placeholder="Namamu"
                    className="input input-bordered w-40"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                  />
                </div>
                <div>🩷</div>
                <div className="mb-4 text-sm">
                  <input
                    type="text"
                    placeholder="Nama Pasangan"
                    className="input input-bordered w-40"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <div className="mt-4 gap-4 mb-2 flex flex-col">
                <p className='text-2xl font-bold'>{name1} 🩷 {name2} </p>
                <p className='text-7xl font-bold'>{percentage}%</p>
              </div>
            )}
            <div className="card-actions">
              {!calculated ? (
                <button className="btn btn-primary text-white px-24" onClick={handleCalculate}>Hitung</button>
              ) : (
                <button className="btn btn-secondary text-white px-24" onClick={handleReset}>Cek Lagi</button>
              )}
            </div>
          </div>
        </div>
      <p className='fixed bottom-0 p-4'>Copyright © 2024 - All right reserved by Raka COR</p>
      </div>
    </div>
  );
}
