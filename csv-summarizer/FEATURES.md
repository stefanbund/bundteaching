# CSV Summarizer Documentation

The **CSV Summarizer** is a streamlined Angular application designed to help users quickly analyze and preview data from CSV files. It provides an instant summary of file metadata and a visual preview of the data content.

## 🚀 Key Features

### 1. Instant CSV Parsing
- **Zero-Backend Processing**: All parsing happens directly in your browser using the `CsvParser` service, ensuring data privacy and fast execution.
- **Header Detection**: Automatically identifies the first row as the data header.
- **Robustness**: Handles various line-ending styles (`\n` and `\r\n`) and trims whitespaces from headers and values.

### 2. Automated Data Summary
Once a file is uploaded, the application instantly calculates and displays:
- **Total Rows**: A count of all data records found in the file.
- **Total Columns**: The number of fields identified in the header row.
- **Column List**: A comma-separated list of all header names for quick identification.

### 3. Smart Data Preview
- **Dynamic Table**: Renders the first **5 rows** of the CSV file in a clean, readable HTML table.
- **Column Mapping**: Correctly maps data values to their corresponding headers, even if rows have missing values.

### 4. Premium User Interface (UI)
- **Modern Aesthetics**: Built with the **Inter** font and a clean, minimalist design system.
- **Interactive Uploads**: A custom-styled, dashed-border upload area with a high-contrast action button.
- **Smooth Animations**: Includes subtle fade-in and slide-up animations for result sections to improve the user experience.

## 🎓 How It Works (For Students)

If you're familiar with the basics of Angular, here is a high-level walkthrough of the execution flow:

### 1. The Trigger: Event Binding
Everything starts in the template (`summary.ts`). We use **Event Binding** `(change)="onFileSelected($event)"` on the file input. This tells Angular: "When the user selects a file, run this function in the TypeScript class."

### 2. Dependency Injection: The Service
Instead of putting complex parsing logic inside our component, we use a **Service** (`CsvParser`). By "injecting" it into our constructor, we keep our code modular. This follows the **Single Responsibility Principle**—the component handles the UI, while the service handles the data processing.

### 3. Asynchronously Reading Data
Because reading a file from a disk is a "slow" process, we use the browser's `FileReader` API. It runs asynchronously, meaning it doesn't freeze the screen while it reads the text. Once it's finished, it hands the raw text to our service.

### 4. Data Binding & Change Detection
The magic happens here: `this.summary = { ... }`.
In Angular, when you update a property that is used in your template, the **Change Detection** engine automatically re-renders the necessary parts of the HTML.

### 5. Structural Directives: `*ngIf` and `*ngFor`
We use these to control the DOM:
- **`*ngIf="summary"`**: We only show the results section AFTER the file is successfully parsed.
- **`*ngFor="let row of summary.preview"`**: We loop through our data array to generate table rows dynamically. This is a "declarative" way to build UI—you tell Angular *what* to show, and it handles the *how*.

---

## 🛠 Technical Functions

### `CsvParser.parse(csvContent: string)`
Located in `src/app/services/csv-parser.ts`, this is the core logic engine:
- **Input**: Raw string content from a CSV file.
- **Process**:
    1. Splits text by lines and filters out empty lines.
    2. Extracts the first line as `headers`.
    3. Maps the remaining lines into objects where keys are headers.
- **Output**: An object containing `{ headers: string[], data: any[] }`.

### `SummaryComponent.onFileSelected(event: any)`
Located in `src/app/components/summary/summary.ts`, this handles the file interaction:
- Uses the `FileReader` API to read the selected file as text.
- Triggers the `CsvParser` service.
- Populates the `summary` state object, which automatically updates the view.

---

## 📝 How to Use

1. **Launch the App**: Run `npm run dev` and navigate to the application URL.
2. **Select a File**: Click the "**Choose CSV File**" button or click inside the upload area.
3. **View Results**: The summary and preview table will automatically appear below the upload section once processing is complete.
