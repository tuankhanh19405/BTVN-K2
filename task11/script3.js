document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('textInput');
  const wordCountDisplay = document.getElementById('wordCount');
  const charCountDisplay = document.getElementById('charCount');
  const maxChars = 200;

  function countWords(text) {
    const words = text.trim().split(/\s+/);
    return text.trim() === '' ? 0 : words.length;
  }

  function updateCounts() {
    const text = textInput.value;
    const wordCount = countWords(text);
    const charCount = text.length;
    const remainingChars = maxChars - charCount;

    wordCountDisplay.textContent = `Số từ: ${wordCount}`;
    charCountDisplay.textContent = `Số ký tự còn lại: ${remainingChars}`;

    if (remainingChars <= 10) {
      charCountDisplay.classList.add('warning');
    } else {
      charCountDisplay.classList.remove('warning');
    }
  }

  textInput.addEventListener('input', updateCounts);

  updateCounts();
});