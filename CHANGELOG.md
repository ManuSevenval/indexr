2016-08-04
==========

  * Create better process for testing and updating CHANGELOG.md
  * [breaking]: New defaults, new index file names
    Allow for new sensible defaults: Module folders are called 'modules'.
    Index files are named index.r.js so they dont overwrite index.js files.
  * Add note about quotes to README
  * [breaking]: Allow for new sensible defaults.
    Module folders are called 'modules'.
    Index files are named index.r.js so they dont overwrite index.js files.
  * [breaking]: Not specifying an output file now writes to 'index.js' within module folders.
  * Move outputFilename to options object.
  * Enable testing for CLI input.
  * Incorporate travis CI