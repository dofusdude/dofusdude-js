/**
 * Dofusdude API
 * The last API for everything Dofus <span style=\"font-size:1.8rem;\">🤯</span> <h2>Main Features</h2> <ul> <li><span style=\"font-size:1.8rem;\">🥷</span> <b>seamless auto-update</b> load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.</li>  <li><span style=\"font-size:1.8rem;\">⚡</span> <b>blazingly fast</b> all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in <span style=\"font-size:1.8rem;\">🇩🇪</span>.</li>  <li><span style=\"font-size:1.8rem;\">🩸</span> <b>Dofus 2 Beta</b> from stable to bleeding edge by replacing /dofus2 with /dofus2beta.</li>  <li><span style=\"font-size:1.8rem;\">🗣️</span> <b>multilingual</b> supporting <em>en</em>, <em>fr</em>, <em>es</em>, <em>pt</em> including the dropped languages from the Dofus website <em>de</em> and <em>it</em>.</li>  <li><span style=\"font-size:1.8rem;\">🧠</span> <b>search by relevance</b> allowing typos in name and description, handled by language specific text analysis and indexing by the powerful <a href=\"https://www.meilisearch.com\">Meilisearch</a> written in Rust.</li>  <li><span style=\"font-size:1.8rem;\">🕵️</span> <b>complete</b> actual data from the game including items invisible to the encyclopedia like quest items.</li>  <li><span style=\"font-size:1.8rem;\">🖼️</span> <b>HD images</b> rendering vector graphics into PNGs up to 800x800 px in the background.</li>  </ul>   <h2>Current state</h2> <div style=\"display:flex;justify-content:space-around;flex-wrap:wrap\"> <ul style=\"font-size:1.6rem;\"> <li>Weapons ✅</li> <li>Equipment ✅</li> <li>Sets ✅</li> <li>Resources ✅</li> <li>Consumables ✅</li> <li>Pets ✅</li> <li>Mounts ✅</li> <li>Cosmetics/Ceremonial Items ✅</li> <li>Harnesses ✅</li> <li>Quest Items ✅</li> <li>Almanax ✅</li> </ul>  <ul style=\"font-size:1.6rem;\"> <li>Monsters ❌</li> <li>Classes ❌</li> <li>Spells ❌</li> <li>Professions ❌ </li> </ul> </div>   <h3>Maybes? I don't know what for <span style=\"font-size:1.8rem;\">🤷</span></h3> <ul> <li>Sidekicks ❌</li> <li>Haven Bags ❌</li> <li>Map ❌</li> </ul>   <h2>Future</h2> I want this project to be useful and not just add plain categories no one needs. More and more features will be added to enhance the quality based on the needs of you, the developers. <br>Examples: <p><em>I need to know where I can drop the all the items I need to craft set X!</em></p> <p><em>Please get a detailed always up-to-date spell description so I can calculate the damage for my set builder site!</em></p> <p>Nearly everything can be done. But I want to make sure somebody also wants it. If you have anything or you are just interested in the project, join the <a href=\"https://discord.gg/3EtHskZD8h\">Discord</a>.</p>  <h3>Versioning</h3> <p>Updating an API is a hard problem. This is why we'll keep it simple:  Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted. Ever. </p> <p>There is one exception! <b>The API will <em>always</em> choose being up-to-date over everything else</b>. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too. </p> <p> We can prevent this specific use case with a nice community but even then, it would be hidden behind a feature flag. </p>  <h2>Get started! 🥳</h2> <p>Scroll down and try it for yourself!</p> <p>If you are ready to use them in your project, think about <a href=\"https://github.com/OpenAPITools/openapi-generator\">generating a client <span style=\"font-size:1.8rem;\">🧙</span></a> from the <a href=\"https://raw.githubusercontent.com/dofusdude/api-docs/main/openapi-3.0.yaml\">OpenAPI 3.0 Spec</a> to get started quickly.</p>  <p>Awesome Projects using this API:</p> <ul> <li><a href=\"https://github.com/Kaysoro/KaellyBot\">KaellyBot</a> by Kaysoro</li> <li><a href=\"https://dofuscraftlist-dev.netlify.app\">Dofus Craftlist</a> by Lystina</li> <li><a href=\"https://almanaxapp.netlify.app\">AlmanaxApp</a> by Lystina</li> <li><a href=\"https://luwnarya.fr\">luwnarya.fr</a></li> </ul>  My old <a href=\"https://alm.dofusdu.de/swagger\">Almanax API v1</a> is an example for using a <a href=\"https://github.com/dofusdude/almanax-api/tree/main/src/main/java/org/acme/openapi\">generated Client</a> from the OpenAPI Spec.  
 *
 * The version of the OpenAPI document: 0.5
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AlmanaxEntryTributeItem from './AlmanaxEntryTributeItem';

/**
 * The AlmanaxEntryTribute model module.
 * @module model/AlmanaxEntryTribute
 * @version 0.5
 */
class AlmanaxEntryTribute {
    /**
     * Constructs a new <code>AlmanaxEntryTribute</code>.
     * @alias module:model/AlmanaxEntryTribute
     */
    constructor() { 
        
        AlmanaxEntryTribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AlmanaxEntryTribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlmanaxEntryTribute} obj Optional instance to populate.
     * @return {module:model/AlmanaxEntryTribute} The populated <code>AlmanaxEntryTribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlmanaxEntryTribute();

            if (data.hasOwnProperty('item')) {
                obj['item'] = AlmanaxEntryTributeItem.constructFromObject(data['item']);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AlmanaxEntryTributeItem} item
 */
AlmanaxEntryTribute.prototype['item'] = undefined;

/**
 * @member {Number} quantity
 */
AlmanaxEntryTribute.prototype['quantity'] = undefined;






export default AlmanaxEntryTribute;

