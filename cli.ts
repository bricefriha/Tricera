import * as Core from "./src/controllers/core.ts";
function Main() {
    const Args = Deno.args;
    switch (Args[0]) {
        case "--create":
            Core.createProject(Args);
            break;
        case "--add":
            Core.addPackage(Args[1]);
            break;
        case "--remove":
            Core.removePackage(Args[1]);
            break;

        default:
            break;
    }
}
Main();
