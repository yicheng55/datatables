var zipcodesModel = require("../model/ZipCodes");

exports.getZipCodes = function(req, res) {
    // console.log(req.body);
    var searchStr = req.body.search.value;
    if (req.body.search.value) {
        var regex = new RegExp(req.body.search.value, "i");
        searchStr = { $or: [{ _id: regex }, { city: regex }, { state: regex }] };
    } else {
        searchStr = {};
    }

    var recordsTotal = 0;
    var recordsFiltered = 0;

    // zipcodesModel.find(function (err, results) {
    //     console.log('results = ' + results);
    // });

    zipcodesModel.count({}, function(err, c) {
        recordsTotal = c;
        console.log('recordsTotal = ' + c);
        // console.log(c);
        zipcodesModel.count(searchStr, function(err, c) {
            recordsFiltered = c;
            console.log('recordsTotal = ' + c);
            console.log('start= ' + req.body.start);
            console.log('length= ' + req.body.length);
            zipcodesModel.find(
                searchStr,
                "_id city pop state", { skip: Number(req.body.start), limit: Number(req.body.length) },
                function(err, results) {
                    if (err) {
                        console.log("error while getting results" + err);
                        return;
                    }

                    var data = JSON.stringify({
                        draw: req.body.draw,
                        recordsFiltered: recordsFiltered,
                        recordsTotal: recordsTotal,
                        data: results,
                    });
                    res.send(data);
                    console.log(data);
                }
            );

        });
    });
};