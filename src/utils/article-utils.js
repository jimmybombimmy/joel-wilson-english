export function extractChildrenPreview(child) {
  let previewText = "";
  child.map(({ text }) => {
    previewText += text;
  });
  return previewText;
}

export function extractArticleBodyPreview(body) {
  console.log("extracted body", body);
  if (body.length === 0) {
    return "Unable to preview article text";
  }

  let previewBody = ``;
  body.map((section) => {
    if (section.type === "paragraph") {
      previewBody += extractChildrenPreview(section.children);
    }
  });
  return previewBody;
}
