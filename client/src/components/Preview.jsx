import React, { useState, useEffect, useRef } from 'react';
import { Download, Printer, Copy, Edit3, FileText, Check } from 'lucide-react';

const Preview = ({ generatedPaper }) => {
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (generatedPaper) setContent(generatedPaper);
  }, [generatedPaper]);

  // Auto-resize textarea height to fit content (prevents shrinking)
  useEffect(() => {
    if (isEditing && textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, [content, isEditing]);

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head><title>Question Paper</title></head>
        <body style="font-family: 'Times New Roman'; padding: 40px;">
          <pre style="white-space: pre-wrap; font-family: inherit; font-size: 12pt;">${content}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleDownload = () => {
    // Check if backend supports saving edited content, otherwise warn user
    // For now, this downloads the originally generated PDF from backend
    window.open('https://ai-question-papper-generator-using-llm.onrender.com/api/download-pdf', '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert('Copied to clipboard!');
  };

  return (
    <div className="glass-card">
      <div className="preview-header">
        <h3 style={{ margin: 0, fontWeight: 600 }}>Preview Paper</h3>
        <div className="action-bar">
          <button 
            onClick={() => setIsEditing(!isEditing)} 
            className="icon-btn" 
            title={isEditing ? "Save Changes" : "Edit Paper"}
            style={isEditing ? { background: '#6366f1', color: 'white' } : {}}
          >
            {isEditing ? <Check size={18} /> : <Edit3 size={18} />}
          </button>
          <button onClick={handleCopy} className="icon-btn" title="Copy Text">
            <Copy size={18} />
          </button>
          <button onClick={handlePrint} className="icon-btn" title="Print">
            <Printer size={18} />
          </button>
          <button onClick={handleDownload} className="btn-download">
            <Download size={16} /> Download PDF
          </button>
        </div>
      </div>

      <div className="paper-scroll-container">
        {!generatedPaper ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#6b7280' }}>
            <FileText size={48} style={{ opacity: 0.3, marginBottom: 15 }} />
            <p>Generated paper will appear here</p>
          </div>
        ) : isEditing ? (
          <textarea 
            ref={textAreaRef}
            className="a4-paper" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            spellCheck="false"
          />
        ) : (
          <div className="a4-paper">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;