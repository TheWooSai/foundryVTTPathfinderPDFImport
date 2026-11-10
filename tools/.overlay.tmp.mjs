import { startHarness } from "./lib/harness.mjs";
import fs from "fs";
const jobs = JSON.parse(process.argv[2]);
const out = process.argv[3];
const tiles = [];
for (const { pdf, def } of jobs) {
  const src = fs.readFileSync(def, "utf8");
  const scenes = [
    ...src.matchAll(
      /page: (\d+),\s*width: (\d+),\s*height: (\d+),\s*imageLeft: (\d+),\s*imageRight: (\d+),\s*imageCols: (\d+),\s*imageTop: (\d+),\s*imageBottom: (\d+),\s*imageRows: (\d+)/g,
    ),
  ].map((m) => m.slice(1).map(Number));
  const { page, close } = await startHarness(pdf);
  const urls = await page.evaluate(
    async ({ scenes, tag }) => {
      const pdf = await window.pipeline.load();
      const res = [];
      for (const [p, w, h, l, r, cols, t, b, rows] of scenes) {
        const img = pdf.imageDetails.find(
          (i) => i.page === p && i.width === w && i.height === h,
        );
        const cv = await img.getImageCanvas();
        const per = (r - l) / cols;
        const sx = Math.round(w * 0.35),
          sy = Math.round(h * 0.35),
          cw = 220,
          ch = 150,
          z = 2;
        const c = document.createElement("canvas");
        c.width = cw * z;
        c.height = ch * z;
        const x = c.getContext("2d");
        x.imageSmoothingEnabled = false;
        x.drawImage(cv, sx, sy, cw, ch, 0, 0, cw * z, ch * z);
        x.strokeStyle = "rgba(255,0,0,0.85)";
        x.lineWidth = 1;
        for (let i = 0; i <= cols; i++) {
          const X = (l + i * per - sx) * z;
          if (X < 0 || X > cw * z) continue;
          x.beginPath();
          x.moveTo(X, 0);
          x.lineTo(X, ch * z);
          x.stroke();
        }
        for (let j = 0; j <= rows; j++) {
          const Y = (t + j * per - sy) * z;
          if (Y < 0 || Y > ch * z) continue;
          x.beginPath();
          x.moveTo(0, Y);
          x.lineTo(cw * z, Y);
          x.stroke();
        }
        x.fillStyle = "yellow";
        x.font = "bold 15px sans-serif";
        x.fillText(`${tag} p${p} ${per.toFixed(1)}`, 6, 17);
        res.push(c.toDataURL("image/png"));
      }
      return res;
    },
    { scenes, tag: def.match(/pfs(\d-\d+)/)[1] },
  );
  tiles.push(...urls);
  await close();
}
const { page, close } = await startHarness(jobs[0].pdf);
const sheet = await page.evaluate(async (tiles) => {
  const imgs = await Promise.all(
    tiles.map(
      (u) =>
        new Promise((r) => {
          const i = new Image();
          i.onload = () => r(i);
          i.src = u;
        }),
    ),
  );
  const W = 4 * 444,
    H = Math.ceil(imgs.length / 4) * 304;
  const s = document.createElement("canvas");
  s.width = W;
  s.height = H;
  const g = s.getContext("2d");
  g.fillStyle = "#222";
  g.fillRect(0, 0, W, H);
  imgs.forEach((im, i) =>
    g.drawImage(im, (i % 4) * 444, Math.floor(i / 4) * 304),
  );
  return s.toDataURL("image/png");
}, tiles);
fs.writeFileSync(out, Buffer.from(sheet.split(",")[1], "base64"));
await close();
