import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Ruler,
  Monitor,
  Scissors,
  Zap,
  Shirt,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { MdPrecisionManufacturing } from "react-icons/md";
import { FaBrain, FaFile } from "react-icons/fa";
import { FaF } from "react-icons/fa6";

const Operations = () => {
  const [activeSection, setActiveSection] = useState(0);

  const operations = [
    {
      id: 0,
      slug: "sample",
      title: "Sample Development",
      icon: Shirt,
      description: "Prototype creation & fit testing to ensure perfect garment construction before mass production.",
      details: ["Pattern prototyping", "Fabric testing & fit trials", "Client approval samples", "Size set development", "Pre-production samples"],
      image: "https://res.cloudinary.com/dcdmktxtz/image/upload/v1773676789/1_uzzv2c.png",
    },
    {
      
  id: 2,
  slug: "knitting",
  title: "Knitting",
  icon: FaFile,
  description: "High-precision circular knitting machines produce high-quality fabric with consistent GSM and structure.",
  details: [
    "Circular knitting machines",
    "GSM & structure control",
    "Fabric inspection",
    "Roll batching & storage",
    "Production monitoring"
  ],
  image: "https://res.cloudinary.com/dcdmktxtz/image/upload/v1773677876/kintting_lyzx7m.png",

    },
    {
      id: 1,
      slug: "cad",
      title: "CAD Pattern Making",
      icon: Monitor,
      description: "Digital pattern design using advanced CAD software for precision grading & marker planning.",
      details: ["Gerber AccuMark software", "Multi-size pattern grading", "Digital marker optimization", "Zero wastage planning"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17f?w=600",
    },
    {
      id: 2,
      slug: "cutting",
      title: "Precision Cutting",
      icon: Scissors,
      description: "Computerized straight knife cutting for perfect edges & fabric utilization.",
      details: ["Straight knife machines", "Auto fabric spreaders", "Laser edge sealing", "Numbering & bundling"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600",
    },
    {
      id: 3,
      slug: "fusing",
      title: "Fusing & Interlining",
      icon: Zap,
      description: "High-pressure fusing machines bond interlining for shape retention & durability.",
      details: ["Continuous fusing machines", "Collar & cuff fusing", "Temperature control", "Quality adhesion testing"],
      image: "https://images.unsplash.com/photo-1602940659805-770d1b3b729e?w=600",
    },
    {
      id: 4,
      slug: "sewing",
      title: "Expert Sewing",
      icon: MdPrecisionManufacturing,
      description: "Skilled sewing operators using modern machines for flawless construction.",
      details: ["Juki & Brother machines", "Overlock & flatseam stitching", "Inline quality checking", "Embroidery unit"],
      image: "https://images.unsplash.com/photo-1574251150896-225d2f8dd8dd?w=600",
    },
    {
      id: 5,
      slug: "finishing",
      title: "Final Finishing",
      icon: CheckCircle,
      description: "Complete finishing with ironing, tagging and final inspection.",
      details: ["Quality control", "Steam ironing", "Thread trimming", "Final shipment inspection"],
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Page Header */}
     <div className="max-w-6xl mx-auto text-center mb-16 px-4">

        <h1 className="text-4xl md:text-5xl tracking-[12px] font-bold mb-4">OPERATIONS</h1>

        <p className="text-gray-600 max-w-2xl mx-auto">

          Our complete garment production workflow from sampling to finishing.

        </p>

      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar - Process Cards */}
          <div className="lg:w-1/6">
            <div className="sticky top-8 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 px-2">Workflow Steps</h2>
              {operations.map((operation, index) => {
                const Icon = operation.icon;
                const isActive = activeSection === index;

                return (
                  <button
                    key={operation.id}
                    onClick={() => setActiveSection(index)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left group
                    ${isActive 
                      ? "bg-black text-white border-black shadow-md translate-x-2" 
                      : "bg-white hover:bg-gray-100 border-gray-200"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-gray-100 group-hover:bg-white"}`}>
                      <Icon size={20} />
                    </div>
                    <span className="font-semibold flex-1">{operation.title}</span>
                    <ChevronRight size={16} className={`transition-transform ${isActive ? "rotate-0" : "-rotate-90 opacity-0"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-4/3">
            <div className="bg-white rounded-2xl border p-2 md:p-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 items-start">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-xl mb-6">
                    {(() => {
                        const ActiveIcon = operations[activeSection].icon;
                        return <ActiveIcon size={32} />;
                    })()}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    {operations[activeSection].title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {operations[activeSection].description}
                  </p>

                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-gray-400">Key Deliverables</h4>
                  <ul className="space-y-4 mb-10">
                    {operations[activeSection].details.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-medium">
                        <CheckCircle size={18} className="text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/operations/${operations[activeSection].slug}`}
                    className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition shadow-lg shadow-black/10"
                  >
                    Explore {operations[activeSection].title}
                    <ChevronRight size={18} />
                  </Link>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gray-100 rounded-3xl -z-10 group-hover:bg-gray-200 transition-colors"></div>
                  <img
                    src={operations[activeSection].image}
                    alt={operations[activeSection].title}
                    className="rounded-2xl shadow-xl w-full object-cover aspect-square md:aspect-[4/5]"
                  />
                </div>
              </div>
            </div>

            {/* Capacity Stats (Inside main content area or below) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {[
                    { label: "Daily Output", value: "25k pcs" },
                    { label: "Operators", value: "100+" },
                    { label: "QC Levels", value: "6 Stage" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-dashed border-gray-300">
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs text-gray-500 uppercase font-bold tracking-tighter">{stat.label}</div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;