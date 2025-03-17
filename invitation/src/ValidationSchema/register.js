import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,11}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  mode_of_attendance: yup
    .string()
    .oneOf(["virtual", "physical"], "Please select a valid mode of attendance")
    .required("Mode of Attendance is required"),
});
