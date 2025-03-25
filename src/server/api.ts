import axios from "axios";

const URL = "http://localhost:3000";

const convertFile = async (
  file: File,
  from: string,
  to: string
): Promise<Blob> => {
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
    return response.data;
  } catch (err: any) {
    if (
      err.response &&
      err.response.data instanceof Blob &&
      err.response.data.type === "application/json"
    ) {
      const text = await err.response.data.text();
      const json = JSON.parse(text);
      throw new Error(json.message || "File conversion failed");
    }
    console.error("Błąd podczas konwersji pliku:", err);
    throw err;
  }
};

export { convertFile };
