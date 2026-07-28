const userRoles = ["Admin", "Editor", "Moderator"];

const toFind = "Editor";

const hasEditorRole = userRoles.includes(toFind);

if (hasEditorRole) {
    console.log(`${toFind} role available`);
} else {
    console.log(`${toFind} role not available`);
}