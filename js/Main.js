const line = document.getElementById("line");
line.setAttribute("x1", document.documentElement.scrollWidth);
line.setAttribute("y1", 40);
line.setAttribute("x2", document.documentElement.scrollWidth);
line.setAttribute("y2", 90);
line.setAttribute("style", "stroke:red; stroke-width:14");