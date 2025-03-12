import axios from "axios";

const URL = "http://localhost:3000";

const convertFile = async (
  file: File,
  from: string,
  to: string
): Promise<Blob> => {
  console.log("Wysyłanie pliku do API:", `${URL}/convert`);

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      `${URL}/convert?from=${from}&to=${to}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      }
    );

    console.log("Plik skonwertowany:", response);
    return response.data;
  } catch (err) {
    console.error("Błąd podczas konwersji pliku:", err);
    throw err;
  }
};

export { convertFile };
