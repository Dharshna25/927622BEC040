document.getElementById('fetchBtn').addEventListener('click', fetchNumbers);

async function fetchNumbers() {
  const type = document.getElementById('type').value;
  const loading = document.getElementById('loading');
  const resultBox = document.getElementById('result');

  loading.style.display = 'block';
  resultBox.style.display = 'none';
  resultBox.innerHTML = '';

  try {
    const response = await fetch(`http://localhost:9876/numbers/${type}`);
    const data = await response.json();

    resultBox.innerHTML = `
      <h3>Window Previous State: ${JSON.stringify(data.windowPrevState)}</h3>
      <h3>Window Current State: ${JSON.stringify(data.windowCurrState)}</h3>
      <h3>Numbers Fetched: ${JSON.stringify(data.numbers)}</h3>
      <h3>Average: ${data.avg}</h3>
    `;
    resultBox.style.display = 'block';
  } catch (error) {
    alert('Failed to fetch data');
    console.error('Error:', error);
  } finally {
    loading.style.display = 'none';
  }
}
