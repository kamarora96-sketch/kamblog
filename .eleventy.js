module.exports = function (config) {
  config.addPassthroughCopy("admin");
  config.addPassthroughCopy("css");

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
