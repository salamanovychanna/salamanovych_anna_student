import { createContext } from "react";

const reader =
  window.location.href === "https://salamanovych-anna-student.web.app/" ||
  window.location.href === "https://salamanovych-anna-student.web.app"
    ? "HMC committee"
    : "Admissions";

export const ReaderContext = createContext(reader);