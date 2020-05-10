module.exports = function healthCheckController() {
    function get(req, res) {
        return res.status(200).json({ success: true, message: "Health Check Executed Successfully." })
    }
    return { get };
}