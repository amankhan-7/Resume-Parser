import PDFParser from "pdf2json";

const extractTextFromPDF = (buffer) => {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", (err) => {
      reject(err.parserError);
    });

    pdfParser.on("pdfParser_dataReady", (pdfData) => {
      try {
        let extractedText = "";

        pdfData.Pages.forEach((page) => {
          page.Texts.forEach((text) => {
            text.R.forEach((run) => {
              extractedText +=
                decodeURIComponent(run.T) + " ";
            });
          });
        });

        resolve(extractedText.trim());
      } catch (error) {
        reject(error);
      }
    });

    pdfParser.parseBuffer(buffer);
  });
};

export default extractTextFromPDF;