import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import myPic from "@/assets/mypic.jpeg";
import { Suspense } from "react";

const FloatingIcon = ({ position, color }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.5]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#A855F7" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
      
      <FloatingIcon position={[-2, 1, 0]} color="#A855F7" />
      <FloatingIcon position={[2, -1, 0]} color="#06B6D4" />
      <FloatingIcon position={[0, 1.5, -1]} color="#8B5CF6" />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

export const HeroSection = ({ jumpToProjects, jumpToContact }) => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-[#181825] to-[#232347] px-4 md:px-8"
      style={{ minHeight: 'calc(100vh - 80px)', marginTop: '80px' }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto max-w-7xl w-full z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 py-20">
        
        {/* Left: Profile Image Space */}
        <motion.div
          className="flex flex-col items-center justify-center w-full lg:w-2/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent blur-xl opacity-50 animate-pulse" />

            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-primary/70 shadow-2xl z-10">
              <img src={myPic} alt="Karthikraja J" className="w-full h-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
              <div className="absolute w-[115%] h-[115%] rounded-full border-2 border-primary/30 animate-[spin_18s_linear_infinite]" />
              <div className="absolute w-[130%] h-[130%] rounded-full border border-accent/25 animate-[spin_24s_linear_infinite_reverse]" />
              <div className="absolute w-[150%] h-[150%] rounded-full bg-[conic-gradient(var(--tw-gradient-from)_0%,transparent_20%,var(--tw-gradient-to)_40%,transparent_60%)] from-primary/25 to-accent/25 animate-[spin_30s_linear_infinite]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: All Text Content */}
        <motion.div
          className="flex flex-col items-start justify-center w-full lg:w-3/5 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Main Headline */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Hi, I'm <span className="text-primary drop-shadow-2xl">Karthikraja J.</span>
            </h1>
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Turning ideas into interactive, scalable web experiences.
              </span>
            </h2>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I'm a full-stack developer passionate about crafting sleek user interfaces, building high-performance backend systems, and blending creativity with clean, maintainable code. Whether it's React.js, Spring Boot, or Full stack, I thrive on bringing concepts to life with precision and performance.
          </motion.p>

          {/* Supporting Statement */}
          <motion.p
            className="text-xl lg:text-2xl text-primary font-semibold max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From responsive websites to cloud-integrated platforms, I deliver solutions that work flawlessly and look stunning.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 w-full pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button 
              variant="hero" 
              size="hero" 
              className="w-full sm:w-auto px-6 py-3"
              onClick={jumpToProjects} // 🔹 Directly calls PortfolioLayout's jump
            >
              Explore My Work
            </Button>
            <Button 
              variant="neon" 
              size="lg" 
              className="w-full sm:w-auto px-6 py-3"
              onClick={jumpToContact} // 🔹 Directly calls PortfolioLayout's jump
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
    </section>
  );
};
