import { execSync } from "node:child_process";
import { build, startMarker, endMarker } from "./build.js";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export function install(replaceInScriptPath, refreshSketchybar = true) {
  const { iconMapBashFn } = build();

  fs.copyFileSync(
    "./public/dist/sketchybar-app-font-bg.ttf",
    `${process.env.HOME}/Library/Fonts/sketchybar-app-font-bg.ttf`
  );

  if (replaceInScriptPath) {
    const pathToScript = path.resolve(replaceInScriptPath);
    const scriptContents = fs.readFileSync(pathToScript, "utf8");
    const startMarkerIndex = scriptContents.indexOf(startMarker);
    const endMarkerIndex = scriptContents.indexOf(endMarker);
    if (startMarkerIndex === -1 || endMarkerIndex === -1) {
      console.error(
        `Could not find ${startMarker} or ${endMarker} in ${pathToScript}`
      );
      process.exit(1);
    }
    const newScriptContents =
      scriptContents.slice(0, startMarkerIndex) +
      iconMapBashFn +
      scriptContents.slice(endMarkerIndex + endMarker.length);
    fs.writeFileSync(pathToScript, newScriptContents, "utf8");
  } else {

    const destinationDir = `${process.env.HOME}/.config/sketchybar/helpers`;

    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, { recursive: true });
    }
    fs.copyFileSync(
      "./public/dist/icon_map.lua",
      path.join(destinationDir, "icon_map.lua")
    );
  }

  if (refreshSketchybar) {
    execSync("sketchybar --reload");
  }
}

// only execute if run directly (ESM)
// use url instead of __filename to support pnpm
if (import.meta.url === pathToFileURL(process.argv[1]).toString()) {
  install(process.argv[2]);
}