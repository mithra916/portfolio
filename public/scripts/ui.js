document.querySelectorAll(".glass").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.background = `
      radial-gradient(
        400px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px,
        rgba(139,124,255,0.15),
        transparent 40%
      ),
      linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background =
      "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))";
  });
});


// fetch GitHub stats
fetch("https://api.github.com/users/mithra916")
  .then(res => res.json())
  .then(data => {
    document.getElementById("gh-repos").innerText = data.public_repos;
    document.getElementById("gh-followers").innerText = data.followers;
    document.getElementById("gh-stars").innerText = data.public_gists;
  })
  .catch(err => console.error("GitHub API failed", err));
