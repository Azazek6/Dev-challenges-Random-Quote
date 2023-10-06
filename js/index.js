const autorName = document.getElementById("autor-name");
const tags = document.getElementById("tags");
const description = document.getElementById("description");
const refreshButton = document.getElementById("btnRefresh");

const fecthData = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data;
};

const loadData = async () => {
  const data = await fecthData();
  let data_tag = "";
  autorName.innerText = data.author;
  data.tags.map((itemTag) => {
    data_tag = data_tag + `<span class="card-tags-name">${itemTag}</span>`;
  });
  tags.innerHTML = data_tag;
  description.innerText = data.content;
};

refreshButton.addEventListener("click", () => {
  loadData();
});

loadData();
