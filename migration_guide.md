# Migration Guide: Bootstrap to Angular

This guide outlines the process of converting a multi-page Bootstrap website into a modern Angular Single-Page Application (SPA) with shared services.

---

## 1. Project Initialization & Bootstrap Setup

To start, you need a clean Angular project with Bootstrap integrated.

1.  **Create the App**:
    ```bash
    npx -y @angular/cli new my-angular-app --routing --style=css
    ```
2.  **Add Bootstrap**:
    ```bash
    npm install bootstrap bootstrap-icons
    ```
3.  **Configure Styles**:
    In `angular.json`, add Bootstrap to the `styles` array:
    ```json
    "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.css"
    ]
    ```

---

## 2. Converting Pages to Components

In a multi-page site, you have `index.html`, `about.html`, etc. In Angular, these become **Components**.

1.  **Generate Components**:
    ```bash
    ng generate component home
    ng generate component about
    ng generate component contact
    ng generate component features
    ng generate component pricing
    ```
2.  **Migrate HTML**:
    Open each Bootstrap `.html` file, copy the content inside the `<body>` (excluding the navbar and footer), and paste it into the respective component's `.html` file (e.g., `src/app/home/home.component.html`).

---

## 3. Implementing Routing

Angular uses a `Router` to switch between components without a page reload.

1.  **Define Routes**:
    Update `src/app/app.routes.ts`:
    ```typescript
    import { Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { AboutComponent } from './about/about.component';

    export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'features', component: FeaturesComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' } // Catch-all route
    ];
    ```
2.  **Add Router Outlet**:
    In `src/app/app.component.html`, place the `<router-outlet>` where you want the page content to appear:
    ```html
    <app-navbar></app-navbar> 
    <main class="container mt-4">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    ```

---

## 4. Converting Local Logic to a Service

If you have a CSV parser that was previously a script tag or a function inside a single page, you should move it to a **Service** so all components can use it.

### Step-by-Step Conversion:

1.  **Generate the Service**:
    ```bash
    ng generate service services/csv-parser
    ```
2.  **Extract the Logic**:
    Move your JavaScript logic into the service class. For example, your current `CsvParser` service:
    ```typescript
    @Injectable({ providedIn: 'root' })
    export class CsvParser {
      parse(csvContent: string) {
        // ... parsing logic here ...
        return { headers, data };
      }
    }
    ```
3.  **Inject the Service**:
    In any component that needs to parse CSVs, inject the service into the constructor:
    ```typescript
    constructor(private csvParser: CsvParser) {}

    handleFile(fileData: string) {
      this.parsedData = this.csvParser.parse(fileData);
    }
    ```

---

## 5. Modernizing Navigation

Instead of standard anchors, use `routerLink` to prevent full page refreshes:

- **Old**: `<a href="about.html">About</a>`
- **New**: `<a routerLink="/about" routerLinkActive="active">About</a>`

> [!TIP]
> Use `routerLinkActive="active"` on your nav items to automatically apply Bootstrap's `.active` class when the route matches!
