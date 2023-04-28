/**
 * Describes an entry that can be randomly picked.
 */
export interface Entry {

    // #region Properties

    /**
     * Uniquely identifies this entry.
     */
    id : string;

    /**
     * The contents of this entry.
     */
    contents : string;

    /**
     * Whether or not the entry should be included in the wheel.
     */
    visible : boolean;

    // #endregion Properties

}