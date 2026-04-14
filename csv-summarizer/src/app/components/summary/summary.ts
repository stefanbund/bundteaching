import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvParser } from '../../services/csv-parser';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="summary-container">
      <h2>CSV Summarizer</h2>
      <div class="upload-section">
        <label for="csvFile" class="file-label">Choose CSV File</label>
        <input type="file" id="csvFile" (change)="onFileSelected($event)" accept=".csv" />
      </div>

      <div *ngIf="summary" class="summary-results">
        <h3>Summary</h3>
        <p><strong>Total Rows:</strong> {{ summary.rowCount }}</p>
        <p><strong>Total Columns:</strong> {{ summary.columnCount }}</p>
        <p><strong>Columns:</strong> {{ summary.headers.join(', ') }}</p>

        <div class="preview-section" *ngIf="summary.data.length > 0">
          <h4>Preview (First 5 Rows)</h4>
          <table>
            <thead>
              <tr>
                <th *ngFor="let header of summary.headers">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let row of summary.preview">
                <td *ngFor="let header of summary.headers">{{ row[header] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: `
    .summary-container {
      padding: 20px;
      font-family: 'Inter', sans-serif;
      max-width: 800px;
      margin: 0 auto;
      background: #fdfdfd;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }
    .upload-section {
      margin-bottom: 20px;
      padding: 20px;
      border: 2px dashed #ccc;
      border-radius: 8px;
      text-align: center;
    }
    .file-label {
      background: #6200ee;
      color: white;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      display: inline-block;
      margin-bottom: 10px;
    }
    input[type="file"] {
      display: block;
      margin: 10px auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
    .summary-results {
      animation: fadeIn 0.5s ease-in;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
})
export class SummaryComponent {
  summary: any = null;

  constructor(private csvParser: CsvParser) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const content = e.target.result;
        const parsed = this.csvParser.parse(content);
        this.summary = {
          rowCount: parsed.data.length,
          columnCount: parsed.headers.length,
          headers: parsed.headers,
          data: parsed.data,
          preview: parsed.data.slice(0, 5)
        };
      };
      reader.readAsText(file);
    }
  }
}
