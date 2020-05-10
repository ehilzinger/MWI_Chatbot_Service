module.exports = function replyGenerator(language) {
    function createFeeReply(university) {
        return {
            "type": "text",
            "content": `Die Studiengebühren an der ${university.name} betragen ${university.fees.feesPerSemester} ${university.fees.currencyCode} pro Semester`
        }
    }

    function createNotFoundReply(location) {
        return {
            "type": "text",
            "content": `Sorry, aber ich habe kein Ergebnis für ${location[0].formatted} gefunden.`
        }
    }
    return { createFeeReply, createNotFoundReply }
}