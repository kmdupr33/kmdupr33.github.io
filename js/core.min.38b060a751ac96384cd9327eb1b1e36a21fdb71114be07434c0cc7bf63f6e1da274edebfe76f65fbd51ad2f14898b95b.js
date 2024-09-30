// const titles = [
//   "Are Source File Diffs Serially Correlated?",
//   'Is "Leave the code cleaner than you found it" good advice?',
//   "Refactoring, The Campground Rule, and the Serial Correlation of Diffs",
//   "Refactoring, The Campground Rule, and the (lack of) Serial Correlation of Diffs",
//   "Should we refactor files we're working on?",
//   "Should we refactor files we happen to be working on?",
//   "Are we refactoring the right files?",
//   "How good is standard refactoring advice?",
//   "Evaluating refactoring advice by analyzing editing patterns in the react.js codebase",
//   'Is "the campground rule" good refactoring advice for react.js contributors? (and for the rest of us)',
// ];

// const titleIndex = Math.floor(Math.random() * 10);

// const postListTitle = document.querySelector(
//   "#content > ul > li:nth-child(1) > a > p.note.title"
// );

// if (postListTitle) {
//   postListTitle.innerHTML = titles[titleIndex];
//   const link = document.querySelector("#content > ul > li:nth-child(1) > a");
//   link.href =
//     link.href + `?utm_content=${encodeURIComponent(titles[titleIndex])}`;
// }

// const postTitle = document.querySelector(
//   "#content > div.article-container > section.article.header > h1"
// );
// if (
//   postTitle &&
//   postTitle.innerHTML === "Are Source File Diffs Serially Correlated?"
// ) {
//   postTitle.innerHTML =
//     getQueryVariable("utm_content") ||
//     "Are Source File Diffs Serially Correlated?";
// }

// function getQueryVariable(variable) {
//   const query = window.location.search.substring(1);
//   const vars = query.split("&");
//   for (let i = 0; i < vars.length; i++) {
//     const pair = vars[i].split("=");
//     if (decodeURIComponent(pair[0]) == variable) {
//       return decodeURIComponent(pair[1]);
//     }
//   }
// }

;
