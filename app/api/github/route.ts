export async function GET() {
  const username = "PauloVictoSantos"

  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  }

  const userRes = await fetch(
    `https://api.github.com/users/${username}`,
    { headers, next: { revalidate: 3600 } }
  )

  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos`,
    { headers, next: { revalidate: 3600 } }
  )

  const eventsRes = await fetch(
    `https://api.github.com/users/${username}/events`,
    { headers, next: { revalidate: 3600 } }
  )

  const user = await userRes.json()
  const repos = await reposRes.json()
  const events = await eventsRes.json()

  const totalCommits = events.filter(
    (e: any) => e.type === "PushEvent"
  ).length

  const totalPRs = events.filter(
    (e: any) => e.type === "PullRequestEvent"
  ).length

  return Response.json({
    followers: user.followers,
    publicRepos: user.public_repos,
    following: user.following,
    commits: totalCommits,
    pullRequests: totalPRs,
    repos: repos.slice(0, 6),
  })
}