var assert = require('assert');
var yaml = require('js-yaml');
var fs   = require('fs');

// Get configuration, or throw exception on error
try {
  var config = yaml.safeLoad(fs.readFileSync('./_config.yml', 'utf8'));
} catch (e) {
  console.log(e);
}

describe('Configuration', function() {
  describe('skip_render', function() {
    it('should return admin/config.yml', function() {
      assert.equal(config.skip_render, "admin/config.yml");
    });
  });  
  describe('public_dir', function() {
    it('should return public', function() {
      assert.equal(config.public_dir, "public");
    });
  });
  describe('theme', function() { // Everything was coded for cactus so...
    it('should return cactus', function() {
      assert.equal(config.theme, "cactus");
    });
  });
});