const AdminBro = require("admin-bro");
const { after, before } = require("../components/actions/upload-file.hook");

const options = {
  properties: {
    // images: {
    //   isVisible: false,
    // },
    uploadImage: {
      components: {
        edit: AdminBro.bundle("../components/imageUpload.jsx"),
        // list: AdminBro.bundle("../components/upload-image.list.jsx"),
      },
    },
  },
  actions: {
    new: {
      after: async (response, request, context) => {
        const modifiedResponse = await after(response, request, context);
        return modifiedResponse;
      },
      before: async (request, context) => {
        const modifiedRequest = await before(request, context);
        return modifiedRequest;
      },
    },
    edit: {
      after: async (response, request, context) => {
        const modifiedResponse = await after(response, request, context);
        return modifiedResponse;
      },
      before: async (request, context) => {
        const modifiedRequest = await before(request, context);
        return modifiedRequest;
      },
    },
    show: {
      isVisible: false,
    },
  },
};

module.exports = options;
