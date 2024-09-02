import React, { useState } from "react";
import TugasPokok from "./form-content/tugasPokok";
import DataJabatan from "./form-content/dataJabatan";
import HasilKerja from "./form-content/hasilKerja";
import BahanKerja from "./form-content/bahanKerja";
import PerangkatKerja from "./form-content/perangkatKerja";
import TanggungJawab from "./form-content/tanggungJawab";
import Wewenang from "./form-content/wewenang";
import KorelasiJabatan from "./form-content/korelasiJabatan";
import ResikoBahaya from "./form-content/resikoBahaya";
import HasilKerjaAdds from "./form-content/adds-on/hasilKerjaAdd";
import BahanKerjaAdds from "./form-content/adds-on/bahanKerjaAdd";
import PerangkatKerjaAdds from "./form-content/adds-on/perangkatKerjaAdd";
import TanggungJawabAdds from "./form-content/adds-on/tanggungJawabAdd";
import WewenangAdds from "./form-content/adds-on/wewenangAdd";
import KorelasiJabatanAdds from "./form-content/adds-on/korelasiJabatanAdd";
import ResikoBahayaAdds from "./form-content/adds-on/resikoBahayaAdd";
import Prestasi from "./form-content/prestasi";
import Kelas from "./form-content/kelas";
import SyaratJabatan from "./form-content/syaratJabatan";



const Content = () => {
  const [activeForm, setActiveForm] = useState("DJ");
  const [hasilKerjaData, setHasilKerjaData] = useState([]);
  const [bahanKerjaData, setBahanKerjaData] = useState([]);
  const [perangkatKerjaData, setPerangkatKerjaData] = useState([]);
  const [tanggungJawabData, setTanggungJawabData] = useState([]);
  const [wewenangData, setWewenangData] = useState([]);
  const [korelasiJabatanData, setKorelasiJabatanData] = useState([]);
  const [resikoBahayaData, setResikoBahayaData] = useState([]);
  const [dataJabatan, setDataJabatan] = useState([]);

    

  const handleFormChange = (form) => {
    setActiveForm(form);
  };

  const handleTambahHasilKerja = (data) => {
    setHasilKerjaData((prevData) => [...prevData, data]);
  };

  const handleDataJabatan = (data) => {
    setDataJabatan((prevData) => [...prevData, data]);
  }

  const handleTambahBahanKerja = (data) => {
    setBahanKerjaData((prevData) => [...prevData, data]);
    }
  
  const handleTambahPerangkatKerja = (data) => {
    setPerangkatKerjaData((prevData) => [...prevData, data]);
    }
  
  const handleTambahTanggungJawab = (data) => {
    setTanggungJawabData((prevData) => [...prevData, data]);
    }

  const handleTambahWewenang = (data) => {
    setWewenangData((prevData) => [...prevData, data]);
    }

  const handleTambahKorelasiJabatan = (data) => {
    setKorelasiJabatanData((prevData) => [...prevData, data]);
    }

  const handleTambahResikoBahaya = (data) => {
    setResikoBahayaData((prevData) => [...prevData, data]);
    }


  const FormComponents = {
    DJ: <DataJabatan onSubmit={(data) => handleDataJabatan(data)} />,
    TP: <TugasPokok />,
    HK: <HasilKerja onTambah={(data) => handleTambahHasilKerja(data)} />,
    BK: <BahanKerja onTambah={(data) => handleTambahBahanKerja(data)}/>,
    PK: <PerangkatKerja onTambah={(data) => handleTambahPerangkatKerja(data)}/>,
    TJ: <TanggungJawab onTambah={(data) => handleTambahTanggungJawab(data)}/>,
    W: <Wewenang onTambah={(data) => handleTambahWewenang(data)}/>,
    KJ:<KorelasiJabatan onTambah={(data) => handleTambahKorelasiJabatan(data)}/>,
    RB: <ResikoBahaya onTambah={(data) => handleTambahResikoBahaya(data)}/>,
    SJ: <SyaratJabatan />,
    P: <Prestasi />,
    Kelas: <Kelas />,
  };

  const AddsOnComponent = {
    HK: <HasilKerjaAdds data={hasilKerjaData} />,
    BK: <BahanKerjaAdds data={bahanKerjaData} />,
    PK: <PerangkatKerjaAdds data={perangkatKerjaData} />,
    TJ: <TanggungJawabAdds data={tanggungJawabData} />,
    W: <WewenangAdds data={wewenangData} />,
    KJ: <KorelasiJabatanAdds data={korelasiJabatanData} />,
    RB: <ResikoBahayaAdds data={resikoBahayaData} />,
    SJ: null,
    P: null,
    Kelas: null,
  };

  return (
    <div className="flex flex-col mt-4 gap-4">
      <p className="text-5xl">SIAJAK</p>
      <div className="border-b-2"></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap flex-row gap-2 text-white font-medium">
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("DJ")}
          >
            Data Jabatan
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("TP")}
          >
            Tugas Pokok
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("HK")}
          >
            Hasil Kerja
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("BK")}
          >
            Bahan Kerja
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("PK")}
          >
            Perangkat Kerja
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("TJ")}
          >
            Tanggung Jawab
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("W")}
          >
            Wewenang
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("KJ")}
          >
            Korelasi Jabatan
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("RB")}
          >
            Resiko Bahaya
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("SJ")}
          >
            Syarat Jabatan
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("P")}
          >
            Prestasi yang Diharapkan
          </button>
          <button
            className="bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => handleFormChange("Kelas")}
          >
            Kelas Jabatan
          </button>
          <button className="bg-blue-400 px-4 py-2 rounded-lg">Cetak</button>
        </div>
        <div className="border-b-2"></div>
        <div className="border-2 shadow-2xl">
          <div className="flex flex-col gap-3">
            {FormComponents[activeForm]}
          </div>
        </div>
        {activeForm && activeForm !== "DJ" && activeForm !== "TP" && (
          <div className="border-2 shadow-2xl">
            <div className="flex flex-col gap-3">
              {AddsOnComponent[activeForm]}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
