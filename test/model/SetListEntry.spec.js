/**
 * Dofusdude
 * The last API for everything Dofus 🤯  ### JS Quickstart ```js var dofusdude = require(\"dofusdude-js\");  new dofusdude.AllItemsApi().getItemsAllSearch(   \"en\",   \"dofus2\",   \"nidas\",   { filterTypeName: \"hat\" },   (err, data, response) => {     console.log(data[0]);   } ); ```  ### Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue at the Docs Repo.  ## Main Features - 🥷 **seamless auto-update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **blazingly fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **search by relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.  - 🕵️ **complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD images** rendering vector graphics into PNGs up to 800x800 px in the background.   ## Current state - Weapons ✅ - Equipment ✅ - Sets ✅ - Resources ✅ - Consumables ✅ - Pets ✅ - Mounts ✅ - Cosmetics/Ceremonial Items ✅ - Harnesses ✅ - Quest Items ✅ - Almanax ✅  - Monsters ❌ - Classes ❌ - Spells ❌ - Professions ❌   ### Maybes? I don't know what for 🤷 - Sidekicks ❌ - Haven Bags ❌ - Map ❌   ## Future I want this project to be useful and not just add plain categories no one needs. More and more features will be added to enhance the quality based on the needs of you, the developers.  Examples: _I need to know where I can drop the all the items I need to craft set X!_  _Please get a detailed always up-to-date spell description so I can calculate the damage for my set builder site!_  Nearly everything can be done. But I want to make sure somebody also wants it.  If you have anything or you are just interested in the project, join the [Discord](https://discord.gg/3EtHskZD8h).  ### Versioning Updating an API is a hard problem. This is why we'll keep it simple:  Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted. Ever.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  We can prevent this specific use case with a nice community but even then, it would be hidden behind a feature flag.  ## Get started! 🥳 Scroll down and try it for yourself!  If you are ready to use them in your project, think about [generating a client 🧙](https://github.com/OpenAPITools/openapi-generator) or use one of our pre generated SDKs linked at the top.  Awesome Projects using this API:  - [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro - [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina - [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina - [luwnarya.fr](https://luwnarya.fr)  
 *
 * The version of the OpenAPI document: 0.5.4
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
    instance = new dofusdude.SetListEntry();
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

  describe('SetListEntry', function() {
    it('should create an instance of SetListEntry', function() {
      // uncomment below and update the code to test SetListEntry
      //var instance = new dofusdude.SetListEntry();
      //expect(instance).to.be.a(dofusdude.SetListEntry);
    });

    it('should have the property ankamaId (base name: "ankama_id")', function() {
      // uncomment below and update the code to test the property ankamaId
      //var instance = new dofusdude.SetListEntry();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new dofusdude.SetListEntry();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new dofusdude.SetListEntry();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instance = new dofusdude.SetListEntry();
      //expect(instance).to.be();
    });

  });

}));
