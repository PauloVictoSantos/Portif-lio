export async function GET() {
  const username = "PauloVictoSantos"

  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    }
  )

  const repos = await reposRes.json()

  const languages: Record<string, number> = {}

  for (const repo of repos) {
    const langRes = await fetch(repo.languages_url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })

    const repoLangs = await langRes.json()

    for (const lang in repoLangs) {
      languages[lang] = (languages[lang] || 0) + repoLangs[lang]
    }
  }

  return Response.json(languages)
}