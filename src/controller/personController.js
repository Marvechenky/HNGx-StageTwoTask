const Person = require("../model/personModel");

const validatePerson = require("../validation/personModelValidation");

async function addPerson(req, res) {
	const { error } = validatePerson.validate(req.body);
	if (error) {
		return res.status(400).json({
			error: 'Name can only be alphabets',
			success: false,
		});
	}
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({
			error: "name is required",
			success: false,
		});
	}
	try {
		const person = await Person.create({ name });
		return res.status(201).json({
			data: person,
			message: "new person created.",
			success: true,
		});
	} catch (error) {
		console.error("Error creating new person:", error);
		return res.status(500).json({
			error: "person already created",
			success: false,
		});
	}
}

async function getPerson(req, res) {
	const person = await Person.findById({ _id: req.params.id });
	if (!person) {
		return res
			.status(400)
			.json({ error: `person with id ${req.params.id} does not exist.` });
	}
	return res.status(200).json({ data: person, success: true });
}

async function updatePerson(req, res) {
	const _id = req.params.id;
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ error: "name is requried." });
	}

	try {
		const updatedPerson = await Person.findByIdAndUpdate(
			_id,
			{ name },
			{ new: true }
		);
		if (!updatePerson) {
			return res.status(404).json({ error: "Person not found." });
		}
		return res.status(200).json(updatedPerson);
	} catch (error) {
		console.error("Error updating a person: ", error);
		return res.status(500).json({
			error: "Failed to update person.",
		});
	}
}

async function deletePerson(req, res) {
	const _id = req.params.id;
	try {
		const deletedPerson = await Person.findByIdAndDelete(_id);
		if (!deletedPerson) {
			return res.status(400).json({
				error: `Person with id ${_id} does not exist.`,
			});
		}
		return res
			.status(200)
			.json({ message: "Person successfully deleted." });
	} catch (error) {
		console.error("Error deleting person: ", error);
		res.status(500).json({
			error: "Person already deleted",
			success: false,
		});
	}
}

module.exports = {
	getPerson,
	addPerson,
	updatePerson,
	deletePerson,
};
