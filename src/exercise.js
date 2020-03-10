/**
 * This class has all the necessary data to display an exercise. While display
 * name and description are mandatory, some fields can be calculated (like ID
 * and short description). But it's probably better to set them as well.
 */

class Exercise {
	
	constructor(displayName, shortDescription) {
		this.displayName = displayName;
		this.shortDescription = shortDescription;
	}
	
	getId() {
		if (this.id != null)
			return this.id;
		var id = this.getDisplayName();
		return id.replace(" ", "-").toLowerCase();
	}

	getDisplayName() {
		return this.displayName;
	}

	getDescription() {
		return this.description == null ? this.shortDescription : this.description;
	}

	getShortDescription() {
		return this.shortDescription;
	}

	getSource() {
		return this.source;
	}

	getHtml() {
		return this.html == null ? "" : this.html;
	}

	getScript() {
		return this.script == null ? "" : this.script;
	}
}
module.exports = Exercise;