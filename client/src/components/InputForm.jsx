import React, { useState } from 'react';
import axios from 'axios';
import { Sparkles, BookOpen, Layers, Hash, Award, Loader2 } from 'lucide-react';

const InputForm = ({ setGeneratedPaper, setLoading, loading }) => {
  const [formData, setFormData] = useState({
    subject: 'Physics',
    topic: 'Speed and Distance',
    difficulty: 'Hard',
    questionType: 'Mixed',
    questionCount: 20,
    marks: '100'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedPaper(null); 
    try {
      const response = await axios.post('http://localhost:5000/api/generate-questions', formData);
      setGeneratedPaper(response.data.data);
    } catch (error) {
      console.error("Error calling backend:", error);
      alert("Failed to generate paper. Check console for details.");
    }
    setLoading(false);
  };

  return (
    <div className="glass-card">
      <div className="form-section-title">
        <Sparkles size={18} color="#818cf8" /> Generator Settings
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><BookOpen size={14} style={{ marginRight: 6 }} />Subject Name</label>
          <input 
            type="text" name="subject" className="form-control" 
            placeholder="e.g. Physics" value={formData.subject} onChange={handleChange} required 
          />
        </div>

        <div className="form-group">
          <label><Layers size={14} style={{ marginRight: 6 }} />Topic / Unit</label>
          <input 
            type="text" name="topic" className="form-control" 
            placeholder="e.g. Thermodynamics" value={formData.topic} onChange={handleChange} required 
          />
        </div>

        <div className="row">
          <div className="col form-group">
            <label>Difficulty</label>
            <select name="difficulty" className="form-control" value={formData.difficulty} onChange={handleChange}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="col form-group">
            <label>Format</label>
            <select name="questionType" className="form-control" value={formData.questionType} onChange={handleChange}>
              <option value="Mixed">Mixed</option>
              <option value="MCQ Only">MCQ</option>
              <option value="Theory">Theory</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col form-group">
            <label><Hash size={14} style={{ marginRight: 6 }} /># Questions</label>
            <input 
              type="number" name="questionCount" className="form-control" 
              value={formData.questionCount} onChange={handleChange} 
            />
          </div>
          <div className="col form-group">
            <label><Award size={14} style={{ marginRight: 6 }} />Total Marks</label>
            <input 
              type="text" name="marks" className="form-control" 
              value={formData.marks} onChange={handleChange} 
            />
          </div>
        </div>

        <button type="submit" className="btn-generate" disabled={loading}>
          {loading ? <span style={{display:'flex', justifyContent:'center', gap:'10px'}}><Loader2 className="spinner" /> Generating...</span> : 'Generate Question Paper'}
        </button>
      </form>
    </div>
  );
};

export default InputForm;