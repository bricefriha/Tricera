import * as Project from "../services/project.ts";
import * as Package from "../services/package.ts";

export function createProject(args: Array<string>) {
    let name: string = "";
    const defaultName: string = "IDontKnowWhatNameToGiveSoThereYouHaveIt";
    if (args[1]) {
        name = args[1];
    }

    if (name) {
        Project.create(name);
        return;
    }

    if (!name || !args[1]?.includes("--")) {
        name = prompt("Please, enter a name for your project: ") ?? "";
    }
    if (name) {
        Project.create(name);
        return;
    }
    if (defaultName) {
        Project.create(defaultName);
    }
}
export function addPackage(input: string) {
    const pkManager = input.split(":")[0];
    if (!input.includes("@")) {
        Package.add(pkManager, input.split(":")[1]);
        return;
    }
    const name = input.split(":")[1].split("@")[0];
    const version = input.split(":")[1].split("@")[1];

    Package.add(pkManager, name, version);
}
export function removePackage(input: string) {
    if (!input.includes("@") && !input.includes(":")) {
        Package.remove(input);
        return;
    }

    Package.remove(input.split(":")[1].split("@")[0]);
}
