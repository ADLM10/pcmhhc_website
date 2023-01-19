import { getDownloadURL, listAll, ref } from "@firebase/storage";
import { storage } from "../firebase";

export async function getPhotoGallery() {
  const downloadUrlFuncList = [];
  const photoGalleryRef = ref(storage, "website/gallery");
  const res = await listAll(photoGalleryRef);

  async function fetchDownloadUrl(itemRef) {
    return await getDownloadURL(itemRef);
  }

  res.items.forEach((itemRef) => {
    downloadUrlFuncList.push(fetchDownloadUrl(itemRef));
  });

  const urlList = await Promise.all(downloadUrlFuncList);

  return urlList;
}
