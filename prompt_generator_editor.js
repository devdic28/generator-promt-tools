// Prompt Generator by Gendhis-ai

const promptModels = [
  "Veo 3",
  "Sora",
  "Kling AI",
  "ImageFX",
  "Whisk",
  "Comfy UI"
];

const inputTypes = {
  "Veo 3": ["Text to Video", "Image to Video", "Image to Prompt"],
  "Sora": ["Text to Video", "Text to Image", "Image to Prompt"],
  "Kling AI": ["Text to Video", "Text to Image", "Image to Prompt", "Sound Effect", "Kling Element (2–4 images)"],
  "ImageFX": ["Text to Image", "Image to Prompt"],
  "Whisk": ["Text to Image", "Image to Prompt"],
  "Comfy UI": ["Text to Video", "Text to Image", "Image to Video"]
};

const categories = ["MANUSIA", "OBJEK / BARANG"];

function startPromptSession() {
  console.log("Selamat datang di Indonesia AI Prompt Master");
  console.log("Pilih model AI yang ingin digunakan:");
  promptModels.forEach((model, i) => console.log(`${i + 1}. ${model}`));
}

startPromptSession();
