const { replyGenerator } = require("../util");

module.exports = function faqController(University) {
    function post(req, res) {
        const { location } = req.body.nlp.entities;
        const { language } = req.body.nlp;
        const generator = replyGenerator(language);
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
                        reply.replies.push(generator.createFeeReply(university))
                    }
                    else if (intent === "semester_duration") {
                        reply.replies.push(generator.createDurationReply(university))
                    }
                    else if (intent === "lecture_language") {
                        reply.replies.push(generator.createLanguageReply(university))
                    }
                    else if (intent === "accomodation") {
                        reply.replies.push(generator.createAccomodationReply(university))
                    }
                    else if (intent === "") {

                    }
                });
                return res.status(200).json(reply);
            }
            else {
                reply.replies.push(generator.createNotFoundReply(location))
                return res.status(200).json(reply);
            }
        })

    }
    return { post };
}
