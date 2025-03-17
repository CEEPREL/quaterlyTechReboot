import { toastContext } from "./toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider({ children }) {
  const showToast = (message, type = "success") => {
    toast(message, { type });
  };

  return (
    <toastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar />
    </toastContext.Provider>
  );
}
