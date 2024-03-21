/*
TechPort

TechPort RESTful API

The version of the OpenAPI document: 3.13.2
Contact: hq-techport@mail.nasa.gov

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A heirarchical representation of an organization type. Similar to the LkuCode type returned for organization.organizationType, but formatted in a parent/child relationship.
 * @export
 * @interface OrganizationType
 */
export interface OrganizationType {
    /**
     * Unique ID for this organization type.
     * @type {number}
     * @memberof OrganizationType
     */
    'organizationTypeId'?: number;
    /**
     * The name of the organization type.
     * @type {string}
     * @memberof OrganizationType
     */
    'name'?: string;
    /**
     * Whether or not the type has child types.
     * @type {boolean}
     * @memberof OrganizationType
     */
    'hasChildren'?: boolean;
    /**
     * The relative level of the organization type in the heirarchy.
     * @type {string}
     * @memberof OrganizationType
     */
    'level'?: string;
    /**
     * Unique ID for the parent type in the heriarchy.
     * @type {number}
     * @memberof OrganizationType
     */
    'parentId'?: number;
}

