import { useState } from "react";
import styles from "../styles/registermodal.module.css";
import { useStoreContext } from "../context/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../ValidationSchema/register";
import useRegister from "../Hooks/useRegister";

export default function RegisterModal() {
  const { state, dispatch } = useStoreContext();
  const handleRegistration = useRegister();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await handleRegistration(data);
    setLoading(false);

    if (response.success) {
      reset();
      dispatch({ type: "TOGGLE_REGISTER_FORM" });
    }
  };

  return (
    <div
      className={`${styles.reg_mod_container} ${
        state.isRegisterFormOpen ? styles.show : ""
      }`}
      onClick={() => dispatch({ type: "TOGGLE_REGISTER_FORM" })}
    >
      <div
        className={styles.reg_mod_content}
        onClick={(e) => e.stopPropagation()}
      >
        <form className={styles.reg_mod_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_control}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter your name'
              {...register("name")}
            />
            <p className={styles.err}>{errors.name?.message}</p>
          </div>
          <div className={styles.form_control}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              {...register("email")}
            />
            <p className={styles.err}>{errors.email?.message}</p>
          </div>
          <div className={styles.form_control}>
            <label htmlFor='phone'>Phone No</label>
            <input
              type='tel'
              id='phone'
              placeholder='Enter your phone number'
              {...register("phone")}
            />
            <p className={styles.err}>{errors.phone?.message}</p>
          </div>
          <div className={styles.form_control}>
            <label htmlFor='dropdown'>Mode of Attendance</label>
            <select id='dropdown' {...register("mode_of_attendance")}>
              <option value='' disabled>
                --Select Mode of Attendance--
              </option>
              <option value='virtual'>Virtual</option>
              <option value='physical'>Physical (5000 fee)</option>
            </select>
            <p className={styles.err}>{errors.mode_of_attendance?.message}</p>
          </div>
          <button className={styles.register_btn} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
