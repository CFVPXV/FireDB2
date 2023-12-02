const path = require('path');


module.exports = {
    // Set mode to production to see the "tree-shaken" size
    mode: "production",
    // make sure this points to your entry point file
    entry: {
        bundle: ['./src/index.js'],
        navScript: ['./src/navScript.js'],
        initSupabase: ['./src/initFirebase.js'],
        viewRecords: ['./src/viewRecords.js'],
        updateRecords: ['./src/updateRecords.js'],
        viewOtherRecords: ['./src/viewOtherRecords.js'],
        updateOtherRecords: ['./src/updateOtherRecords.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    }
};
