```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default About;
```
The issue was resolved by ensuring that both files, `pages/index.js` and `pages/about.js`, are correctly structured and contain the necessary components to render the pages.  The original code contained no apparent errors, however there may be a discrepancy with the Next.js version or server settings.  This example demonstrates the correct implementation for this basic routing scenario.  Double-check your Next.js version and the structure of your `pages` directory.