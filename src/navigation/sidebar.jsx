import React, { useState } from "react";
import { IoIosArrowForward, IoIosAdd, IoMdCreate, IoMdTrash } from "react-icons/io";

const SideBar = () => {
  const [jabatan, setJabatan] = useState({
    Sekretariat: [],
    "Bidang Perencanaan Teknik": [],
    "Bidang Bina Konstruksi": [],
    "Bidang Bina Operasi dan Pemeliharaan": [],
    "Bidang Bina Manfaat": [],
    "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Ciliwung": [],
    "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Cisadea-Cibareno": [],
    "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Citarum": [],
    "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Cimanuk-Cisanggarung": [],
    "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Citanduy": [],
    "UPTD Pengelolaan Sumber Daya Air Wilayah Sungai Ciwulan-Cilaki": [],
  });

  const [menuVisible, setMenuVisible] = useState(null);
  const [menuParent, setMenuParent] = useState(null);
  const [editTarget, setEditTarget] = useState(null); // State untuk menyimpan elemen yang sedang diedit
  const [editName, setEditName] = useState("");

  const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

  const toggleMenu = (key, parentKey = null) => {
    if (menuVisible === key && menuParent === parentKey) {
      setMenuVisible(null);
      setMenuParent(null);
    } else {
      setMenuVisible(key);
      setMenuParent(parentKey);
    }
  };

  const handleAddSubJabatan = (key, parentKey = null) => {
    const subJabatanBaru = prompt(`Masukkan sub-jabatan untuk ${key}`);
    if (subJabatanBaru) {
      setJabatan((prevState) => {
        const updateJabatan = (items) => {
          return items.map((item) => {
            if (item.id === key || item.name === key) {
              return {
                ...item,
                subJabatan: [
                  ...(item.subJabatan || []),
                  { id: generateUniqueId(), name: subJabatanBaru, subJabatan: [] },
                ],
              };
            } else if (item.subJabatan) {
              return {
                ...item,
                subJabatan: updateJabatan(item.subJabatan),
              };
            }
            return item;
          });
        };

        if (parentKey) {
          return {
            ...prevState,
            [parentKey]: updateJabatan(prevState[parentKey]),
          };
        } else {
          return {
            ...prevState,
            [key]: [
              ...prevState[key],
              { id: generateUniqueId(), name: subJabatanBaru, subJabatan: [] },
            ],
          };
        }
      });
    }
    setMenuVisible(null); // Menutup menu setelah penambahan
    setMenuParent(null);
  };

  const handleEditName = (key, parentKey = null) => {
    const newName = prompt(`Masukkan nama baru untuk ${key}`);
    if (newName) {
      setJabatan((prevState) => {
        const updateJabatan = (items) => {
          return items.map((item) => {
            if (item.id === key || item.name === key) {
              return {
                ...item,
                name: newName,
                subJabatan: item.subJabatan ? updateJabatan(item.subJabatan) : [],
              };
            } else if (item.subJabatan) {
              return {
                ...item,
                subJabatan: updateJabatan(item.subJabatan),
              };
            }
            return item;
          });
        };

        const updatedState = { ...prevState };
        if (parentKey) {
          return {
            ...prevState,
            [parentKey]: updateJabatan(prevState[parentKey]),
          };
        } else {
          const newState = {};
          Object.keys(prevState).forEach((key) => {
            if (key !== newName) {
              newState[key] = updateJabatan(prevState[key]);
            } else {
              newState[newName] = updateJabatan(prevState[key]);
            }
          });
          return newState;
        }
      });
    }
    setEditTarget(null); // Menutup menu setelah pengeditan
  };

  const handleDelete = (key, parentKey = null) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus jabatan ${key}?`)) {
      setJabatan((prevState) => {
        const updateJabatan = (items) => {
          return items.filter((item) => item.id !== key && item.name !== key);
        };

        if (parentKey) {
          return {
            ...prevState,
            [parentKey]: updateJabatan(prevState[parentKey]),
          };
        } else {
          const updatedState = { ...prevState };
          delete updatedState[key];
          return updatedState;
        }
      });
    }
    setMenuVisible(null); // Menutup menu setelah penghapusan
    setMenuParent(null);
  };

  const renderSubJabatan = (subJabatans, parentKey) => {
    return subJabatans.map((sub) => (
      <div key={sub.id} className="ml-4">
        <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100 relative">
          <p className="w-3/4">{sub.name}</p>
          <IoIosArrowForward />
          <button
            className="text-green-500"
            onClick={() => toggleMenu(sub.id, parentKey)}
          >
            <IoIosAdd />
          </button>
          {menuVisible === sub.id && menuParent === parentKey && (
            <div className="absolute right-0 mt-8 bg-white border border-gray-300 shadow-lg z-10">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                onClick={() => handleAddSubJabatan(sub.id, parentKey)}
              >
                Tambah Sub-Jabatan
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                onClick={() => handleEditName(sub.id, parentKey)}
              >
                Edit Nama
              </button>
              <button
                className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-200"
                onClick={() => handleDelete(sub.id, parentKey)}
              >
                Hapus Jabatan
              </button>
            </div>
          )}
        </div>
        {sub.subJabatan && renderSubJabatan(sub.subJabatan, sub.id)}
      </div>
    ));
  };

  return (
    <div
      className={`relative top-0 bg-[#add8e6] min-h-screen w-60 p-2 flex flex-col overflow-y-auto`}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col p-3 gap-4">
          {Object.keys(jabatan).map((key) => (
            <div key={key} className="flex flex-col">
              <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-100 relative">
                <p className="w-3/4">{key}</p>
                <IoIosArrowForward />
                <button
                  className="text-grey-500"
                  onClick={() => toggleMenu(key)}
                >
                  <IoIosAdd />
                </button>
                {menuVisible === key && menuParent === null && (
                  <div className="absolute right-0 mt-8 bg-white border border-gray-300 shadow-lg z-10">
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      onClick={() => handleAddSubJabatan(key)}
                    >
                      Tambah Sub-Jabatan
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      onClick={() => handleEditName(key)}
                    >
                      Edit Nama
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-200"
                      onClick={() => handleDelete(key)}
                    >
                      Hapus Jabatan
                    </button>
                  </div>
                )}
              </div>
              {renderSubJabatan(jabatan[key], key)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
