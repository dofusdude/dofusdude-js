/**
 * dofusdude
 * # A project for you - the developer. The all-in-one toolbelt for your next Ankama related project.  ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude - [PHP](https://github.com/dofusdude/dofusdude-php)  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering game assets to high-res images with up to 800x800 px.  ... and much more on the Roadmap on my Discord.   ## Deploy now. Use forever. Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  ## Thank you! I highly welcome everyone on my [Discord](https://discord.gg/3EtHskZD8h) to just talk about projects and use cases or give feedback of any kind.  The servers have a fixed monthly cost to provide very fast responses. If you want to help me keeping them running or simply donate to that cause, consider becoming a [GitHub Sponsor](https://github.com/sponsors/dofusdude).
 *
 * The version of the OpenAPI document: 0.8.2
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.dofusdude);
  }
}(this, function(expect, dofusdude) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new dofusdude.Weapon();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Weapon', function() {
    it('should create an instance of Weapon', function() {
      // uncomment below and update the code to test Weapon
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be.a(dofusdude.Weapon);
    });

    it('should have the property ankamaId (base name: "ankama_id")', function() {
      // uncomment below and update the code to test the property ankamaId
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property isWeapon (base name: "is_weapon")', function() {
      // uncomment below and update the code to test the property isWeapon
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property pods (base name: "pods")', function() {
      // uncomment below and update the code to test the property pods
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property imageUrls (base name: "image_urls")', function() {
      // uncomment below and update the code to test the property imageUrls
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property effects (base name: "effects")', function() {
      // uncomment below and update the code to test the property effects
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property conditionTree (base name: "condition_tree")', function() {
      // uncomment below and update the code to test the property conditionTree
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property criticalHitProbability (base name: "critical_hit_probability")', function() {
      // uncomment below and update the code to test the property criticalHitProbability
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property criticalHitBonus (base name: "critical_hit_bonus")', function() {
      // uncomment below and update the code to test the property criticalHitBonus
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property isTwoHanded (base name: "is_two_handed")', function() {
      // uncomment below and update the code to test the property isTwoHanded
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property maxCastPerTurn (base name: "max_cast_per_turn")', function() {
      // uncomment below and update the code to test the property maxCastPerTurn
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property apCost (base name: "ap_cost")', function() {
      // uncomment below and update the code to test the property apCost
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property range (base name: "range")', function() {
      // uncomment below and update the code to test the property range
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property recipe (base name: "recipe")', function() {
      // uncomment below and update the code to test the property recipe
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

    it('should have the property parentSet (base name: "parent_set")', function() {
      // uncomment below and update the code to test the property parentSet
      //var instance = new dofusdude.Weapon();
      //expect(instance).to.be();
    });

  });

}));
