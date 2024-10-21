/**
 * dofusdude
 * # A project for you - the developer. The all-in-one toolbelt for your next Ankama related project.  ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [PHP](https://github.com/dofusdude/dofusdude-php) - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering game assets to high-res images with up to 800x800 px.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 0.9.4
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ConditionEntry from './ConditionEntry';
import ConditionTreeLeaf from './ConditionTreeLeaf';
import ConditionTreeRelation from './ConditionTreeRelation';

/**
 * The ConditionTreeNode model module.
 * @module model/ConditionTreeNode
 * @version 0.9.4
 */
class ConditionTreeNode {
    /**
     * Constructs a new <code>ConditionTreeNode</code>.
     * @alias module:model/ConditionTreeNode
     * @param {(module:model/ConditionTreeLeaf|module:model/ConditionTreeRelation)} instance The actual instance to initialize ConditionTreeNode.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "ConditionTreeRelation") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ConditionTreeRelation.validateJSON(instance); // throw an exception if no match
                // create ConditionTreeRelation from JS object
                this.actualInstance = ConditionTreeRelation.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ConditionTreeRelation
            errorMessages.push("Failed to construct ConditionTreeRelation: " + err)
        }

        try {
            if (typeof instance === "ConditionTreeLeaf") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ConditionTreeLeaf.validateJSON(instance); // throw an exception if no match
                // create ConditionTreeLeaf from JS object
                this.actualInstance = ConditionTreeLeaf.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ConditionTreeLeaf
            errorMessages.push("Failed to construct ConditionTreeLeaf: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `ConditionTreeNode` with oneOf schemas ConditionTreeLeaf, ConditionTreeRelation. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `ConditionTreeNode` with oneOf schemas ConditionTreeLeaf, ConditionTreeRelation. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ConditionTreeNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConditionTreeNode} obj Optional instance to populate.
     * @return {module:model/ConditionTreeNode} The populated <code>ConditionTreeNode</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ConditionTreeNode(data);
    }

    /**
     * Gets the actual instance, which can be <code>ConditionTreeLeaf</code>, <code>ConditionTreeRelation</code>.
     * @return {(module:model/ConditionTreeLeaf|module:model/ConditionTreeRelation)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ConditionTreeLeaf</code>, <code>ConditionTreeRelation</code>.
     * @param {(module:model/ConditionTreeLeaf|module:model/ConditionTreeRelation)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ConditionTreeNode.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ConditionTreeNode from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ConditionTreeNode} An instance of ConditionTreeNode.
     */
    static fromJSON = function(json_string){
        return ConditionTreeNode.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * always \"true\" for the leaf of a tree
 * @member {Boolean} is_operand
 * @default true
 */
ConditionTreeNode.prototype['is_operand'] = true;

/**
 * \"and\", \"or\"
 * @member {String} relation
 * @default 'and'
 */
ConditionTreeNode.prototype['relation'] = 'and';

/**
 * @member {Array.<module:model/ConditionTreeNode>} children
 */
ConditionTreeNode.prototype['children'] = undefined;

/**
 * @member {module:model/ConditionEntry} condition
 */
ConditionTreeNode.prototype['condition'] = undefined;


ConditionTreeNode.OneOf = ["ConditionTreeLeaf", "ConditionTreeRelation"];

export default ConditionTreeNode;

