import { motion } from "framer-motion";

const BLINK_ANIM = {
  animate: { scaleY: [1, 1, 0.06, 1, 1] as number[] },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    times: [0, 0.4, 0.45, 0.5, 1],
  },
};

export default function RobotToy({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center"
        style={{ filter: "drop-shadow(0 32px 52px rgba(0,0,0,0.22))" }}
      >
        {/* ── Microphone arm ── */}
        <svg
          width="110"
          height="66"
          viewBox="0 0 110 66"
          style={{
            position: "absolute",
            top: -52,
            left: "50%",
            transform: "translateX(-52%)",
            overflow: "visible",
          }}
        >
          {/* flexible gooseneck arm */}
          <path
            d="M 66 60 Q 50 38 30 16"
            stroke="#3a3a3a"
            strokeWidth="3.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* mic body */}
          <ellipse cx="26" cy="11" rx="6" ry="9.5" fill="#1e1e1e" />
          {/* grille slits */}
          {[5, 9, 14].map((y) => (
            <line
              key={y}
              x1="20" y1={y} x2="32" y2={y}
              stroke="#3a3a3a" strokeWidth="1.2" opacity="0.55"
            />
          ))}
          {/* recording LED */}
          <circle cx="34" cy="4" r="3.2" fill="#ff3030">
            <animate
              attributeName="opacity"
              values="1;0.12;1"
              dur="1.6s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* ── Head ── */}
        <motion.div
          animate={{ rotateZ: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 182,
            height: 158,
            background:
              "radial-gradient(ellipse at 37% 28%, #ffffff 0%, #ededed 50%, #c8c8c8 100%)",
            borderRadius: "52% 52% 46% 46% / 58% 58% 44% 44%",
            boxShadow:
              "inset -14px -12px 26px rgba(0,0,0,0.11), inset 7px 7px 18px rgba(255,255,255,0.7), 5px 10px 28px rgba(0,0,0,0.16)",
            position: "relative",
          }}
        >
          {/* ── Left eye ── */}
          <motion.div
            animate={BLINK_ANIM.animate}
            transition={BLINK_ANIM.transition}
            style={{
              position: "absolute",
              left: 18,
              top: 48,
              width: 64,
              height: 64,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 32% 30%, #272727 0%, #020202 72%)",
              boxShadow:
                "inset 0 6px 16px rgba(0,0,0,0.9), 0 0 0 3.5px rgba(185,185,185,0.4)",
              transformOrigin: "center center",
            }}
          >
            {/* primary shine */}
            <div
              style={{
                position: "absolute",
                top: 9, left: 12,
                width: 17, height: 13,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.44)",
              }}
            />
            {/* secondary shine */}
            <div
              style={{
                position: "absolute",
                top: 27, left: 29,
                width: 7, height: 6,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
              }}
            />
          </motion.div>

          {/* ── Right eye ── */}
          <motion.div
            animate={BLINK_ANIM.animate}
            transition={{ ...BLINK_ANIM.transition, delay: 0.06 }}
            style={{
              position: "absolute",
              right: 18,
              top: 48,
              width: 64,
              height: 64,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 32% 30%, #272727 0%, #020202 72%)",
              boxShadow:
                "inset 0 6px 16px rgba(0,0,0,0.9), 0 0 0 3.5px rgba(185,185,185,0.4)",
              transformOrigin: "center center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 9, left: 12,
                width: 17, height: 13,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.44)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* ── Body ── */}
        <div
          style={{
            width: 158,
            height: 140,
            marginTop: 5,
            background:
              "radial-gradient(ellipse at 30% 18%, #f8f8f8 0%, #e4e4e4 45%, #c2c2c2 100%)",
            borderRadius: 20,
            boxShadow:
              "inset -10px -10px 22px rgba(0,0,0,0.09), inset 5px 5px 16px rgba(255,255,255,0.82), 4px 8px 22px rgba(0,0,0,0.13)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* 3-D print layer lines */}
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 16, right: 16,
                top: 18 + i * 17,
                height: 1,
                background: "rgba(0,0,0,0.048)",
              }}
            />
          ))}
          {/* chest panel */}
          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: "50%",
              transform: "translateX(-50%)",
              width: 66,
              height: 24,
              borderRadius: 8,
              background: "rgba(0,0,0,0.055)",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.07)",
            }}
          />
        </div>

        {/* ── Left arm ── */}
        <motion.div
          animate={{ rotateZ: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          style={{
            position: "absolute",
            left: -28,
            top: 160,
            width: 34,
            height: 94,
            background:
              "radial-gradient(ellipse at 32% 18%, #f4f4f4 0%, #d6d6d6 100%)",
            borderRadius: 14,
            boxShadow:
              "inset -4px -5px 12px rgba(0,0,0,0.09), inset 3px 3px 9px rgba(255,255,255,0.72), 2px 4px 12px rgba(0,0,0,0.09)",
            transformOrigin: "top center",
          }}
        />

        {/* ── Right arm ── */}
        <motion.div
          animate={{ rotateZ: [4, -4, 4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          style={{
            position: "absolute",
            right: -28,
            top: 160,
            width: 34,
            height: 94,
            background:
              "radial-gradient(ellipse at 32% 18%, #f4f4f4 0%, #d6d6d6 100%)",
            borderRadius: 14,
            boxShadow:
              "inset -4px -5px 12px rgba(0,0,0,0.09), inset 3px 3px 9px rgba(255,255,255,0.72), 2px 4px 12px rgba(0,0,0,0.09)",
            transformOrigin: "top center",
          }}
        />

        {/* ── Ground shadow ── */}
        <motion.div
          animate={{ scaleX: [1, 0.78, 1], opacity: [0.22, 0.1, 0.22] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 148,
            height: 18,
            marginTop: 14,
            background:
              "radial-gradient(ellipse, rgba(0,0,0,0.28) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </div>
  );
}
