/**
 * @name Version
 * @description
 * The version of this API
 */
class Version {
    /**
     * @description
     * Initializes the Version
     * @param {String} name The name of the Version
     * @param {String} mcVersion The Minecraft Version which is support in this version.
     */
    constructor(private name: String, private mcVersion: String) {

    }

    /**
     * @name Name
     * @description
     * The name of the current version
     */
    public get Name(): String {
        return this.name;
    }

    /**
     * @name MCVersion
     * @description
     * The Minecraft Version which is support in this version. 
     */
    public get MCVersion(): String {
        return this.mcVersion;
    }
}

export default new Version('0.0.4', '1.11');