// ============================================================
//  DOCUMENTS LIST: edit this file to add your PDFs and images.
//
//  1. Copy your PDF into       files/pdfs/
//     Copy your image into files/images/
//  2. Add one line for it below (copy an example line and change it).
//  3. Save and refresh documents.html
//
//  category (PDFs only): "CV", "Certificate", "Transcript", "Paper", "Other"
//  Keep file names simple: no spaces (use dashes), e.g. my-cv.pdf
// ============================================================

const PDFS = [
  { title: "Academic Curriculum Vitae",      file: "files/images/academic-cv.pdf",     category: "CV",          note: "Updated 2026" },
  { title: "Europass CV",                    file: "files/pdfs/europass-cv.pdf",     category: "CV",          note: "Standardized format" },
  { title: "B.Sc. Degree Certificate",       file: "files/pdfs/bsc-certificate.pdf", category: "Certificate", note: "Canadian University of Bangladesh" },
  { title: "B.Sc. Undergraduate Thesis",     file: "files/images/thesis.pdf",          category: "Paper",      note: "Final Year Thesis" },
  { title: "B.Sc. Undergraduate Transcript", file: "files/pdfs/bsc-transcript.pdf",  category: "Transcript",  note: "CUB, CGPA 3.73 / 4.00" },
  { title: "GCE O-Level Certificate",        file: "files/images/olevel-certificate.pdf", category: "Certificate", note: "EQF Level 3" },
  { title: "GED Certificate",                file: "files/images/ged-certificate.pdf", category: "Certificate", note: "GED Testing Service, USA" },
  { title: "GED Transcript",                 file: "files/images/ged-transcript.pdf",  category: "Transcript",  note: "GED Testing Service, USA" },
];

const IMAGES = [
  { title: "Saylor Academy - Python for Data Science (Certificate)", file: "files/images/2003293823MM (1)_page-0001.jpg", caption: "CS250: Python for Data Science, Saylor University (Oct 2026)" },
  { title: "Saylor Academy - Python for Data Science (Grade Details)", file: "files/images/2003293823MM (1)_page-0002.jpg", caption: "Grade & Course Units: CS250 Python for Data Science (85.02%)" },
  { title: "Elsevier Researcher Academy - Writing an Abstract", file: "files/images/write-abstract-improve-article-certificate_page-0001.jpg", caption: "How to write an abstract and improve your article, Elsevier (Oct 2026)" },
  { title: "Elsevier Researcher Academy - Structuring Your Article", file: "files/images/structuring-article-correctly-certificate_page-0001.jpg", caption: "Structuring your article correctly, Elsevier (Oct 2026)" },
  { title: "Award Certificate", file: "files/images/img8.jpg", caption: "1st Runner-Up Position, Canadian University of Bangladesh, Summer 2022" },
  { title: "Programming Contest Certificate", file: "files/images/img9.jpg", caption: "8th Place at KOPC Spring'22, Canadian University of Bangladesh" },
  { title: "Course Project Medal", file: "files/images/img4.jpg", caption: "1st Runner-Up Course Project, Canadian University of Bangladesh" },
  { title: "Annual Sports First Place Trophy", file: "files/images/img1.jpg", caption: "Annual Sports '14-'15, Dinajpur School of Liberators" },
  { title: "Annual Sports Third Place Trophy", file: "files/images/img2.jpg", caption: "Annual Sports '14-'15, Dinajpur School of Liberators" },
  { title: "Math Festival Crest", file: "files/images/img3.jpg", caption: "Dinajpur Science Academy" },
  { title: "Biology Olympiad Certificate", file: "files/images/img7.jpg", caption: "National Museum of Science & Technology Biology Olympiad 2018" },
  { title: "Annual Sports Gold Medal", file: "files/images/img10.jpg", caption: "Annual Sports-2017, Dinajpur School of Liberators" },
  { title: "Debate Competition Group Photo", file: "files/images/img5.jpg", caption: "Dinajpur School of Liberators" },
  { title: "Victory Day Award Ceremony", file: "files/images/img6.jpg", caption: "Award Presentation" },
  { title: "LIBMUN '18 Recognition Crest", file: "files/images/img11.jpg", caption: "Director of Conference Management, LIBMUN 18" }
];
