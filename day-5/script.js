function toCsv() {
  const rows = [...document.querySelectorAll("tr")];
  console.log("Rows:", rows);
  return rows
    .map(function (row) {
      // Query all cells
      const cells = [...row.querySelectorAll("th,td")];
      console.log("Cells:", cells);
      return cells
        .map(function (cell) {
          return cell.textContent;
        })
        .join(",");
    })
    .join("\n");
}
let csvTable = toCsv();
console.log("CSVtable:", csvTable);

const download = function (text, fileName) {
  const link = document.createElement("a");
  link.setAttribute(
    "href",
    `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`
  );
  link.setAttribute("download", fileName);

  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

const table = document.getElementById("exportMe");
const exportBtn = document.getElementById("export");

exportBtn.addEventListener("click", function () {
  // Export to csv
  const csv = toCsv(table);

  // Download it
  download(csv, "download.csv");
});
