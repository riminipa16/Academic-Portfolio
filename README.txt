HOW TO ADD YOUR FILES
=====================

1. Put PDFs in      files/pdfs/
   Put images in    files/images/
   (use simple names without spaces, e.g. my-cv.pdf, profile.jpg)

2. Open assets/documents-data.js and add one line per file.
   There are example lines you can copy (remove the // at the start).

3. Save, then open documents.html in your browser.

PAGES
-----
index.html        Home
about.html        About
education.html    Education
research.html     Research & Publications
projects.html     Projects
experience.html   Experience & Leadership
documents.html    PDFs + image gallery
contact.html      Contact

The top menu and footer are shared and live in assets/site.js.

PUBLISHING
----------
Upload the whole folder to GitHub Pages, Netlify, or Vercel.
Open index.html to start. Keep the folder structure as it is.

NEW IN THIS VERSION
-------------------
assets/extra-data.js controls extra content:
  - SITE.CV_FILE        put your CV path here to show "Download CV" buttons everywhere
  - AWARDS              the Awards page
  - CERTIFICATIONS      page appears in the menu only once you add one
  - VOLUNTEERING        page appears in the menu only once you add one
  - RESEARCH_INTERESTS, INTERESTS, LANGUAGES   shown on the About page
