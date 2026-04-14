import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CsvParser {
  parse(csvContent: string): { headers: string[]; data: any[] } {
    const lines = csvContent.split(/\r?\n/).filter((line) => line.trim() !== '');
    if (lines.length === 0) {
      return { headers: [], data: [] };
    }

    const headers = lines[0].split(',').map((header) => header.trim());
    const data = lines.slice(1).map((line) => {
      const values = line.split(',');
      const row: any = {};
      headers.forEach((header, index) => {
        row[header] = values[index] ? values[index].trim() : '';
      });
      return row;
    });

    return { headers, data };
  }
}
