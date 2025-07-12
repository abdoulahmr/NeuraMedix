import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Typography, TextField, Button, Grid,
  Box, Card, CardContent, CardMedia, Chip, Stack, CircularProgress, Stepper, Step, StepLabel, IconButton,
  Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableRow, TableHead
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownloadIcon from '@mui/icons-material/Download';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Aside from '../../components/aside';

const steps = [
  'Metadata',
  'Abstract',
  'Sections',
  'Images',
  'Preview & Download'
];

function AutoPublishTool() {
  const navigate = useNavigate();

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // Stepper state
  const [activeStep, setActiveStep] = useState(0);

  // Metadata
  const [metadata, setMetadata] = useState({
    title: '',
    author: '',
    affiliation: '',
    journal: '',
    references: ''
  });

  // Abstract
  const [abstract, setAbstract] = useState('');
  const [loadingAbstract, setLoadingAbstract] = useState(false);

  // Sections
  const [sections, setSections] = useState([
    { title: 'Introduction', text: '' }
  ]);
  const [loadingKeywords, setLoadingKeywords] = useState(false);
  const [keywords, setKeywords] = useState([]);

  // Images
  const [images, setImages] = useState([]);

  // PDF
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  // Table state
  const [tables, setTables] = useState([]); // [{id, data: [[...],[...]]}]
  const [tableDialog, setTableDialog] = useState({ open: false, sectionIdx: null, tableNum: null });
  const [tableRows, setTableRows] = useState(2);
  const [tableCols, setTableCols] = useState(2);
  const [tableData, setTableData] = useState([["", ""], ["", ""]]);
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);

  // Handlers for stepper
  const handleNext = async () => {
    if (activeStep === 1 && abstract.trim() === '') {
      // Optionally, auto-generate abstract from sections
      await generateAbstract();
    }
    if (activeStep === 2) {
      // Optionally, extract keywords from all sections
      await extractKeywords();
    }
    if (activeStep === 4) return; // Don't advance past last step
    setActiveStep((prev) => prev + 1);
    if (activeStep === 3) {
      // On entering preview step, generate PDF
      await submitForPdf();
    }
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Metadata change
  const handleMetadataChange = (e) => {
    setMetadata({ ...metadata, [e.target.name]: e.target.value });
  };

  // Section handlers
  const handleSectionTitleChange = (idx, value) => {
    setSections(sections.map((s, i) => i === idx ? { ...s, title: value } : s));
  };
  const handleSectionTextChange = (idx, value) => {
    setSections(sections.map((s, i) => i === idx ? { ...s, text: value } : s));
  };
  const addSection = () => {
    setSections([...sections, { title: '', text: '' }]);
  };
  const removeSection = (idx) => {
    if (sections.length === 1) return;
    setSections(sections.filter((_, i) => i !== idx));
  };

  // Image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(prev => [...prev, ...files]);
  };
  const removeImage = (idx) => {
    setImages(images.filter((_, i) => i !== idx));
  };

  // Keyword extraction (from all sections)
  const extractKeywords = async () => {
    setLoadingKeywords(true);
    try {
      const allText = sections.map(s => s.text).join('\n');
      const res = await fetch('http://164.92.167.174/api/auto_publish/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'keywords', text: allText })
      });
      const data = await res.json();
      setKeywords(data.keywords || []);
    } catch (err) {
      console.error('Keyword extraction failed:', err);
    } finally {
      setLoadingKeywords(false);
    }
  };

  // Abstract generation (from all sections)
  const generateAbstract = async () => {
    setLoadingAbstract(true);
    try {
      const allText = sections.map(s => s.text).join('\n');
      const res = await fetch('http://164.92.167.174/api/auto_publish/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'abstract', text: allText })
      });
      const data = await res.json();
      setAbstract(data.abstract || '');
    } catch (err) {
      console.error('Abstract generation failed:', err);
    } finally {
      setLoadingAbstract(false);
    }
  };

  // PDF generation
  const submitForPdf = async () => {
    setLoadingPdf(true);
    try {
      const structuredMetadata = {
        title: metadata.title,
        authors: [{ name: metadata.author, affiliation: 1 }],
        affiliations: [metadata.affiliation]
      };

      const structuredSections = sections.map(({ title, text }) => ({
        title,
        content: text
      }));

      const formData = new FormData();
      formData.append('metadata', JSON.stringify(structuredMetadata));  
      formData.append('abstract', abstract);
      formData.append('sections', JSON.stringify(structuredSections));  
      formData.append('keywords', JSON.stringify(keywords));
      images.forEach((img) => formData.append('images', img));
      tables.forEach((table) => formData.append('tables', new Blob([JSON.stringify(table)], { type: 'application/json' })));
      // charts.forEach((chart) => formData.append('charts', new Blob([JSON.stringify(chart)], { type: 'application/json' })));

      const res = await fetch('http://164.92.167.174/api/auto_publish/', {
        method: 'POST',
        body: formData
      });

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setLoadingPdf(false);
    }
  };

  // Table dialog handlers
  const openTableDialog = (sectionIdx, tableNum) => {
    setTableRows(2);
    setTableCols(2);
    setTableData([["", ""], ["", ""]]);
    setTableDialog({ open: true, sectionIdx, tableNum });
  };
  const closeTableDialog = () => setTableDialog({ open: false, sectionIdx: null, tableNum: null });
  const handleTableCellChange = (row, col, value) => {
    setTableData(prev => prev.map((r, i) => i === row ? r.map((c, j) => j === col ? value : c) : r));
  };
  const handleTableSizeChange = (rows, cols) => {
    setTableRows(rows);
    setTableCols(cols);
    setTableData(Array.from({ length: rows }, (_, i) => Array.from({ length: cols }, (_, j) => (tableData[i] && tableData[i][j]) || '')));
  };
  const saveTable = () => {
    setTables(prev => [...prev, { id: tableDialog.tableNum, data: tableData }]);
    closeTableDialog();
  };

  // Step content
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 3 }}>
            <TextField
              label="Title"
              name="title"
              value={metadata.title}
              onChange={handleMetadataChange}
              fullWidth sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Author"
              name="author"
              value={metadata.author}
              onChange={handleMetadataChange}
              fullWidth sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Affiliation"
              name="affiliation"
              value={metadata.affiliation}
              onChange={handleMetadataChange}
              fullWidth sx={{ mb: 2 }}
            />
            <TextField
              label="Target Journal (optional)"
              name="journal"
              value={metadata.journal}
              onChange={handleMetadataChange}
              fullWidth sx={{ mb: 2 }}
            />
            <TextField
              label="References (one per line)"
              name="references"
              value={metadata.references}
              onChange={handleMetadataChange}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 3 }}>
            <TextField
              label="Abstract"
              multiline
              fullWidth
              rows={5}
              value={abstract}
              onChange={e => setAbstract(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <Button
              variant="contained"
              onClick={generateAbstract}
              startIcon={<AutoAwesomeIcon />}
              disabled={loadingAbstract}
            >
              {loadingAbstract ? <CircularProgress size={20} color="inherit" /> : 'Auto-generate from Sections'}
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 3 }}>
            {sections.map((section, idx) => (
              <Box key={idx} sx={{ mb: 3, border: '1px solid #eee', borderRadius: 2, p: 2 }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                  <TextField
                    label={`Section Title`}
                    value={section.title}
                    onChange={e => handleSectionTitleChange(idx, e.target.value)}
                    sx={{ flex: 1 }}
                  />
                  <IconButton onClick={() => removeSection(idx)} disabled={sections.length === 1}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      // Insert [FIGURE X] at cursor position
                      const figureNum = images.length + 1;
                      const textarea = document.getElementById(`section-textarea-${idx}`);
                      if (textarea) {
                        const start = textarea.selectionStart;
                        const end = textarea.selectionEnd;
                        const before = section.text.substring(0, start);
                        const after = section.text.substring(end);
                        const newText = before + `[FIGURE ${figureNum}]` + after;
                        handleSectionTextChange(idx, newText);
                        setTimeout(() => {
                          textarea.focus();
                          textarea.selectionStart = textarea.selectionEnd = start + `[FIGURE ${figureNum}]`.length;
                        }, 0);
                      }
                    }}
                  >
                    Insert Figure
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      // Insert [TABLE X] at cursor position and open dialog
                      const tableNum = (section.text.match(/\[TABLE \d+\]/g) || []).length + 1;
                      const textarea = document.getElementById(`section-textarea-${idx}`);
                      if (textarea) {
                        const start = textarea.selectionStart;
                        const end = textarea.selectionEnd;
                        const before = section.text.substring(0, start);
                        const after = section.text.substring(end);
                        const newText = before + `[TABLE ${tableNum}]` + after;
                        handleSectionTextChange(idx, newText);
                        setTimeout(() => {
                          textarea.focus();
                          textarea.selectionStart = textarea.selectionEnd = start + `[TABLE ${tableNum}]`.length;
                        }, 0);
                        openTableDialog(idx, tableNum);
                      }
                    }}
                  >
                    Insert Table
                  </Button>
                </Stack>
                <TextField
                  id={`section-textarea-${idx}`}
                  label="Section Text"
                  multiline
                  fullWidth
                  rows={4}
                  value={section.text}
                  onChange={e => handleSectionTextChange(idx, e.target.value)}
                />

                {/* Show saved tables for this section */}
                {tables.filter(t => t.id && t.id <= (section.text.match(/\[TABLE \d+\]/g) || []).length).map((table, tIdx) => (
                  <Box key={tIdx} sx={{ my: 1, border: '1px dashed #aaa', borderRadius: 1, p: 1, background: '#fafbfc' }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Table {table.id} Preview:</Typography>
                    <Table size="small">
                      <TableBody>
                        {table.data.map((row, rIdx) => (
                          <TableRow key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <TableCell key={cIdx}>{cell}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                ))}
              </Box>
            ))}
            <Button startIcon={<AddIcon />} onClick={addSection} variant="outlined">Add Section</Button>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                onClick={extractKeywords}
                disabled={loadingKeywords}
              >
                {loadingKeywords ? <CircularProgress size={20} color="inherit" /> : 'Extract Keywords'}
              </Button>
              {keywords.length > 0 && (
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                  {keywords.map((kw, i) => (
                    <Chip label={kw} key={i} color="primary" />
                  ))}
                </Stack>
              )}
            </Box>
          </Box>
        );
      case 3:
        return (
          <Box sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<CloudUploadIcon />}
              sx={{ mb: 2 }}
            >
              Upload Images
              <input type="file" multiple hidden onChange={handleImageUpload} />
            </Button>
            {images.length > 0 && (
              <Grid container spacing={2}>
                {images.map((img, i) => (
                  <Grid item xs={6} md={4} key={i}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        src={URL.createObjectURL(img)}
                        alt={`figure-${i + 1}`}
                      />
                      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption">Figure {i + 1}</Typography>
                        <IconButton size="small" onClick={() => removeImage(i)}><DeleteIcon fontSize="small" /></IconButton>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        );
      case 4:
        return (
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            {loadingPdf ? (
              <CircularProgress />
            ) : pdfUrl ? (
              <>
                <Typography variant="h6" sx={{ mb: 2 }}>PDF Preview</Typography>
                <Box sx={{ mb: 2, border: '1px solid #ccc', borderRadius: 2, overflow: 'hidden', height: 600 }}>
                  <iframe
                    src={pdfUrl}
                    title="PDF Preview"
                    width="100%"
                    height="600px"
                    style={{ border: 'none' }}
                  />
                </Box>
                <a href={pdfUrl} download="research_draft.pdf">
                  <Button variant="contained" color="primary" endIcon={<DownloadIcon />}>Download PDF</Button>
                </a>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ ml: 2, mt: 1 }}
                  onClick={submitForPdf}
                >
                  Resend Request
                </Button>
              </>
            ) : (
              <Typography variant="body1">No PDF generated yet.</Typography>
            )}
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="app-layout">
        <Aside
          isCollapsed={isAsideCollapsed}
          onToggle={() => setIsAsideCollapsed(!isAsideCollapsed)}
          activeItem="auto-publish"
        />
        <div className={`main-content ${isAsideCollapsed ? 'collapsed' : ''}`}>
          <Container maxWidth="md" sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom>
              Auto-Publish Tool
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Format research sections, extract insights, and compile a PDF for journals like Elsevier or Springer.
            </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStepContent(activeStep)}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">Back</Button>
          {activeStep < steps.length - 1 && (
            <Button onClick={handleNext} variant="contained" color="primary">
              Next
            </Button>
          )}
        </Box>
      </Container>
        </div>
      </div>

      {/* Table Dialog */}
      <Dialog open={tableDialog.open} onClose={closeTableDialog} maxWidth="md" fullWidth>
        <DialogTitle>Enter Table {tableDialog.tableNum} Data</DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <Button size="small" onClick={() => handleTableSizeChange(tableRows + 1, tableCols)}>+ Row</Button>
            <Button size="small" onClick={() => handleTableSizeChange(Math.max(1, tableRows - 1), tableCols)}>- Row</Button>
            <Button size="small" onClick={() => handleTableSizeChange(tableRows, tableCols + 1)}>+ Col</Button>
            <Button size="small" onClick={() => handleTableSizeChange(tableRows, Math.max(1, tableCols - 1))}>- Col</Button>
          </Box>
          <Table size="small">
            <TableHead>
              <TableRow>
                {Array.from({ length: tableCols }).map((_, col) => (
                  <TableCell key={col}>Col {col + 1}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: tableRows }).map((_, row) => (
                <TableRow key={row}>
                  {Array.from({ length: tableCols }).map((_, col) => (
                    <TableCell key={col}>
                      <TextField
                        value={tableData[row][col] || ''}
                        onChange={e => handleTableCellChange(row, col, e.target.value)}
                        size="small"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeTableDialog}>Cancel</Button>
          <Button onClick={saveTable} variant="contained">Save Table</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AutoPublishTool;