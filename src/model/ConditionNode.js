/**
 * dofusdude
 * # Open Ankama Developer Community The all-in-one toolbelt for your next Ankama related project.  ## Versions - [Dofus 2](https://docs.dofusdu.de/dofus2/) - [Dofus 3](https://docs.dofusdu.de/dofus3/)   - v1 [latest] (you are here)   ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Almanax Discord Integration** Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 3 Beta** from stable to bleeding edge by replacing /dofus3 with /dofus3beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_, _de_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Official Sources** generated from actual data from the game.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 1.0.0-rc.2
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Condition from './Condition';
import ConditionLeaf from './ConditionLeaf';
import ConditionRelation from './ConditionRelation';

/**
 * The ConditionNode model module.
 * @module model/ConditionNode
 * @version 1.0.0-rc.2
 */
class ConditionNode {
    /**
     * Constructs a new <code>ConditionNode</code>.
     * @alias module:model/ConditionNode
     * @param {(module:model/ConditionLeaf|module:model/ConditionRelation)} instance The actual instance to initialize ConditionNode.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "ConditionRelation") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ConditionRelation.validateJSON(instance); // throw an exception if no match
                // create ConditionRelation from JS object
                this.actualInstance = ConditionRelation.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ConditionRelation
            errorMessages.push("Failed to construct ConditionRelation: " + err)
        }

        try {
            if (typeof instance === "ConditionLeaf") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ConditionLeaf.validateJSON(instance); // throw an exception if no match
                // create ConditionLeaf from JS object
                this.actualInstance = ConditionLeaf.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ConditionLeaf
            errorMessages.push("Failed to construct ConditionLeaf: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `ConditionNode` with oneOf schemas ConditionLeaf, ConditionRelation. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `ConditionNode` with oneOf schemas ConditionLeaf, ConditionRelation. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ConditionNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConditionNode} obj Optional instance to populate.
     * @return {module:model/ConditionNode} The populated <code>ConditionNode</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ConditionNode(data);
    }

    /**
     * Gets the actual instance, which can be <code>ConditionLeaf</code>, <code>ConditionRelation</code>.
     * @return {(module:model/ConditionLeaf|module:model/ConditionRelation)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ConditionLeaf</code>, <code>ConditionRelation</code>.
     * @param {(module:model/ConditionLeaf|module:model/ConditionRelation)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ConditionNode.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ConditionNode from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ConditionNode} An instance of ConditionNode.
     */
    static fromJSON = function(json_string){
        return ConditionNode.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * always \"true\" for the leaf of a tree
 * @member {Boolean} is_operand
 * @default true
 */
ConditionNode.prototype['is_operand'] = true;

/**
 * \"and\", \"or\"
 * @member {String} relation
 * @default 'and'
 */
ConditionNode.prototype['relation'] = 'and';

/**
 * @member {Array.<module:model/ConditionNode>} children
 */
ConditionNode.prototype['children'] = undefined;

/**
 * @member {module:model/Condition} condition
 */
ConditionNode.prototype['condition'] = undefined;


ConditionNode.OneOf = ["ConditionLeaf", "ConditionRelation"];

export default ConditionNode;
