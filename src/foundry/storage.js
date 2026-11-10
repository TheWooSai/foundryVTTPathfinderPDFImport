const pickerClass = () => foundry.applications.apps.FilePicker.implementation;

/** Parse Foundry's "[source:bucket] path" notation. */
export function parseDataPath(value) {
  const match = value.trim().match(/\[(.+)\]\s*(.+)/);
  if (!match) return { source: "data", path: value };
  const [source, bucket] = match[1].split(":");
  return { source, bucket: bucket ?? null, path: match[2] };
}

const bodyFor = (target) => (target.bucket ? { bucket: target.bucket } : {});

export const foundryStorage = {
  async mkdir(path) {
    const target = parseDataPath(path);
    return pickerClass().createDirectory(
      target.source,
      target.path,
      bodyFor(target),
    );
  },

  /** @returns {Promise<string|false>} the stored path */
  async upload(data, directory, filename, type) {
    const file = new File([data], filename, {
      type: data instanceof Blob ? data.type : type,
    });
    const target = parseDataPath(directory);
    const result = await pickerClass().upload(
      target.source,
      target.path,
      file,
      bodyFor(target),
      {
        notify: false,
      },
    );
    return result ? result.path : false;
  },
};
