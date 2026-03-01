"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Home, Folder, BarChart3, Mail } from "lucide-react"

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiC,
  SiGithub,
} from "react-icons/si"

const pages = ["home", "projects", "stats", "contact"]

const techs = [
  { name: "React", icon: <SiReact size={28} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} color="white" /> },
  { name: "TypeScript", icon: <SiTypescript size={28} color="#3178C6" /> },
  { name: "JavaScript", icon: <SiJavascript size={28} color="#F7DF1E" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={28} color="#38BDF8" /> },
  { name: "Node.js", icon: <SiNodedotjs size={28} color="#68A063" /> },
  { name: "C", icon: <SiC size={28} color="#A8B9CC" /> },
  { name: "GitHub", icon: <SiGithub size={28} color="white" /> },
]

const VisionCard = ({ children }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    className="
      relative rounded-[32px] p-6
      bg-white/10
      backdrop-blur-3xl
      border border-white/20
      
    "
  >
    <div className="absolute inset-0 rounded-[32px] bg-linear-to-br from-white/30 to-transparent opacity-40 pointer-events-none" />
    {children}
  </motion.div>
)

const FloatingStat = ({ label, value }: any) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="
      p-5 rounded-2xl 
      bg-white/10 backdrop-blur-2xl 
      border border-white/20
      shadow-lg
      text-center
    "
  >
    <p className="text-2xl font-bold text-white">{value}</p>
    <p className="text-xs text-white/70 mt-2 tracking-wider">
      {label}
    </p>
  </motion.div>
)

function HomeScreen() {
  return (
    <div className="px-4 pb-24 space-y-10">

      <VisionCard>
        <h2 className="text-lg font-semibold tracking-wide">
          Paulo Santos
        </h2>

        <p className="text-sm text-white/70 mt-3 leading-relaxed">
          Engenharia da Computação • React • Next.js • Performance
        </p>
      </VisionCard>

      <h3 className="text-white/80 text-sm tracking-wider">
        Tecnologias
      </h3>

      <div className="grid grid-cols-4 gap-y-10 gap-x-4 place-items-center">

        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center w-17.5"
          >
            <div
              className="
                w-15.5 h-15.5
                flex items-center justify-center
                bg-white/10
                backdrop-blur-2xl
                border border-white/20
                shadow-lg
              "
              style={{
                borderRadius:
                  "40% 60% 55% 45% / 45% 45% 55% 55%",
              }}
            >
              {tech.icon}
            </div>

            <span className="text-[11px] text-white mt-3 text-center w-full">
              {tech.name}
            </span>
          </motion.div>
        ))}

      </div>
    </div>
  )
}

export default function PhoneContent() {
  const [activePage, setActivePage] = useState("home")
  const [github, setGithub] = useState<any>(null)
  const [time, setTime] = useState("")
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null)
  const [isCharging, setIsCharging] = useState(false)
  const [networkType, setNetworkType] = useState<string | null>(null)
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const h = now.getHours().toString().padStart(2, "0")
      const m = now.getMinutes().toString().padStart(2, "0")
      setTime(`${h}:${m}`)
    }
    updateTime()
    const i = setInterval(updateTime, 1000)
    return () => clearInterval(i)
  }, [])

  useEffect(() => {
    const getBattery = async () => {
      try {
        const battery = await (navigator as any).getBattery()

        const updateBattery = () => {
          setBatteryLevel(Math.round(battery.level * 100))
          setIsCharging(battery.charging)
        }

        updateBattery()

        battery.addEventListener("levelchange", updateBattery)
        battery.addEventListener("chargingchange", updateBattery)

      } catch (err) {
        console.log("Battery API não suportada")
      }
    }

    if ("getBattery" in navigator) {
      getBattery()
    }
  }, [])

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }

    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    if ("connection" in navigator) {
      const connection = (navigator as any).connection

      const updateConnection = () => {
        setNetworkType(connection.effectiveType)
      }

      updateConnection()

      connection.addEventListener("change", updateConnection)
    }

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [])

  useEffect(() => {
    fetch("/api/github")
      .then(res => res.json())
      .then(data => setGithub(data))
  }, [])

  return (
    <div className="relative mx-auto h-full overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-purple-600 to-pink-500" />
      <div className="absolute w-125 h-125 bg-white/20 blur-[140px] rounded-full -top-40 -left-40 animate-pulse" />
      <div className="absolute w-100 h-100 bg-cyan-400/30 blur-[120px] rounded-full bottom-0 right-0 animate-pulse" />

      <div className="relative flex flex-col h-full pt-6 text-white">

        <div className="flex justify-between text-xs opacity-90 px-6 mb-6">

          <span>{time}</span>

          <div className="flex items-center gap-3">

            {isOnline ? (
              <div className="flex items-center gap-1">
                <span className="text-[10px] uppercase">
                  {networkType ? networkType : "Wi-Fi"}
                </span>
              </div>
            ) : (
              <span className="text-red-400 text-[10px]">
                Offline
              </span>
            )}

            {batteryLevel !== null ? (
              <div className="flex items-center gap-1">
                <div className="relative w-6 h-3 border border-white rounded-sm">
                  <div
                    className={`absolute left-0 top-0 h-full rounded-sm transition-all ${batteryLevel < 20
                      ? "bg-red-500"
                      : "bg-white"
                      }`}
                    style={{ width: `${batteryLevel}%` }}
                  />
                </div>
                <span className="text-[10px]">
                  {batteryLevel}%
                </span>
                {isCharging && <span>⚡</span>}
              </div>
            ) : (
              <span>🔋 --%</span>
            )}

          </div>
        </div>

        <motion.div
          className="flex flex-1"
          drag="x"
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.x < -120) {
              const i = pages.indexOf(activePage)
              setActivePage(pages[Math.min(i + 1, pages.length - 1)])
            }
            if (info.offset.x > 120) {
              const i = pages.indexOf(activePage)
              setActivePage(pages[Math.max(i - 1, 0)])
            }
          }}
          animate={{ x: `-${pages.indexOf(activePage) * 100}%` }}
          transition={{ type: "spring", stiffness: 110, damping: 18 }}
        >

          <div className="min-w-full overflow-y-auto">
            <HomeScreen />
          </div>

          <div className="min-w-full px-4 space-y-6 ">

            <VisionCard>
              <h3 className="font-semibold text-base">
                epo.name
              </h3>
              <p className="text-sm text-white/70 mt-3">
                description || "Sem descrição"
              </p>
            </VisionCard>

          </div>

          <div className="min-w-full px-4 space-y-6 overflow-y-auto pb-24">
            {github && (
              <VisionCard>
                <h3 className="text-base font-semibold mb-6">
                  GitHub Overview
                </h3>

                <div className="grid grid-cols-2 gap-5">
                  <FloatingStat label="Repos" value={github.publicRepos} />
                  <FloatingStat label="Followers" value={github.followers} />
                  <FloatingStat label="Following" value={github.following} />
                </div>
              </VisionCard>
            )}
          </div>

          <div className="min-w-full px-4 space-y-6 overflow-y-auto pb-24">
            <VisionCard>
              <h3 className="text-base font-semibold mb-6">
                Contato
              </h3>

              <div className="space-y-4">
                <input className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 text-sm" placeholder="Nome" />
                <input className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 text-sm" placeholder="Email" />
                <textarea className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 text-sm" placeholder="Mensagem" />
                <button className="w-full py-4 rounded-xl bg-white/30 backdrop-blur-xl border border-white/20 font-semibold">
                  Enviar
                </button>
              </div>
            </VisionCard>
          </div>

        </motion.div>

        <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%]">
          <div className="
            bg-white/20 backdrop-blur-3xl 
            border border-white/30 
            rounded-full px-10 py-4 
            flex justify-between
          ">
            <button className=" cursor-pointer" onClick={() => setActivePage("home")}><Home size={20} /></button>
            <button className=" cursor-pointer" onClick={() => setActivePage("projects")}><Folder size={20} /></button>
            <button className=" cursor-pointer" onClick={() => setActivePage("stats")}><BarChart3 size={20} /></button>
            <button className=" cursor-pointer" onClick={() => setActivePage("contact")}><Mail size={20} /></button>
          </div>
        </footer>
      </div>
    </div>
  )
}