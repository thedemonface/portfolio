import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import Computer from "./Computer";

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = document.getElementById("contact");
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (isMobile) {
    return (
      <div className="flex h-full min-h-96 w-full items-center justify-center px-8 text-center">
        <p className="text-3xl font-semibold text-white">
          Pune
          <br />
          Open to a conversation
        </p>
      </div>
    );
  }

  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 3, 7], fov: 45 }}
    >
      <ambientLight intensity={0.5} color="#fff4e6" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
      <directionalLight position={[5, 9, 1]} intensity={2.5} color="#ffd9b3" />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]}>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
