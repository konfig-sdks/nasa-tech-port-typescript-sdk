/*
TechPort

TechPort RESTful API

The version of the OpenAPI document: 3.13.2
Contact: hq-techport@mail.nasa.gov

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Location } from './location';
import { Organization } from './organization';

/**
 * Represents an individual and their details.
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     * Title for the contact
     * @type {string}
     * @memberof Contact
     */
    'title'?: string;
    /**
     * Unique ID for this contact
     * @type {number}
     * @memberof Contact
     */
    'contactId'?: number;
    /**
     * Display order
     * @type {number}
     * @memberof Contact
     */
    'displayOrder'?: number;
    /**
     * Fax number for the contact
     * @type {string}
     * @memberof Contact
     */
    'fax'?: string;
    /**
     * First name for the contact
     * @type {string}
     * @memberof Contact
     */
    'firstName'?: string;
    /**
     * Last name for the contact
     * @type {string}
     * @memberof Contact
     */
    'lastName'?: string;
    /**
     * Full name for the contact, first middle initial last
     * @type {string}
     * @memberof Contact
     */
    'fullName'?: string;
    /**
     * Full name for the contact but inverted, last first middle initial
     * @type {string}
     * @memberof Contact
     */
    'fullNameInverted'?: string;
    /**
     * 
     * @type {Location}
     * @memberof Contact
     */
    'location'?: Location;
    /**
     * Unique ID representing the contacts location
     * @type {number}
     * @memberof Contact
     */
    'locationId'?: number;
    /**
     * Middle initial for the contact
     * @type {string}
     * @memberof Contact
     */
    'middleInitial'?: string;
    /**
     * 
     * @type {Organization}
     * @memberof Contact
     */
    'organization'?: Organization;
    /**
     * Prefix for the contact
     * @type {string}
     * @memberof Contact
     */
    'prefix'?: string;
    /**
     * Primary email for the contact
     * @type {string}
     * @memberof Contact
     */
    'primaryEmail'?: string;
    /**
     * Secondary email for the contact
     * @type {string}
     * @memberof Contact
     */
    'secondaryEmail'?: string;
    /**
     * Suffix for the contact
     * @type {string}
     * @memberof Contact
     */
    'suffix'?: string;
    /**
     * Extension for contacts work phone number
     * @type {string}
     * @memberof Contact
     */
    'workPhoneExtension'?: string;
    /**
     * Phone number for the contact
     * @type {string}
     * @memberof Contact
     */
    'workPhone'?: string;
    /**
     * 1 if the contact is signed up to receive TechPort emails
     * @type {number}
     * @memberof Contact
     */
    'receiveEmail'?: number;
    /**
     * True if the contacts email is available to be shown to the public
     * @type {boolean}
     * @memberof Contact
     */
    'isPublicEmail'?: boolean;
}

