import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useModal } from "./ModalContext ";
import contentApi from "../api/contentApi";
import { useTranslation } from "react-i18next";

const DonationModal = () => {
  const { t } = useTranslation(); // Inicializa el hook
  const contenTAccount = contentApi();
  const [accountBank, setAccountBank] = useState([]);

  const { isOpenModal, closeModal } = useModal();

  useEffect(() => {
    const fetchAccountBank = async () => {
      try {
        const response = await contenTAccount.get("/accountBank/");
        setAccountBank(response.data);
        console.log("estos son los datos de la noticia", response);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchAccountBank();
  }, [contenTAccount]);

  const handleOpenPopup = () => {
    const url =
      "https://www.paypal.com/donate?token=YUQ3rS5O8JGkikVfGDCoRywqIXdPvWLie_e8d1uWLZ-EjEkKkAOfRFOp9RI_Huh1CMaa6Xb_JsUWvn-d";
    const windowFeatures = "width=800,height=600,scrollbars=yes,resizable=yes";
    window.open(url, "Futuro Cierto RD", windowFeatures);
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      appElement={document.getElementById("root")}
      contentLabel="Example Modal"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] bg-white rounded-lg shadow-lg p-4 max-w-4xl w-full h-auto max-h-[90vh] overflow-y-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-[9998]" // Fondo oscuro semi-transparente
      ariaHideApp={false}
    >
      <h6 className="flex items-center justify-center bg-green-600 w-[100%] h-20 text-3xl font-bold">
        {t("makeDonation")}
      </h6>
      <div className="pop-inner flex flex-col">
        <table className="table my-19">
          <thead>
            <tr>
              <th className="w-[30%] text-center" scope="col">
                {t("bank")}
              </th>
              <th className="w-[30%] text-center" scope="col">
                {t("currency")}
              </th>
              <th className="w-[30%] text-center" scope="col">
                {t("account")}
              </th>
            </tr>
          </thead>
          {accountBank.map((account, i) => (
            <tr className="border-b" key={i}>
              <td className="py-4 text-center text-gray-500 font-bold">
                {account.Bank}
              </td>
              <td className="text-center text-gray-500 font-bold">
                {account.currency_name}
              </td>
              <td className="text-center text-gray-500 font-bold">
                {account.Account}
              </td>
            </tr>
          ))}
        </table>
        <button
          id="paypal-button"
          onClick={handleOpenPopup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[250px] mx-auto mb-12 h-[40px] text-2xl"
        >
          {t("donateWithPayPal")}
        </button>
        <button
          onClick={closeModal}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[250px] mx-auto mb-12 h-[40px] text-2xl"
          type="button"
        >
          {t("close")}
        </button>
      </div>
    </Modal>
  );
};

export default DonationModal;
