"use client";

import dynamic from "next/dynamic";

const CureHelix = dynamic(() => import("../../components/three/CureHelix"), {
  ssr: false,
  loading: () => <div className="cure-helix-placeholder">Loading 3D visualization...</div>,
});

export default function CureHelixCanvas() {
  return <CureHelix />;
}
