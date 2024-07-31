/**
 * Create a project
 * @param name name of the project
 */
export async function Create(name: string): Promise<string> {
    // Get current directory
    const workDir = Deno.cwd();
    const projectDir = `${workDir}\\${name}`;
    await Deno.mkdir(projectDir);
    const file = await Deno.create(`${projectDir}/nest.json`);
    const gitignore = await Deno.create(`${projectDir}/.gitignore`);

    // Wirte the config file
    const writerNest = file.writable.getWriter();
    await writerNest.write(new TextEncoder().encode(JSON.stringify({
        modules: [
            { "thesesNuts": 4.4 },
        ],
    })));
    await writerNest.close();

    // Wirte the config file
    const writerGitignore = gitignore.writable.getWriter();
    await writerGitignore.write(new TextEncoder().encode("dist/*"));
    await writerGitignore.close();

    return projectDir;
}
