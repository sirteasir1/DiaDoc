document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.classList.add('fade-overlay');
    overlay.textContent = 'Загрузка...'; 
    document.body.appendChild(overlay);

    window.onload = function() {
        overlay.classList.add('hidden');
        body.classList.add('loaded');
    };
});

document.addEventListener('DOMContentLoaded', loadHistory);

const dateInput = document.getElementById('date');
const weightInput = document.getElementById('weight');
const dietInput = document.getElementById('diet');
const sugarInput = document.querySelector('.sugar-level-container input[type="text"]');
const wellBeingInputs = document.querySelectorAll('.well-being-input input[type="radio"]');
const activityRadios = document.querySelectorAll('.activities input[type="radio"]');
const historyList = document.getElementById('calendar-history-list');
const emptyHistoryMessage = document.getElementById('empty-history');
const saveButton = document.getElementById('save-button');

if (saveButton) {
    saveButton.addEventListener('click', saveData);
}

function saveData() {
    console.log('saveData function called');
    const date = dateInput.value;
    const weight = weightInput.value;
    const diet = dietInput.value;
    const sugar = sugarInput.value;
    const wellBeing = Array.from(wellBeingInputs).find(radio => radio.checked)?.value || '';
    const activity = Array.from(activityRadios).find(radio => radio.checked)?.value || '';

    if (date) {
        const entry = { date, weight, diet, sugar, wellBeing, activity };
        console.log('Data to save:', entry);
        saveHistoryEntry(entry);
        clearForm();
        loadHistory();
    } else {
        alert('Пожалуйста, введите дату.');
    }
}

function saveHistoryEntry(entry) {
    console.log('saveHistoryEntry function called with entry:', entry);
    let history = localStorage.getItem('calendarHistory');
    history = history ? JSON.parse(history) : [];
    history.push(entry);
    localStorage.setItem('calendarHistory', JSON.stringify(history));
    console.log('History saved in localStorage:', localStorage.getItem('calendarHistory'));
}

function loadHistory() {
    console.log('loadHistory function called');
    const history = localStorage.getItem('calendarHistory');
    const historyData = history ? JSON.parse(history) : [];
    console.log('History data loaded:', historyData);

    historyList.innerHTML = '';

    if (historyData.length > 0) {
        emptyHistoryMessage.style.display = 'none';
        historyData.forEach(item => {
            console.log('Processing history item:', item);
            const historyItem = document.createElement('div');
            historyItem.classList.add('history-item');
            historyItem.innerHTML = `
                <p><strong>Дата:</strong> ${item.date}</p>
                ${item.weight ? `<p><strong>Weight:</strong> ${item.weight}</p>` : ''}
                ${item.diet ? `<p><strong>Diet/calories:</strong> ${item.diet}</p>` : ''}
                ${item.sugar ? `<p><strong>Sugar level:</strong> ${item.sugar}</p>` : ''}
                ${item.wellBeing ? `<p><strong>Well being:</strong> ${item.wellBeing}</p>` : ''}
                ${item.activity ? `<p><strong>Activity:</strong> ${item.activity}</p>` : ''}
            `;
            historyList.appendChild(historyItem);
            console.log('historyItem appended to list:', historyItem);
        });
    } else {
        emptyHistoryMessage.style.display = 'block';
    }
    console.log('History list updated. Number of items:', historyList.children.length);
}

function clearForm() {
    dateInput.value = '';
    weightInput.value = '';
    dietInput.value = '';
    sugarInput.value = '';
    wellBeingInputs.forEach(input => input.checked = false);
    activityRadios.forEach(radio => radio.checked = false);
    console.log('Form cleared');
}


const clearHistoryButton = document.getElementById('clear-history-button');

if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', clearCalendarHistory);
}

function clearCalendarHistory() {
    if (confirm('Э щегол точно удалять етеснба?')) {
        localStorage.removeItem('calendarHistory');
        historyList.innerHTML = ''; 
        emptyHistoryMessage.style.display = 'block'; 
        console.log('Calendar history cleared.');
    }
}