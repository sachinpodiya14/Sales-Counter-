const PRICES = {
  regular: 20,
  special: 30
};

const STORAGE_KEY = "lassi-stall-sales-v1";

let sales = {
  regular: 0,
  special: 0
};

const $ = (id) => document.getElementById(id);

function loadSales() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Number.isInteger(saved.regular) && Number.isInteger(saved.special)) {
      sales = {
        regular: Math.max(0, saved.regular),
        special: Math.max(0, saved.special)
      };
    }
  } catch {
    // Start fresh if saved data cannot be read.
  }
}

function saveSales() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sales));
  $("saveStatus").textContent = "Saved just now";
  setTimeout(() => {
    $("saveStatus").textContent = "Saved automatically";
  }, 1200);
}

function formatRupees(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function updateUI() {
  const regularRevenue = sales.regular * PRICES.regular;
  const specialRevenue = sales.special * PRICES.special;
  const totalCups = sales.regular + sales.special;
  const totalRevenue = regularRevenue + specialRevenue;

  $("regularCount").textContent = sales.regular;
  $("specialCount").textContent = sales.special;

  $("regularBreakdown").textContent = sales.regular;
  $("specialBreakdown").textContent = sales.special;

  $("regularRevenue").textContent = formatRupees(regularRevenue);
  $("specialRevenue").textContent = formatRupees(specialRevenue);

  $("totalCups").textContent = totalCups;
  $("revenue").textContent = formatRupees(totalRevenue);
  $("breakdownTotal").textContent = formatRupees(totalRevenue);
}

function changeSales(product, amount) {
  sales[product] = Math.max(0, sales[product] + amount);
  saveSales();
  updateUI();
}

document.querySelectorAll(".counter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const amount = button.dataset.action === "increase" ? 1 : -1;
    changeSales(product, amount);
  });
});

const modal = $("confirmModal");

$("resetBtn").addEventListener("click", () => {
  modal.classList.remove("hidden");
});

$("cancelReset").addEventListener("click", () => {
  modal.classList.add("hidden");
});

$("confirmReset").addEventListener("click", () => {
  sales = { regular: 0, special: 0 };
  saveSales();
  updateUI();
  modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
  }
});

$("date").textContent = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric"
}).format(new Date());

loadSales();
updateUI();
