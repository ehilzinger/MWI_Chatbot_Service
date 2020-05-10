const mongoose = require('mongoose');

const { Schema } = mongoose;

const universityModel = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false, default: null },
    suitableCourses: [
        {
            courseName: { type: String, required: true }
        }
    ],
    address: {
        houseNumber: Number,
        street: { type: String, required: true },
        city: { type: String, required: true },
        zip: {
            type: String, required: true
        },
        state: { type: String, required: false },
        country: { type: String, required: true },
        continent: { type: String, required: true },
    },
    fees: {
        feesPerSemester: { type: Number, min: 0, required: true },
        oneTimeFees: { type: Number, min: 0, required: false },
        currencyCode: { type: String, required: true }
    },
    semesterDurationMonths: {
        min: { type: Number, min: 0, required: true },
        max: { type: Number, min: 0, required: true }
    },
    lectureLanguage: { type: String, required: true },
    accomodation: [{ type: String, required: true }]
}, { timestamps: true });

module.exports = mongoose.model("Universities", universityModel);
