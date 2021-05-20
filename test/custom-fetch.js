var _fetch = async function(config) {
    try {
        let res = await fetch(config.url);
        let data = await res[config.type]();
        config.then(data);
    } catch (e) {
        if (config.catch !== undefined) {
            config.catch(e);
        } else {
            throw e;
        }
    }
};
// How to use _fetch:
// call the function, with an object parameter
// Optionally, set a variable to the value of _fetch if you don't like the name

// Must use the url, type, and then properties
// catch() property is optional

// Example:
/* 
var customFetch = _fetch;
customFetch({
    url: "https://gosoccerboy5.github.io",
    type: "text",
    then: function(res) {
        console.log(res);
    },
    catch: function(err) {
        alert(err);
    },
});
*/

// feel free to use
// this is just something I made in two minutes cause I was bored
