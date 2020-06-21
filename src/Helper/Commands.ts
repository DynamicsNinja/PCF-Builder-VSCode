export class Commands {
    //public static PacAuthList: string = "pac auth list";

    public static PacAuthList() {
        return `pac auth list`;
    }

    public static PacCreateProfile(pro: string) {
        return `pac auth create --url ${pro}`;    
    }

    public static PacDeleteProfile(pro: string) {
        return `pac auth delete --index ${pro}`;    
    }

    public static PacSwitchProfile(pro: string) {
        return `pac auth select --index ${pro}`;    
    }

    public static PacPcfInit(userNamespace: string, userControlName: string, userTemplate: string) {
        return `pac pcf init --namespace ${userNamespace} --name ${userControlName} --template ${userTemplate}`;    
    }

    public static NpmInstall(packages?: string) {
        return `npm install ${packages ? packages : ""}`;
    }

    public static NpmBuild() {
        return `npm run build`;
    }

    public static NpmStart(watch: boolean = false) {
        return watch ? `npm start watch` : `npm start`;
    }

    /**
     * Calls generator-pcf force command
     * @param namespace Control Namespace
     * @param controlname Control Name
     * @param template Control template (field/dataset)
     * @param pkg Package to install (0=none/1=react/2=react+fluentUI)
     * @param publisherPrefix Publisher Prefix
     * @param publisherName Publisher Name
     */
    public static Force(namespace: string, controlname: string, template: string, pkg: number, publisherPrefix: string, publisherName: string) {
        return `yo pcf --ns ${namespace} --n ${controlname} --t ${template} --pkg ${pkg} --pp ${publisherPrefix} --pn ${publisherName} --force`;
    }

    public static AddResxFile(lcid: number | undefined) {
        if (lcid) {
            return `yo pcf:resx --lc ${lcid} --force`;
        }
        else {
            return `yo pcf:resx --force`;
        }
    }
}