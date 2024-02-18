document.getElementById('submitForm').addEventListener('click', function() {
    const systemName = document.getElementById('systemName').value;
    const impactLevel = document.getElementById('impactLevel').value;
    const poamDate = document.getElementById('poamDate').value;
    const vulnerability = document.getElementById('vulnerability').value;
    const remediationStatus = document.getElementById('remediationStatus').value;
    const completionDate = document.getElementById('completionDate').value;

    if (!weakness || !remediation || !milestones || !responsible) {
        alert('Please fill in all fields.');
        return;
    }

    if (!systemName || !impactLevel || !poamDate || !vulnerability || !remediationStatus /* Other validations */) {
        alert('Please fill in all required fields.');
        return;
    }

    const doc = new window.jspdf.jsPDF();
    let y = 10; // Initialize y coordinate for text placement

    // Existing fields
    doc.text(`System Name: ${systemName}`, 10, y); y += 10;
    doc.text(`Impact Level: ${impactLevel}`, 10, y); y += 10;
    doc.text(`POAM Date: ${poamDate}`, 10, y); y += 10;
    doc.text(`Vulnerability: ${vulnerability}`, 10, y); y += 10;
    doc.text(`Remediation Status: ${remediationStatus}`, 10, y); y += 10;
    doc.text(`Completion Date: ${completionDate}`, 10, y); y += 10;

    doc.save('POAM-document.pdf');
});
