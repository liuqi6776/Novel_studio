import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs/promises";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get("/api/novel", async (req, res) => {
    try {
      const repoDir = path.resolve(process.cwd(), "novel_repo");
      
      const readMd = async (subPath: string) => {
        try {
          return await fs.readFile(path.join(repoDir, subPath), "utf-8");
        } catch {
          return "";
        }
      };

      const chaptersDir = path.join(repoDir, "04-chapters");
      let chapterFiles: string[] = [];
      try {
        chapterFiles = await fs.readdir(chaptersDir);
      } catch (e) {
        console.error("Chapters dir not found");
      }
      
      const chapters = [];
      for (const file of chapterFiles.filter(f => f.endsWith('.md'))) {
        const content = await readMd(`04-chapters/${file}`);
        let title = file.replace('.md', '');
        if (title.includes('outline')) title = '📚 卷纲与大纲';
        else if (title.startsWith('chapter-')) title = `📖 第 ${parseInt(title.split('-')[1], 10)} 章`;
        chapters.push({ file, title, content });
      }
      chapters.sort((a, b) => a.file.localeCompare(b.file));

      const world = await readMd("02-world/world.md");
      const characterLin = await readMd("01-characters/lin-yuan.md");
      const skill = await readMd(".trae/skills/novel-master/SKILL.md");

      res.json({
        chapters,
        world,
        characters: [
          { name: "林渊", content: characterLin }
        ],
        skill
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to read novel contents" });
    }
  });

  app.post("/api/save-file", async (req, res) => {
    const { filePath, content } = req.body;
    try {
      const fullPath = path.resolve(process.cwd(), "novel_repo", filePath);
      await fs.writeFile(fullPath, content, "utf-8");
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
