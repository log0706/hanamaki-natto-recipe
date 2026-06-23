const categoryFilters = [
  { id: "all", label: "すべて" }, { id: "quick", label: "すぐ作る" },
  { id: "meal", label: "主食・おかず" }, { id: "lunch", label: "昼ごはん" },
  { id: "snack", label: "おつまみ" }, { id: "simple", label: "シンプル" }
];
const timeFilters = [
  { id: "all", label: "すべて" }, { id: "under5", label: "5分以内", max: 5 },
  { id: "under10", label: "10分以内", max: 10 }, { id: "under15", label: "15分以内", max: 15 }
];
const moodFilters = [
  { id: "all", label: "すべて" }, { id: "fresh", label: "さっぱり" },
  { id: "rich", label: "コクあり" }, { id: "rice", label: "ごはんに" },
  { id: "vegetable", label: "野菜と" }, { id: "snackMood", label: "おつまみ" }
];

const recipes = [
  r("salad", "01", "納豆イタリアンサラダ", "彩りの一皿", "quick", ["fresh", "vegetable"], 5, 2, "img_italian_salad.png", "納豆イタリアンサラダ",
    "トマト、モッツァレラ、バジルと一緒に。オリーブオイルとバルサミコで和えるだけで、大粒納豆がチーズのような存在感を出します。",
    [item("花巻納豆（大粒）", 1, "パック"), item("ミニトマト", 6, "個"), item("モッツァレラチーズ", 50, "g"), rangeItem("バジルの葉", 4, 5, "枚"), item("オリーブオイル", 1, "大さじ"), item("バルサミコ酢", 1, "小さじ"), textItem("塩・黒こしょう", "適量")],
    ["ミニトマトは半分に、モッツァレラは一口大にちぎる", "納豆は付属のタレを入れずに軽くほぐす", "すべてをボウルに入れ、オリーブオイル・バルサミコ酢で和える", "塩・黒こしょうで味を調え、バジルを散らす"]),
  r("somen", "02", "梅納豆の冷やしそうめん", "さっぱり昼ごはん", "lunch", ["fresh", "rice"], 10, 2, "img_ume_somen.png", "梅納豆の冷やしそうめん",
    "梅肉と大粒納豆を合わせた、暑い日のランチに取り入れやすい一品。そうめんに絡む納豆の食感が楽しい組み合わせです。",
    [item("花巻納豆（大粒）", 1, "パック"), item("そうめん", 2, "束"), item("梅干し", 2, "個"), item("大葉", 4, "枚"), item("めんつゆ（2倍濃縮）", 100, "ml"), item("水", 100, "ml"), textItem("白ごま", "適量")],
    ["そうめんを茹で、氷水でしっかり冷やす", "梅干しは種を取り、包丁で叩いてペーストにする", "器にそうめんを盛り、納豆と梅肉をのせる", "薄めためんつゆをかけ、千切りの大葉と白ごまを散らす"]),
  r("raisin", "03", "納豆とレーズンのおつまみ", "小さな前菜", "snack", ["rich", "snackMood"], 3, 2, "img_natto_raisin.png", "納豆とレーズンのおつまみ",
    "レーズンの甘み、クリームチーズ、くるみを合わせた一皿。おもてなしの小鉢にも使いやすい、意外性のある味わいです。",
    [item("花巻納豆（大粒）", 1, "パック"), item("レーズン", 2, "大さじ"), item("クリームチーズ", 30, "g"), item("くるみ（砕いたもの）", 1, "大さじ"), item("はちみつ", 1, "小さじ"), textItem("黒こしょう", "少々")],
    ["納豆を付属のタレなしで軽くほぐす", "クリームチーズを一口大にちぎり、レーズン・くるみと混ぜる", "はちみつを回しかけ、黒こしょうを振る"]),
  r("olive", "04", "オリーブオイルと岩塩で", "豆の味をそのまま", "simple", ["rich", "snackMood"], 1, 1, "assets/images/img_olive_salt.png", "オリーブオイルと岩塩",
    "オリーブオイルと岩塩だけのシンプルな食べ方。大粒納豆の豆の旨みと食感をまっすぐ楽しめます。",
    [item("花巻納豆（大粒）", 1, "パック"), item("EXVオリーブオイル", 2, "小さじ"), textItem("岩塩", "ひとつまみ"), textItem("粗挽き黒こしょう（お好みで）", "少々")],
    ["納豆を器に出し、付属のタレは使わない", "オリーブオイルを回しかける", "岩塩を振りかけ、お好みで黒こしょうを挽く"]),
  r("eggRice", "05", "納豆たまごごはん", "朝の定番", "meal", ["rice", "rich"], 5, 1, "assets/images/recipe_05_natto_egg_rice.jpg", "納豆たまごごはん",
    "温かいごはんに花巻納豆と卵を合わせる定番の食べ方。毎日の食卓に取り入れやすく、売場でも伝わりやすい一杯です。",
    [item("花巻納豆（大粒）", 1, "パック"), item("温かいごはん", 180, "g"), item("卵", 1, "個"), item("青ねぎ", 1, "本"), item("しょうゆ", 1, "小さじ")],
    ["納豆を軽くほぐし、しょうゆを合わせる", "ごはんに納豆と卵をのせる", "小口切りの青ねぎを散らす"]),
  r("shirasuBowl", "06", "しらす納豆丼", "昼ごはんに", "lunch", ["fresh", "rice"], 6, 1, "assets/images/recipe_06_natto_shirasu_bowl.jpg", "しらす納豆丼",
    "しらすと花巻納豆をのせた、手早い丼レシピ。ごはん、薬味、しらすの買い合わせ提案にも使いやすい一品です。",
    [item("花巻納豆（大粒）", 1, "パック"), item("温かいごはん", 180, "g"), item("しらす", 30, "g"), item("大葉", 2, "枚"), item("しょうゆ", 1, "小さじ"), textItem("白ごま", "適量")],
    ["大葉は千切りにする", "ごはんに納豆としらすをのせる", "しょうゆをかけ、大葉と白ごまを添える"]),
  r("cucumber", "07", "きゅうり納豆の浅漬け風", "さっぱり箸休め", "quick", ["fresh", "vegetable"], 5, 2, "assets/images/recipe_07_natto_cucumber.jpg", "きゅうり納豆の浅漬け風",
    "薄切りきゅうりと納豆を合わせた、さっぱりした小鉢。野菜売場からの買い合わせ提案にも向いています。",
    [item("花巻納豆（大粒）", 1, "パック"), item("きゅうり", 1, "本"), item("塩", 0.5, "小さじ"), item("しょうが", 1, "小さじ"), textItem("白ごま", "適量")],
    ["きゅうりは薄切りにし、塩をまぶして軽く水気を絞る", "納豆を軽くほぐし、おろししょうがと合わせる", "きゅうりと納豆を和え、白ごまを振る"]),
  r("tofu", "08", "納豆のせ冷奴", "もう一品に", "snack", ["fresh", "snackMood"], 5, 2, "assets/images/recipe_08_natto_tofu.jpg", "納豆のせ冷奴",
    "冷奴に花巻納豆と薬味をのせるだけ。豆腐売場との買い合わせにもつなげやすい、手早い一品です。",
    [item("花巻納豆（大粒）", 1, "パック"), item("絹ごし豆腐", 1, "丁"), item("青ねぎ", 2, "本"), item("しょうが", 1, "小さじ"), item("ポン酢", 1, "大さじ")],
    ["豆腐は水気を切り、食べやすい大きさにする", "納豆を軽くほぐし、薬味を用意する", "豆腐に納豆をのせ、ポン酢をかける"]),
  r("omelet", "09", "納豆オムレツ", "ふんわりおかず", "meal", ["rich", "rice"], 10, 2, "assets/images/recipe_09_natto_omelet.jpg", "納豆オムレツ",
    "卵で花巻納豆を包む、食卓のおかず向けレシピ。大粒納豆の食感がアクセントになります。",
    [item("花巻納豆（大粒）", 1, "パック"), item("卵", 3, "個"), item("牛乳", 1, "大さじ"), item("バター", 10, "g"), textItem("塩・こしょう", "適量")],
    ["卵、牛乳、塩・こしょうを混ぜる", "フライパンにバターを溶かし、卵液を流す", "納豆をのせて包み、器に盛る"]),
  r("pasta", "10", "納豆の和風パスタ", "香りを楽しむ", "lunch", ["fresh", "rice"], 15, 2, "assets/images/recipe_10_natto_wafu_pasta.jpg", "納豆の和風パスタ",
    "茹でたパスタに大葉と納豆を合わせる和風の一皿。昼食の献立に取り入れやすい、軽やかな味わいです。",
    [item("花巻納豆（大粒）", 1, "パック"), item("スパゲッティ", 180, "g"), item("大葉", 6, "枚"), item("めんつゆ（2倍濃縮）", 2, "大さじ"), item("オリーブオイル", 1, "大さじ"), textItem("刻みのり", "適量")],
    ["スパゲッティを表示時間どおりに茹でる", "納豆、めんつゆ、オリーブオイルを合わせる", "茹でたパスタと和え、千切りの大葉と刻みのりをのせる"]),
  r("kimchiNori", "11", "キムチのり納豆", "小皿のおつまみ", "snack", ["rich", "snackMood"], 5, 2, "assets/images/recipe_11_natto_kimchi_nori.jpg", "キムチのり納豆",
    "キムチ、のり、ごま油を合わせた小皿レシピ。おつまみやもう一品として提案しやすい組み合わせです。",
    [item("花巻納豆（大粒）", 1, "パック"), item("白菜キムチ", 80, "g"), item("焼きのり", 1, "枚"), item("ごま油", 1, "小さじ"), textItem("白ごま", "適量")],
    ["キムチは食べやすく刻む", "納豆、キムチ、ごま油を混ぜる", "ちぎった焼きのりと白ごまを添える"]),
  r("localVegetable", "12", "地元野菜の納豆和え", "野菜と一緒に", "quick", ["fresh", "vegetable"], 8, 2, "assets/images/recipe_12_local_vegetable_natto.jpg", "地元野菜の納豆和え",
    "旬の野菜と花巻納豆を合わせる、売場で展開しやすい一皿。野菜の色合いに大粒納豆の存在感が加わります。",
    [item("花巻納豆（大粒）", 1, "パック"), item("季節の野菜", 150, "g"), item("しょうゆ", 1, "小さじ"), item("ごま油", 1, "小さじ"), textItem("白ごま", "適量")],
    ["野菜は食べやすく切り、必要に応じて下茹でする", "納豆、しょうゆ、ごま油を合わせる", "野菜と納豆を和え、白ごまを振る"])
];

let activeCategory = "all", activeTime = "all", activeMood = "all", activeId = "salad", servings = 2;
let checkedSteps = new Set();
const el = {
  categoryFilter: $("#categoryFilter"), timeFilter: $("#timeFilter"), moodFilter: $("#moodFilter"), filterSummary: $("#filterSummary"),
  recipeList: $("#recipeList"), recipeImage: $("#recipeImage"), recipeTime: $("#recipeTime"), recipeTag: $("#recipeTag"),
  recipeTitle: $("#recipeTitle"), recipeLead: $("#recipeLead"), servingCount: $("#servingCount"), servingMinus: $("#servingMinus"),
  servingPlus: $("#servingPlus"), baseServing: $("#baseServing"), ingredientList: $("#ingredientList"), stepList: $("#stepList"),
  progressText: $("#progressText"), progressBar: $("#progressBar"), memoTitle: $("#memoTitle"), memoList: $("#memoList"), clearMemo: $("#clearMemo")
};

function $(selector) { return document.querySelector(selector); }
function r(id, no, title, tag, category, moods, timeMin, base, image, alt, lead, ingredients, steps) {
  return { id, no, title, tag, category, moods, timeMin, base, image, alt, lead, ingredients, steps };
}
function item(name, qty, unit) { return { name, qty, unit }; }
function rangeItem(name, min, max, unit) { return { name, range: [min, max], unit }; }
function textItem(name, text) { return { name, text }; }
function activeRecipe() { return recipes.find(recipe => recipe.id === activeId) || recipes[0]; }
function visibleRecipes() {
  const time = timeFilters.find(filter => filter.id === activeTime);
  return recipes.filter(recipe => {
    const categoryOk = activeCategory === "all" || recipe.category === activeCategory || (activeCategory === "quick" && recipe.timeMin <= 5);
    const timeOk = activeTime === "all" || recipe.timeMin <= time.max;
    const moodOk = activeMood === "all" || recipe.moods.includes(activeMood);
    return categoryOk && timeOk && moodOk;
  });
}
function renderFilterGroup(target, filters, active, dataName) {
  target.innerHTML = filters.map(filter => `<button type="button" class="${filter.id === active ? "active" : ""}" data-${dataName}="${filter.id}">${filter.label}</button>`).join("");
}
function renderFilters() {
  renderFilterGroup(el.categoryFilter, categoryFilters, activeCategory, "category");
  renderFilterGroup(el.timeFilter, timeFilters, activeTime, "time");
  renderFilterGroup(el.moodFilter, moodFilters, activeMood, "mood");
}
function renderRecipeList() {
  const list = visibleRecipes();
  if (list.length && !list.some(recipe => recipe.id === activeId)) {
    activeId = list[0].id; servings = activeRecipe().base; checkedSteps.clear();
  }
  el.filterSummary.textContent = `${list.length}件のレシピを表示中`;
  el.recipeList.innerHTML = list.length ? list.map(recipe => `
    <button class="recipe-tab ${recipe.id === activeId ? "active" : ""}" type="button" data-recipe="${recipe.id}">
      <img src="${recipe.image}" alt=""><span><strong>${recipe.no}. ${recipe.title}</strong><span>約${recipe.timeMin}分 / ${recipe.tag}</span></span>
    </button>`).join("") : `<p class="empty-state">条件に合うレシピがありません。</p>`;
}
function renderRecipe() {
  const recipe = activeRecipe();
  el.recipeImage.src = recipe.image; el.recipeImage.alt = recipe.alt; el.recipeTime.textContent = `約${recipe.timeMin}分`;
  el.recipeTag.textContent = recipe.tag; el.recipeTitle.textContent = recipe.title; el.recipeLead.textContent = recipe.lead;
  el.servingCount.textContent = `${servings}人分`; el.baseServing.textContent = `基本 ${recipe.base}人分`;
  el.servingMinus.disabled = servings <= 1; el.servingPlus.disabled = servings >= 4;
  renderIngredients(recipe); renderSteps(recipe); renderMemo(recipe);
}
function renderIngredients(recipe) {
  el.ingredientList.innerHTML = recipe.ingredients.map(ingredient => `<li><span>${ingredient.name}</span><span>${formatAmount(ingredient, recipe.base)}</span></li>`).join("");
}
function renderSteps(recipe) {
  el.stepList.innerHTML = recipe.steps.map((step, index) => `
    <li><button type="button" class="${checkedSteps.has(index) ? "done" : ""}" data-step="${index}"><span>${index + 1}</span><span>${step}</span></button></li>`).join("");
  updateProgress(recipe);
}
function renderMemo(recipe) {
  el.memoTitle.textContent = `${recipe.title}の買い物リスト / ${servings}人分`;
  el.memoList.innerHTML = recipe.ingredients.map((ingredient, index) => `
    <div class="memo-item"><label><input type="checkbox" data-memo="${index}"><span>${ingredient.name}</span></label><strong>${formatAmount(ingredient, recipe.base)}</strong></div>`).join("");
}
function formatAmount(ingredient, base) {
  if (ingredient.text) return ingredient.text;
  const ratio = servings / base;
  if (ingredient.range) return `${formatNumber(ingredient.range[0] * ratio)}〜${formatNumber(ingredient.range[1] * ratio)}${ingredient.unit}`;
  if (["大さじ", "小さじ"].includes(ingredient.unit)) return `${ingredient.unit}${formatNumber(ingredient.qty * ratio)}`;
  return `${formatNumber(ingredient.qty * ratio)}${ingredient.unit}`;
}
function formatNumber(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}
function updateProgress(recipe) {
  const percent = recipe.steps.length ? Math.round((checkedSteps.size / recipe.steps.length) * 100) : 0;
  el.progressText.textContent = `${percent}%`; el.progressBar.style.width = `${percent}%`;
}
function chooseFilter(event, dataName, setter) {
  const button = event.target.closest(`[data-${dataName}]`);
  if (!button) return;
  setter(button.dataset[dataName]); renderFilters(); renderRecipeList(); renderRecipe();
}
el.categoryFilter.addEventListener("click", event => chooseFilter(event, "category", value => { activeCategory = value; }));
el.timeFilter.addEventListener("click", event => chooseFilter(event, "time", value => { activeTime = value; }));
el.moodFilter.addEventListener("click", event => chooseFilter(event, "mood", value => { activeMood = value; }));
el.recipeList.addEventListener("click", event => {
  const button = event.target.closest("[data-recipe]");
  if (!button) return;
  activeId = button.dataset.recipe; servings = activeRecipe().base; checkedSteps.clear(); renderRecipeList(); renderRecipe();
});
el.servingMinus.addEventListener("click", () => { servings = Math.max(1, servings - 1); renderRecipe(); });
el.servingPlus.addEventListener("click", () => { servings = Math.min(4, servings + 1); renderRecipe(); });
el.stepList.addEventListener("click", event => {
  const button = event.target.closest("[data-step]");
  if (!button) return;
  const step = Number(button.dataset.step);
  if (checkedSteps.has(step)) checkedSteps.delete(step); else checkedSteps.add(step);
  renderSteps(activeRecipe());
});
el.clearMemo.addEventListener("click", () => el.memoList.querySelectorAll("input").forEach(input => { input.checked = false; }));
renderFilters(); renderRecipeList(); renderRecipe();
