const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('dashboard.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously' });
const window = dom.window;
const document = window.document;

setTimeout(() => {
    try {
        console.log('Testing btnRecordPaymentTop');
        const btn = document.getElementById('btnRecordPaymentTop');
        if (!btn) throw new Error('btnRecordPaymentTop not found');
        btn.click();
        
        const modal = document.getElementById('modalOverlay');
        console.log('Modal classList:', modal.className);
        
        console.log('Testing form submission');
        const form = document.getElementById('modalForm');
        
        const event = new window.Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(event);
        
        console.log('Testing btnAddExpense');
        const btnExpense = document.getElementById('btnAddExpense');
        if (!btnExpense) throw new Error('btnAddExpense not found');
        btnExpense.click();
        console.log('Modal classList after expense:', modal.className);
        form.dispatchEvent(event);
        
        console.log('Success');
    } catch (e) {
        console.error('Error during test:', e);
    }
}, 500);
