const path = require("path");
const fs = require("fs");
const AdminBro = require("admin-bro");

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, uploadImage } = context;
  const pathes = [];

  if (record.isValid() && uploadImage) {
    uploadImage.map(async (ss) => {
      if (typeof ss === "string") {
        pathes.push(ss);
      } else {
        const filePath = path.join("uploads", record.id().toString(), ss.name);
        pathes.push(`/${filePath}`);

        console.log("IMAGES:", pathes);

        await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

        await fs.promises.rename(ss.path, filePath);
      }

      await record.update({ images: pathes });
    });
  }
  return response;
};

/** @type {AdminBro.Before} */
const before = async (request, context) => {
  if (request.method === "post") {
    const { uploadImage, ...otherParams } = request.payload;
    const ss = Object.entries(request.payload)
      .map((item) => {
        if (item[0].includes("uploadImage")) {
          return item[1];
        }
      })
      .filter((is) => is !== null && is !== undefined);

    // eslint-disable-next-line no-param-reassign
    context.uploadImage = ss;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };
