module.exports = function universityController(University) {
    function get(req, res) {
        const { query } = req;
        University.find(query, (err, universities) => {
            if (err) throw err;
            if (universities.length > 0) return res.json(universities);
            return res.json({ message: 'No Matching Data Found' }).status(400);
        })
    }
    function post(req, res) {
        new University(req.body).save().then(
            (_university) => res.status(201).json(_university)).catch(
                (err) => { throw err }
            );
    }
    return { get, post };
}
