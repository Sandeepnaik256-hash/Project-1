async function predictMood() {
    const input = document.getElementById('userInput').value;
    const resultDiv = document.getElementById('result');
  
    if (!input.trim()) {
      resultDiv.textContent = 'Please type something.';
      return;
    }
  
    resultDiv.textContent = 'Predicting...';
  
    const threshold = 0.9;
    const model = await toxicity.load(threshold);
    const predictions = await model.classify([input]);
  
    let toxic = false;
  
    predictions.forEach(pred => {
      if (pred.results[0].match) toxic = true;
    });
  
    resultDiv.textContent = toxic ? '😡 Angry / Toxic Mood' : '😊 Happy / Positive Mood';
  }
  