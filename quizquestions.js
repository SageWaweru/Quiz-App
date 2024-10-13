const questions = {
    htmleasy:[
        {
          question: "HTML stands for __________",
          possibleAnswers: ["HighText Marking Language", "HyperText Marking Language", "HyperText Markup Language"],
          correctAnswer: "HyperText Markup Language",
          hint: "It is a standard language used to create web pages."
        },
        {
          question: "Who is the father of HTML?",
          possibleAnswers: ["Rasmus Lerdorf", "Tim Berners-Lee", "Brendan Eich"],
          correctAnswer: "Tim Berners-Lee",
          hint: "He is also known for inventing the World Wide Web."
        },
        {
          question: "What is the correct syntax of doctype in HTML5?",
          possibleAnswers: ["</doctype html>", "<!doctype html>", "<doctype html!>"],
          correctAnswer: "<!doctype html>",
          hint: "It declares the version of HTML being used in the document."
        },
        {
          question: "Which of the following is used to read an HTML page and render it?",
          possibleAnswers: ["Web browser", "Web network", "Web server"],
          correctAnswer: "Web browser",
          hint: "It's the application you use to browse websites."
        },
        {
          question: "Which of the following tag is used for inserting the largest heading in HTML?",
          possibleAnswers: ["head", "heading", "<h1>"],
          correctAnswer: "<h1>",
          hint: "HTML has six heading tags, and this one is the first."
        },
        {
          question: "In which part of the HTML metadata is contained?",
          possibleAnswers: ["head tag", "title tag", ""],
          correctAnswer: "head tag",
          hint: "This section contains information that describes the webpage."
        },
        {
          question: "Which element is used to get highlighted text in HTML5?",
          possibleAnswers: ["<highlight>", "<mark>", "<u>"],
          correctAnswer: "<mark>",
          hint: "This tag is used to indicate text that should be highlighted or emphasized."
        },
        {
          question: "Which of the following is used to increase the row height?",
          possibleAnswers: ["Cellspacing", "Row span", "Cellpadding"],
          correctAnswer: "Row span",
          hint: "This attribute allows table cells to span across multiple rows."
        },
        {
          question: "Which of the following is not an HTML5 tag?",
          possibleAnswers: ["<slider>", "<video>", "<track>"],
          correctAnswer: "<slider>",
          hint: "This tag is commonly confused with modern UI elements."
        },
        {
          question: "Which of the following elements in HTML5 defines video or movie content?",
          possibleAnswers: ["<media>", "<video>", "<audio>"],
          correctAnswer: "<video>",
          hint: "This tag is used to embed multimedia content such as films or clips."
        },
        {
          question: "How do we write comments in HTML?",
          possibleAnswers: ["</…….>", "<!……>", "<…….!>"],
          correctAnswer: "<!……>",
          hint: "HTML comments begin with this tag and won't appear on the webpage."
        },
        {
          question: "Which of the following is not an element associated with the HTML table layout?",
          possibleAnswers: ["alignment", "size", "color"],
          correctAnswer: "color",
          hint: "This attribute is more associated with CSS than with tables in HTML."
        },
        {
          question: "Which element is used for styling HTML5 layout?",
          possibleAnswers: ["jQuery", "CSS", "JavaScript"],
          correctAnswer: "CSS",
          hint: "This technology is used for styling and layout, separate from HTML."
        },
        {
          question: "Which HTML tag is used for making character appearance bold?",
          possibleAnswers: ["<b>content</b>", "<u>content</u>", "<br>content</br>"],
          correctAnswer: "<b>content</b>",
          hint: "This tag makes text bold."
        },
        {
          question: "Which HTML tag is used to insert an image?",
          possibleAnswers: ["<img url=”htmllogo.jpg” />", "<img alt=”htmllogo.jpg” />", "<img src=”htmllogo.jpg” />"],
          correctAnswer: "<img src=”htmllogo.jpg” />",
          hint: "This tag requires the 'src' attribute to specify the image source."
        },
        {
          question: "Among the following, which is the HTML paragraph tag?",
          possibleAnswers: ["<pre>", "<hr>", "<p>"],
          correctAnswer: "<p>",
          hint: "This tag is used to create a block of text or paragraph."
        },
        {
          question: "Caption Tag in HTML?",
          possibleAnswers: ["Is used to display the Title for table at the top", "Is used to display the Title for table at the bottom", "Both"],
          correctAnswer: "Both",
          hint: "This tag is used to provide a title or label for a table."
        },
        {
          question: "Which of the following is a valid color code?",
          possibleAnswers: ["#000000;", "#0000000;", "#0000000;"],
          correctAnswer: "#000000;",
          hint: "It is a hexadecimal code for black."
        },
        {
          question: "HTML program is saved using _________ extension.",
          possibleAnswers: [".html", ".htlm", ".hml"],
          correctAnswer: ".html",
          hint: "The file extension is used for hypertext documents."
        },
        {
          question: "The <title> element must be located inside",
          possibleAnswers: ["the <head> element", "the <body> element", "the <table> element"],
          correctAnswer: "the <head> element",
          hint: "This element provides the title of the webpage shown in the browser tab."
        },
        {
          question: "How to make a text italic?",
          possibleAnswers: ["<em>Some text.</em>", "<italic>Some text.</italic>", "<strong>Some text.</strong>"],
          correctAnswer: "<em>Some text.</em>",
          hint: "This tag is commonly used to emphasize text, making it italic."
        },
        {
          question: "Which of the following table tags is used to create a table row?",
          possibleAnswers: ["<tr>", "<td>", "<th>"],
          correctAnswer: "<tr>",
          hint: "This tag defines rows in a table."
        },
        {
          question: "Which HTML attribute specifies an alternative text for an image, if the image cannot be displayed?",
          possibleAnswers: ["alt", "src", "title"],
          correctAnswer: "alt",
          hint: "This attribute is used for accessibility and SEO purposes."
        },
        {
          question: "Which tag is used to create a drop-down list in an HTML form?",
          possibleAnswers: ["<select>", "<dropdown>", "<list>"],
          correctAnswer: "<select>",
          hint: "This tag allows users to select an option from a list."
        },
        {
          question: "Which HTML tag is used to define a description list?",
          possibleAnswers: ["<dl>", "<dt>", "<dd>"],
          correctAnswer: "<dl>",
          hint: "This tag is used to create a list of terms and their descriptions."
        },
        {
          question: "Which attribute is used to merge two or more table cells horizontally in HTML?",
          possibleAnswers: ["colspan", "rowspan", "cellpadding"],
          correctAnswer: "colspan",
          hint: "This attribute allows cells to span across multiple columns."
        },
        {
          question: "Opening Tag of HTML Tag is called as ________.",
          possibleAnswers: ["Foward Tag", "Starting Tag", "Closed Tag"],
          correctAnswer: "Starting Tag",
          hint: "This tag marks the beginning of an element."
        },
        {
          question: "What is the correct HTML tag for inserting a line break?",
          possibleAnswers: ["<br>", "<lb>", "<break>"],
          correctAnswer: "<br>",
          hint: "This tag is used to add a single line break."
        },
        {
          question: "Which of the following is used to define an ordered list in HTML?",
          possibleAnswers: ["<ul>", "<ol>", "<dl>"],
          correctAnswer: "<ol>",
          hint: "This tag creates a numbered list."
        },
        {
          question: "Which HTML element is used to create a hyperlink?",
          possibleAnswers: ["<a>", "<link>", "<href>"],
          correctAnswer: "<a>",
          hint: "This tag is used to link one page to another."
        },
        {
          question: "Which tag is used to define a list item in an HTML list?",
          possibleAnswers: ["<li>", "<ul>", "<ol>"],
          correctAnswer: "<li>",
          hint: "This tag is used to define individual items within a list."
        },
        {
          question: "What is the use of <hr/> tag in HTML?",
          possibleAnswers: ["To create horizontal rule between sections", "To create vertical rule between sections", "For making content appearance italics"],
          correctAnswer: "To create horizontal rule between sections",
          hint: "This tag creates a visible horizontal line."
        },
        {
          question: "Which of the following HTML element is used for canvas graphics?",
          possibleAnswers: ["<canvas>", "<paint>", "<graphic>"],
          correctAnswer: "<canvas>",
          hint: "This element allows for dynamic rendering of 2D shapes."
        },
        {
          question: "Which HTML element is used for YouTube videos?",
          possibleAnswers: ["<frame>", "<samp>", "<iframe>"],
          correctAnswer: "<iframe>",
          hint: "This element embeds external content such as video frames."
        },
        {
          question: "Which of the following is an HTML specification used to add more information to HTML tags?",
          possibleAnswers: ["Modifydata", "Macrodata", "Microdata"],
          correctAnswer: "Microdata",
          hint: "This specification allows for machine-readable data within HTML."
        },
        {
          question: "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
          possibleAnswers: ["type", "id", "class"],
          correctAnswer: "id",
          hint: "This attribute provides a unique identifier to elements for styling or scripting."
        },
        {
          question: "Which attribute is not essential under <iframe>?",
          possibleAnswers: ["frameborder", "width", "src"],
          correctAnswer: "frameborder",
          hint: "This attribute is used to define the border around an embedded content frame."
        },
        {
          question: "Which tag is used to create a blank line in HTML?",
          possibleAnswers: ["<b>", "<em>", "<br>"],
          correctAnswer: "<br>",
          hint: "This tag creates a new line break."
        },
        {
          question: "How to create a checkbox in HTML Form?",
          possibleAnswers: ["<input type=”checkbox”>", "<input type=”text”>", "<input type=”button”>"],
          correctAnswer: "<input type=”checkbox”>",
          hint: "This input type creates a box that users can check or uncheck."
        },
        {
          question: "Which of the following HTML tag is used to create an unordered list?",
          possibleAnswers: ["<ol>", "<li>", "<ul>"],
          correctAnswer: "<ul>",
          hint: "This tag creates a bullet-point list."
        },
        {
          question: "What is the work of <address> element in HTML5?",
          possibleAnswers: ["contains contact details for author", "contains url", "contains IP address"],
          correctAnswer: "contains contact details for author",
          hint: "This tag provides contact details for the content owner."
        },
        {
          question: "Which of the following tag is used to create a text area in HTML Form?",
          possibleAnswers: ["<text></text>", "<textarea> </textarea>", "<input type=”textarea” />"],
          correctAnswer: "<textarea> </textarea>",
          hint: "This tag is used to create a multi-line text input field."
        },
        {
          question: "Which HTML element is used for short quote?",
          possibleAnswers: ["<q>", "<blockquote>", "<em>"],
          correctAnswer: "<q>",
          hint: "This tag is used for inline quotes."
        },
        {
          question: "In HTML, which attribute is used to create a link that opens in a new window tab?",
          possibleAnswers: ["src=”_blank”", "alt=”_blank”", "target=”_blank”"],
          correctAnswer: "target=”_blank”",
          hint: "This attribute tells the browser to open a new tab or window for the link."
        }
      ],
      
    
      htmlmedium: [
        {
            question: "What is the correct HTML element for the largest heading?",
            possibleAnswers: ["<h1>", "<head>", "<h6>"],
            correctAnswer: "<h1>",
            hint: "It's the most important heading tag in HTML, often used for titles."
        },
        {
            question: "Which HTML attribute is used to open a link in a new tab?",
            possibleAnswers: ["target", "href", "rel"],
            correctAnswer: "target",
            hint: "This attribute helps define how links behave when clicked."
        },
        {
            question: "What is the purpose of the <caption> element in a table?",
            possibleAnswers: ["To describe the table", "To merge cells", "To define headers"],
            correctAnswer: "To describe the table",
            hint: "It's used to provide a title for tables."
        },
        {
            question: "What does the id attribute do in HTML?",
            possibleAnswers: ["Provides a unique identifier", "Defines a class", "Creates a tooltip"],
            correctAnswer: "Provides a unique identifier",
            hint: "This attribute is often used to target elements with CSS or JavaScript."
        },
        {
            question: "Which HTML attribute is used to specify inline styles for an element?",
            possibleAnswers: ["style", "class", "id"],
            correctAnswer: "style",
            hint: "This attribute allows for direct styling without using an external or internal stylesheet."
        },
        {
            question: "How can you embed a video into an HTML page?",
            possibleAnswers: ["<video>", "<media>", "<iframe>"],
            correctAnswer: "<video>",
            hint: "This HTML5 element is specifically designed to embed video content."
        },
        {
            question: "Which attribute specifies the width of a table column?",
            possibleAnswers: ["width", "colspan", "rows"],
            correctAnswer: "width",
            hint: "It helps control the dimensions of table columns."
        },
        {
            question: "How do you specify an HTML document's character encoding?",
            possibleAnswers: ["<meta charset>", "<meta encoding>", "<charset>"],
            correctAnswer: "<meta charset>",
            hint: "This tag is placed inside the <head> section to ensure the correct display of characters."
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            possibleAnswers: ["<style>", "<link>", "<script>"],
            correctAnswer: "<style>",
            hint: "This tag goes in the <head> section and contains CSS rules."
        },
        {
            question: "What does the <fieldset> element do in an HTML form?",
            possibleAnswers: ["Groups related inputs", "Creates a form", "Creates a field"],
            correctAnswer: "Groups related inputs",
            hint: "This element is used for grouping form controls together."
        },
        {
            question: "What is the default display value of the <span> element?",
            possibleAnswers: ["inline", "block", "inline-block"],
            correctAnswer: "inline",
            hint: "This tag is often used to apply styles to a part of text without breaking the flow."
        },
        {
            question: "What is the purpose of the <legend> element?",
            possibleAnswers: ["Adds a title to a fieldset", "Defines a footer", "Defines a list"],
            correctAnswer: "Adds a title to a fieldset",
            hint: "This element is used in combination with <fieldset> to label grouped form elements."
        },
        {
            question: "Which HTML attribute is used to pre-fill input fields?",
            possibleAnswers: ["value", "placeholder", "default"],
            correctAnswer: "value",
            hint: "This attribute sets the initial content for input fields."
        },
        {
            question: "How do you define an image map in HTML?",
            possibleAnswers: ["<map>", "<area>", "<img>"],
            correctAnswer: "<map>",
            hint: "This element is used to define clickable areas within an image."
        },
        {
            question: "Which tag is used to define a client-side script in HTML?",
            possibleAnswers: ["<script>", "<code>", "<link>"],
            correctAnswer: "<script>",
            hint: "This tag is essential for embedding JavaScript in a web page."
        },
        {
            question: "How do you add a tooltip to an element in HTML?",
            possibleAnswers: ["title", "tooltip", "hover"],
            correctAnswer: "title",
            hint: "This attribute provides additional information when hovering over an element."
        },
        {
            question: "Which HTML element is used to display a scalar measurement within a known range?",
            possibleAnswers: ["<meter>", "<progress>", "<input>"],
            correctAnswer: "<meter>",
            hint: "This tag is used to display numeric values with a known range."
        },
        {
            question: "Which tag is used to create a multiline text input field?",
            possibleAnswers: ["<textarea>", "<input>", "<text>"],
            correctAnswer: "<textarea>",
            hint: "This tag allows users to enter multiple lines of text in a form."
        },
        {
            question: "How can you create an image link in HTML?",
            possibleAnswers: ["<a><img></a>", "<img href>", "<link>"],
            correctAnswer: "<a><img></a>",
            hint: "This involves wrapping an <img> element inside an <a> tag."
        },
        {
            question: "What is the correct way to define a list where the items are numbered?",
            possibleAnswers: ["<ol>", "<ul>", "<li>"],
            correctAnswer: "<ol>",
            hint: "This tag is specifically for ordered lists, where each item has a number."
        },
        {
            question: "Which HTML element is used to specify that the text inside it is important?",
            possibleAnswers: ["<strong>", "<b>", "<em>"],
            correctAnswer: "<strong>",
            hint: "This tag gives extra emphasis to the text and is often used for strong importance."
        },
        {
            question: "Which HTML tag is used to play an audio file?",
            possibleAnswers: ["<audio>", "<sound>", "<media>"],
            correctAnswer: "<audio>",
            hint: "This HTML5 element is used for embedding sound content."
        },
        {
            question: "Which attribute is used to specify the allowed file types in an input field of type 'file'?",
            possibleAnswers: ["accept", "type", "allowed"],
            correctAnswer: "accept",
            hint: "This attribute ensures that only specific file types can be uploaded."
        },
        {
            question: "How do you specify an HTML document's language?",
            possibleAnswers: ["lang", "locale", "language"],
            correctAnswer: "lang",
            hint: "This attribute helps define the language used in the HTML document."
        },
        {
            question: "How do you set a background image for an HTML page using inline CSS?",
            possibleAnswers: ["style='background-image'", "style='image'", "style='img'"],
            correctAnswer: "style='background-image'",
            hint: "This property is used for setting background images through inline styling."
        },
        {
            question: "Which HTML tag is used to define a clickable button?",
            possibleAnswers: ["<button>", "<input>", "<click>"],
            correctAnswer: "<button>",
            hint: "This tag is used to create clickable buttons in HTML forms."
        },
        {
            question: "What is the correct HTML tag to create a numbered list?",
            possibleAnswers: ["<ol>", "<ul>", "<li>"],
            correctAnswer: "<ol>",
            hint: "Use this tag to create ordered lists with numbers."
        },
        {
            question: "How can you specify the relationship between the current document and an external file?",
            possibleAnswers: ["rel", "href", "target"],
            correctAnswer: "rel",
            hint: "This attribute is commonly used in <link> tags to specify relationships."
        },
        {
            question: "Which tag is used to group inline elements in HTML?",
            possibleAnswers: ["<span>", "<div>", "<p>"],
            correctAnswer: "<span>",
            hint: "This inline tag is often used to apply styling or scripting."
        },
        {
            question: "Which attribute is used in the <form> element to send form data to a server?",
            possibleAnswers: ["action", "method", "target"],
            correctAnswer: "action",
            hint: "This attribute defines where the form data should be submitted."
        },
        {
            question: "What does the <em> tag do in HTML?",
            possibleAnswers: ["Emphasizes the text", "Creates a paragraph", "Makes the text bold"],
            correctAnswer: "Emphasizes the text",
            hint: "This tag adds emphasis to the text, often rendering it in italics."
        },
        {
            question: "Which HTML tag is used to define an ordered list?",
            possibleAnswers: ["<ol>", "<ul>", "<li>"],
            correctAnswer: "<ol>",
            hint: "This is the go-to tag for creating lists with numbers or letters."
        },
        {
            question: "How can you specify the version of the HTML document?",
            possibleAnswers: ["<!DOCTYPE html>", "<html version='5.0'>", "<html lang='en'>"],
            correctAnswer: "<!DOCTYPE html>",
            hint: "This declaration ensures the document is in standards mode."
        },
        {
            question: "Which attribute is used to specify the type of button in HTML?",
            possibleAnswers: ["type", "value", "name"],
            correctAnswer: "type",
            hint: "This attribute is used to specify what kind of button it is (e.g., submit, reset)."
        },
        {
            question: "Which HTML element is used to display text in a fixed-width font?",
            possibleAnswers: ["<pre>", "<code>", "<kbd>"],
            correctAnswer: "<pre>",
            hint: "This element preserves whitespace and formatting, often used for code."
        },
        {
            question: "Which HTML element is used to display a progress bar?",
            possibleAnswers: ["<progress>", "<meter>", "<input>"],
            correctAnswer: "<progress>",
            hint: "This element represents the completion progress of a task."
        },
        {
            question: "What is the correct way to refer to an external style sheet in HTML?",
            possibleAnswers: ["<link rel='stylesheet' href='style.css'>", "<style href='style.css'>", "<stylesheet src='style.css'>"],
            correctAnswer: "<link rel='stylesheet' href='style.css'>",
            hint: "This tag is placed in the <head> section to link external styles."
        },
        {
            question: "Which HTML tag is used to embed an object, such as a Flash animation, in a webpage?",
            possibleAnswers: ["<embed>", "<object>", "<flash>"],
            correctAnswer: "<object>",
            hint: "This tag is versatile for embedding external content such as videos, Flash, etc."
        },
        {
            question: "Which HTML tag defines a hyperlink?",
            possibleAnswers: ["<a>", "<link>", "<nav>"],
            correctAnswer: "<a>",
            hint: "This tag is responsible for creating clickable links."
        },
        {
            question: "How do you set the background color for an HTML element?",
            possibleAnswers: ["style='background-color'", "style='color'", "style='bg'"],
            correctAnswer: "style='background-color'",
            hint: "This style property is used to set the background color of elements."
        },
        {
            question: "How can you align an image to the right of a webpage using HTML?",
            possibleAnswers: ["<img align='right'>", "<img style='right'>", "<img float='right'>"],
            correctAnswer: "<img align='right'>",
            hint: "This attribute helps control the alignment of images on the page."
        },
        {
            question: "Which HTML tag defines a description or definition list?",
            possibleAnswers: ["<dl>", "<ul>", "<ol>"],
            correctAnswer: "<dl>",
            hint: "This tag is used to create lists of definitions or descriptions."
        },
        {
            question: "What is the purpose of the <time> tag in HTML?",
            possibleAnswers: ["Defines a time/date", "Defines a timestamp", "Defines a meta tag"],
            correctAnswer: "Defines a time/date",
            hint: "This tag is used to represent dates or times."
        }

    ],
    
    htmlhard: [
        {
            question: "Which attribute can be used to create responsive images in HTML5?",
            possibleAnswers: ["srcset", "sizes", "picture"],
            correctAnswer: "srcset",
            hint: "This attribute allows multiple image sources for different screen sizes."
        },
        {
            question: "What is the purpose of the <noscript> tag in HTML?",
            possibleAnswers: ["To provide fallback content when JavaScript is disabled", "To embed scripts", "To write JavaScript code"],
            correctAnswer: "To provide fallback content when JavaScript is disabled",
            hint: "It is used to display content when the user’s browser doesn’t support JavaScript."
        },
        {
            question: "How do you define a custom data attribute in HTML5?",
            possibleAnswers: ["data-*", "attr-*", "custom-*"],
            correctAnswer: "data-*",
            hint: "These attributes allow you to store extra information on standard HTML elements."
        },
        {
            question: "Which element is used to group content together in HTML5, especially for styling and scripting purposes?",
            possibleAnswers: ["<div>", "<section>", "<span>"],
            correctAnswer: "<div>",
            hint: "This element is often used as a container for other elements."
        },
        {
            question: "What does the <picture> element in HTML do?",
            possibleAnswers: ["Provides multiple sources for responsive images", "Defines an image", "Embeds multimedia content"],
            correctAnswer: "Provides multiple sources for responsive images",
            hint: "This element helps in responsive design by allowing different image sources for varying device conditions."
        },
        {
            question: "How can you specify multiple background images for an element in CSS via inline style?",
            possibleAnswers: ["style='background-image: url(img1), url(img2)'", "style='backgrounds: url(img1), url(img2)'", "style='multiple-bg: url(img1), url(img2)'"],
            correctAnswer: "style='background-image: url(img1), url(img2)'",
            hint: "You can list the URLs of multiple background images separated by commas."
        },
        {
            question: "Which element is used to define navigation links in HTML5?",
            possibleAnswers: ["<nav>", "<menu>", "<section>"],
            correctAnswer: "<nav>",
            hint: "This element is typically used for main website navigation links."
        },
        {
            question: "What is the purpose of the <details> element in HTML?",
            possibleAnswers: ["To create a collapsible content section", "To store metadata", "To define extra content like footnotes"],
            correctAnswer: "To create a collapsible content section",
            hint: "This element can show or hide information when toggled."
        },
        {
            question: "How do you create a web worker in HTML5?",
            possibleAnswers: ["new Worker('script.js')", "createWorker('script.js')", "startWorker('script.js')"],
            correctAnswer: "new Worker('script.js')",
            hint: "Web workers run JavaScript code in the background without affecting the user interface."
        },
        {
            question: "What does the 'defer' attribute in the <script> tag do?",
            possibleAnswers: ["Defers script execution until the document has been parsed", "Delays script execution by a set time", "Prevents script execution on page load"],
            correctAnswer: "Defers script execution until the document has been parsed",
            hint: "This attribute ensures the script doesn't block the HTML parser."
        },
        {
            question: "How do you create a progress bar in HTML5?",
            possibleAnswers: ["<progress>", "<meter>", "<bar>"],
            correctAnswer: "<progress>",
            hint: "This tag shows the completion progress of a task."
        },
        {
            question: "Which element is used to display machine-readable contact information in HTML5?",
            possibleAnswers: ["<address>", "<contact>", "<info>"],
            correctAnswer: "<address>",
            hint: "This tag is typically used to display contact details like names and email addresses."
        },
        {
            question: "What is the purpose of the <output> element in HTML5?",
            possibleAnswers: ["To display the result of a calculation", "To output text", "To send form data"],
            correctAnswer: "To display the result of a calculation",
            hint: "This tag is useful when you need to show the result of user input."
        },
        {
            question: "Which attribute of the <input> element is used to define whether multiple files can be selected in a file upload?",
            possibleAnswers: ["multiple", "multiplefiles", "filelist"],
            correctAnswer: "multiple",
            hint: "This attribute allows users to select more than one file during file upload."
        },
        {
            question: "Which HTML tag is used to define a container for external applications or interactive content?",
            possibleAnswers: ["<embed>", "<iframe>", "<object>"],
            correctAnswer: "<object>",
            hint: "This element can embed various multimedia or external applications."
        },
        {
            question: "Which new HTML5 element is used to define self-contained content?",
            possibleAnswers: ["<article>", "<section>", "<aside>"],
            correctAnswer: "<article>",
            hint: "This element is used for content that can stand alone (e.g., blog posts)."
        },
        {
            question: "What is the purpose of the 'autocomplete' attribute in an HTML form?",
            possibleAnswers: ["Specifies whether a form or input field should have autocomplete enabled", "Prevents form submission", "Checks the form for syntax errors"],
            correctAnswer: "Specifies whether a form or input field should have autocomplete enabled",
            hint: "This attribute allows browsers to store and suggest previously entered values."
        },
        {
            question: "How can you include inline SVG images in an HTML document?",
            possibleAnswers: ["<svg>", "<img src='file.svg'>", "<embed>"],
            correctAnswer: "<svg>",
            hint: "This element directly embeds vector images as inline code in your HTML."
        },
        {
            question: "Which HTML5 input type is used for entering a date?",
            possibleAnswers: ["date", "datetime-local", "time"],
            correctAnswer: "date",
            hint: "This input type presents a date picker to the user."
        },
        {
            question: "Which attribute specifies that an input field must be filled out before submitting the form?",
            possibleAnswers: ["required", "must", "validate"],
            correctAnswer: "required",
            hint: "This attribute ensures that the form will not submit unless this field is filled."
        },
        {
            question: "What is the purpose of the <keygen> tag in HTML?",
            possibleAnswers: ["To generate a key pair for form submissions", "To encrypt form data", "To create a digital signature"],
            correctAnswer: "To generate a key pair for form submissions",
            hint: "This tag was used for authentication purposes but is now deprecated."
        },
        {
            question: "Which attribute of the <form> element is used to specify an HTTP method to send form data?",
            possibleAnswers: ["method", "action", "target"],
            correctAnswer: "method",
            hint: "This attribute defines how form data is sent to the server (GET or POST)."
        },
        {
            question: "Which HTML5 element is used for media playback in a web browser?",
            possibleAnswers: ["<video>", "<media>", "<embed>"],
            correctAnswer: "<video>",
            hint: "This element allows the embedding of video content directly in HTML."
        },
        {
            question: "How do you indicate that an <input> element should be read-only?",
            possibleAnswers: ["readonly", "disabled", "novalidate"],
            correctAnswer: "readonly",
            hint: "This attribute prevents the user from modifying the input value."
        },
        {
            question: "Which HTML element is used to specify a header for a document or section?",
            possibleAnswers: ["<header>", "<head>", "<hgroup>"],
            correctAnswer: "<header>",
            hint: "This tag is usually used at the top of a document or section for introductory content."
        },
        {
            question: "Which attribute in HTML5 <input> tag is used to associate an input with a datalist?",
            possibleAnswers: ["list", "id", "options"],
            correctAnswer: "list",
            hint: "This attribute connects an input field with a predefined list of suggestions."
        },
        {
            question: "Which new HTML5 element defines a set of navigation links?",
            possibleAnswers: ["<nav>", "<section>", "<menu>"],
            correctAnswer: "<nav>",
            hint: "It typically contains links to other parts of the website."
        },
        {
            question: "Which input type allows for the selection of a month in HTML5?",
            possibleAnswers: ["month", "date", "datetime"],
            correctAnswer: "month",
            hint: "This input type opens a month picker."
        },
        {
            question: "What is the purpose of the <figure> element in HTML5?",
            possibleAnswers: ["To group media and caption content", "To represent statistics", "To embed videos"],
            correctAnswer: "To group media and caption content",
            hint: "This element is often used for images with accompanying captions."
        },
        {
            question: "Which element is used to define the title of a document in HTML?",
            possibleAnswers: ["<title>", "<meta>", "<header>"],
            correctAnswer: "<title>",
            hint: "This element is typically placed within the head section and is displayed on the browser tab."
        },
        {
            question: "Which HTML5 element is used to define a scalar value within a known range?",
            possibleAnswers: ["<meter>", "<progress>", "<input>"],
            correctAnswer: "<meter>",
            hint: "This element is used for displaying a measurable value such as disk usage."
        },
        {
            question: "Which input type in HTML5 allows you to choose a color?",
            possibleAnswers: ["color", "range", "text"],
            correctAnswer: "color",
            hint: "This input type opens a color picker."
        },
        {
            question: "What does the 'async' attribute in the <script> tag do?",
            possibleAnswers: ["Asynchronously loads the script", "Prevents script execution", "Defers script execution until the document is loaded"],
            correctAnswer: "Asynchronously loads the script",
            hint: "This attribute allows the script to load while the rest of the page continues to load."
        },
        {
            question: "How do you create a dialog box in HTML5?",
            possibleAnswers: ["<dialog>", "<modal>", "<popup>"],
            correctAnswer: "<dialog>",
            hint: "This element represents a dialog box or other interactive window."
        },
        {
            question: "What does the <mark> element do in HTML5?",
            possibleAnswers: ["Highlights text", "Italicizes text", "Strikes through text"],
            correctAnswer: "Highlights text",
            hint: "This tag is used to highlight parts of a text."
        },
        {
            question: "Which HTML5 input type is used to enter a URL?",
            possibleAnswers: ["url", "text", "link"],
            correctAnswer: "url",
            hint: "This input type is specifically for web addresses."
        },
        {
            question: "How do you specify that a video should play automatically when the page loads?",
            possibleAnswers: ["autoplay", "play", "autostart"],
            correctAnswer: "autoplay",
            hint: "This attribute plays a video immediately when the page is loaded."
        },
        {
            question: "What is the function of the <wbr> element in HTML5?",
            possibleAnswers: ["To suggest a line break opportunity", "To create a word boundary", "To represent whitespace"],
            correctAnswer: "To suggest a line break opportunity",
            hint: "This tag is used to indicate where the browser can safely break a line of text."
        },
        {
            question: "Which attribute of the <a> tag in HTML is used to open the link in a new window?",
            possibleAnswers: ["target='_blank'", "newtab='true'", "open='new'"],
            correctAnswer: "target='_blank'",
            hint: "This attribute opens a hyperlink in a new browser tab or window."
        },
        {
            question: "What is the purpose of the 'sandbox' attribute in the <iframe> tag?",
            possibleAnswers: ["Restricts the actions of the content in the iframe", "Defines the source URL of the iframe", "Styles the iframe appearance"],
            correctAnswer: "Restricts the actions of the content in the iframe",
            hint: "This attribute limits what the iframe content is allowed to do, such as running scripts."
        },
        {
            question: "What does the 'defer' attribute do when used in a <script> tag?",
            possibleAnswers: ["Delays the execution of the script until after the document has been parsed", "Specifies the script to be executed immediately", "Indicates that the script is an external script"],
            correctAnswer: "Delays the execution of the script until after the document has been parsed",
            hint: "This attribute prevents the script from blocking the browser’s rendering process."
        },
        {
            question: "Which HTML element is used to create a definition list?",
            possibleAnswers: ["<dl>", "<list>", "<definition>"],
            correctAnswer: "<dl>",
            hint: "This element is used for creating a list of terms and their definitions."
        },
        {
            question: "What does the 'data-*' attribute in HTML5 allow you to do?",
            possibleAnswers: ["Store custom data directly on HTML elements", "Style elements based on data", "Create dynamic elements"],
            correctAnswer: "Store custom data directly on HTML elements",
            hint: "This attribute is often used in JavaScript to store data on HTML elements."
        },
        {
            question: "In which version of HTML was the <article> element introduced?",
            possibleAnswers: ["HTML4", "HTML5", "XHTML"],
            correctAnswer: "HTML5",
            hint: "This element was introduced in the version that focused on modern web design and semantics."
        },
        {
            question: "What is the role of the <aside> element in HTML5?",
            possibleAnswers: ["Defines content that is tangentially related to the content around it", "Defines the main content", "Creates a footer for a document"],
            correctAnswer: "Defines content that is tangentially related to the content around it",
            hint: "This element is often used for sidebars or content not directly related to the main content."
        },
        {
            question: "Which of the following attributes is used to specify a fallback for the <video> tag?",
            possibleAnswers: ["poster", "src", "fallback"],
            correctAnswer: "poster",
            hint: "This attribute specifies an image to display before the video starts playing."
        }

    ],

    csseasy: [
        {
            question: "What does CSS stand for?",
            possibleAnswers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
            correctAnswer: "Cascading Style Sheets",
            hint: "CSS is a style sheet language used for describing the presentation of a document written in HTML."
        },
        {
            question: "Which property is used to change the background color?",
            possibleAnswers: ["bgcolor", "color", "background-color"],
            correctAnswer: "background-color",
            hint: "This property controls the background color of an element."
        },
        {
            question: "How do you select an element with id 'header'?",
            possibleAnswers: ["#header", ".header", "header"],
            correctAnswer: "#header",
            hint: "In CSS, IDs are selected using a hash (#) symbol."
        },
        {
            question: "Which property is used to change the font size?",
            possibleAnswers: ["font-size", "text-size", "font-style"],
            correctAnswer: "font-size",
            hint: "This property adjusts the size of the text within an element."
        },
        {
            question: "What is the default value of the position property?",
            possibleAnswers: ["static", "relative", "absolute"],
            correctAnswer: "static",
            hint: "By default, HTML elements are positioned according to the normal flow of the page."
        },
        {
            question: "How do you make a list that lists its items with squares?",
            possibleAnswers: ["list-style-type: square;", "list: square;", "list-style: square;"],
            correctAnswer: "list-style-type: square;",
            hint: "This property defines the marker type for list items."
        },
        {
            question: "Which property controls the text size?",
            possibleAnswers: ["text-size", "font-size", "text-style"],
            correctAnswer: "font-size",
            hint: "This property defines the size of the text."
        },
        {
            question: "Which CSS property is used to set the spacing between words?",
            possibleAnswers: ["word-spacing", "letter-spacing", "text-spacing"],
            correctAnswer: "word-spacing",
            hint: "This property defines the space between individual words in a sentence."
        },
        {
            question: "How do you center a block element horizontally?",
            possibleAnswers: ["margin: auto;", "text-align: center;", "padding: center;"],
            correctAnswer: "margin: auto;",
            hint: "Using automatic margins is the common way to center block elements."
        },
        {
            question: "What property is used to change the text color?",
            possibleAnswers: ["color", "font-color", "text-color"],
            correctAnswer: "color",
            hint: "This property is responsible for changing the color of the text."
        },
        {
            question: "Which CSS property is used to set the width of an element?",
            possibleAnswers: ["width", "size", "element-width"],
            correctAnswer: "width",
            hint: "This property defines the horizontal size of an element."
        },
        {
            question: "What does the float property do?",
            possibleAnswers: ["Floats an element to the left or right", "Makes an element disappear", "Changes the element's color"],
            correctAnswer: "Floats an element to the left or right",
            hint: "This property is used for positioning elements side by side."
        },
        {
            question: "How can you apply a style to all <p> elements?",
            possibleAnswers: ["p { }", "all p { }", "p.all { }"],
            correctAnswer: "p { }",
            hint: "Selects all paragraph elements on a page."
        },
        {
            question: "Which CSS property is used to set the height of an element?",
            possibleAnswers: ["height", "element-height", "size"],
            correctAnswer: "height",
            hint: "This property controls the vertical size of an element."
        },
        {
            question: "What is the correct CSS syntax for making all <h1> elements bold?",
            possibleAnswers: ["h1 { font-weight: bold; }", "h1 { text-weight: bold; }", "h1 { font: bold; }"],
            correctAnswer: "h1 { font-weight: bold; }",
            hint: "Font-weight property controls the boldness of text."
        },
        {
            question: "How do you apply a style to a class called 'highlight'?",
            possibleAnswers: [".highlight { }", "#highlight { }", "highlight { }"],
            correctAnswer: ".highlight { }",
            hint: "In CSS, classes are selected using a period (.) symbol."
        },
        {
            question: "Which CSS property is used to change the style of a list?",
            possibleAnswers: ["list-style", "list-style-type", "list-type"],
            correctAnswer: "list-style",
            hint: "This property defines the appearance of list item markers."
        },
        {
            question: "What is the correct way to add a comment in CSS?",
            possibleAnswers: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
            correctAnswer: "/* This is a comment */",
            hint: "CSS comments are enclosed within /* and */."
        },
        {
            question: "Which property is used to control the layout of a flex container?",
            possibleAnswers: ["flex-direction", "layout", "display"],
            correctAnswer: "flex-direction",
            hint: "This property defines the direction in which flex items are placed."
        },
        {
            question: "How do you create a border around an element?",
            possibleAnswers: ["border: solid;", "border: 1px solid;", "border: 1px;"],
            correctAnswer: "border: 1px solid;",
            hint: "The border property requires width, style, and color to display properly."
        },
        {
            question: "Which CSS property is used to create space between the element's border and its content?",
            possibleAnswers: ["margin", "padding", "spacing"],
            correctAnswer: "padding",
            hint: "This property sets the space inside an element, between the content and the border."
        },
        {
            question: "How do you make the text italic in CSS?",
            possibleAnswers: ["font-style: italic;", "text-style: italic;", "font: italic;"],
            correctAnswer: "font-style: italic;",
            hint: "Font-style property is used to italicize text."
        },
        {
            question: "Which property is used to add shadow to text?",
            possibleAnswers: ["text-shadow", "shadow", "font-shadow"],
            correctAnswer: "text-shadow",
            hint: "This property allows for the addition of shadow effects to text."
        },
        {
            question: "What is the purpose of the z-index property?",
            possibleAnswers: ["Sets the stack order of elements", "Defines the width of an element", "Styles the text"],
            correctAnswer: "Sets the stack order of elements",
            hint: "This property controls the vertical stacking of elements."
        },
        {
            question: "Which CSS property is used to change the font of an element?",
            possibleAnswers: ["font-family", "font-style", "text-family"],
            correctAnswer: "font-family",
            hint: "This property is used to define the typeface of text."
        },
        {
            question: "How do you make a list that lists its items with circles?",
            possibleAnswers: ["list-style-type: circle;", "list: circle;", "list-style: circle;"],
            correctAnswer: "list-style-type: circle;",
            hint: "This property sets the marker style for list items."
        },
        {
            question: "What property is used to change the text alignment?",
            possibleAnswers: ["text-align", "align", "text-position"],
            correctAnswer: "text-align",
            hint: "This property sets how text is aligned horizontally in its container."
        },
        {
            question: "Which CSS property is used to change the display type of an element?",
            possibleAnswers: ["display", "type", "visibility"],
            correctAnswer: "display",
            hint: "This property determines the element's display behavior, like block or inline."
        },
        {
            question: "What does the 'opacity' property do?",
            possibleAnswers: ["Sets the transparency level of an element", "Sets the visibility of an element", "Sets the size of an element"],
            correctAnswer: "Sets the transparency level of an element",
            hint: "This property defines how transparent or opaque an element appears."
        },
        {
            question: "How do you specify multiple font families in CSS?",
            possibleAnswers: ["font-family: Arial, sans-serif;", "font: Arial, sans-serif;", "font-family: Arial sans-serif;"],
            correctAnswer: "font-family: Arial, sans-serif;",
            hint: "When specifying multiple fonts, it's common to include a fallback generic font-family."
        },
        {
            question: "Which property is used to change the spacing between characters?",
            possibleAnswers: ["letter-spacing", "word-spacing", "spacing"],
            correctAnswer: "letter-spacing",
            hint: "This property defines the space between individual letters in a text."
        },
        {
            question: "How do you create a flex container in CSS?",
            possibleAnswers: ["display: flex;", "flex: container;", "container: flex;"],
            correctAnswer: "display: flex;",
            hint: "The display property is used to activate the Flexbox layout."
        },
        {
            question: "What is the default value of the 'display' property?",
            possibleAnswers: ["block", "inline", "inline-block"],
            correctAnswer: "block",
            hint: "Most HTML elements are block-level elements by default."
        },
        {
            question: "Which property is used to set an element's visibility?",
            possibleAnswers: ["visibility", "display", "opacity"],
            correctAnswer: "visibility",
            hint: "This property controls whether an element is visible or hidden."
        },
        {
            question: "How do you specify a linear gradient as a background?",
            possibleAnswers: ["background: linear-gradient(...);", "background: gradient(...);", "background: color-gradient(...);"],
            correctAnswer: "background: linear-gradient(...);",
            hint: "Linear gradients transition between colors in a straight line."
        },
        {
            question: "How do you apply styles to multiple classes in CSS?",
            possibleAnswers: [".class1, .class2 { }", ".class1.class2 { }", ".class1 + .class2 { }"],
            correctAnswer: ".class1, .class2 { }",
            hint: "Separate multiple classes with commas when applying styles."
        },
        {
            question: "Which CSS property is used to set the overflow behavior?",
            possibleAnswers: ["overflow", "visibility", "display"],
            correctAnswer: "overflow",
            hint: "This property controls how content that overflows its container is handled."
        },
        {
            question: "What is the correct way to apply styles to an element with the class 'box'?",
            possibleAnswers: [".box { }", "#box { }", "box { }"],
            correctAnswer: ".box { }",
            hint: "CSS classes are selected with a period followed by the class name."
        },
        {
            question: "Which CSS property is used to set the space between lines of text?",
            possibleAnswers: ["line-height", "text-spacing", "letter-spacing"],
            correctAnswer: "line-height",
            hint: "This property defines the vertical space between lines of text."
        }

    ],
    
    cssmedium: [
        {
            question: "What does the 'position: sticky;' property do?",
            possibleAnswers: [
                "Keeps an element fixed within its container",
                "Positions the element relative to the viewport",
                "Allows the element to scroll with the page until a certain point"
            ],
            correctAnswer: "Allows the element to scroll with the page until a certain point",
            hint: "This property allows an element to stick to a defined position based on the user's scroll position."
        },
        {
            question: "What is the difference between 'margin' and 'padding'?",
            possibleAnswers: [
                "Margin is outside the border; padding is inside",
                "Padding is outside the border; margin is inside",
                "There is no difference"
            ],
            correctAnswer: "Margin is outside the border; padding is inside",
            hint: "Margin creates space outside of an element's border, while padding creates space inside the border."
        },
        {
            question: "How do you set a fixed width for an element using CSS?",
            possibleAnswers: ["width: 100px;", "fixed-width: 100px;", "size: 100px;"],
            correctAnswer: "width: 100px;",
            hint: "This property specifies the width of an element in pixels, percentages, or other units."
        },
        {
            question: "Which CSS property is used to set the visibility of an element?",
            possibleAnswers: ["visibility", "display", "opacity"],
            correctAnswer: "visibility",
            hint: "This property controls whether an element is visible or hidden, without affecting layout."
        },
        {
            question: "What is the use of the 'calc()' function in CSS?",
            possibleAnswers: [
                "To perform calculations for CSS values",
                "To set dynamic styles",
                "To calculate element positions"
            ],
            correctAnswer: "To perform calculations for CSS values",
            hint: "The calc() function allows you to perform mathematical operations to define CSS property values."
        },
        {
            question: "Which property is used to control the stacking order of elements?",
            possibleAnswers: ["z-index", "order", "position"],
            correctAnswer: "z-index",
            hint: "This property specifies the stack order of overlapping elements; higher values are in front."
        },
        {
            question: "What is the default display value of a <div> element?",
            possibleAnswers: ["inline", "block", "flex"],
            correctAnswer: "block",
            hint: "Block elements take up the full width available, starting on a new line."
        },
        {
            question: "Which property is used to change the font of an element?",
            possibleAnswers: ["font-family", "font-style", "font-weight"],
            correctAnswer: "font-family",
            hint: "This property specifies the typeface to be used for text within an element."
        },
        {
            question: "How do you set the color of the text in an element?",
            possibleAnswers: ["color: #000;", "text-color: #000;", "font-color: #000;"],
            correctAnswer: "color: #000;",
            hint: "The color property defines the color of the text in an element."
        },
        {
            question: "How do you make a responsive design in CSS?",
            possibleAnswers: ["Using media queries", "Using fixed widths", "Using inline styles"],
            correctAnswer: "Using media queries",
            hint: "Media queries allow you to apply different styles based on screen size and device characteristics."
        },
        {
            question: "What does the 'display: flex;' property do?",
            possibleAnswers: ["Creates a flex container", "Makes the element inline", "Hides the element"],
            correctAnswer: "Creates a flex container",
            hint: "This property enables the Flexbox layout model for an element and its children."
        },
        {
            question: "What is the purpose of the 'transition' property?",
            possibleAnswers: [
                "To create smooth transitions between states",
                "To change colors",
                "To change layouts"
            ],
            correctAnswer: "To create smooth transitions between states",
            hint: "Transitions allow property changes in CSS values to occur smoothly over a specified duration."
        },
        {
            question: "How do you create a CSS grid layout?",
            possibleAnswers: ["display: grid;", "layout: grid;", "grid: true;"],
            correctAnswer: "display: grid;",
            hint: "This property activates the CSS Grid layout system for the element."
        },
        {
            question: "Which CSS property is used to add space between the lines of text?",
            possibleAnswers: ["line-height", "text-spacing", "spacing"],
            correctAnswer: "line-height",
            hint: "This property sets the amount of space between lines of text within an element."
        },
        {
            question: "What is a CSS preprocessor?",
            possibleAnswers: [
                "A tool to write CSS more efficiently",
                "A way to compile CSS",
                "A library for CSS"
            ],
            correctAnswer: "A tool to write CSS more efficiently",
            hint: "CSS preprocessors extend CSS with variables, nested rules, and functions for better maintainability."
        },
        {
            question: "How do you create a multi-column layout in CSS?",
            possibleAnswers: ["column-count", "columns", "multi-columns"],
            correctAnswer: "column-count",
            hint: "This property specifies the number of columns an element should be divided into."
        },
        {
            question: "What is the use of the 'overflow' property?",
            possibleAnswers: [
                "To control what happens when content overflows an element's box",
                "To hide elements",
                "To show tooltips"
            ],
            correctAnswer: "To control what happens when content overflows an element's box",
            hint: "The overflow property determines how overflowed content is handled within an element."
        },
        {
            question: "How do you make a responsive image in CSS?",
            possibleAnswers: ["max-width: 100%;", "width: auto;", "responsive: true;"],
            correctAnswer: "max-width: 100%;",
            hint: "This setting allows an image to scale proportionally within its container."
        },
        {
            question: "Which property is used to set the background image of an element?",
            possibleAnswers: ["background-image", "image", "bg-image"],
            correctAnswer: "background-image",
            hint: "This property specifies an image to be used as the background of an element."
        },
        {
            question: "What does the 'display: grid;' property do?",
            possibleAnswers: ["Creates a grid layout", "Makes the element inline", "Hides the element"],
            correctAnswer: "Creates a grid layout",
            hint: "This property enables the CSS Grid layout for organizing children elements in rows and columns."
        },
        {
            question: "Which CSS property is used to create a flexbox layout?",
            possibleAnswers: ["display: flex;", "flex: box;", "layout: flex;"],
            correctAnswer: "display: flex;",
            hint: "This property activates the Flexbox layout for the container element."
        },
        {
            question: "What is the purpose of the 'keyframes' rule in CSS?",
            possibleAnswers: [
                "To create animations",
                "To define media queries",
                "To style elements"
            ],
            correctAnswer: "To create animations",
            hint: "Keyframes define the start and end points of CSS animations, as well as intermediate steps."
        },
        {
            question: "How do you create a circular border radius in CSS?",
            possibleAnswers: ["border-radius: 50%;", "border-radius: circle;", "border-radius: round;"],
            correctAnswer: "border-radius: 50%;",
            hint: "Setting the border-radius to 50% creates a perfect circle."
        },
        {
            question: "What is the purpose of the ':hover' pseudo-class?",
            possibleAnswers: [
                "To style an element when hovered",
                "To style an active element",
                "To style a visited link"
            ],
            correctAnswer: "To style an element when hovered",
            hint: "This pseudo-class applies styles when a user hovers over an element with a pointing device."
        },
        {
            question: "Which property is used to create space around an element's border?",
            possibleAnswers: ["margin", "padding", "spacing"],
            correctAnswer: "margin",
            hint: "This property defines the space outside of an element's border."
        },
        {
            question: "What is the purpose of media queries in CSS?",
            possibleAnswers: [
                "To apply different styles based on device characteristics",
                "To style print layouts",
                "To create animations"
            ],
            correctAnswer: "To apply different styles based on device characteristics",
            hint: "Media queries allow you to adapt your layout and styles for different screen sizes and resolutions."
        },
        {
            question: "How do you change the order of flex items?",
            possibleAnswers: [
                "Using the 'order' property",
                "Using 'flex-order'",
                "Using 'position'"
            ],
            correctAnswer: "Using the 'order' property",
            hint: "The order property specifies the order in which flex items appear within a flex container."
        },
        {
            question: "What is the use of the 'opacity' property?",
            possibleAnswers: [
                "To control the transparency level of an element",
                "To set the visibility of an element",
                "To create shadows"
            ],
            correctAnswer: "To control the transparency level of an element",
            hint: "This property allows you to set the opacity of an element, ranging from 0 (fully transparent) to 1 (fully opaque)."
        },
        {
            question: "How do you create a responsive navigation menu?",
            possibleAnswers: ["Using flexbox or grid", "Using absolute positioning", "Using fixed positioning"],
            correctAnswer: "Using flexbox or grid",
            hint: "Flexbox and Grid layouts are ideal for creating responsive and adaptable navigation menus."
        },
        {
            question: "What is the function of the 'box-shadow' property?",
            possibleAnswers: [
                "To create shadows around an element",
                "To change the color of an element",
                "To add padding"
            ],
            correctAnswer: "To create shadows around an element",
            hint: "This property adds shadow effects around an element's box, allowing for depth in design."
        },
        {
            question: "What does the 'visibility' property do?",
            possibleAnswers: [
                "Controls whether an element is visible or hidden",
                "Sets the opacity of an element",
                "Controls the display of an element"
            ],
            correctAnswer: "Controls whether an element is visible or hidden",
            hint: "Unlike display, this property hides the element but retains its space in the layout."
        },
        {
            question: "Which property is used to control the size of a flex item?",
            possibleAnswers: ["flex-basis", "flex-grow", "flex-shrink"],
            correctAnswer: "flex-basis",
            hint: "This property defines the initial main size of a flex item before space distribution occurs."
        }

    ],
     
    csshard: [
            {
                question: "What is the purpose of the 'rem' unit in CSS?",
                possibleAnswers: ["Relative to the root element font size", "Absolute length unit", "Relative to the viewport"],
                correctAnswer: "Relative to the root element font size"
            },
            {
                question: "What does 'CSS Grid' allow you to do?",
                possibleAnswers: ["Create complex layouts with rows and columns", "Only style text", "Add animations"],
                correctAnswer: "Create complex layouts with rows and columns"
            },
            {
                question: "What is the difference between 'absolute' and 'relative' positioning?",
                possibleAnswers: ["Absolute positioning is relative to the nearest positioned ancestor", "Relative positioning is absolute to the viewport", "There is no difference"],
                correctAnswer: "Absolute positioning is relative to the nearest positioned ancestor"
            },
            {
                question: "How does the 'display: none;' property affect an element?",
                possibleAnswers: ["The element is removed from the document flow", "The element is hidden but takes up space", "The element is still accessible"],
                correctAnswer: "The element is removed from the document flow"
            },
            {
                question: "What does the 'grid-template-columns' property do?",
                possibleAnswers: ["Defines the columns of a grid container", "Sets the grid gap", "Defines the rows of a grid container"],
                correctAnswer: "Defines the columns of a grid container"
            },
            {
                question: "What is the 'flex-grow' property used for?",
                possibleAnswers: ["Defines how much a flex item will grow relative to the rest", "Defines the size of the flex container", "Defines the order of flex items"],
                correctAnswer: "Defines how much a flex item will grow relative to the rest"
            },
            {
                question: "What is a CSS variable?",
                possibleAnswers: ["A value that can be reused throughout a stylesheet", "A property that changes based on conditions", "A method of importing styles"],
                correctAnswer: "A value that can be reused throughout a stylesheet"
            },
            {
                question: "What does the 'filter' property do?",
                possibleAnswers: ["Applies graphical effects like blurring or color shifting", "Changes the opacity of an element", "Changes the size of an element"],
                correctAnswer: "Applies graphical effects like blurring or color shifting"
            },
            {
                question: "How do you create a CSS transition effect?",
                possibleAnswers: ["Using the 'transition' property", "Using the 'animation' property", "Using the 'transform' property"],
                correctAnswer: "Using the 'transition' property"
            },
            {
                question: "What is the purpose of the 'clip-path' property?",
                possibleAnswers: ["Defines a visible area of an element", "Sets the position of an element", "Creates a shadow effect"],
                correctAnswer: "Defines a visible area of an element"
            },
            {
                question: "What does the 'grid-template-areas' property do?",
                possibleAnswers: ["Defines named grid areas", "Sets the size of grid items", "Defines the rows of a grid container"],
                correctAnswer: "Defines named grid areas"
            },
            {
                question: "How do you target specific child elements in CSS?",
                possibleAnswers: ["Using the nth-child selector", "Using child selectors", "Using class names"],
                correctAnswer: "Using the nth-child selector"
            },
            {
                question: "What does the 'backface-visibility' property do?",
                possibleAnswers: ["Controls whether the back face of an element is visible when turned", "Controls the z-index of an element", "Sets the opacity of an element"],
                correctAnswer: "Controls whether the back face of an element is visible when turned"
            },
            {
                question: "What is a CSS reset?",
                possibleAnswers: ["A set of styles that remove default browser styles", "A method to optimize CSS", "A tool for debugging"],
                correctAnswer: "A set of styles that remove default browser styles"
            },
            {
                question: "How do you create a responsive typography using CSS?",
                possibleAnswers: ["Using viewport units (vw, vh)", "Using fixed sizes", "Using percentages"],
                correctAnswer: "Using viewport units (vw, vh)"
            },
            {
                question: "What is the use of the ':nth-of-type()' selector?",
                possibleAnswers: ["Selects elements based on their type and position", "Selects all elements of a given type", "Selects elements by class name"],
                correctAnswer: "Selects elements based on their type and position"
            },
            {
                question: "How can you control the size of grid items in a grid layout?",
                possibleAnswers: ["Using the 'grid-template-columns' property", "Using the 'grid-gap' property", "Using the 'grid-auto-flow' property"],
                correctAnswer: "Using the 'grid-template-columns' property"
            },
            {
                question: "What is the purpose of the 'will-change' property?",
                possibleAnswers: ["Hints the browser about what properties will change", "Creates animations", "Sets opacity"],
                correctAnswer: "Hints the browser about what properties will change"
            },
            {
                question: "How do you create a hover effect with a transition?",
                possibleAnswers: ["Using ':hover' with the 'transition' property", "Using ':hover' with 'animation'", "Using 'hover' only"],
                correctAnswer: "Using ':hover' with the 'transition' property"
            },
            {
                question: "What is the purpose of the 'object-fit' property?",
                possibleAnswers: ["Defines how an image or video should be resized", "Sets the position of an image", "Controls the opacity of an image"],
                correctAnswer: "Defines how an image or video should be resized"
            },
            {
                question: "What does the 'transform' property do?",
                possibleAnswers: ["Applies 2D or 3D transformations to an element", "Sets the size of an element", "Controls the opacity"],
                correctAnswer: "Applies 2D or 3D transformations to an element"
            },
            {
                question: "How do you control the flow of content in a grid layout?",
                possibleAnswers: ["Using the 'grid-auto-flow' property", "Using the 'grid-template-areas' property", "Using the 'grid-gap' property"],
                correctAnswer: "Using the 'grid-auto-flow' property"
            },
            {
                question: "What is the purpose of the 'align-items' property in a flex container?",
                possibleAnswers: ["Aligns flex items vertically", "Sets the order of flex items", "Controls the size of flex items"],
                correctAnswer: "Aligns flex items vertically"
            },
            {
                question: "What does the 'grid-gap' property do?",
                possibleAnswers: ["Defines the space between grid items", "Sets the size of grid items", "Controls the flow of grid items"],
                correctAnswer: "Defines the space between grid items"
            },
            {
                question: "How do you create a 3D transformation in CSS?",
                possibleAnswers: ["Using the 'transform' property with 'perspective'", "Using the '3D-transform' property", "Using the 'rotate' property"],
                correctAnswer: "Using the 'transform' property with 'perspective'"
            },
            {
                question: "What is the purpose of the 'flex-wrap' property?",
                possibleAnswers: ["Controls whether flex items should wrap onto multiple lines", "Sets the direction of flex items", "Sets the size of flex items"],
                correctAnswer: "Controls whether flex items should wrap onto multiple lines"
            },
            {
                question: "What is a media feature in CSS?",
                possibleAnswers: ["A characteristic of a device or browser", "A type of CSS rule", "A property of an element"],
                correctAnswer: "A characteristic of a device or browser"
            },
            {
                question: "How can you create animations using CSS?",
                possibleAnswers: ["Using the '@keyframes' rule and 'animation' property", "Using the 'transition' property", "Using the 'transform' property"],
                correctAnswer: "Using the '@keyframes' rule and 'animation' property"
            }
    
        
    ],
    
    jseasy:[
            {
                question: "What is the correct syntax to output 'Hello World' in JavaScript?",
                possibleAnswers: ["console.log('Hello World');", "print('Hello World');", "echo('Hello World');"],
                correctAnswer: "console.log('Hello World');"
            },
            {
                question: "Which symbol is used for comments in JavaScript?",
                possibleAnswers: ["//", "#", "/*"],
                correctAnswer: "//"
            },
            {
                question: "How do you declare a variable in JavaScript?",
                possibleAnswers: ["var name;", "variable name;", "declare name;"],
                correctAnswer: "var name;"
            },
            {
                question: "Which data type is NOT supported in JavaScript?",
                possibleAnswers: ["undefined", "string", "character"],
                correctAnswer: "character"
            },
            {
                question: "How can you create an array in JavaScript?",
                possibleAnswers: ["let arr = [];", "let arr = new Array();", "Both of the above"],
                correctAnswer: "Both of the above"
            },
            {
                question: "What does 'NaN' stand for in JavaScript?",
                possibleAnswers: ["Not a Number", "Not a Null", "Not an Object"],
                correctAnswer: "Not a Number"
            },
            {
                question: "How do you add a comment in a JavaScript?",
                possibleAnswers: ["// This is a comment", "# This is a comment", "/* This is a comment */"],
                correctAnswer: "// This is a comment"
            },
            {
                question: "Which of the following is a JavaScript framework?",
                possibleAnswers: ["React", "HTML", "CSS"],
                correctAnswer: "React"
            },
            {
                question: "What is the output of 2 + '2' in JavaScript?",
                possibleAnswers: ["22", "4", "Error"],
                correctAnswer: "22"
            },
            {
                question: "How do you define a function in JavaScript?",
                possibleAnswers: ["function myFunction() {}", "def myFunction() {}", "function: myFunction() {}"],
                correctAnswer: "function myFunction() {}"
            },
            {
                question: "Which method is used to access HTML elements using JavaScript?",
                possibleAnswers: ["getElementById()", "getElementsByClass()", "querySelector()"],
                correctAnswer: "getElementById()"
            },
            {
                question: "How can you declare a constant variable in JavaScript?",
                possibleAnswers: ["const name;", "constant name;", "let name;"],
                correctAnswer: "const name;"
            },
            {
                question: "What does the 'typeof' operator do?",
                possibleAnswers: ["Returns the type of a variable", "Checks if a variable is defined", "Returns the length of a string"],
                correctAnswer: "Returns the type of a variable"
            },
            {
                question: "Which operator is used to assign a value to a variable?",
                possibleAnswers: ["=", "==", "==="],
                correctAnswer: "="
            },
            {
                question: "How do you convert a string to a number in JavaScript?",
                possibleAnswers: ["Number('123')", "parseInt('123')", "Both of the above"],
                correctAnswer: "Both of the above"
            },
            {
                question: "Which event occurs when the user clicks on an HTML element?",
                possibleAnswers: ["onclick", "onchange", "onmouseclick"],
                correctAnswer: "onclick"
            },
            {
                question: "What is the purpose of the 'this' keyword in JavaScript?",
                possibleAnswers: ["Refers to the current object", "Refers to the global object", "Refers to the previous object"],
                correctAnswer: "Refers to the current object"
            },
            {
                question: "What is the result of the expression 'true + false' in JavaScript?",
                possibleAnswers: ["1", "0", "true"],
                correctAnswer: "1"
            },
            {
                question: "How do you remove the last element from an array in JavaScript?",
                possibleAnswers: ["pop()", "shift()", "slice()"],
                correctAnswer: "pop()"
            },
            {
                question: "Which keyword is used to create a class in JavaScript?",
                possibleAnswers: ["class", "create", "function"],
                correctAnswer: "class"
            },
            {
                question: "What is the output of the following code: console.log(typeof null)?",
                possibleAnswers: ["object", "null", "undefined"],
                correctAnswer: "object"
            }
        
    ],
    
     jsmedium: [
            {
                question: "What is the difference between '==' and '===' in JavaScript?",
                possibleAnswers: ["'==' checks for value, '===' checks for value and type", "'==' checks for type, '===' checks for value", "There is no difference"],
                correctAnswer: "'==' checks for value, '===' checks for value and type"
            },
            {
                question: "What is a closure in JavaScript?",
                possibleAnswers: ["A function that has access to its parent's scope", "A way to hide variables", "A type of loop"],
                correctAnswer: "A function that has access to its parent's scope"
            },
            {
                question: "How do you create a promise in JavaScript?",
                possibleAnswers: ["new Promise((resolve, reject) => {})", "Promise.create()", "new Promise()"],
                correctAnswer: "new Promise((resolve, reject) => {})"
            },
            {
                question: "What is event delegation in JavaScript?",
                possibleAnswers: ["Attaching a single event listener to a parent element", "Delegating events to child elements", "Removing event listeners"],
                correctAnswer: "Attaching a single event listener to a parent element"
            },
            {
                question: "How can you handle errors in JavaScript?",
                possibleAnswers: ["Using try...catch", "Using if...else", "Using switch"],
                correctAnswer: "Using try...catch"
            },
            {
                question: "What is the purpose of the 'async' keyword in JavaScript?",
                possibleAnswers: ["Indicates that a function is asynchronous", "Makes a function synchronous", "Creates a promise"],
                correctAnswer: "Indicates that a function is asynchronous"
            },
            {
                question: "What is the use of the 'bind' method in JavaScript?",
                possibleAnswers: ["Creates a new function that, when called, has its 'this' set to a specific value", "Binds an event listener", "Creates a new object"],
                correctAnswer: "Creates a new function that, when called, has its 'this' set to a specific value"
            },
            {
                question: "How do you create a module in JavaScript?",
                possibleAnswers: ["Using 'export' and 'import' statements", "Using 'module.create'", "Using 'require'"],
                correctAnswer: "Using 'export' and 'import' statements"
            },
            {
                question: "What is the purpose of the 'fetch' API?",
                possibleAnswers: ["To make network requests", "To read local files", "To create a new object"],
                correctAnswer: "To make network requests"
            },
            {
                question: "What is the difference between 'var', 'let', and 'const'?",
                possibleAnswers: ["'var' is function-scoped, 'let' and 'const' are block-scoped", "'let' is function-scoped, 'var' and 'const' are block-scoped", "'const' is mutable"],
                correctAnswer: "'var' is function-scoped, 'let' and 'const' are block-scoped"
            },
            {
                question: "What is destructuring in JavaScript?",
                possibleAnswers: ["A way to unpack values from arrays or properties from objects", "A way to merge objects", "A way to create arrays"],
                correctAnswer: "A way to unpack values from arrays or properties from objects"
            },
            {
                question: "What does the 'spread' operator do?",
                possibleAnswers: ["Expands an iterable into more elements", "Merges two arrays", "Clones an object"],
                correctAnswer: "Expands an iterable into more elements"
            },
            {
                question: "What is the difference between a function declaration and a function expression?",
                possibleAnswers: ["Function declarations are hoisted, function expressions are not", "There is no difference", "Function expressions are named"],
                correctAnswer: "Function declarations are hoisted, function expressions are not"
            },
            {
                question: "What is the purpose of the 'reduce' method in JavaScript?",
                possibleAnswers: ["Executes a reducer function on each element of the array", "Filters elements of an array", "Maps elements of an array"],
                correctAnswer: "Executes a reducer function on each element of the array"
            },
            {
                question: "How can you create a deep copy of an object in JavaScript?",
                possibleAnswers: ["Using JSON.stringify() and JSON.parse()", "Using Object.assign()", "Using the spread operator"],
                correctAnswer: "Using JSON.stringify() and JSON.parse()"
            },
            {
                question: "What is the purpose of the 'setTimeout' function?",
                possibleAnswers: ["Executes a function after a specified number of milliseconds", "Creates a delay in code execution", "Executes code immediately"],
                correctAnswer: "Executes a function after a specified number of milliseconds"
            },
            {
                question: "What is the purpose of the 'map' method in JavaScript?",
                possibleAnswers: ["Creates a new array with the results of calling a provided function on every element", "Filters elements of an array", "Reduces an array to a single value"],
                correctAnswer: "Creates a new array with the results of calling a provided function on every element"
            },
            {
                question: "What does the 'Array.isArray()' method do?",
                possibleAnswers: ["Checks if a value is an array", "Converts a value to an array", "Creates a new array"],
                correctAnswer: "Checks if a value is an array"
            },
            {
                question: "What does 'JSON.stringify()' do?",
                possibleAnswers: ["Converts a JavaScript object into a JSON string", "Parses a JSON string into a JavaScript object", "Converts an object into a string"],
                correctAnswer: "Converts a JavaScript object into a JSON string"
            }
        
    ],
    
    jshard: [
            {
                question: "What is the purpose of the 'Symbol' data type?",
                possibleAnswers: ["To create unique identifiers for object properties", "To represent boolean values", "To define constant values"],
                correctAnswer: "To create unique identifiers for object properties"
            },
            {
                question: "What is the event loop in JavaScript?",
                possibleAnswers: ["A mechanism that allows asynchronous code to be executed", "A way to create loops", "A type of event"],
                correctAnswer: "A mechanism that allows asynchronous code to be executed"
            },
            {
                question: "What is the purpose of 'Promise.all()'?",
                possibleAnswers: ["Waits for all promises to resolve or for any to reject", "Waits for one promise to resolve", "Combines multiple promises into one"],
                correctAnswer: "Waits for all promises to resolve or for any to reject"
            },
            {
                question: "What is a weak reference in JavaScript?",
                possibleAnswers: ["A reference that does not prevent garbage collection", "A reference to an undefined variable", "A reference that cannot be accessed"],
                correctAnswer: "A reference that does not prevent garbage collection"
            },
            {
                question: "What does the 'bind' method return?",
                possibleAnswers: ["A new function with a specific 'this' value", "The original function", "An object"],
                correctAnswer: "A new function with a specific 'this' value"
            },
            {
                question: "How does prototypal inheritance work in JavaScript?",
                possibleAnswers: ["Objects inherit properties and methods from other objects", "Classes inherit properties and methods from other classes", "There is no inheritance in JavaScript"],
                correctAnswer: "Objects inherit properties and methods from other objects"
            },
            {
                question: "What are the three states of a Promise?",
                possibleAnswers: ["Pending, Fulfilled, Rejected", "Created, Running, Completed", "Started, Finished, Failed"],
                correctAnswer: "Pending, Fulfilled, Rejected"
            },
            {
                question: "What is the purpose of the 'async/await' syntax?",
                possibleAnswers: ["To simplify working with promises", "To create synchronous code", "To handle errors"],
                correctAnswer: "To simplify working with promises"
            },
            {
                question: "What does the 'setImmediate' function do?",
                possibleAnswers: ["Executes a single operation after the current event loop cycle", "Executes code immediately", "Creates a delay in code execution"],
                correctAnswer: "Executes a single operation after the current event loop cycle"
            },
            {
                question: "What is the difference between 'call()' and 'apply()'?",
                possibleAnswers: ["'call()' takes arguments separately, 'apply()' takes an array of arguments", "'call()' creates a new function, 'apply()' does not", "'call()' does not change 'this', 'apply()' does"],
                correctAnswer: "'call()' takes arguments separately, 'apply()' takes an array of arguments"
            },
            {
                question: "What does the 'setInterval' function do?",
                possibleAnswers: ["Executes a function repeatedly at specified intervals", "Executes a function once after a specified time", "Creates a delay in code execution"],
                correctAnswer: "Executes a function repeatedly at specified intervals"
            },
            {
                question: "What is the purpose of the 'new' keyword?",
                possibleAnswers: ["Creates a new instance of an object", "Defines a new variable", "Creates a new function"],
                correctAnswer: "Creates a new instance of an object"
            },
            {
                question: "How do you create a singleton in JavaScript?",
                possibleAnswers: ["By using closures", "By using classes", "By using prototypes"],
                correctAnswer: "By using closures"
            },
            {
                question: "What is the purpose of the 'getter' and 'setter' methods?",
                possibleAnswers: ["To control access to object properties", "To create new properties", "To delete properties"],
                correctAnswer: "To control access to object properties"
            },
            {
                question: "What is the purpose of the 'instanceof' operator?",
                possibleAnswers: ["Checks if an object is an instance of a specific class or constructor", "Creates an instance of a class", "Checks if a variable is defined"],
                correctAnswer: "Checks if an object is an instance of a specific class or constructor"
            },
            {
                question: "What is the difference between synchronous and asynchronous code?",
                possibleAnswers: ["Synchronous code runs sequentially, asynchronous code runs concurrently", "Asynchronous code runs sequentially, synchronous code runs concurrently", "There is no difference"],
                correctAnswer: "Synchronous code runs sequentially, asynchronous code runs concurrently"
            },
            {
                question: "What is a 'thunk' in JavaScript?",
                possibleAnswers: ["A function that wraps an expression to delay its evaluation", "A type of promise", "A way to create a closure"],
                correctAnswer: "A function that wraps an expression to delay its evaluation"
            },
            {
                question: "What is the purpose of 'Object.create()'?",
                possibleAnswers: ["Creates a new object with the specified prototype", "Creates a new function", "Creates a new array"],
                correctAnswer: "Creates a new object with the specified prototype"
            }
        
    ]
   
}
