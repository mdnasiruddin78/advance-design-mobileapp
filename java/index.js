
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click',function(){
    
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const Courses = parseFloat(document.getElementById('courses').value);
    const Internet = parseFloat(document.getElementById('internet').value);

    const totalExpences = software + Courses + Internet;
    const balance = income - totalExpences;

    const totalExpencesElement = document.getElementById('total-expenses').innerText = totalExpences.toFixed(2);
    const balanceElement = document.getElementById('balance').innerText = balance.toFixed(2);

    const results = document.getElementById('results').classList.remove('hidden');

    const historyItem = document.createElement('div')
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
    historyItem.innerHTML = `

        <p class="text-1xl text-gray-500">income: ${income.toFixed(2)}</p>
        <p class="text-1xl text-gray-500">expences: ${totalExpences.toFixed(2)}</p>
        <p class="text-1xl text-gray-500">balance: ${balance.toFixed(2)}</p>

    `;
    console.log(historyItem)

    document.getElementById('history-list').appendChild(historyItem);
    
});


document.getElementById('calculate-savings').addEventListener('click',function(){
    
    const savingPercentance = parseFloat(document.getElementById('savings').value);

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const Courses = parseFloat(document.getElementById('courses').value);
    const Internet = parseFloat(document.getElementById('internet').value);
    
    const totalExpences = software + Courses + Internet;
    const balance = income - totalExpences;

    const savingAmount = balance * (savingPercentance / 100);
    const remainingBalance = balance - savingAmount

    document.getElementById('savings-amount').innerText = savingAmount.toFixed(2);
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
    
});


document.getElementById('history-tab').addEventListener('click',function(){

    document.getElementById('history-tab').classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');

    document.getElementById('assistant-tab').classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');

    document.getElementById('expense-form').classList.add('hidden');

    document.getElementById('results').classList.remove('hidden');

    document.getElementById('history-section').classList.remove('hidden');

});


document.getElementById('assistant-tab').addEventListener('click',function(){

    document.getElementById('history-tab').classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');

    document.getElementById('assistant-tab').classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');

    document.getElementById('expense-form').classList.remove('hidden')

    document.getElementById('results').classList.add('hidden');

    document.getElementById('history-section').classList.add('hidden');

});

