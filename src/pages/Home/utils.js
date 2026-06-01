import pdf from "../../assets/pdf/Dariana_Rengifo_Web_Developer.pdf";

export const downloadCv = () => {
  const anchor = document.createElement("a");
  anchor.href = pdf;
  anchor.download = "Dariana Rengifo - Full Stack Developer - CV";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
