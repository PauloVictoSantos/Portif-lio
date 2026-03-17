export async function GET() {
  const username = "PauloVictoSantos";

  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
  };

  const userRes = await fetch(`https://api.github.com/users/${username}`, {
    headers,
    cache: "no-store",
  });

  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`,
    { headers, cache: "no-store" }
  );

  const eventsRes = await fetch(
    `https://api.github.com/users/${username}/events?per_page=100`,
    { headers, cache: "no-store" }
  );

  const contribRes = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}`,
    { cache: "no-store" }
  );

  const contrib = await contribRes.json();
  const year = new Date().getFullYear();
  const commitsYear = contrib.total[year] || 0;
  const user = await userRes.json();
  const repos = await reposRes.json();
  const events = await eventsRes.json();

  let totalStars = 0;
  let totalForks = 0;
  let totalCommits = 0;
  let totalPushes = 0;

  const languages: Record<string, number> = {};

  repos
    .filter((repo: any) => !repo.fork)
    .forEach((repo: any) => {
      totalStars += repo.stargazers_count;
      totalForks += repo.forks_count;

      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

  events.forEach((event: any) => {
    if (event.type === "PushEvent") {
      totalPushes += 1;
      totalCommits += event.payload.commits?.length || 0;
    }
  });

  const topRepos = repos
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);

  return Response.json({
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos,
    stars: totalStars,
    forks: totalForks,
    commits: totalCommits,
    pushes: totalPushes,
    languages,
    topRepos,
  });
}
