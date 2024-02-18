document.getElementById('submitForm').addEventListener('click', function() {
    const weakness = document.getElementById('weakness').value;
    const remediation = document.getElementById('remediation').value;
    const milestones = document.getElementById('milestones').value;
    const responsible = document.getElementById('responsible').value;

    if (!weakness || !remediation || !milestones || !responsible) {
        alert('Please fill in all fields.');
        return;
    }

    const doc = new window.jspdf.jsPDF();
    doc.text(`Weakness Identification: ${weakness}`, 10, 10);
    doc.text(`Remediation Plans: ${remediation}`, 10, 30);
    doc.text(`Milestones: ${milestones}`, 10, 50);
    doc.text(`Responsible Parties: ${responsible}`, 10, 70);

    doc.save('POAM-document.pdf');
});
