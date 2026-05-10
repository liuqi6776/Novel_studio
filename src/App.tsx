import { useState, useEffect, useRef } from "react";
import Markdown from "react-markdown";
import { BookOpen, Globe, GitBranch, PenTool, LayoutList, Save, Edit3, X, FileText } from "lucide-react";
import * as d3 from "d3";

export default function App() {
  const [activeTab, setActiveTab] = useState("read");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true);
    fetch("/api/novel")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  };

  useEffect(() => { loadData(); }, []);

  const handleSaveChapter = async (file: string, newContent: string) => {
    try {
      const res = await fetch("/api/save-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filePath: `04-chapters/${file}`, content: newContent })
      });
      if (res.ok) {
        setData((prev: any) => {
          const newChapters = prev.chapters.map((ch: any) => 
            ch.file === file ? { ...ch, content: newContent } : ch
          );
          return { ...prev, chapters: newChapters };
        });
      } else {
         const { error } = await res.json();
         alert("保存失败: " + error);
      }
    } catch (error) {
      alert("保存失败: " + error);
    }
  };

  if (loading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-100">
        <div className="animate-pulse flex flex-col items-center">
          <BookOpen className="w-12 h-12 mb-4 text-blue-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 flex-none bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col z-10">
        <div className="h-16 px-6 border-b border-gray-200 dark:border-gray-700 flex items-center">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-500" />万灵契约
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavItem icon={<FileText />} label="阅读与创作" isActive={activeTab === "read"} onClick={() => setActiveTab("read")} />
          <NavItem icon={<Globe />} label="世界与人物" isActive={activeTab === "world"} onClick={() => setActiveTab("world")} />
          <NavItem icon={<GitBranch />} label="图谱与关系" isActive={activeTab === "graph"} onClick={() => setActiveTab("graph")} />
          <NavItem icon={<PenTool />} label="指导原则 (Skills)" isActive={activeTab === "skills"} onClick={() => setActiveTab("skills")} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-16 flex-none flex items-center justify-between px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-10">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            {activeTab === "read" && "📖 书籍阅读与编辑向导"}
            {activeTab === "world" && "🌍 世界设定与人物档案"}
            {activeTab === "graph" && "🕸 关系网络"}
            {activeTab === "skills" && "✍️ 创作环境规范"}
          </h2>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900 h-full w-full">
            {activeTab === "read" && <ChapterWorkspace chapters={data.chapters} onSave={handleSaveChapter} />}
            {activeTab === "world" && (
              <div className="max-w-4xl mx-auto space-y-12 pb-24">
                <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 border-b pb-4 border-gray-100 dark:border-gray-700">世界观设定</h3>
                  <div className="prose prose-lg dark:prose-invert max-w-none"><Markdown>{data.world}</Markdown></div>
                </section>
                <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 border-b pb-4 border-gray-100 dark:border-gray-700">角色: 林渊</h3>
                  <div className="prose prose-lg dark:prose-invert max-w-none"><Markdown>{data.characters[0].content}</Markdown></div>
                </section>
              </div>
            )}
            {activeTab === "graph" && (
              <div className="h-full w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col">
                <div className="flex-1 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 relative">
                  <EntityGraph />
                </div>
              </div>
            )}
            {activeTab === "skills" && (
              <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 pb-24">
                  <h3 className="text-2xl font-bold mb-6 border-b pb-4 border-gray-100 dark:border-gray-700">规则与知识 (Skills)</h3>
                <div className="prose prose-lg dark:prose-invert max-w-none"><Markdown>{data.skill}</Markdown></div>
              </div>
            )}
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? "bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 shadow-sm" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
    >
      <span className="w-5 h-5 flex-none">{icon}</span><span className="truncate">{label}</span>
    </button>
  );
}

function ChapterWorkspace({ chapters, onSave }: { chapters: any[], onSave: (file: string, newContent: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");

  const activeChapter = chapters[activeIndex];

  useEffect(() => {
    setIsEditing(false);
    setEditContent("");
  }, [activeIndex]);

  const handleEdit = () => {
    setEditContent(activeChapter?.content || "");
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(activeChapter.file, editContent);
    setIsEditing(false);
  };

  if (!chapters || chapters.length === 0) return <div>No chapters</div>;

  return (
    <div className="flex h-full w-full max-w-6xl mx-auto border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
      <div className="w-64 flex-none bg-gray-50 dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h3 className="font-semibold flex items-center gap-2 text-gray-700 dark:text-gray-200 text-sm">
            <LayoutList className="w-4 h-4" />章节目录
          </h3>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {chapters.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors border ${activeIndex === idx ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-gray-200 dark:border-gray-700 shadow-sm" : "hover:bg-white dark:hover:bg-gray-800 border-transparent hover:border-gray-200 dark:hover:border-gray-700"}`}
            >
              <div className="truncate">{ch.title}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <div className="h-14 flex-none border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-5 z-10">
          <h2 className="font-semibold pr-4">{activeChapter?.title}</h2>
          <div className="flex items-center gap-2">
            {!isEditing ? (
              <button onClick={handleEdit} className="text-sm flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg">
                <Edit3 className="w-4 h-4" />编辑内容
              </button>
            ) : (
              <>
                <button onClick={() => setIsEditing(false)} className="text-sm px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">取消</button>
                <button onClick={handleSave} className="text-sm flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  <Save className="w-4 h-4" />保存更改
                </button>
              </>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 relative">
          {isEditing ? (
            <textarea className="w-full min-h-full p-8 lg:px-16 bg-transparent text-gray-800 dark:text-gray-100 resize-none outline-none leading-relaxed text-lg" value={editContent} onChange={(e) => setEditContent(e.target.value)} spellCheck={false} />
          ) : (
            <div className="p-8 lg:px-16">
              <div className="prose prose-lg dark:prose-invert max-w-none markdown-body prose-headings:font-bold prose-h1:text-3xl prose-a:text-blue-500">
                <Markdown>{activeChapter?.content || "空"}</Markdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EntityGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const { clientWidth: width, clientHeight: height } = containerRef.current;
    const data = {
      nodes: [
        { id: "林渊", group: 1, type: "主角" },
        { id: "小九", group: 2, type: "残灵" },
        { id: "王铁柱", group: 3, type: "室友" },
        { id: "青萝宗", group: 4, type: "势力" },
        { id: "赵无极", group: 5, type: "反派" },
        { id: "苏晚晴", group: 3, type: "弟子" },
        { id: "虚渊", group: 6, type: "本源" },
        { id: "灵视", group: 7, type: "金手指" },
      ],
      links: [
        { source: "林渊", target: "小九", value: "魂契" },
        { source: "林渊", target: "王铁柱", value: "好友" },
        { source: "林渊", target: "青萝宗", value: "弟子" },
        { source: "林渊", target: "赵无极", value: "宿敌" },
        { source: "林渊", target: "灵视", value: "特质" },
        { source: "小九", target: "虚渊", value: "力量" },
        { source: "青萝宗", target: "虚渊", value: "探索" },
        { source: "赵无极", target: "青萝宗", value: "附庸" },
        { source: "苏晚晴", target: "青萝宗", value: "内门" }
      ]
    };

    const simulation = d3.forceSimulation(data.nodes as any)
      .force("link", d3.forceLink(data.links).id((d: any) => d.id).distance(180))
      .force("charge", d3.forceManyBody().strength(-600))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(70));

    svg.append("defs").append("marker")
      .attr("id", "arrow")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 42)
      .attr("refY", 0)
      .attr("orient", "auto")
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .append("path")
      .attr("d", "M0,-5L10,0L0,5").attr("fill", "#9CA3AF");

    const link = svg.append("g").selectAll("line").data(data.links).join("line")
      .attr("stroke", "#E5E7EB").attr("stroke-width", 2).attr("marker-end", "url(#arrow)");

    const linkLabel = svg.append("g").selectAll("text").data(data.links).join("text")
      .attr("font-size", 12).attr("fill", "#6B7280").text(d => d.value);

    const node = svg.append("g").selectAll("g").data(data.nodes).join("g")
      .call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended) as any);

    const colors = ["#ef4444", "#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#06b6d4", "#ec4899"];

    node.append("circle").attr("r", 40).attr("fill", d => colors[(d.group - 1) % colors.length])
      .attr("stroke", "white").attr("stroke-width", 3).attr("class", "cursor-pointer drop-shadow-md");

    node.append("text").text(d => d.id).attr("text-anchor", "middle").attr("dy", "0.3em")
      .attr("fill", "white").attr("font-size", "14px").attr("font-weight", "600").style("pointer-events", "none");

    simulation.on("tick", () => {
      link.attr("x1", d => (d.source as any).x).attr("y1", d => (d.source as any).y)
        .attr("x2", d => (d.target as any).x).attr("y2", d => (d.target as any).y);
      linkLabel.attr("x", d => ((d.source as any).x + (d.target as any).x) / 2)
        .attr("y", d => ((d.source as any).y + (d.target as any).y) / 2 - 8);
      node.attr("transform", d => `translate(${(d as any).x},${(d as any).y})`);
    });

    function dragstarted(event: any, d: any) { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; }
    function dragged(event: any, d: any) { d.fx = event.x; d.fy = event.y; }
    function dragended(event: any, d: any) { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }

    return () => { simulation.stop(); };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[500px]"><svg ref={svgRef} className="w-full h-full" /></div>;
}
