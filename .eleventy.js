module.exports = function(config) {
  config.addPassthroughCopy("admin");
  config.addPassthroughCopy("public");

  config.addFilter("dateFormat", function(date) {
    if (!date) return "";
    var d = new Date(date);
    if (isNaN(d.getTime())) return String(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  config.addFilter("dateISO", function(date) {
    if (!date) return "";
    var d = new Date(date);
    return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
