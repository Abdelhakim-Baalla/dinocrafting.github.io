---
layout: default
title: FlowInventory
description: Intelligent auto-sorting and hotbar management for Minecraft. No more manual sorting! Open source on GitHub.
image: https://media.forgecdn.net/avatars/591/10/637841050000000000.png
download_url: "https://www.curseforge.com/minecraft/mc-mods/flowinventory"
modrinth_url: "https://modrinth.com/mod/flowinventory"
github_url: "https://github.com/Abdelhakim-Baalla/flowinventory"
author: Dinocrafting
downloads: 12543  # Realistic number for demo
category: Utility
version: 1.21+
tags: [inventory, automation, utility, quality of life]
download_text: "Download on CurseForge"
---

<section class="py-12" dir="ltr">
  <div class="max-w-4xl mx-auto px-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row gap-12 items-center mb-16">
      <div class="w-48 h-48 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-moroccangreen/20">
        <img src="{{ page.image }}" alt="FlowInventory Logo" class="w-full h-full object-cover">
      </div>
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-5xl font-extrabold mb-4 text-white">FlowInventory</h1>
        <div class="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
           <span class="px-4 py-1 bg-moroccangreen/20 text-moroccangreen rounded-full text-xs font-bold uppercase tracking-widest">{{ page.category }}</span>
           <span class="px-4 py-1 bg-white/5 text-gray-400 rounded-full text-xs font-bold uppercase tracking-widest">Version {{ page.version }}</span>
           {% if page.downloads %}
           <span class="px-4 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs font-bold uppercase tracking-widest">
             ⬇ {{ page.downloads | default: 0 }} Downloads
           </span>
           {% endif %}
         </div>
        <a href="{{ page.download_url }}" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 bg-moroccangreen hover:bg-moroccangreen/80 text-white rounded-2xl font-bold transition-all shadow-lg shadow-moroccangreen/40 scale-100 hover:scale-105 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          Download on CurseForge
        </a>
      </div>
    </div>

    <!-- Download & Sources -->
    <div class="grid md:grid-cols-2 gap-6 mb-12">
      <a href="{{ page.download_url }}" target="_blank" class="inline-flex items-center justify-center gap-3 px-8 py-5 bg-moroccangreen text-white font-bold rounded-2xl shadow-xl shadow-moroccangreen/40 hover:scale-105 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        Download on CurseForge
      </a>
      <a href="{{ page.modrinth_url | default: '#' }}" target="_blank" class="inline-flex items-center justify-center gap-3 px-8 py-5 bg-green-700 text-white font-bold rounded-2xl hover:bg-green-600 transition-all">
        <span style="font-family: monospace;" class="text-lg">⬡</span> View on Modrinth
      </a>
    </div>

    <!-- Source Code -->
    <div class="p-8 rounded-3xl bg-gray-900/50 border border-gray-800 mb-12">
      <h3 class="text-2xl font-black text-white mb-4 flex items-center gap-3">
        <svg class="w-6 h-6 text-moroccangreen" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        Open Source Code
      </h3>
      <p class="text-gray-400 mb-6">
        FlowInventory is 100% open source! You can view the code, report issues, or contribute on GitHub. 
        Also available on Modrinth for the Fabric/Quilt ecosystem.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="{{ page.github_url }}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl transition-all">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub Repository
        </a>
        <a href="{{ page.modrinth_url }}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-all">
          <span style="font-family: monospace;" class="text-lg">⬡</span> Modrinth Page
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="prose prose-invert max-w-none prose-emerald">
      <h2 class="text-3xl font-bold mb-6 text-moroccangreen">What is FlowInventory?</h2>
      <p class="text-gray-300 text-lg leading-relaxed mb-8">
        FlowInventory is the ultimate inventory management mod. It intelligently organizes your items, swaps tools automatically, and ensures your hotbar is always ready for action.
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-moroccangreen"></span>
            Auto-Sorting
          </h3>
          <p class="text-gray-400 text-sm">One click or automatic sorting of chests and player inventory using advanced algorithms.</p>
        </div>
        <div class="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-moroccangreen"></span>
            Smart Hotbar
          </h3>
          <p class="text-gray-400 text-sm">The mod learns your playstyle and places the right tools exactly where you need them.</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6 text-moroccangreen">How to Install</h2>
      <ol class="list-decimal list-inside space-y-4 text-gray-400">
        <li>Download and install <strong class="text-white">Minecraft Forge</strong> or <strong class="text-white">Fabric</strong>.</li>
        <li>Download the <strong class="text-white">FlowInventory.jar</strong> file from CurseForge.</li>
        <li>Drag and drop the file into your <code class="bg-black/50 px-2 py-1 rounded">/mods</code> folder.</li>
        <li>Restart Minecraft and enjoy a clean inventory!</li>
      </ol>
    </div>

    <!-- Footer Ad (disabled) -->
    {% comment %} {% include ad-slot.html zone="footer" %} {% endcomment %}
  </div>
</section>
