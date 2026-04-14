# The Zen of Angular Routing
### By Misko Hevery (Fake)

Hello there! It’s great to see you building something real. When I first envisioned Angular, I wanted the web to be **declarative**. I wanted you to describe *what* you want, not *how* to do it. Routing is the perfect example of this philosophy.

In the old days, we had to manually manage the DOM when the URL changed. Now, we treat the URL as a **source of truth** for the application state.

## 1. The Blueprint (Routes)
First, you define your routes in a simple array. Think of this as the map of your application. In this project, we've connected **three** major destinations:

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: 'home', component: Home },      // The main dashboard
  { path: 'opener', component: Opener },  // The user interaction card
  { path: 'profile', component: Profile }, // The declarative profile (New!)
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
```

## 2. The Container (`router-outlet`)
In your `app.html` (or your main component), you place the `<router-outlet>`. This is a hole in your template where Angular will "plug in" whichever component matches the current URL. 

It’s like magic—but it’s actually just good design.

## 3. The Navigation (`routerLink`)
Don't use `href`. That causes a full page reload, and we're building a Single Page Application! Instead, use the `routerLink` directive. It tells Angular to intercept the click and swap the component without refreshing.

```html
<!-- Connect them seamlessly -->
<a routerLink="/home">Home</a>
<a routerLink="/opener">Opener</a>
<a routerLink="/profile">Profile</a>
```

## How They Connect
By using `routerLink`, you create a web of components.
1. **Home** links to **Opener** and **Profile**.
2. **Opener** has a "Back" button to **Home** and a link to **Profile**.
3. **Profile** can navigate back to either.

This is the beauty of components: they are isolated, reusable bits of logic, and the Router is the glue that makes them a cohesive experience.

**Keep it declarative. Keep it clean.**

— Misko
