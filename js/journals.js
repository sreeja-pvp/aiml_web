const facultyPrograms_2025_26 = [
  /*{
    authors: "PARUCHURI JAYASRI",
    title:
      "Machine Learning in Image Processing Driving Innovation in Visual Data Analysis",
    journal: "Journal of Theoretical and Applied Information Technology",
    issn: "1992-8645",
    volume: "103",
    issue: "19",
    pages: "8202-8211",
    monthYear: "October 2025",
    indexing: "Scopus",
    paperLink: "https://www.jatit.org/volumes/Vol103No19/32Vol103No19.pdf",
    ProfileLinks: "https://tinyurl.com/jayasri1",
  },*/
  {
    authors: "Pamidimukkala Sai Geetha",
    title:
      "Brain Tumor Detection from MRI Images Using Window Aware Hierarchical Auto-Associative Polynomial Network",
    journal: "Biomedical Materials and Devices",
    issn: "2731-4812",
    volume: "",
    issue: "",
    pages: "",
    monthYear: "October 2025",
    indexing: "Scopus",
    paperLink: "https://doi.org/10.1007/s44174-025-00558-0",
    ProfileLinks: {
      Scopus: "https://www.scopus.com/authid/detail.uri?authorId=60151139100",
    },
  },
];

const facultyPrograms_2024_25 = [
  {
    authors: "Deepa T",
    title:
      "Detection of Depression in Social Media Posts using Emotional Intensity Analysis",
    journal: "Engineering, Technology & Applied Science Research",
    issn: "1792-8036",
    volume: "14",
    issue: "5",
    pages: "16207-16211",
    monthYear: "October 2024",
    indexing: "Scopus",
    paperLink: "https://etasr.com/index.php/ETASR/article/view/7461",
    ProfileLinks: {
      Scopus: "https://www.scopus.com/authid/detail.uri?authorId=58443763100",
    },
  },
  {
    authors: "G.Venkata Krishna",
    title:
      "BrainLang DL: A Deep Learning Approach to FMRI for Unveiling Neural Correlates of Language across Cultures",
    journal:
      "International Journal of Advanced Computer Science and Applications",
    issn: "2156-5570",
    volume: "15",
    issue: "6",
    pages: "1124-1133",
    monthYear: "June 2024",
    indexing: "Scopus",
    paperLink: "https://www.scopus.com/authid/detail.uri?authorId=59157078700",
    ProfileLinks: {
      Scopus: "https://www.scopus.com/authid/detail.uri?authorId=59157078700",
    },
  },
];
const facultyPrograms_2023_24 = [
  {
    authors: "Naresh Cherukuri",
    title:
      "Convolutional Neural Networks for Automated Diagnosis of Diabetic Retinopathy in Fundus Images.",
    journal: "Journal of Artificial Intelligence and Technology",
    issn: "2766-8649",
    volume: "3",
    issue: "4",
    pages: "205-214",
    monthYear: "August 2023",
    indexing: "Scopus",
    paperLink: "https://ojs.istp-press.com/jait/article/view/264",
    ProfileLinks: {
      Scopus: "https://www.scopus.com/authid/detail.uri?authorId=57223128560",
    },
  },
];
const facultyPrograms_2022_23 = [
  {
    authors: "Janakiramaiah Bonam",
    title: "Lightweight CNN Models for Product Defect Detection",
    journal: "JOURNAL OF SCIENTIFIC & INDUSTRIAL RESEARCH",
    issn: "0022-4456",
    volume: "82",
    issue: "-",
    pages: "418-425",
    monthYear: "April 2023",
    indexing: "WOS & SCOPUS",
    paperLink: "http://op.niscair.res.in/index.php/JSIR/article/view/72390",
    ProfileLinks: {
      Scopus: "https://www.scopus.com/authid/detail.uri?authorId=56427961100",
      wos: "https://www.webofscience.com/wos/author/record/U-9486-2019",
    },
  },
  {
    authors: "Raj Kumar Batchu",
    title:
      "Design of a medical decision-supporting system for brain tumor identification.",
    journal: "Frontiers in Human Neuroscience",
    issn: "1662-5161",
    volume: "17",
    issue: "-",
    pages: "01 to 16",
    monthYear: "March 2023",
    indexing: "WOS & SCOPUS",
    paperLink:
      "https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2023.1157155/full",

    ProfileLinks: {
      Scopus: "https://www.scopus.com/authid/detail.uri?authorId=57279627900",
      wos: "https://www.webofscience.com/wos/author/record/HDN-7109-2022",
    },
  },
];
const academicYearData = {
  "2025-2026": facultyPrograms_2025_26,
  "2024-2025": facultyPrograms_2024_25,
  "2023-2024": facultyPrograms_2023_24,
  "2022-23": facultyPrograms_2022_23,
};

let activeYear = "All Years";
let sortCol = null;
let sortDir = 1;

function val(v) {
  return v && String(v).trim() ? String(v).trim() : "—";
}

function linkBtn(url, label, type) {
  if (!url) return "";

  const icon =
    type === "doi"
      ? "file-lines"
      : type === "scopus"
        ? "graduation-cap"
        : "external-link-alt";

  return `<a href="${url}" target="_blank" rel="noopener"
  class="link-btn link-${type}">
  <i class="fas fa-${icon}"></i> ${label}</a>`;
}

function profileLinks(links) {
  if (!links) return '<span style="color:#bbb;font-size:0.75rem;">N/A</span>';

  let html = "";

  if (links.Scopus) {
    html += linkBtn(links.Scopus, "Scopus", "scopus") + "<br>";
  }

  if (links.wos) {
    html += linkBtn(links.wos, "WoS", "wos") + "<br>";
  }

  if (links.google) {
    html += linkBtn(links.google, "Google", "google") + "<br>";
  }

  return html;
}

/*function updateStats() {
  const all = Object.values(academicYearData).flat();

  const authors = new Set(
    all.map((p) => p.authors.split(/[,;]/)[0].trim().toUpperCase()),
  );

  document.getElementById("statTotal").textContent = all.length;
  document.getElementById("statYears").textContent =
    Object.keys(academicYearData).length;

  document.getElementById("statScopus").textContent = all.filter((p) =>
    p.indexing.includes("Scopus"),
  ).length;

  document.getElementById("statAuthors").textContent = authors.size;
}*/
function updateStats() {
  const all = Object.values(academicYearData).flat();

  const authors = new Set(
    all.map((p) => p.authors.split(/[,;]/)[0].trim().toUpperCase()),
  );

  const scopusCount = all.filter(
    (p) => p.indexing && p.indexing.toLowerCase().includes("scopus"),
  ).length;

  const wosCount = all.filter(
    (p) => p.indexing && p.indexing.toLowerCase().includes("wos"),
  ).length;

  const indexedTotal = all.filter((p) => p.indexing).length;

  document.getElementById("statTotal").textContent = all.length;
  document.getElementById("statYears").textContent =
    Object.keys(academicYearData).length;

  document.getElementById("statScopus").textContent = scopusCount;
  document.getElementById("statWos").textContent = wosCount;
  document.getElementById("statIndexed").textContent = indexedTotal;

  document.getElementById("statAuthors").textContent = authors.size;
}

function buildYearFilter() {
  const select = document.getElementById("filterYear");
  select.innerHTML = "";

  const allOpt = document.createElement("option");
  allOpt.value = "All Years";
  allOpt.textContent = "All Years";
  select.appendChild(allOpt);

  Object.keys(academicYearData).forEach((year) => {
    const opt = document.createElement("option");
    opt.value = year;
    opt.textContent = `${year} (${academicYearData[year].length})`;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    activeYear = select.value;
    render();
  });
}

function getActiveData() {
  if (activeYear === "All Years") {
    return Object.values(academicYearData).flat();
  }
  return academicYearData[activeYear] || [];
}

function render() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const idxFilt = document.getElementById("filterIndexing").value;

  let data = [...getActiveData()];

  if (sortCol) {
    data.sort(
      (a, b) =>
        String(a[sortCol] || "").localeCompare(String(b[sortCol] || "")) *
        sortDir,
    );
  }

  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  let visible = 0;

  data.forEach((p, i) => {
    const searchable = [p.authors, p.title, p.journal, p.issn, p.monthYear]
      .join(" ")
      .toLowerCase();

    if (search && !searchable.includes(search)) return;
    if (
      idxFilt &&
      !(p.indexing && p.indexing.toLowerCase().includes(idxFilt.toLowerCase()))
    )
      return;

    visible++;

    const uid = `auth-${activeYear.replace(/\W/g, "")}-${i}`;

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="td-sl">${visible}</td>
      <td class="td-authors">
        <div class="authors-text" id="${uid}">${p.authors}</div>
        <span class="expand-hint" data-target="${uid}"></span>
      </td>
      <td class="td-title">${p.title}</td>
      <td class="td-journal">${val(p.journal)}</td>
      <td class="td-issn">${val(p.issn)}</td>
      <td class="td-vol">${val(p.volume)}</td>
      <td class="td-issue">${val(p.issue)}</td>
      <td class="td-pages">${val(p.pages)}</td>
      <td class="td-date">${val(p.monthYear)}</td>
      <td><span class="badge-index">${val(p.indexing)}</span></td>
      <td>${linkBtn(p.paperLink, "Paper", "doi")}</td>
      <td>${profileLinks(p.ProfileLinks)}</td>
    `;

    tbody.appendChild(tr);
  });

  const total = getActiveData().length;

  document.getElementById("resultCount").textContent =
    `Showing ${visible} of ${total} records`;

  document.getElementById("noResults").classList.toggle("d-none", visible > 0);
}

document.querySelectorAll("thead th[data-col]").forEach((th) => {
  th.addEventListener("click", () => {
    const col = th.dataset.col;

    sortDir = sortCol === col ? sortDir * -1 : 1;
    sortCol = col;

    render();
  });
});

document.getElementById("searchInput").addEventListener("input", render);
document.getElementById("filterIndexing").addEventListener("change", render);

updateStats();
buildYearFilter();
render();
