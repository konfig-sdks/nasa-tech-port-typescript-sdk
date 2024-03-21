/*
TechPort

TechPort RESTful API

The version of the OpenAPI document: 3.13.2
Contact: hq-techport@mail.nasa.gov

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TreeNode } from './tree-node';

/**
 * Represents data associated with a single taxonomy root entity.
 * @export
 * @interface Taxonomy
 */
export interface Taxonomy {
    /**
     * Title for this taxonomy
     * @type {string}
     * @memberof Taxonomy
     */
    'title'?: string;
    /**
     * Unique ID for this taxonomy
     * @type {number}
     * @memberof Taxonomy
     */
    'taxonomyRootId'?: number;
    /**
     * ID for this taxonomy roots release status
     * @type {number}
     * @memberof Taxonomy
     */
    'releaseStatusId'?: number;
    /**
     * Definition for this taxonomy
     * @type {string}
     * @memberof Taxonomy
     */
    'definition'?: string;
    /**
     * The last user to modify this taxonomy
     * @type {string}
     * @memberof Taxonomy
     */
    'modifiedBy'?: string;
    /**
     * The date this taxonomy was last modified
     * @type {string}
     * @memberof Taxonomy
     */
    'modifiedDate'?: string;
    /**
     * 
     * @type {Array<TreeNode>}
     * @memberof Taxonomy
     */
    'children'?: Array<TreeNode>;
    /**
     * The release status of this taxonomy
     * @type {string}
     * @memberof Taxonomy
     */
    'releaseStatus'?: string;
}

