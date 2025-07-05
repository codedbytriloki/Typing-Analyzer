const textareaEl = document.getElementById("textarea");
const charCount = document.getElementById("charCount");
const charNoSpace = document.getElementById("charNoSpace");
const wordCount = document.getElementById("wordCount");
const readTime = document.getElementById("readTime");
const clearBtn = document.getElementById("clearBtn");

textareaEl.addEventListener('input', () => {
  const text = textareaEl.value;

  charCount.innerHTML = text.length;

  charNoSpace.innerHTML = text.replace(/\s/g, "").length;

  const words = text.trim().split(/\s+/).filter(word => word !=="");
  wordCount.innerHTML = words.length;

  readTime.innerHTML = (words.length/3.3).toFixed(1);
})

clearBtn.addEventListener("click", () => {
  textareaEl.value = "";
  textareaEl.dispatchEvent(new Event('input'));
})