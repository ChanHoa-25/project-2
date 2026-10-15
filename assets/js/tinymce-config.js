const inittialTinyMCE = (id) => {
  tinymce.init({
    selector: id || "[textarea-mce]",
    plugins: "charmap codesample emoticons help image link lists media preview searchreplace table wordcount",

    toolbar:
      "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent| charmap | codesample | emoticons | image | link | numlist | bullist | lists | advlist | media | preview | searchreplace | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | help",
  });
};
inittialTinyMCE();
