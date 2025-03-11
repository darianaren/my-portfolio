import pdf from "../../assets/pdf/Dariana Rengifo - Full Stack Developer.pdf";

export const downloadCv = () => {
  const anchor = document.createElement("a");
  anchor.href = pdf;
  anchor.download = "Dariana Rengifo - Full Stack Developer - CV";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
