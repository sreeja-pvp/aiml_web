const RAW_DATA = [
  { academic: "2025-2026", studyYear: "II Year", sem: "Sem-I", pct: 98.63 },
  { academic: "2025-2026", studyYear: "II Year", sem: "Sem-II", pct: null },
  { academic: "2025-2026", studyYear: "III Year", sem: "Sem-I", pct: 94.28 },
  { academic: "2025-2026", studyYear: "III Year", sem: "Sem-II", pct: null },
  { academic: "2025-2026", studyYear: "IV Year", sem: "Sem-I", pct: 97.14 },
  { academic: "2025-2026", studyYear: "IV Year", sem: "Sem-II", pct: null },
  { academic: "2024-2025", studyYear: "II Year", sem: "Sem-I", pct: 95.71 },
  { academic: "2024-2025", studyYear: "II Year", sem: "Sem-II", pct: 92.86 },
  { academic: "2024-2025", studyYear: "III Year", sem: "Sem-I", pct: 91.43 },
  { academic: "2024-2025", studyYear: "III Year", sem: "Sem-II", pct: 100 },
  { academic: "2023-2024", studyYear: "II Year", sem: "Sem-I", pct: 87.32 },
  { academic: "2023-2024", studyYear: "II Year", sem: "Sem-II", pct: 92.96 },
];

function colorClass(p) {
  if (p === null) return "";
  if (p >= 97) return "excellent";
  if (p >= 92) return "good";
  if (p >= 88) return "average";
  return "low";
}
function fillClass(p) {
  if (p === null) return "";
  if (p >= 97) return "fill-excellent";
  if (p >= 92) return "fill-good";
  if (p >= 88) return "fill-average";
  return "fill-low";
}

function getFiltered() {
  const ay = document.getElementById("filterYear").value;
  const sy = document.getElementById("filterStudyYear").value;
  const sem = document.getElementById("filterSem").value;
  return RAW_DATA.filter(
    (r) =>
      (ay === "all" || r.academic === ay) &&
      (sy === "all" || r.studyYear === sy) &&
      (sem === "all" || r.sem === sem),
  );
}

function buildStats(data) {
  const nums = data.filter((r) => r.pct !== null).map((r) => r.pct);
  const avg = nums.length
    ? (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2)
    : "—";
  const high = nums.length ? Math.max(...nums).toFixed(2) : "—";
  const years = [...new Set(RAW_DATA.map((r) => r.academic))].length;
  document.getElementById("statOverall").textContent =
    avg + (avg !== "—" ? "%" : "");
  document.getElementById("statHighest").textContent =
    high + (high !== "—" ? "%" : "");
  document.getElementById("statBatches").textContent = years;
  document.getElementById("statExams").textContent = nums.length;
}

function buildTable(data) {
  const section = document.getElementById("tableSection");
  section.innerHTML = "";
  const years = [...new Set(data.map((r) => r.academic))];
  if (!years.length) {
    section.innerHTML =
      '<p class="text-center" style="color:var(--muted);padding:40px 0;">No data matches the selected filters.</p>';
    return;
  }
  years.forEach((ay) => {
    const rows = data.filter((r) => r.academic === ay);
    const block = document.createElement("div");
    block.className = "year-block";
    block.innerHTML = `
        <div class="year-heading">
          <span class="year-pill">${ay}</span>
          <div class="year-line"></div>
        </div>
        <div class="table-responsive">
        <table class="result-table">
          <thead>
            <tr>
              <th>Study Year</th>
              <th>Semester</th>
              <th>Pass Percentage</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (r) => `
              <tr>
                <td style="font-weight:600;">${r.studyYear}</td>
                <td><span class="sem-badge">${r.sem}</span></td>
                <td>
                  ${
                    r.pct !== null
                      ? `
                    <div class="pct-wrap">
                      <div class="pct-bar-bg">
                        <div class="pct-bar-fill ${fillClass(r.pct)}" data-pct="${r.pct}" style="width:0%"></div>
                      </div>
                      <span class="pct-val ${colorClass(r.pct)}">${r.pct}%</span>
                    </div>
                  `
                      : '<span class="pct-na">Results Awaited</span>'
                  }
                </td>
              </tr>
            `,
              )
              .join("")}
          </tbody>
        </table>
        </div>
      `;
    section.appendChild(block);
  });

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll(".pct-bar-fill").forEach((el) => {
      el.style.width = Math.min(parseFloat(el.dataset.pct), 100) + "%";
    });
  }, 100);
}

function buildChart(data) {
  const chart = document.getElementById("barChart");
  chart.innerHTML = "";
  const valid = data.filter((r) => r.pct !== null);
  if (!valid.length) {
    chart.innerHTML =
      '<p style="color:var(--muted);font-size:0.85rem;">No data to display.</p>';
    return;
  }
  valid.forEach((r) => {
    const label = `${r.academic} · ${r.studyYear} · ${r.sem}`;
    const row = document.createElement("div");
    row.className = "bar-row";
    const barColor =
      r.pct >= 97
        ? "fill-excellent"
        : r.pct >= 92
          ? "fill-good"
          : r.pct >= 88
            ? "fill-average"
            : "fill-low";

    row.innerHTML = `
        <div class="bar-label">${r.studyYear} ${r.sem}<br><span style="font-size:0.66rem;opacity:0.6">${r.academic}</span></div>
        <div class="bar-outer">
            <div class="bar-inner ${barColor}" data-pct="${r.pct}" style="width:0%">${r.pct}%</div>
        </div>
    `;
    chart.appendChild(row);
  });
  setTimeout(() => {
    document.querySelectorAll(".bar-inner").forEach((el) => {
      el.style.width = Math.min(parseFloat(el.dataset.pct), 100) + "%";
    });
  }, 150);
}

function populateYearFilter() {
  const sel = document.getElementById("filterYear");
  const years = [...new Set(RAW_DATA.map((r) => r.academic))];
  years.forEach((y) => {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    sel.appendChild(opt);
  });
}

function render() {
  const filtered = getFiltered();
  buildStats(filtered);
  buildTable(filtered);
  buildChart(filtered);
}

// Stat card entrance animation
function animateCards() {
  document.querySelectorAll(".stat-card").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 100);
  });
}

document.getElementById("filterYear").addEventListener("change", render);
document.getElementById("filterStudyYear").addEventListener("change", render);
document.getElementById("filterSem").addEventListener("change", render);

populateYearFilter();
render();
animateCards();
