exports = module.exports = function(string) {

    var REMOVING_COMMENT_EXP = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)/g;
    return string.replace(REMOVING_COMMENT_EXP, function (word) {
        return /^\/{2,}/.test(word) || /^\/\*/.test(word) ? "" : word;
    });
}