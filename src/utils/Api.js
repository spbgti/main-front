var axios = require('axios');

const URL = "smth";

module.exports = {
    sendEmail: function (data) {
        return axios.post(URL + "sendEmail", data)
            .then(function (response) {
                return response;
            });
    }
}