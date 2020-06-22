const { replyGenerator, getWeatherData } = require("../util");

module.exports = function faqController(University) {
    async function post(req, res) {
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
                        return res.status(200).json(reply);
                    }
                    else if (intent === "semester_duration") {
                        reply.replies.push(generator.createDurationReply(university))
                        return res.status(200).json(reply);
                    }
                    else if (intent === "lecture_language") {
                        reply.replies.push(generator.createLanguageReply(university))
                        return res.status(200).json(reply);
                    }
                    else if (intent === "accomodation") {
                        reply.replies.push(generator.createAccomodationReply(university))
                        return res.status(200).json(reply);
                    }
                    else if (intent === "weather") {
                        getWeatherData(university).then(weather => {
                            reply.replies.push(generator.createWeatherReply(university, weather));
                            return res.status(200).json(reply);
                        }).catch(e => console.log(e))

                    }
                    else if (intent === "") {
                        //additional intents register template
                    }
                });
            }
            else {
                reply.replies.push(generator.createNotFoundReply(location))
                return res.status(200).json(reply);
            }
        })

    }
    return { post };
}
