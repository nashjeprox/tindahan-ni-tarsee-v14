"use client";
import { useState } from "react";

const productsData = [
  {name:"De Kalidad",tag:"Cacao & Pantry",location:"Batangas",products:["Native Tablea 100% Cacao","Dried Mango Strips","Roasted Pili Nuts","Virgin Coconut Oil","Muscovado Sugar","Spiced Sukang Iloko"]},
  {name:"JMJ Flowers & Crafts",tag:"Flora & Decor",location:"Dangwa",products:["Dried Flower Bouquet","Handwoven Abaca Basket","Scented Soy Candle"]},
  {name:"Aling Nena's Kakanin",tag:"Kakanin",location:"Malabon",products:["Sapin-Sapin Box","Biko Ube Special","Puto Cheese 20s","Kutsinta with Yema Dip"]},
  {name:"Batangas Brew Co.",tag:"Kape",location:"Lipa",products:["Kapeng Barako 250g","Cold Brew Concentrate","Coffee Drip Bags"]},
  {name:"Lola's Atbp.",tag:"Native Sweets",location:"Pampanga",products:["Peanut Brittle Jar","Yema Pastillas","Pastillas de Leche","Polvoron Classic","Cashew Brittle"]},
  {name:"Tahanang Tela",tag:"Weaves",location:"Ilocos",products:["Inabel Table Runner","Handloom Placemats Set of 6","Katsa Tote Bag","Embroidered Pillow Case"]},
  {name:"Likha Clay",tag:"Ceramics",location:"Taal",products:["Stoneware Mug","Terracotta Plant Pot","Mini Vase Set"]},
  {name:"Honey & Harvest",tag:"Farm",location:"Quezon",products:["Pure Wild Honey 500ml","Calamansi Marmalade","Chili Garlic Crunch","Ginger Turmeric Tea"]},
  {name:"Dagat Crafts",tag:"Coastal",location:"Cebu",products:["Capiz Shell Lamp","Mother-of-Pearl Earrings","Shell Wind Chime"]},
  {name:"Kusina ni Juan",tag:"Ulam",location:"Bicol",products:["Laing in Jar","Bicol Express Paste","Gata Mix","Siling Labuyo Oil"]},
  {name:"Timpla Teas",tag:"Tsaa",location:"Benguet",products:["Blue Ternate Tea","Pandan Lemongrass Blend","Guyabano Leaves Tea","Malunggay Moringa Tea"]},
  {name:"Aninag Woodworks",tag:"Wood",location:"Paete",products:["Acacia Salad Bowl","Bamboo Chopping Board","Wooden Utensil Set"]},
  {name:"Tikme's Chicharon",tag:"Chicharon",location:"Bulacan",products:["Classic Pork Chicharon","Chicken Skin Crisps","Mushroom Chicharon Vegan"]},
];

function SunIcon({className}:{className?:string}){return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>)}
function MoonIcon({className}:{className?:string}){return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>)}
function StoreIcon({className}:{className?:string}){return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg>)}
function MegaphoneIcon({className}:{className?:string}){return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>)}
function HandshakeIcon({className}:{className?:string}){return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>)}
function GiftIcon({className}:{className?:string}){return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>)}
function ArrowUpRightIcon({className}:{className?:string}){return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>)}

const features = [
  {icon: StoreIcon, title:"Visibility & Market Access", desc:"From anonymous sellers to featured brands. Tribune front-page and social reach puts MSMEs in front of millions.", meta:"Print + Digital + OOH"},
  {icon: MegaphoneIcon, title:"Multimedia Amplification", desc:"Video profiles, product photography, and founder interviews. We don't just list them, we tell their story.", meta:"50M+ Impressions"},
  {icon: HandshakeIcon, title:"Tangible Sales Since 2024", desc:"Alabang Town Center weekend bazaar. Physical foot traffic converts to GCash, repeat orders, and loyal customers.", meta:"Every Sat-Sun"},
  {icon: GiftIcon, title:"Corporate Gifting Partnership", desc:"Pag-IBIG Fund and enterprise partners source holiday kits directly. Bulk orders that change a small business year.", meta:"Pag-IBIG Fund"},
];

export default function Page(){
  const [theme, setTheme] = useState<"dark"|"light">("dark");
  const isDark = theme === "dark";
  
  return (
    <div className={`min-h-screen w-full font-[Inter] antialiased transition-colors duration-300 ${isDark ? "bg-[#0A0D12] text-white" : "bg-[#FFFCF6] text-[#0A0D12]"}`}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap'); .font-playfair{font-family:'Playfair Display',serif;}`}</style>
      
      {/* TOP BAR */}
      <header className="sticky top-0 z-50 w-full">
        <div className="h-[36px] w-full bg-[#0A0D12] text-white flex items-center justify-between px-4 md:px-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-[13px] leading-none tracking-[-0.01em] font-medium opacity-90">Tuesday 15 September 2026</span>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden md:flex items-center gap-2 text-[12px] font-semibold">
              <span className="opacity-70">DOW</span>
              <span className="text-[#FF4D4D]">-0.29%</span>
            </div>
            <div className="h-4 w-[1px] bg-white/15 hidden md:block" />
            <div className="flex items-center gap-[6px]">
              <div className="w-[22px] h-[22px] rounded-full bg-[#1877F2] flex items-center justify-center text-[11px] font-bold">f</div>
              <div className="w-[22px] h-[22px] rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold">𝕏</div>
              <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-[10px]">◍</div>
              <div className="w-[22px] h-[22px] rounded-full bg-[#FF0000] flex items-center justify-center text-[9px] font-bold">YT</div>
            </div>
            <button onClick={()=>setTheme(t=>t==="dark"?"light":"dark")} aria-label="Toggle theme" className="ml-1 w-[28px] h-[28px] rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center transition-colors">
              {isDark ? <SunIcon className="w-3.5 h-3.5"/> : <MoonIcon className="w-3.5 h-3.5"/>}
            </button>
          </div>
        </div>
        <div className={`w-full border-b ${isDark ? "bg-[#0A0D12] border-white/10" : "bg-white border-black/10"} transition-colors`}>
          <div className="mx-auto flex justify-center py-6 md:py-8">
            <div className="w-[320px] md:w-[520px] flex justify-center">
              <img src={isDark ? "/ff.png" : "/pf.png"} alt={isDark ? "Tindahan ni Tarsee Night Logo" : "Tribune Logo Light"} className="w-full h-auto object-contain" style={{maxHeight:"86px"}} />
            </div>
          </div>
          <div className={`mx-auto max-w-[1200px] px-4 md:px-6 pb-3 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase font-semibold ${isDark ? "text-white/40" : "text-black/40"}`}>
            <span>Next.js V14 • app/page.tsx • Preview</span>
            <span className="hidden md:inline">EST. 2018 • Alabang • Pag-IBIG Fund Partnership</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-8 md:gap-12 pt-10 md:pt-14 pb-10">
          <div className="relative">
            <div className={`rounded-[28px] overflow-hidden h-[520px] w-full ${isDark ? "bg-[#151922]" : "bg-[#F2EFE8]"} p-2`}>
              <img src="/c8.jpg" alt="Dancing Tarsee Monkey Bazaar" className="w-full h-full object-cover rounded-[22px]" />
            </div>
            <div className={`absolute -bottom-4 -right-4 md:bottom-4 md:-right-6 rounded-full px-4 py-2 text-[11px] font-bold tracking-widest uppercase shadow-xl ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
              Live in Alabang • Weekends
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold tracking-[0.18em] uppercase mb-5">
              <span className={`w-2 h-2 rounded-full ${isDark ? "bg-[#FFE135]" : "bg-black"} animate-pulse`} />
              How We Empower MSMEs
            </div>
            <h1 className="font-playfair text-[48px] md:text-[64px] leading-[0.9] tracking-[-0.03em] font-[900] uppercase">
              TINDAHAN <br/>
              <span className={`font-[400] italic lowercase tracking-[-0.02em] ${isDark ? "text-[#FFE135]" : "text-[#C8A000]"}`}>ni</span> TARSEE
            </h1>
            <p className={`mt-6 text-[16px] md:text-[18px] leading-[1.6] max-w-[560px] ${isDark ? "text-white/70" : "text-black/60"}`}>
              MSMEs are the backbone of the Philippine economy. Tindahan ni Tarsee gives them <span className={`${isDark ? "text-white" : "text-black"} font-semibold`}>real visibility, real market access, and real sales</span> — no middlemen, no consignment trap. A curated weekend bazaar powered by Tribune storytelling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className={`rounded-full px-5 py-2.5 text-[13px] font-semibold flex items-center gap-2 ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-[12px]">13</span>SMEs Empowered
              </div>
              <div className={`rounded-full px-5 py-2.5 text-[13px] font-semibold flex items-center gap-2 border ${isDark ? "border-white/15 bg-white/5" : "border-black/10 bg-black/5"}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>49</span>Products Listed
              </div>
              <div className="rounded-full px-5 py-2.5 text-[13px] font-medium bg-[#FFE135] text-black">Since 2018</div>
            </div>
            <div className={`mt-10 grid grid-cols-3 gap-4 border-t pt-6 ${isDark ? "border-white/10" : "border-black/10"}`}>
              <div><div className="font-playfair text-[28px] font-bold leading-none">100%</div><div className={`text-[11px] uppercase tracking-widest mt-1 ${isDark ? "text-white/50" : "text-black/50"}`}>Direct Sales</div></div>
              <div><div className="font-playfair text-[28px] font-bold leading-none">Zero</div><div className={`text-[11px] uppercase tracking-widest mt-1 ${isDark ? "text-white/50" : "text-black/50"}`}>Commission Cut</div></div>
              <div><div className="font-playfair text-[28px] font-bold leading-none">Pag-IBIG</div><div className={`text-[11px] uppercase tracking-widest mt-1 ${isDark ? "text-white/50" : "text-black/50"}`}>Corporate Partner</div></div>
            </div>
          </div>
        </section>

        {/* BANNER */}
        <section className="pb-14">
          <div className="relative rounded-[28px] overflow-hidden h-[380px] md:h-[460px] w-full">
            <img src="/q8.jpg" alt="Happy monkey bazaar stall real sales" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">Real Stall</span>
                <span className="bg-[#FFE135] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">Real Sales</span>
                <span className="bg-black/60 backdrop-blur text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">No Middlemen</span>
              </div>
              <h2 className="font-playfair text-white text-[32px] md:text-[44px] leading-[0.95] font-bold max-w-[620px]">
                A real stall. Real sales. <span className="font-normal italic">No middlemen.</span>
              </h2>
              <p className="text-white/70 text-[13px] md:text-[14px] mt-3 max-w-[520px] leading-[1.5]">
                Every weekend in Alabang, we set up physical stalls where MSMEs keep 100% of their sales. Tribune amplifies their stories across print, digital, and social.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((item, i)=>(
              <div key={i} className={`rounded-[20px] p-6 border flex flex-col ${isDark ? "bg-[#12151E] border-white/10" : "bg-white border-black/10 shadow-sm"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                  <item.icon className="w-5 h-5"/>
                </div>
                <h3 className="font-playfair font-bold text-[18px] leading-[1.2] mb-2">{item.title}</h3>
                <p className={`text-[13px] leading-[1.6] flex-1 ${isDark ? "text-white/60" : "text-black/60"}`}>{item.desc}</p>
                <div className={`mt-4 pt-4 border-t text-[10px] font-bold tracking-widest uppercase flex items-center justify-between ${isDark ? "border-white/10 text-white/40" : "border-black/10 text-black/40"}`}>
                  <span>{item.meta}</span><ArrowUpRightIcon className="w-3.5 h-3.5"/>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CATALOG */}
        <section className="pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className={`text-[11px] font-bold tracking-[0.2em] uppercase mb-2 ${isDark ? "text-white/40" : "text-black/40"}`}>Curated Catalog • View-Only</div>
              <h2 className="font-playfair text-[36px] md:text-[48px] font-bold leading-[0.9] tracking-[-0.02em]">Tampok na Produkto</h2>
            </div>
            <div className={`text-[13px] leading-[1.5] max-w-[420px] ${isDark ? "text-white/60" : "text-black/60"}`}>13 SMEs • 49 products • No checkout — this is a Tribune editorial showcase. Direct buying happens at the stall.</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {productsData.map((cat)=>(
              <div key={cat.name} className={`group rounded-[22px] border p-5 flex flex-col transition-all hover:-translate-y-1 ${isDark ? "bg-[#11141D] border-white/[0.08] hover:border-white/20" : "bg-white border-black/10 hover:shadow-lg"}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full inline-block mb-2 ${isDark ? "bg-white/10 text-white/60" : "bg-black/5 text-black/60"}`}>{cat.tag} • {cat.location}</div>
                    <h3 className="font-playfair font-bold text-[20px] leading-[1.1]">{cat.name}</h3>
                    <div className={`text-[12px] mt-1 ${isDark ? "text-white/50" : "text-black/50"}`}>{cat.products.length} products</div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold ${isDark ? "bg-[#FFE135] text-black" : "bg-black text-white"}`}>{cat.products.length}</div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.products.map((p)=>(<span key={p} className={`text-[11px] font-medium px-3 py-1.5 rounded-full border leading-none ${isDark ? "bg-white/[0.04] border-white/10 text-white/80" : "bg-[#F7F3EB] border-black/10 text-black/70"}`}>{p}</span>))}
                </div>
                <div className={`mt-4 flex items-center gap-2 text-[11px] font-semibold ${isDark ? "text-white/30" : "text-black/40"}`}><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/> In bazaar rotation • View only</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={`border-t mt-6 ${isDark ? "bg-[#080A0F] border-white/10" : "bg-[#F1EDE6] border-black/10"}`}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-[360px]">
              <div className="w-[200px] mb-4"><img src={isDark ? "/ff.png" : "/pf.png"} alt="footer logo" className="w-full h-auto opacity-90"/></div>
              <p className={`text-[13px] leading-[1.6] ${isDark ? "text-white/50" : "text-black/50"}`}>Tindahan ni Tarsee is a Tribune MSME empowerment initiative. Real stalls, real sales, zero middlemen. Built as Next.js V14 app/page.tsx preview.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-[13px]">
              <div><div className={`text-[11px] font-bold tracking-widest uppercase mb-3 ${isDark ? "text-white/30" : "text-black/40"}`}>Initiative</div><div className={`space-y-2 ${isDark ? "text-white/60" : "text-black/60"}`}><div>Since 2018</div><div>Alabang Town Center</div><div>Pag-IBIG Fund Partner</div></div></div>
              <div><div className={`text-[11px] font-bold tracking-widest uppercase mb-3 ${isDark ? "text-white/30" : "text-black/40"}`}>Empowerment</div><div className={`space-y-2 ${isDark ? "text-white/60" : "text-black/60"}`}><div>Visibility</div><div>Market Access</div><div>Corporate Gifting</div></div></div>
              <div><div className={`text-[11px] font-bold tracking-widest uppercase mb-3 ${isDark ? "text-white/30" : "text-black/40"}`}>Stack</div><div className={`space-y-2 ${isDark ? "text-white/60" : "text-black/60"}`}><div>Next.js V14</div><div>Tailwind CSS</div><div>Playfair + Inter</div></div></div>
            </div>
          </div>
          <div className={`mt-10 pt-6 border-t flex flex-col md:flex-row justify-between gap-3 text-[11px] ${isDark ? "border-white/10 text-white/30" : "border-black/10 text-black/40"}`}><span>© 2026 Daily Tribune • Tindahan ni Tarsee • All MSME names are real showcase partners.</span><span className="tracking-widest uppercase font-bold">Dark default • Toggle switches logo + bg</span></div>
        </div>
      </footer>
    </div>
  );
}