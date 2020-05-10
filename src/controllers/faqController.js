module.exports = function faqController(University) {
    function post(req, res) {
        const { location } = req.body.nlp.entities;
        const intent = req.body.nlp.intents[0].slug;

        const reply = {};
        reply.replies = new Array();

        University.find({
            "address.country": location[0].country.toUpperCase()
        }, (err, universities) => {
            if (err) throw err;
            if (universities.length > 0) {
                universities.forEach(university => {
                    if (intent === "study_fees") {
                        reply.replies.push(createFeeReply(university))
                    }
                    else if (intent === "") {

                    }
                });
                return res.status(200).json(reply);
            }
            else {
                reply.replies.push(createNotFoundReply(location))
                return res.status(200).json(reply);
            }
        })

    }
    return { post };
}

function createFeeReply(university) {
    return {
        "type": "text",
        "content": `Die Studiengebühren an der ${university.name} betragen ${university.fees.feesPerSemester}${university.fees.currencyCode} pro Semester`
    }
}

function createNotFoundReply(location) {
    return {
        "type": "text",
        "content": `Sorry, aber ich habe kein Ergebnis für ${location[0].formatted} gefunden.`
    }
}