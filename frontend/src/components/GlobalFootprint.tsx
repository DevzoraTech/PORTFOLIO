'use client';

import React, { useState } from 'react';
import { Globe, MapPin, Wifi, Zap } from 'lucide-react';

/* ──────────────────────── Data ──────────────────────── */

interface DeploymentNode {
  id: string;
  city: string;
  country: string;
  region: string;
  lat: number;
  lng: number;
  type: 'headquarters' | 'deployment' | 'client' | 'remote';
  projects: string[];
  status: 'active' | 'standby';
  detail: string;
}

const nodes: DeploymentNode[] = [
  {
    id: 'ug-kla',
    city: 'Kampala',
    country: 'Uganda',
    region: 'East Africa',
    lat: 0.3476,
    lng: 32.5825,
    type: 'headquarters',
    projects: ['REST-OS', 'InsightCore', 'Weyonge', 'Life Care'],
    status: 'active',
    detail: 'Primary engineering headquarters. Core API servers, database clusters, and CI/CD pipelines originate here.'
  },
  {
    id: 'tz-dar',
    city: 'Dar es Salaam',
    country: 'Tanzania',
    region: 'East Africa',
    lat: -6.7924,
    lng: 39.2083,
    type: 'deployment',
    projects: ['Great Naturals Salon'],
    status: 'active',
    detail: 'Enterprise salon management system deployed for high-volume operations across multiple branches.'
  },
  {
    id: 'ke-nbo',
    city: 'Nairobi',
    country: 'Kenya',
    region: 'East Africa',
    lat: -1.2921,
    lng: 36.8219,
    type: 'client',
    projects: ['Carmie Ecosystem'],
    status: 'active',
    detail: 'Carmie vehicle maintenance and roadside recovery platform serves the greater East African market.'
  },
  {
    id: 'us-east',
    city: 'Virginia',
    country: 'United States',
    region: 'North America',
    lat: 37.4316,
    lng: -78.6569,
    type: 'deployment',
    projects: ['REST-OS', 'InsightCore'],
    status: 'active',
    detail: 'AWS us-east-1 infrastructure node. Hosts CDN edge, backup databases, and disaster recovery systems.'
  },
  {
    id: 'eu-fra',
    city: 'Frankfurt',
    country: 'Germany',
    region: 'Europe',
    lat: 50.1109,
    lng: 8.6821,
    type: 'deployment',
    projects: ['REST-OS'],
    status: 'standby',
    detail: 'European edge node for low-latency content delivery. GDPR-compliant data processing.'
  },
  {
    id: 'sg-sin',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia Pacific',
    lat: 1.3521,
    lng: 103.8198,
    type: 'remote',
    projects: [],
    status: 'standby',
    detail: 'Future expansion node. Planned deployment for APAC market penetration.'
  },
];

const typeMeta: Record<string, { label: string; color: string; dotColor: string; bg: string }> = {
  headquarters: { label: 'HQ',        color: 'text-primary',     dotColor: 'bg-primary',      bg: 'bg-primary/10' },
  deployment:   { label: 'Deploy',    color: 'text-emerald-400', dotColor: 'bg-emerald-500',   bg: 'bg-emerald-500/10' },
  client:       { label: 'Client',    color: 'text-cyan-400',    dotColor: 'bg-cyan-500',      bg: 'bg-cyan-500/10' },
  remote:       { label: 'Expansion', color: 'text-amber-400',   dotColor: 'bg-amber-500',     bg: 'bg-amber-500/10' },
};

/* ──────────────────────── Map Rendering ──────────────────────── */

// Simplified but recognizable continent outlines as SVG paths (equirectangular projection, viewBox 0 0 1000 500)
const CONTINENT_PATHS = [
  // North America
  "M 50,120 L 75,95 L 95,80 L 120,70 L 145,60 L 170,55 L 190,58 L 210,60 L 230,55 L 255,52 L 270,58 L 280,70 L 275,85 L 265,95 L 250,105 L 240,115 L 235,130 L 230,145 L 220,155 L 210,165 L 195,175 L 180,180 L 170,195 L 160,205 L 145,210 L 130,215 L 120,205 L 115,190 L 105,180 L 95,170 L 80,160 L 65,150 L 55,140 Z",
  // South America
  "M 185,245 L 200,240 L 215,245 L 225,255 L 230,270 L 235,285 L 240,300 L 245,315 L 248,330 L 250,345 L 248,360 L 242,375 L 235,390 L 225,400 L 215,405 L 205,395 L 195,380 L 190,365 L 185,350 L 180,335 L 178,320 L 175,305 L 172,290 L 175,270 L 178,255 Z",
  // Europe
  "M 450,55 L 465,50 L 480,48 L 500,52 L 515,55 L 530,50 L 540,55 L 550,60 L 555,70 L 548,80 L 540,90 L 530,95 L 520,100 L 510,105 L 500,110 L 490,115 L 478,118 L 468,115 L 458,108 L 450,100 L 445,90 L 442,80 L 445,65 Z",
  // Africa
  "M 455,150 L 470,145 L 490,148 L 510,150 L 530,155 L 545,165 L 550,180 L 555,195 L 558,210 L 555,225 L 550,240 L 548,260 L 545,280 L 540,300 L 530,315 L 520,325 L 508,330 L 495,328 L 482,320 L 472,310 L 465,295 L 458,280 L 452,265 L 448,248 L 445,230 L 440,215 L 438,200 L 440,185 L 442,170 L 445,158 Z",
  // Asia
  "M 555,40 L 580,35 L 610,30 L 640,28 L 670,25 L 700,28 L 730,35 L 755,40 L 775,50 L 790,60 L 800,75 L 805,90 L 800,105 L 790,120 L 775,130 L 760,140 L 745,148 L 728,155 L 710,160 L 690,162 L 670,160 L 650,155 L 630,148 L 615,140 L 600,130 L 588,120 L 575,110 L 565,100 L 558,90 L 555,75 L 552,60 Z",
  // India subcontinent
  "M 640,150 L 660,155 L 670,170 L 675,185 L 672,200 L 665,215 L 655,225 L 645,218 L 638,205 L 632,190 L 630,175 L 632,160 Z",
  // Southeast Asia / Indonesia
  "M 720,175 L 740,170 L 755,175 L 770,185 L 780,195 L 788,205 L 780,212 L 768,210 L 755,208 L 742,205 L 730,195 L 722,185 Z",
  // Australia
  "M 770,290 L 790,280 L 815,278 L 840,282 L 855,290 L 860,305 L 858,320 L 850,335 L 838,342 L 822,345 L 805,342 L 790,335 L 778,322 L 770,308 Z",
  // Japan
  "M 810,80 L 818,70 L 825,75 L 830,85 L 828,95 L 822,102 L 815,98 L 810,90 Z",
  // UK/Ireland
  "M 455,60 L 462,55 L 468,58 L 465,68 L 458,72 L 452,68 Z",
];

function WorldMapSVG({ activeNode, onNodeClick }: {
  activeNode: DeploymentNode | null;
  onNodeClick: (node: DeploymentNode) => void;
}) {
  const toSVG = (lat: number, lng: number) => ({
    x: ((lng + 180) / 360) * 1000,
    y: ((90 - lat) / 180) * 500,
  });

  const hqPos = toSVG(nodes[0].lat, nodes[0].lng);

  return (
    <svg viewBox="0 0 1000 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background Glow */}
      <circle cx={hqPos.x} cy={hqPos.y} r="200" fill="url(#mapGlow)" />

      {/* Grid Lines */}
      {[...Array(21)].map((_, i) => (
        <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={500}
          stroke="currentColor" strokeOpacity={0.03} strokeWidth={0.5} />
      ))}
      {[...Array(11)].map((_, i) => (
        <line key={`h${i}`} x1={0} y1={i * 50} x2={1000} y2={i * 50}
          stroke="currentColor" strokeOpacity={0.03} strokeWidth={0.5} />
      ))}

      {/* Equator & Prime Meridian */}
      <line x1={0} y1={250} x2={1000} y2={250} stroke="#6366f1" strokeOpacity={0.06} strokeWidth={0.5} strokeDasharray="6 6" />
      <line x1={500} y1={0} x2={500} y2={500} stroke="#6366f1" strokeOpacity={0.06} strokeWidth={0.5} strokeDasharray="6 6" />

      {/* Continent Shapes */}
      {CONTINENT_PATHS.map((path, i) => (
        <path
          key={i}
          d={path}
          fill="currentColor"
          fillOpacity={0.06}
          stroke="currentColor"
          strokeOpacity={0.12}
          strokeWidth={0.8}
        />
      ))}

      {/* Connection Lines from HQ */}
      {nodes.filter(n => n.type !== 'headquarters' && n.status === 'active').map((node) => {
        const pos = toSVG(node.lat, node.lng);
        const isActive = activeNode?.id === node.id;
        // Calculate a midpoint with curve
        const midX = (hqPos.x + pos.x) / 2;
        const midY = Math.min(hqPos.y, pos.y) - 40;

        return (
          <g key={`conn-${node.id}`}>
            {/* Data pulse along connection */}
            {isActive && (
              <circle r="3" fill="#6366f1" opacity="0.8" filter="url(#glow)">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path={`M ${hqPos.x} ${hqPos.y} Q ${midX} ${midY} ${pos.x} ${pos.y}`}
                />
              </circle>
            )}
            <path
              d={`M ${hqPos.x} ${hqPos.y} Q ${midX} ${midY} ${pos.x} ${pos.y}`}
              fill="none"
              stroke={isActive ? '#6366f1' : '#ffffff'}
              strokeOpacity={isActive ? 0.5 : 0.08}
              strokeWidth={isActive ? 1.5 : 0.6}
              strokeDasharray={isActive ? '0' : '4 6'}
              className="transition-all duration-700"
            />
          </g>
        );
      })}

      {/* Standby connections (dashed, dim) */}
      {nodes.filter(n => n.type !== 'headquarters' && n.status === 'standby').map((node) => {
        const pos = toSVG(node.lat, node.lng);
        const midX = (hqPos.x + pos.x) / 2;
        const midY = Math.min(hqPos.y, pos.y) - 30;
        return (
          <path
            key={`conn-standby-${node.id}`}
            d={`M ${hqPos.x} ${hqPos.y} Q ${midX} ${midY} ${pos.x} ${pos.y}`}
            fill="none"
            stroke="#f59e0b"
            strokeOpacity={activeNode?.id === node.id ? 0.4 : 0.05}
            strokeWidth={0.5}
            strokeDasharray="3 8"
            className="transition-all duration-700"
          />
        );
      })}

      {/* Node Markers */}
      {nodes.map((node) => {
        const pos = toSVG(node.lat, node.lng);
        const isActive = activeNode?.id === node.id;
        const isHQ = node.type === 'headquarters';
        const color = isHQ ? '#6366f1' : node.status === 'active' ? '#10b981' : '#f59e0b';

        return (
          <g key={node.id} onClick={() => onNodeClick(node)} className="cursor-pointer" role="button">
            {/* Outer pulse */}
            {(isHQ || isActive) && (
              <>
                <circle cx={pos.x} cy={pos.y} r={isHQ ? 20 : 16}
                  fill="none" stroke={color} strokeOpacity={0.2} strokeWidth={0.5}>
                  <animate attributeName="r" values={isHQ ? "14;22;14" : "10;18;10"} dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx={pos.x} cy={pos.y} r={isHQ ? 28 : 22}
                  fill="none" stroke={color} strokeOpacity={0.1} strokeWidth={0.3}>
                  <animate attributeName="r" values={isHQ ? "20;30;20" : "16;24;16"} dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite" />
                </circle>
              </>
            )}

            {/* Crosshair (for active/HQ) */}
            {(isActive || isHQ) && (
              <g stroke={color} strokeOpacity={isActive ? 0.5 : 0.25} strokeWidth={0.5}>
                <line x1={pos.x - 12} y1={pos.y} x2={pos.x - 5} y2={pos.y} />
                <line x1={pos.x + 5} y1={pos.y} x2={pos.x + 12} y2={pos.y} />
                <line x1={pos.x} y1={pos.y - 12} x2={pos.x} y2={pos.y - 5} />
                <line x1={pos.x} y1={pos.y + 5} x2={pos.x} y2={pos.y + 12} />
              </g>
            )}

            {/* Outer ring */}
            <circle cx={pos.x} cy={pos.y}
              r={isActive ? 8 : isHQ ? 7 : 5}
              fill="none" stroke={color}
              strokeOpacity={isActive ? 0.7 : 0.25}
              strokeWidth={isActive ? 1.2 : 0.8}
              className="transition-all duration-500"
            />

            {/* Core dot */}
            <circle cx={pos.x} cy={pos.y}
              r={isHQ ? 4 : isActive ? 3.5 : 2.5}
              fill={color}
              fillOpacity={node.status === 'standby' && !isActive ? 0.4 : 1}
              filter={isActive || isHQ ? "url(#glow)" : undefined}
              className="transition-all duration-500"
            />

            {/* City label */}
            <text x={pos.x} y={pos.y - (isHQ ? 18 : 14)}
              textAnchor="middle"
              fill={color}
              fillOpacity={isActive || isHQ ? 0.9 : 0}
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="2"
              className="uppercase transition-all duration-300"
              style={{ pointerEvents: 'none' }}
            >
              {node.city}
            </text>

            {/* Country tag below */}
            {isActive && (
              <text x={pos.x} y={pos.y + 18}
                textAnchor="middle"
                fill="currentColor"
                fillOpacity={0.3}
                fontSize="7"
                fontFamily="monospace"
                letterSpacing="1"
                className="uppercase"
                style={{ pointerEvents: 'none' }}
              >
                {node.country}
              </text>
            )}
          </g>
        );
      })}

      {/* Coordinate labels at edges */}
      <text x="10" y="253" fill="currentColor" fillOpacity="0.08" fontSize="7" fontFamily="monospace">0° EQUATOR</text>
      <text x="498" y="495" fill="currentColor" fillOpacity="0.08" fontSize="7" fontFamily="monospace" textAnchor="middle">0° MERIDIAN</text>
    </svg>
  );
}

/* ──────────────────────── Component ──────────────────────── */

export const GlobalFootprint = () => {
  const [activeNode, setActiveNode] = useState<DeploymentNode | null>(null);

  const activeCount = nodes.filter(n => n.status === 'active').length;
  const totalProjects = [...new Set(nodes.flatMap(n => n.projects))].length;

  return (
    <section id="global" className="py-28 bg-surface-base relative overflow-hidden">
      {/* Background Ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[200px]" />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <div className="section-label">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Global Operations
            </div>
            <h2 className="section-title">
              Engineering <span className="gradient-text">Without Borders</span>
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-lg">
              Production systems deployed across multiple continents. Click a node to inspect deployment details.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-8">
            <div className="text-right">
              <div className="text-3xl font-display font-black text-text-primary">{activeCount}</div>
              <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Active_Nodes</div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-right">
              <div className="text-3xl font-display font-black text-text-primary">{totalProjects}</div>
              <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Systems</div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-right">
              <div className="text-3xl font-display font-black text-primary">3</div>
              <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Continents</div>
            </div>
          </div>
        </div>

        {/* Map + Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-3 relative border border-border bg-surface-elevated overflow-hidden rounded-sm">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 w-full z-10 px-5 py-3 bg-surface-elevated/90 backdrop-blur-lg border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe size={14} className="text-primary" />
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest font-bold">
                  Devzora_Network_Topology
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi size={11} className="text-emerald-500" />
                <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-wider">NOMINAL</span>
              </div>
            </div>

            {/* SVG World Map */}
            <div className="aspect-[2/1] text-text-primary pt-10 pb-8">
              <WorldMapSVG activeNode={activeNode} onNodeClick={setActiveNode} />
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full px-5 py-2.5 bg-surface-elevated/90 backdrop-blur-lg border-t border-border flex items-center justify-between">
              <span className="text-[8px] font-mono text-text-muted uppercase tracking-widest">
                Equirectangular_Projection // Sync: Live
              </span>
              <div className="flex items-center gap-5">
                {Object.entries(typeMeta).map(([key, meta]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${meta.dotColor}`} />
                    <span className="text-[8px] font-mono text-text-muted uppercase tracking-wider">{meta.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-1">
            {activeNode ? (
              <div className="border border-primary/20 bg-surface-elevated rounded-sm overflow-hidden h-full flex flex-col">
                {/* Header */}
                <div className="p-5 border-b border-border bg-primary/[0.03]">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className={typeMeta[activeNode.type].color} />
                    <span className={`text-[9px] font-mono uppercase tracking-widest font-bold ${typeMeta[activeNode.type].color}`}>
                      {typeMeta[activeNode.type].label}_Node
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-black text-text-primary">{activeNode.city}</h3>
                  <div className="text-xs text-text-muted font-mono">{activeNode.country} • {activeNode.region}</div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-5 flex-1">
                  {/* Status */}
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Status</span>
                    <span className={`text-[10px] font-mono font-bold uppercase flex items-center gap-1.5 ${
                      activeNode.status === 'active' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        activeNode.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                      }`} />
                      {activeNode.status}
                    </span>
                  </div>

                  {/* Coords */}
                  <div className="p-3 bg-surface-muted border border-border rounded-sm font-mono">
                    <div className="text-[8px] text-text-muted uppercase tracking-widest mb-1">GPS_Coordinates</div>
                    <div className="text-[11px] text-text-secondary">
                      {Math.abs(activeNode.lat).toFixed(4)}°{activeNode.lat >= 0 ? 'N' : 'S'}, {Math.abs(activeNode.lng).toFixed(4)}°{activeNode.lng >= 0 ? 'E' : 'W'}
                    </div>
                  </div>

                  {/* Desc */}
                  <p className="text-xs text-text-muted leading-relaxed">{activeNode.detail}</p>

                  {/* Projects */}
                  {activeNode.projects.length > 0 && (
                    <div>
                      <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-3">
                        Deployed ({activeNode.projects.length})
                      </div>
                      <div className="space-y-2">
                        {activeNode.projects.map(proj => (
                          <div key={proj} className="flex items-center gap-2 p-2.5 bg-surface-muted border border-border rounded-sm">
                            <Zap size={10} className="text-primary flex-shrink-0" />
                            <span className="text-[10px] font-mono text-text-secondary">{proj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="border border-border bg-surface-elevated rounded-sm p-8 flex flex-col items-center justify-center h-full text-center min-h-[300px]">
                <div className="w-16 h-16 border-2 border-dashed border-border rounded-full flex items-center justify-center mb-6">
                  <Globe size={24} className="text-text-muted/30" />
                </div>
                <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
                  Awaiting_Selection
                </div>
                <p className="text-xs text-text-muted leading-relaxed max-w-[180px]">
                  Click a deployment node on the map to inspect system details
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Tag */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[8px] font-mono text-text-muted uppercase tracking-[0.5em]">
            Based in Uganda • Deployed Globally • Engineering Without Borders
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
};
