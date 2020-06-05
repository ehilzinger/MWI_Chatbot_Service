module.exports = function replyGenerator(language) {
    function createFeeReply(university) {
        return {
            "type": "text",
            "content": `Die Studiengebühren an der ${university.name} betragen ${university.fees.feesPerSemester} ${university.fees.currencyCode} pro Semester.`
        }
    }

    function createDurationReply(university) {
        return {
            "type": "text",
            "content": `Die Dauer eines Semesters an der ${university.name} beträgt zwischen ${university.semesterDurationMonths.min} und ${university.semesterDurationMonths.max} Monate.`
        }
    }

    function createLanguageReply(university) {
        return {
            "type": "text",
            "content": `Die Sprache an der ${university.name} ist ${university.lectureLanguage}.`
        }
    }

    function createAccomodationReply(university) {
        return {
            "type": "text",
            "content": `Die Unterbringung an der ${university.name} erfolgt in ` + university.accomodation.map(acc => { return (acc + ",") }) + "."
        }
    }

    function createNotFoundReply(location) {
        return {
            "type": "text",
            "content": `Sorry, aber ich habe kein Ergebnis für ${location[0].formatted} gefunden.`
        }
    }
    return { createFeeReply, createDurationReply, createLanguageReply, createAccomodationReply, createNotFoundReply }
}
