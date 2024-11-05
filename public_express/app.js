import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(__dirname));
app.use('/dist', express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  // Build the path of the file using the URL pathname of the request.
  if (req.url.indexOf("font.woff2") > 0) {
    res.sendFile("sketchybar-app-font-bg.woff2", { root: "../dist" });
    return;
  }
  res.send(getPreviewHTML());
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/icons.json", (req, res) => {
  const iconMap = fs.readdirSync(path.join(__dirname, "../mappings"))
    .map(file => file.replace(".svg", ""));
  console.log('Icon Map:', iconMap); // for debugging
  res.json(iconMap);
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



