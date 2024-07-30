import * as Project from "./src/services/project.ts";
function Main() {
    const Args = Deno.args;
    if (Args[0] === "--create") {
        let name: string = "";
        const defaultName: string = "IDontKnowWhatNameToGiveSoThereYouHaveIt";
        if (Args[1]) {
            name = Args[1];
        }

        if (name) {
            Project.Create(name);
            return;
        }

        if (!name || !Args[1]?.includes("--")) {
            name = prompt("Please, enter a name for your project: ") ?? "";
        }
        if (name) {
            Project.Create(name);
            return;
        }
        if (defaultName) {
            Project.Create(defaultName);
        }
    }
}

Main();
