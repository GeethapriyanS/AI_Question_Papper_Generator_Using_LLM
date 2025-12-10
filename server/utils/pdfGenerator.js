const PDFDocument = require('pdfkit');

const generatePDF = (text, res) => {
    const doc = new PDFDocument();

    // Stream the PDF to the response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=question-paper.pdf');
    
    doc.pipe(res);

    // Add Title
    doc.fontSize(20).text('Generated Question Paper', { align: 'center' });
    doc.moveDown();

    // Add the AI Generated Content
    doc.fontSize(12).text(text, {
        align: 'left',
        paragraphGap: 5
    });

    doc.end();
};

module.exports = { generatePDF };