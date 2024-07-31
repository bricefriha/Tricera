interface Package {
    manager: string;
    package: string;
    version: string;
}
interface Nest {
    modules: Package[];
}
export async function add(pm: string, packageName: string, version?: string) {
    // Get current directory
    const workDir = Deno.cwd();
    const nestPath = `${workDir}/nest.json`;
    // get content of the nest
    const nestContent: Nest = JSON.parse(
        await Deno.readTextFile(nestPath),
    );
    nestContent.modules.push({
        manager: pm,
        package: packageName,
        version: version ?? "latest",
    });
    // Rewrite the nest
    await Deno.writeTextFile(nestPath, JSON.stringify(nestContent, null, 4));
}
