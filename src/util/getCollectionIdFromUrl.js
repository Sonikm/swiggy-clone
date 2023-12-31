  // Function to extract collection_id from the URL
 export function getCollectionIdFromUrl(url) {
    const match = url.match(/collection_id=(\d+)/);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
    // Return null if collection_id is not found
    return null;
  }
