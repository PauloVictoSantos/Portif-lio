import { useEffect, useState } from "react"

type LanguageData = {
  tech: string
  value: number
}

export function useGithubLanguages() {
  const [data, setData] = useState<LanguageData[]>([])

  useEffect(() => {
    fetch("/api/github-languages")
      .then((res) => res.json())
      .then((langs: Record<string, number>) => {

        const formatted: LanguageData[] = Object.entries(langs)
          .map(([tech, value]) => ({
            tech,
            value: Number(value),
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 6)

        setData(formatted)
      })
  }, [])

  return data
}