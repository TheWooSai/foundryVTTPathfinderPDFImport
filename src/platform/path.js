/** POSIX-style path join that collapses "." and ".." and keeps an S3 "[bucket]" prefix intact. */
export function joinPath(...parts) {
  const joined = parts.filter((p) => p !== "" && p != null).join("/");
  const absolute = joined.startsWith("/");
  const out = [];
  for (const segment of joined.split("/")) {
    if (segment === "" || segment === ".") continue;
    if (segment === ".." && out.length > 0 && out.at(-1) !== "..") out.pop();
    else if (segment === ".." && absolute) continue;
    else out.push(segment);
  }
  return (absolute ? "/" : "") + out.join("/");
}

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
