"use client";

import { useState, useEffect } from "react";
import { Server, Shield, Database, Cpu, MessageSquare, Terminal, ChevronRight, CheckCircle2, Globe, Code2 } from "lucide-react";

export default function Home() {
  const [terminalText, setTerminalText] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [heroView, setHeroView] = useState<'cli' | 'web' | 'api'>('cli');

  // Terminal Typing Effect
  useEffect(() => {
    let isActive = true;
    let timeoutId: NodeJS.Timeout;

    if (heroView !== 'cli') return;
    
    setTerminalText("");
    setIsBooting(true);
    
    const lines = [
      "ASYLUM_OS v2.0.0 (tty1)",
      "Initializing core kernel...",
      "Mounting encrypted volumes... [OK]",
      "Establishing secure connection to edge nodes... [OK]",
      "Deploying localized AI models... [OK]",
      "Agentic runtime secured.",
      "Infrastructure online. Ready.",
    ];
    
    let currentLine = 0;
    let currentChar = 0;
    let text = "";

    const type = () => {
      if (!isActive) return;

      if (currentLine < lines.length) {
        if (currentChar < lines[currentLine].length) {
          text += lines[currentLine][currentChar];
          setTerminalText(text + "█");
          currentChar++;
          timeoutId = setTimeout(type, Math.random() * 20 + 10);
        } else {
          text += "\n";
          setTerminalText(text);
          currentLine++;
          currentChar = 0;
          timeoutId = setTimeout(type, 200);
        }
      } else {
        setTerminalText(text.replace("█", ""));
        setIsBooting(false);
      }
    };

    timeoutId = setTimeout(type, 300);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [heroView]);

  return (
    <>
      {/* Global Fixed Background & Glows */}
      <div className="fixed inset-0 w-full h-full opacity-15 mix-blend-screen pointer-events-none z-0 overflow-hidden">
        <img src="/hero_bg.jpg" alt="Global Background" className="w-full h-full object-cover object-center grayscale contrast-150" />
      </div>
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-emerald-600/5 blur-[140px] pointer-events-none z-0"></div>

      {/* Header */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 transition-all font-mono">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-widest text-white flex items-center gap-3 uppercase hover:opacity-90 transition-opacity">
            <div className={`w-2 h-2 ${isBooting && heroView === 'cli' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]'}`}></div>
            Asylum<span className="text-emerald-500">Tech</span>
          </a>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
            <a href="#architect" className="text-zinc-500 hover:text-emerald-400 transition-colors">The Architect</a>
            <a href="#bento" className="text-zinc-500 hover:text-emerald-400 transition-colors">Infrastructure</a>
          </nav>
          <a href="#contact" className="text-xs uppercase tracking-widest font-bold text-black bg-emerald-500 px-4 py-2 hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            Establish Link
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-8">
            <span className="w-2 h-2 bg-emerald-500 animate-ping"></span> Live Environment
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Uncompromising <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Infrastructure.</span>
          </h1>
          <div className="space-y-4 mb-10 text-lg text-zinc-400 leading-relaxed font-light">
            <p>
              I engineer, harden, and manage enterprise-grade servers and private AI environments. Bulletproof tech built by someone who has been tearing apart systems since the dawn of the web.
            </p>
            <p className="text-emerald-400/80">
              The philosophy is simple: the best infrastructure is completely invisible. It's tech you never notice, never worry about, and never have to think about because it just works.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#contact" className="bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-4 font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2">
              Deploy Now <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Interactive Viewport */}
        <div className="flex flex-col gap-4 min-w-0 w-full max-w-full">
          {/* Toggles */}
          <div className="flex bg-zinc-900 border border-zinc-800 p-1 w-fit self-end font-mono">
            <button onClick={() => setHeroView('cli')} className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-all flex items-center gap-2 ${heroView === 'cli' ? 'bg-zinc-800 text-emerald-400 shadow' : 'text-zinc-500 hover:text-zinc-300'}`}>
              <Terminal size={14}/> CLI
            </button>
            <button onClick={() => setHeroView('web')} className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-all flex items-center gap-2 ${heroView === 'web' ? 'bg-zinc-800 text-emerald-400 shadow' : 'text-zinc-500 hover:text-zinc-300'}`}>
              <Globe size={14}/> Web UI
            </button>
            <button onClick={() => setHeroView('api')} className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-all flex items-center gap-2 ${heroView === 'api' ? 'bg-zinc-800 text-emerald-400 shadow' : 'text-zinc-500 hover:text-zinc-300'}`}>
              <Code2 size={14}/> API
            </button>
          </div>

          {/* Viewport Content */}
          <div className="bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl h-80 flex flex-col relative transition-all">
            <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center gap-2 relative z-10">
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-2">
                <div className="w-2 h-2 bg-zinc-700"></div>
                {heroView === 'cli' && 'root@asylumtech:~'}
                {heroView === 'web' && 'AsylumTech Control Plane'}
                {heroView === 'api' && 'POST /api/v1/deployments'}
              </span>
            </div>
            
            <div className="flex-grow relative bg-black overflow-hidden">
              {/* CLI View */}
              {heroView === 'cli' && (
                <div className="p-6 font-mono text-sm text-emerald-400 whitespace-pre-wrap absolute inset-0 overflow-auto">
                  {terminalText}
                </div>
              )}

              {/* Web UI View */}
              {heroView === 'web' && (
                <div className="p-6 absolute inset-0 bg-zinc-950 overflow-hidden animate-in fade-in font-mono">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white text-sm tracking-widest uppercase">Active Clusters</h3>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 text-xs border border-emerald-500/30">OPERATIONAL</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-900 border border-zinc-800 p-4">
                      <div className="text-zinc-500 text-xs mb-1 uppercase">Production</div>
                      <div className="text-white text-sm mb-3">us-east-cluster-01</div>
                      <div className="h-1 bg-zinc-950 overflow-hidden"><div className="w-3/4 h-full bg-emerald-500"></div></div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-4">
                      <div className="text-zinc-500 text-xs mb-1 uppercase">AI Inference</div>
                      <div className="text-white text-sm mb-3">gpu-matrix-alpha</div>
                      <div className="h-1 bg-zinc-950 overflow-hidden"><div className="w-1/2 h-full bg-cyan-500"></div></div>
                    </div>
                  </div>
                </div>
              )}

              {/* API View */}
              {heroView === 'api' && (
                <div className="p-6 font-mono text-xs text-zinc-300 absolute inset-0 overflow-auto bg-black animate-in fade-in">
                  <span className="text-emerald-400">200 OK</span><br/><br/>
                  <span className="text-zinc-600">{"{"}</span><br/>
                  &nbsp;&nbsp;<span className="text-zinc-400">"status"</span>: <span className="text-emerald-300">"provisioned"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-zinc-400">"resources"</span>: <span className="text-zinc-600">{"["}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-600">{"{"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-400">"type"</span>: <span className="text-emerald-300">"compute"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-400">"nodes"</span>: <span className="text-cyan-300">4</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-400">"secure_enclave"</span>: <span className="text-emerald-300">true</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-600">{"}"}</span><br/>
                  &nbsp;&nbsp;<span className="text-zinc-600">{"]"}</span><br/>
                  <span className="text-zinc-600">{"}"}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The Origin Story */}
      <section id="architect" className="relative z-10 py-24 bg-zinc-950/80 backdrop-blur-sm border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-emerald-500"></div>
            <h2 className="text-sm font-mono text-emerald-400 tracking-widest uppercase">Syslog // The Architect</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            I don't outsource my thinking to a language model.
          </h3>
          
          <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed border-l border-zinc-800 pl-6 md:pl-8 ml-2">
            <p>
              I've been tearing down and rebuilding systems since the 90s BBS era. Fast forward through the 2000s hacker scene, building Linux From Scratch and contributing to open source cores like Arch Linux and Mesa. I actually understand the C and scripting holding your servers together. Give me a manual and a tarball of source code and the infrastructure gets built. Properly.
            </p>
            <p>
              The rest of the industry isn't writing code anymore. They are just hitting enter and letting an AI generate it. The entire sector is chasing AI abstractions, but I live in the low-level space beneath it. I know the systems. I know the applications. I know how to keep them running when the abstractions inevitably fail.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Box Architecture */}
      <section id="bento" className="relative z-10 py-32 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Core Competencies.</h2>
          <p className="text-xl text-zinc-400 max-w-2xl font-light">Extreme security, redundancy, and localized intelligence engineered into a unified stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Large Card: Infrastructure / HavenMUD */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-colors p-8 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent z-0"></div>
            <div className="absolute top-0 right-0 w-full h-full opacity-30 mix-blend-overlay z-0">
              <img src="/infrastructure_bg.jpg" alt="Infrastructure" className="w-full h-full object-cover object-right-top transition-transform duration-700 group-hover:scale-105 grayscale contrast-125" />
            </div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-12 h-12 bg-black border border-emerald-500/30 flex items-center justify-center">
                <Server className="text-emerald-400" />
              </div>
              <span className="px-3 py-1 bg-black border border-emerald-500/30 text-xs font-mono text-emerald-400">Case Study: HavenMUD</span>
            </div>

            <div className="relative z-10 max-w-lg mt-auto">
              <h3 className="text-3xl font-bold text-white mb-4">High-Availability Servers</h3>
              <p className="text-zinc-400 leading-relaxed font-light mb-6">
                Architected and deployed the environment for the HavenMUD game server and web apps. Engineered a dual-tier backup strategy and hardened the Linux stack to guarantee 24/7 uptime.
              </p>
              <div className="flex gap-3 text-xs font-mono text-zinc-500">
                <span className="border border-zinc-800 px-3 py-1.5 uppercase">Load Balanced</span>
                <span className="border border-zinc-800 px-3 py-1.5 uppercase">Multi-Region</span>
                <span className="border border-zinc-800 px-3 py-1.5 uppercase">Auto-Scaling</span>
              </div>
            </div>
          </div>

          {/* Small Card 1: Security */}
          <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-colors p-8 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent z-0"></div>
            <div className="absolute top-0 right-0 w-full h-full opacity-20 mix-blend-overlay z-0">
              <img src="/secure_baseline_bg.jpg" alt="Secure Baselining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale contrast-125" />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-black border border-cyan-500/30 flex items-center justify-center mb-4">
                <Shield className="text-cyan-400 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Baselining</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                No bloated GUIs. Minimal Debian/Ubuntu stacks secured by default. Strict UFW firewalls, fail2ban, and SSH key-only access.
              </p>
            </div>
          </div>

          {/* Small Card 2: AI */}
          <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-colors p-8 flex flex-col justify-between">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent z-0"></div>
             <div className="absolute top-0 right-0 w-full h-full opacity-20 mix-blend-overlay z-0">
              <img src="/private_ai_bg.jpg" alt="Private AI Inference" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale contrast-125" />
            </div>
             <div className="relative z-10">
              <div className="w-10 h-10 bg-black border border-emerald-500/30 flex items-center justify-center mb-4">
                <Cpu className="text-emerald-400 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Private AI Inference</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Air-gapped, offline AI models processing proprietary data strictly within your walls and on your hardware.
              </p>
            </div>
          </div>

          {/* Medium Card 3: Backups */}
          <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-500 transition-colors p-8 flex items-center">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 grayscale contrast-125">
              <img src="/data_recovery_bg.jpg" alt="Data Recovery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-transparent z-0"></div>
            
            <div className="relative z-10 max-w-md">
              <div className="w-10 h-10 bg-black border border-zinc-700 flex items-center justify-center mb-4">
                <Database className="text-zinc-300 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Multi-Tier Redundancy</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Rapid local state snapshots (rsnapshot) combined with provider-level cloud volume backups to survive any catastrophic failure.
              </p>
            </div>
          </div>

          {/* Small Card 4: Support */}
          <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-colors p-8 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent z-0"></div>
            <div className="absolute top-0 right-0 w-full h-full opacity-25 mix-blend-overlay z-0">
              <img src="/architect_access_bg.jpg" alt="Direct Architect Access" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale contrast-125" />
            </div>
            <div className="relative z-10">
              <MessageSquare className="text-emerald-400 w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Direct Architect Access</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                No tier-1 helpdesk. Immediate priority channels straight to the engineers via Discord.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Terminal Contact Section */}
      <section id="contact" className="relative z-10 border-t border-zinc-800/50 bg-black/80 backdrop-blur-sm py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Establish Connection</h2>
            <p className="text-zinc-400 font-light">Execute the mail protocol to open a direct line.</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] font-mono text-sm">
            <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zinc-600"></div>
                <div className="w-2 h-2 bg-zinc-600"></div>
                <div className="w-2 h-2 bg-zinc-600"></div>
              </div>
              <div className="text-zinc-500 text-xs tracking-widest uppercase">root@asylumtech:~ - bash</div>
              <div className="w-12"></div>
            </div>
            
            <div className="p-8 text-zinc-300">
              <div className="mb-8">
                <span className="text-emerald-500">root@asylumtech</span>:<span className="text-blue-500">~</span>$ mail -s "Infrastructure Inquiry" contact@asylumtech.com
              </div>
              
              <form action="mailto:contact@asylumtech.com" method="GET" encType="text/plain" className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-zinc-500 mb-2 uppercase text-xs tracking-widest">Subject:</label>
                  <input 
                    type="text" 
                    name="subject"
                    id="subject"
                    defaultValue="Infrastructure Inquiry"
                    className="bg-black border border-zinc-800 p-3 outline-none focus:border-emerald-500 text-emerald-400 placeholder-zinc-800 transition-colors"
                    placeholder="Enter subject..."
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="body" className="text-zinc-500 mb-2 uppercase text-xs tracking-widest">Message:</label>
                  <textarea 
                    name="body"
                    id="body"
                    rows={6}
                    className="bg-black border border-zinc-800 p-3 outline-none focus:border-emerald-500 text-emerald-400 placeholder-zinc-800 transition-colors resize-none"
                    placeholder="Type your message here...&#10;Press Execute to send."
                  ></textarea>
                </div>

                <div className="text-zinc-700">.</div>
                <div className="text-zinc-700 mb-8">EOT</div>

                <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50">
                  <span className="text-emerald-500">root@asylumtech</span>:<span className="text-blue-500">~</span>$ 
                  <button type="submit" className="bg-emerald-500 text-black px-6 py-2 hover:bg-emerald-400 transition-colors font-bold uppercase tracking-wider text-xs">
                    ./execute_send.sh
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm py-12 text-center text-zinc-500 font-mono text-xs uppercase tracking-widest">
        EOF // &copy; 1989-2026 AsylumTech LLC.
      </footer>
    </>
  );
}
