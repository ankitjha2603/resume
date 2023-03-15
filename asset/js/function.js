'use strict';

function select(selection, singleElement = true) {
	if (singleElement) {
		return document.querySelector(selection)
	} else {
		return document.querySelectorAll(selection)
	}
}

function append(mainElement, ...subElements) {
	if (typeof("skjs") == "string") {
		mainElement = select(mainElement)
	}
	subElements.forEach(subElement => {
		mainElement.append(subElement);
	})
}

function newElement(cls, content = "", tag = "div") {
	let element = document.createElement(tag);
	if (cls) {
		if (typeof cls === "object") {
			cls.forEach(clsElement => {
				element.classList.add(clsElement);
			});
		} else {
			element.classList.add(cls);
		}
	}
	if (content) {
		element.innerText = content;
	}
	return element;
}
