import { useEffect, useState } from "react"

type GithubStats = {
  followers: number
  following: number
  publicRepos: number
  stars: number
  forks: number
  languages: Record<string, number>
  topRepos: any[]
}

export function useGithub() {
  const [github, setGithub] = useState<GithubStats | null>(null)

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setGithub(data))
      .catch((err) => console.error("GitHub API error:", err))
  }, [])

  return github
}