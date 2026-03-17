import { useEffect, useState } from "react"
import { getDatabase, ref, onValue } from "firebase/database"

type ChartData = {
  month: string
  mobile: number
  desktop: number
}

export function useVisitorsChart() {
  const [data, setData] = useState<ChartData[]>([])

  useEffect(() => {
    const db = getDatabase()
    const visitsRef = ref(db, "analytics")

    onValue(visitsRef, (snapshot) => {
      const val = snapshot.val()

      if (!val) return

      const visits = Object.values(val) as any[]

      const grouped: Record<
        string,
        { mobile: number; desktop: number }
      > = {}

      visits.forEach((visit) => {
        const date = new Date(visit.timestamp)

        const month = date.toLocaleString("pt-BR", {
          month: "short",
          year: "numeric",
        })

        if (!grouped[month]) {
          grouped[month] = { mobile: 0, desktop: 0 }
        }

        if (visit.device === "mobile") {
          grouped[month].mobile++
        } else {
          grouped[month].desktop++
        }
      })

      const chart = Object.entries(grouped).map(
        ([month, devices]) => ({
          month,
          mobile: devices.mobile,
          desktop: devices.desktop,
        })
      )

      setData(chart)
    })
  }, [])

  return data
}