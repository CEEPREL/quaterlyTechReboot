import { db } from "../Firebase/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useCallback } from "react";
import { useToastContext } from "../context/toast";

export default function useRegister() {
  const { showToast } = useToastContext();

  const handleRegistration = useCallback(
    async (userData) => {
      try {
        const usersRef = collection(db, "users");

        const q = query(usersRef, where("email", "==", userData.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          showToast("User already registered with this email!", "error");
          return { success: false };
        }

        const docRef = await addDoc(usersRef, userData);
        showToast("User registered successfully!", "success");

        return { success: true, id: docRef.id };
      } catch (error) {
        showToast("Error registering user: " + error.message, "error");
        return { success: false };
      }
    },
    [showToast]
  );

  return handleRegistration;
}
