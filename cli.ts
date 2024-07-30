function Main() {
    const Args = Deno.args;
    if (Args[0] === "--create") {
        let name: string = "";
        const defaultName: string = "IDontKnowWhatNameToGiveSoThereYouHaveIt";
        if (Args[1])
            name = Args[1];
        
        if (name) {
            Create(name);
            return;
        }

        if (!name|| !Args[1]?.includes("--"))
            name = prompt("Please, enter a name for your project: ")??"";
        if (name) {
            Create(name);
            return
        }
        if (defaultName)
            Create(defaultName)
    }
}
function Add()
{
    // Get current directory
    const workDir = Deno.cwd();
}
/**
 * Create a project
 * @param name name of the project
 */
async function Create(name : string) : Promise<string>
{
    // Get current directory
    const workDir = Deno.cwd();
    const projectDir = `${workDir}\\${name}`;
    await Deno.mkdir(projectDir);
    const file = await Deno.create(`${projectDir}\\nest.json`);
    const gitignore = await Deno.create(`${projectDir}\\.gitignore`);

    // Wirte the config file 
    const writer = file.writable.getWriter();
    await writer.write(new TextEncoder().encode(JSON.stringify({
        modules: [
            { "thesesNuts": 4.4 }
        ]
    })));
    await writer.close();

    return projectDir;
}
Main();