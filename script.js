const textContainer = document.querySelector(".text-container2");
const allTexts = document.querySelectorAll(".question-text");
textContainer.addEventListener("click", function (e) {
	const t = e.target;
	const tText = t.parentElement.nextSibling.nextSibling;
	if (!tText) return;
	if (
		!tText.classList.contains("hide") &&
		tText.classList.contains("question-text")
	) {
		tText.classList.add("hide");
	} else if (
		t.classList.contains("question-title") ||
		t.classList.contains("icon") ||
		t.classList.contains("question-text")
	) {
		allTexts.forEach((item) => {
			item.classList.add("hide");
		});
		tText.classList.remove("hide");
	}
});
