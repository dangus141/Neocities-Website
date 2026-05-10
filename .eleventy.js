module.exports = function (eleventyConfig) {
  
  // --- 1. FILTERS ---
  
  // Your stripSlash filter
  eleventyConfig.addFilter("stripSlash", (url) => {
    if (typeof url !== "string") return url;
    return url.startsWith("/") ? url.substring(1) : url;
  });

  // Your readableDate filter (removes GMT)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC' // Added to prevent "off-by-one" day errors
    });
  });

  // --- 2. SETTINGS & PASSTHROUGH ---
  
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy({ "src/public": "/" });
  eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);

  // --- 3. RETURN CONFIG ---
  
  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "content",
      output: "public",
    },
  };
};
