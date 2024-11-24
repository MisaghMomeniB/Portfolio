![Screenshot from 2024-11-24 13-05-15](https://github.com/user-attachments/assets/8aa6644d-769c-4b78-8f19-ee67f2fc0af4)

### 1. HTML Code (`index.html`)

This code defines the structure of the webpage, including the header, sections, and footer.

#### Explanation Line by Line:

```html
<!DOCTYPE html>
<html lang="en">
```
- This line specifies the document type as HTML and sets the language of the page to English.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
```
- `meta charset="UTF-8"`: Specifies the character encoding for the page (UTF-8 to support a wide range of characters).
- `meta name="viewport"`: Ensures the webpage is responsive on mobile devices by setting the viewport's width to the device's width.
- `title`: The title of the page that will appear on the browser's tab.
- `link rel="stylesheet"`: Links the external CSS file (`styles.css`) to style the page.

```html
<body>
```
- Starts the body of the webpage where all content will be placed.

```html
<header class="header">
    <div class="container">
        <h1 class="logo">MyWebsite</h1>
        <nav class="nav">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>
```
- This is the header section of the website, which includes:
  - A `h1` tag for the logo (website name).
  - A `nav` tag that holds a navigation menu with links to different sections of the page (About, Services, Portfolio, Contact).

```html
<section id="about" class="section about">
    <div class="container">
        <h2>About Us</h2>
        <p>Welcome to our professional website. We create amazing websites with modern designs and functionalities.</p>
    </div>
</section>
```
- The "About Us" section contains a heading (`h2`) and a brief introduction about the website or company.

```html
<section id="services" class="section services">
    <div class="container">
        <h2>Our Services</h2>
        <div class="service-grid">
            <div class="service">
                <h3>Web Design</h3>
                <p>Creating visually stunning and user-friendly designs.</p>
            </div>
            <div class="service">
                <h3>Development</h3>
                <p>Building scalable and functional web applications.</p>
            </div>
            <div class="service">
                <h3>SEO</h3>
                <p>Optimizing your website to rank higher on search engines.</p>
            </div>
        </div>
    </div>
</section>
```
- The "Our Services" section lists the services provided (Web Design, Development, and SEO). Each service is wrapped in a `div` with a heading and a description.

```html
<section id="portfolio" class="section portfolio">
    <div class="container">
        <h2>Portfolio</h2>
        <div class="portfolio-grid">
            <div class="portfolio-item">Project 1</div>
            <div class="portfolio-item">Project 2</div>
            <div class="portfolio-item">Project 3</div>
            <div class="portfolio-item">Project 4</div>
        </div>
    </div>
</section>
```
- The "Portfolio" section showcases previous projects. Each project is displayed in a grid layout using individual `div` elements.

```html
<section id="contact" class="section contact">
    <div class="container">
        <h2>Contact Us</h2>
        <form id="contactForm">
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email" required>
            <textarea id="message" placeholder="Your Message" required></textarea>
            <br>
            <button type="submit">Send</button>
        </form>
    </div>
</section>
```
- The "Contact Us" section includes a contact form with fields for Name, Email, and Message. A submit button is provided to send the form.

```html
<footer class="footer">
    <div class="container">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
    </div>
</footer>
```
- The footer section includes copyright information for the website.

```html
<script src="script.js"></script>
</body>
</html>
```
- Links the external JavaScript file (`script.js`) to handle dynamic functionality, like form submission.

### 2. CSS Code (`styles.css`)

This file defines the styles for the webpage, such as layout, colors, fonts, and animations.

#### Explanation Line by Line:

```css
:root {
    --bg-dark: #1A1A2E;
    --bg-light: #16213E;
    --accent-gold: #F4C95D;
    --accent-blue: #0F3460;
    --white: #fff;
    --text-light: #EAEAEA;
}
```
- CSS variables are defined here to store colors and other values used throughout the stylesheet. This helps with easy customization and consistency.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- This rule resets the default margin and padding of all elements and sets `box-sizing` to `border-box`, ensuring the padding and border are included in the element’s total width and height.

```css
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: var(--text-light);
    background-color: var(--bg-dark);
}
```
- The `body` tag is styled with a font family of Arial, light line spacing, light text color, and a dark background color.

```css
.container {
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
}
```
- `.container` class is used for creating a responsive container with a width of 90% of the screen width and a maximum width of 1200px.

```css
.header {
    background: var(--bg-light);
    color: var(--text-light);
    padding: 20px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
```
- The header section has a light background, light text color, padding, and a shadow effect for a subtle 3D appearance.

```css
.nav ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    animation: fadeIn 1.5s ease;
}
```
- The navigation menu uses flexbox to align the items horizontally and add a fade-in animation on page load.

```css
.service-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```
- The service section uses CSS Grid to display three columns with a gap between them.

### 3. JavaScript Code (`script.js`)

This file handles the dynamic behavior of the webpage, such as form submission.

#### Explanation Line by Line:

```javascript
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
    } else {
        alert("Please fill in all fields.");
    }
});
```
- This code listens for the submit event of the form. When the form is submitted, it prevents the default behavior (which would refresh the page), retrieves the values entered in the form fields, and checks if all required fields are filled. If they are, it shows a thank you message; otherwise, it alerts the user to fill in all fields.

---
