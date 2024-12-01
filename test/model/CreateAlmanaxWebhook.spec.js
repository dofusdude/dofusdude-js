/**
 * dofusdude
 * # Open Ankama Developer Community The all-in-one toolbelt for your next Ankama related project.  ## Versions - [Dofus 2](https://docs.dofusdu.de/dofus2/) - [Dofus 3](https://docs.dofusdu.de/dofus3/)   - v1 [latest] (you are here)   ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Almanax Discord Integration** Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 3 Beta** from stable to bleeding edge by replacing /dofus3 with /dofus3beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_, _de_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Official Sources** generated from actual data from the game.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 1.0.0-rc.7
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
    instance = new dofusdude.CreateAlmanaxWebhook();
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

  describe('CreateAlmanaxWebhook', function() {
    it('should create an instance of CreateAlmanaxWebhook', function() {
      // uncomment below and update the code to test CreateAlmanaxWebhook
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be.a(dofusdude.CreateAlmanaxWebhook);
    });

    it('should have the property bonusWhitelist (base name: "bonus_whitelist")', function() {
      // uncomment below and update the code to test the property bonusWhitelist
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

    it('should have the property bonusBlacklist (base name: "bonus_blacklist")', function() {
      // uncomment below and update the code to test the property bonusBlacklist
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

    it('should have the property subscriptions (base name: "subscriptions")', function() {
      // uncomment below and update the code to test the property subscriptions
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

    it('should have the property callback (base name: "callback")', function() {
      // uncomment below and update the code to test the property callback
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

    it('should have the property dailySettings (base name: "daily_settings")', function() {
      // uncomment below and update the code to test the property dailySettings
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

    it('should have the property isoDate (base name: "iso_date")', function() {
      // uncomment below and update the code to test the property isoDate
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

    it('should have the property mentions (base name: "mentions")', function() {
      // uncomment below and update the code to test the property mentions
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

    it('should have the property intervals (base name: "intervals")', function() {
      // uncomment below and update the code to test the property intervals
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

    it('should have the property weeklyWeekday (base name: "weekly_weekday")', function() {
      // uncomment below and update the code to test the property weeklyWeekday
      //var instance = new dofusdude.CreateAlmanaxWebhook();
      //expect(instance).to.be();
    });

  });

}));
